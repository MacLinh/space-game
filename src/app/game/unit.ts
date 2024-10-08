import { ExplodingSprite } from './sprite';
import { Projectile, ProjectileSource } from './projectile';
import { loadAsteroidExplosion, loadLaser } from './assets';

export class Unit extends ExplodingSprite {
  maxHp;

  showHp;

  private drawHp = false;

  constructor(x, y, w, h, images, explosionsImages, public hp, public crashDamage, public damagedImages) {
    super(x, y, w, h, images, explosionsImages);
    this.maxHp = hp;
    this.showHp = true;
  }

  draw(c: CanvasRenderingContext2D) {
    super.draw(c);

    if (this.drawHp && !this.dying) {
      c.fillStyle = '#FF0000';
      c.globalAlpha = 0.5;
      c.fillRect(this.x, this.y - 5, this.w * (this.hp / this.maxHp), 5);
      c.globalAlpha = 1;
    }
  }

  damage(dmg, frame = 1) {
    this.hp -= dmg;
    if (this.hp <= 0) {
      this.hp = 0;
      this.explode(frame);
    }

    if (this.showHp) {
      this.drawHp = true;
    }

    if (!this.dying && this.damagedImages && this.damagedImages !== this.images) {
      const originalImage = this.images;
      const originalIndex = this.currentImage;
      this.images = this.damagedImages;
      this.currentImage = 0;
      setTimeout(() => {
        if (!this.dying) {
          this.images = originalImage;
          this.currentImage = originalIndex;
          this.drawHp = false;
        }
      }, 200);
    } else if (this.showHp) {
      setTimeout(() => {
        this.drawHp = false;
      }, 200);
    }
  }
}

export class Gunner extends Unit {
  ammo = 0;
  activeProjectiles: Projectile[] = [];
  constructor(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages) {
    super(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages);
  }
}

export class Asteroid extends Unit {
  constructor(x, y, w, h, images, explosionsImages, damagedImages) {
    super(x, y, w, h, images, explosionsImages, 5, 25, damagedImages);
  }

  explode(frame, w: any = this.w, h: any = this.h) {
    this.audio = loadAsteroidExplosion();
    super.explode(frame, w, h);
  }
}

export class Fighter extends Gunner {
  leftGun: ProjectileSource;
  rightGun: ProjectileSource;
  fireLaserCost;

  constructor(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages, laserImages, laserExplosion) {
    super(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages);
    this.leftGun = new ProjectileSource(
      this,
      -this.w / 3,
      0,
      5,
      30,
      1,
      0.5,
      10,
      10,
      0,
      30,
      false,
      laserImages,
      laserExplosion,
      10
    );
    this.rightGun = new ProjectileSource(
      this,
      this.w / 3,
      0,
      5,
      30,
      1,
      0.5,
      10,
      10,
      0,
      30,
      false,
      laserImages,
      laserExplosion,
      10
    );

    this.fireLaserCost = this.leftGun.ammoCost + this.rightGun.ammoCost;
  }

  update(frame) {
    this.leftGun.update(frame);
    this.rightGun.update(frame);
    super.update(frame);
  }

  fireLasers() {
    if (this.ammo >= this.fireLaserCost && this.leftGun.spawnProjectile() && this.rightGun.spawnProjectile()) {
      this.audio = loadLaser();
      this.ammo -= this.fireLaserCost;
    }
  }
}
