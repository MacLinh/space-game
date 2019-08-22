import { ExplodingSprite } from './sprite';
import { Point } from './point';
import { Updateable } from './interfaces';

export class Projectile extends ExplodingSprite {
  constructor(x, y, w, h, vx, vy, ax, ay, images, explosionsImages, public damage, public splash, public blastRadius) {
    super(x, y, w, h, images, explosionsImages);
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
  }

  isAlive() {
    // flag as dead if it reaches top of screen
    return super.isAlive() && this.y >= -this.h;
  }

  explode(frame) {
    super.explode(frame, this.blastRadius, this.blastRadius);
  }

  update(frame) {
    this.faceMotion();
    super.update(frame);
  }
}

export class ProjectileSource extends Point implements Updateable {
  private shotCoolDown = 0;

  // x, y represents relative location from center of owner where down is positive and right is positive
  // reason center is used rather than top corner (as with canvas) is so that rotations can be done easier
  // and is easier to picture in head
  constructor(
    public owner,
    x,
    y,
    public w,
    public h,
    public damage,
    public ammoCost,
    public initialProjectileSpeed,
    public maxProjectileSpeed,
    public projectileAcceleration,
    public blastRadius,
    public splash,
    public images,
    public explosionImages,
    public shotInterval
  ) {
    super(x, y);
  }

  update(frame: number) {
    if (this.shotCoolDown) {
      this.shotCoolDown--;
    }
  }

  spawnProjectile(): boolean {
    if (!this.shotCoolDown) {
      this.shotCoolDown = this.shotInterval;

      const center = this.owner.getCenter();
      const self = this.owner
        .getCenter()
        .translate(this)
        .rotateAbout(center, this.owner.rad);

      const cosTheta = Math.cos(this.owner.rad - this.owner.imgOffset);
      const sinTheta = Math.sin(this.owner.rad - this.owner.imgOffset);
      const projectile = new Projectile(
        self.x - this.w / 2,
        self.y - this.h / 2,
        this.w,
        this.h,
        this.initialProjectileSpeed * cosTheta,
        this.initialProjectileSpeed * sinTheta,
        this.projectileAcceleration * cosTheta,
        this.projectileAcceleration * sinTheta,
        this.images,
        this.explosionImages,
        this.damage,
        this.splash,
        this.blastRadius
      );
      projectile.maxSpeed = this.maxProjectileSpeed;

      this.owner.activeProjectiles.push(projectile);
      return true;
    } else {
      return false;
    }
  }
}
