import { Fighter } from './unit';
import { ProjectileSource } from './projectile';
import { loadMissile, loadShipExplosion } from './assets';

export const ShipSpeed = 5;

export const Controls = {
  left: 'ArrowLeft',
  right: 'ArrowRight',
  up: 'ArrowUp',
  down: 'ArrowDown',
  fire: ' ',
  missile: 'Control'
};
export class Player extends Fighter {
  missleLauncher: ProjectileSource;

  private firingLasers = false;

  private firingMissle = false;

  constructor(
    x,
    y,
    w,
    h,
    images,
    explosionsImages,
    damagedImages,
    laserImages,
    laserExplosions,
    missileImages,
    missileExplosions,
    private borderX,
    private borderY
  ) {
    super(x, y, w, h, images, explosionsImages, 100, 100, damagedImages, laserImages, laserExplosions);
    this.showHp = false;
    this.ammo = 20;
    this.leftGun.shotInterval = 5;
    this.rightGun.shotInterval = 5;
    this.missleLauncher = new ProjectileSource(
      this,
      0,
      0,
      10,
      32,
      5,
      5,
      5,
      8,
      0.25,
      200,
      true,
      missileImages,
      missileExplosions,
      75
    );
  }

  update(frame) {
    // don't let the ship get off screen
    if (this.x <= 0 && this.vx < 0) {
      this.x = 0;
      this.vx = 0;
    } else if (this.x + this.w >= this.borderX && this.vx > 0) {
      this.x = this.borderX - this.w;
      this.vx = 0;
    }
    if (this.y <= 0 && this.vy < 0) {
      this.y = 0;
      this.vy = 0;
    } else if (this.y + this.h >= this.borderY && this.vy > 0) {
      this.y = this.borderY - this.h;
      this.vy = 0;
    }

    this.missleLauncher.update(frame);

    if (this.firingLasers) {
      this.fireLasers();
    }

    if (this.firingMissle) {
      this.missile();
    }

    // uncomment this to allow ship to change facing as it moves
    // this.faceMotion();

    super.update(frame);
  }

  keyDown(key: string) {
    switch (key) {
      case Controls.fire: {
        this.firingLasers = true;
        this.fireLasers();
        break;
      }
      case Controls.missile: {
        this.firingMissle = true;
        this.missile();
        break;
      }
      case Controls.up: {
        this.vy = -ShipSpeed;
        break;
      }
      case Controls.left: {
        this.vx = -ShipSpeed;
        break;
      }
      case Controls.down: {
        this.vy = ShipSpeed;
        break;
      }
      case Controls.right: {
        this.vx = ShipSpeed;
        break;
      }
    }
  }

  keyUp(key: string, keys: any) {
    switch (key) {
      case Controls.fire: {
        this.firingLasers = false;
        break;
      }
      case Controls.missile: {
        this.firingMissle = false;
        break;
      }
      case Controls.up: {
        this.vy = 0;
        if (keys[Controls.down]) {
          this.vy = ShipSpeed;
        }
        break;
      }
      case Controls.left: {
        this.vx = 0;
        if (keys[Controls.right]) {
          this.vx = ShipSpeed;
        }
        break;
      }
      case Controls.down: {
        this.vy = 0;
        if (keys[Controls.up]) {
          this.vy = -ShipSpeed;
        }
        break;
      }
      case Controls.right: {
        this.vx = 0;
        if (keys[Controls.left]) {
          this.vx = -ShipSpeed;
        }
        break;
      }
    }
  }

  explode(frame) {
    this.audio = loadShipExplosion();
    super.explode(frame);
  }

  missile() {
    if (this.ammo >= this.missleLauncher.ammoCost && this.missleLauncher.spawnProjectile()) {
      this.ammo -= this.missleLauncher.ammoCost;
      this.audio = loadMissile();
    }
  }
}
