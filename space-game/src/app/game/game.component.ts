import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { loadImages, loadSong } from './assets';
import { Background } from './background';
import { Player } from './player';
import { Boost } from './boost';
import { Asteroid } from './unit';
import { GunnerAlien } from './alien';
import { Menu } from './menu';
import { GameService } from './game.service';
import { Message, Toast } from './message';
import { Projectile } from './projectile';

export const Width = 640;

export const Height = 768;

const MissileCost = 5;

const TimeToIncrementLevel = 20 * 50;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(public gameService: GameService) {}

  @ViewChild('canvas', { static: false }) canvas: ElementRef<any>;

  context: CanvasRenderingContext2D;

  width = Width;

  height = Height;

  score = 0;

  highScore = 0;

  images: any;

  started = false;

  level = 1;

  menu: Menu;

  private elements: any[] = [];

  private meetingStartedMessage: any = false;

  private msgQueue: any[] = [];

  private mainLoopSubscription: Subscription;

  private background: Background;

  private playerShip: Player;

  meetingStarted = false;

  keys = {};

  song;

  sound = false;

  dev = true;

  ngOnInit() {
    this.gameService.gameClosed.subscribe(() => {
      if (this.mainLoopSubscription) {
        this.mainLoopSubscription.unsubscribe();
      }
    });
  }

  async ngAfterViewInit() {
    this.context = <CanvasRenderingContext2D>(<HTMLCanvasElement>this.canvas.nativeElement).getContext('2d');

    await this.loadRes();
    this.background = new Background(this.images.background, 0.5, Width);
    this.menu = new Menu(this.images, this);

    window.addEventListener('keydown', e => this.keyDown(e));
    window.addEventListener('keyup', e => this.keyUp(e));

    this.mainLoopSubscription = timer(0, 20).subscribe(n => this.mainLoop(n));

    this.gameService.meetingStarted.subscribe(args => this.onMeetingStarted(args));
    this.gameService.levelChanged.subscribe(n => (this.level = n));

    this.gameService.notified.subscribe(args => {
      this.msgQueue.push(new Toast(150 - args.msg.length, -50, this.width, this.height, args.msg, args.frames, 30));
    });
  }

  private async loadRes() {
    try {
      this.images = await loadImages();
      this.song = loadSong();

      if (this.sound) {
        this.song.play().then(() => console.log('Playing music.'));
      }

      this.song.addEventListener('timeupdate', () => {
        const buffer = 0.36;
        console.log('Buffer value (loop):', buffer);
        if (this.song.currentTime > this.song.duration - buffer) {
          this.song.currentTime = 0;
          this.song.play();
        }
      });
    } catch (err) {
      console.log('error loading necessary resources');
    }
  }

  private onMeetingStarted(args) {
    if (!this.meetingStarted) {
      this.meetingStarted = true;
      this.meetingStartedMessage = new Message(
        this.width,
        this.height - 80,
        160,
        60,
        this.images.meetingStarted,
        100,
        this.width - 180
      );
      if (args.urgent) {
        const width = 20;
        const height = 25;
        const slots = Width / width;
        const img = args.customImage ? [args.customImage] : this.images.bomb;
        for (let i = 0; i < slots; i++) {
          const p = new Projectile(
            i * width,
            -height,
            width,
            height,
            0,
            5,
            0,
            0,
            img,
            this.images.explosions.alienLaser,
            1000,
            true,
            150
          );
          p.imgOffset = -Math.PI / 2;
          this.elements.push(p);
        }
      }
    }
  }

  startGame(dev) {
    this.started = true;
    this.menu.state = 'MAIN';

    this.score = 0;
    this.level = 1;
    this.playerShip = new Player(
      Width / 2 - 40 / 2,
      Height - 70,
      40,
      70,
      this.images.ship,
      this.images.explosions.ship,
      this.images.damagedShip,
      this.images.laser,
      this.images.explosions.laser,
      this.images.missile,
      this.images.explosions.asteroid,
      Width,
      Height
    );
    this.dev = dev;
    this.elements = [];
  }

  endGame() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.started = false;

    this.menu.state = 'GAME_OVER';
  }

  mainLoop(frame) {
    this.context.clearRect(0, 0, this.width, this.height);

    if (frame % TimeToIncrementLevel === 0) {
      this.gameService.setLevel(this.level + 1);
    }

    this.background.draw(this.context);
    if (this.started) {
      this.updateObstacles(frame);
      this.updateMissiles(frame);
      this.updateShip(frame);
      this.updateStats();
      this.spawnObstacles(frame);
    } else {
      this.menu.draw(this.context);
    }
    this.updateMessages(frame);
  }

  private updateMessages(frame) {
    if (this.meetingStartedMessage) {
      if (this.meetingStartedMessage.isAlive()) {
        this.meetingStartedMessage.update(frame);
        this.meetingStartedMessage.draw(this.context);
      } else {
        this.meetingStartedMessage = false;
      }
    }
    if (this.msgQueue.length) {
      const toast = this.msgQueue[0];
      if (toast.isAlive()) {
        toast.update(frame);
        toast.draw(this.context);
      } else {
        this.msgQueue.splice(0, 1);
      }
    }
  }

  private updateShip(frame) {
    this.playerShip.update(frame);
    if (this.sound && this.playerShip.audio) {
      this.playerShip.audio.play();
      this.playerShip.audio = undefined;
    }
    if (this.playerShip.alive) {
      this.playerShip.draw(this.context);
    } else {
      this.endGame();
    }
  }

  private updateObstacles(frame) {
    let i = 0;
    while (i < this.elements.length) {
      const s = this.elements[i];
      s.update(frame);

      if (!s.dying && this.playerShip.intersects(s)) {
        if (s instanceof Boost) {
          s.applyBoost(this.playerShip);
        } else if (s instanceof Projectile) {
          this.playerShip.damage(s.damage, frame);
          s.explode(frame);
        } else {
          this.playerShip.damage(s.crashDamage ? s.crashDamage : 25, frame);
          s.damage(this.playerShip.crashDamage, frame);
        }
      }

      if (s.activeProjectiles) {
        let j = 0;
        while (j < s.activeProjectiles.length) {
          const t = s.activeProjectiles[j];
          t.update(frame);
          if (!t.dying && t.intersects(this.playerShip)) {
            t.explode(frame);
            this.playerShip.damage(t.damage, frame);
          }
          if (t.isAlive()) {
            t.draw(this.context);
            j++;
          } else {
            s.activeProjectiles.splice(j, 1);
          }
        }
      }

      if (this.sound && s.audio) {
        s.audio.play();
        s.audio = undefined;
      }

      if (s.isAlive() && s.y < Height) {
        s.draw(this.context);
        i++;
      } else {
        // so projectiles continue to stay in game even if their owner is dead
        if (!s.activeProjectiles || !s.activeProjectiles.length) {
          this.elements.splice(i, 1);
        } else {
          i++;
        }
      }
    }
  }

  private updateMissiles(frame) {
    let i = 0;
    const targets = this.elements;
    while (i < this.playerShip.activeProjectiles.length) {
      const p = this.playerShip.activeProjectiles[i];
      p.update(frame);
      if (!p.dying) {
        if (p.splash) {
          // we must explode first because the blast radius may be bigger than the original missile
          for (const s of targets) {
            if (
              !(s instanceof Boost) &&
              !(s instanceof Projectile) &&
              (!s.dying || s.dying === frame) &&
              s.intersects(p, 0)
            ) {
              p.explode(frame);
              break;
            }
          }
          for (const s of targets) {
            if (
              !(s instanceof Boost) &&
              !(s instanceof Projectile) &&
              (!s.dying || s.dying === frame) &&
              s.intersects(p, 0)
            ) {
              s.damage(p.damage, frame);
            }
          }
        } else {
          for (const s of targets) {
            if (
              !(s instanceof Boost) &&
              !(s instanceof Projectile) &&
              (!s.dying || s.dying === frame) &&
              s.intersects(p, 0)
            ) {
              p.explode(frame);
              s.damage(p.damage, frame);
              break;
            }
          }
        }
      }
      if (p.isAlive()) {
        p.draw(this.context);
        i++;
      } else {
        this.playerShip.activeProjectiles.splice(i, 1);
      }
    }
  }

  private spawnObstacles(frame) {
    const fObs = 40;
    const fBoost = 50;
    const fAlien = 200;

    const width = 40;
    const height = 45;
    const slots = Width / width;

    // random number between 0 and slots
    // tslint:disable-next-line:no-bitwise
    const location = ((Math.random() * slots) | 0) * width;
    if (frame % fBoost === 0) {
      const boost = new Boost(location, -200, width, height, this.images.coin);
      boost.vy = 4 + 2 * Math.random();
      this.elements.push(boost);
    }
    if (frame % fObs < this.level) {
      // tslint:disable-next-line:no-bitwise
      const flavor = (1 + Math.random() * 3) | 0;
      const asteroid = new Asteroid(
        location,
        -200,
        width,
        height,
        this.images.asteroids['asteroid' + flavor],
        this.images.explosions.asteroid,
        this.images.asteroids.damaged['asteroid' + flavor]
      );
      asteroid.vy = 3 + (this.level * Math.random()) / 2;
      this.elements.push(asteroid);
    }

    if (frame % fAlien === 0 && this.level >= 6) {
      const alien = new GunnerAlien(
        Math.random() * (Width - 54),
        -200,
        54,
        100,
        // tslint:disable-next-line:no-bitwise
        this.images.aliens['alien' + 1 /*((1 + Math.random() * 1) | 0)*/],
        this.images.explosions.asteroid,
        10 + this.level,
        50,
        false,
        this.images.alienLaser,
        this.images.explosions.alienLaser,
        this.playerShip,
        150,
        this.level - 1,
        this.height / 2 - (Math.random() * this.height) / 2
      );
      alien.vy = 1;
      this.elements.push(alien);
    }
  }

  private updateStats() {
    if (this.started) {
      this.score++;
    }
    this.context.font = '30px Montserrat';
    const toolbar = this.images.toolbarsTransparent;
    const toolbar2 = this.images.toolbars;

    const maxhpW = 164;
    this.context.drawImage(toolbar.container, 40, 40);
    this.context.drawImage(
      toolbar2.healthbar,
      66 + 40,
      52,
      maxhpW * (this.playerShip.hp / this.playerShip.maxHp),
      toolbar2.healthbar.height
    );
    this.context.drawImage(
      toolbar2.ammobar,
      66 + 40,
      96,
      maxhpW * Math.min(1, this.playerShip.ammo / 20),
      toolbar2.ammobar.height
    );
    this.context.drawImage(toolbar.distancebar, 360, 40);
    this.context.fillStyle = '#000000';
    if (this.dev) {
      this.context.font = '12px Montserrat';
      this.context.fillText(`${this.score}\tAmmo: ${this.playerShip.ammo}\tLife:${this.playerShip.hp}`, 420, 75);
    } else {
      this.context.fillText(`${this.score}`, 425, 82);
      this.context.fillText('LY', 540, 82);
    }

    const numMissiles = Math.min(3, Math.floor(this.playerShip.ammo / MissileCost));

    const width = 10;
    const height = 32;

    // this.context.translate(0, 100)

    for (let i = 0; i < numMissiles; i++) {
      this.context.save();
      // this.context.globalAlpha = 0.8;
      this.context.translate(110 + i * 20, 140);
      this.context.rotate(Math.PI / 6);
      this.context.drawImage(this.images.missile[0], -width / 2, -height / 2, width, height);
      this.context.restore();
    }
  }

  keyDown(e: KeyboardEvent) {
    console.log(e);
    this.keys[e.key] = true;

    if ((e.key === 'm' || e.key === 'M') && this.menu.state !== 'GAME_OVER') {
      this.toggleSound();
    }

    if (this.started) {
      this.playerShip.keyDown(e.key);
    } else {
      this.menu.keyDown(e.key);
    }
  }

  keyUp(e: KeyboardEvent) {
    this.keys[e.key] = false;
    if (this.started) {
      this.playerShip.keyUp(e.key, this.keys);
    }
  }

  ngOnDestroy(): void {
    this.gameService.forceStopGame();
  }

  private toggleSound() {
    this.sound = !this.sound;
    if (this.sound) {
      this.song.play();
    } else {
      this.song.pause();
    }
  }

  async foo(urgent) {
    try {
      const score = await this.gameService.signalMeetingStarted(urgent);
      console.log('finished: ', score);
    } catch (err) {
      console.log(err);
    }
  }
}
