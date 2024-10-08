import { Fighter } from './unit';
import { Player } from './player';

export enum State {
  Firing = 0x1,
  Aiming = 0x2,
  Moving = 0x4
}

export class GunnerAlien extends Fighter {
  private shootingCoolDown;
  constructor(
    x,
    y,
    w,
    h,
    images,
    explosionsImages,
    hp,
    crashDamage,
    damagedImages,
    laserImages,
    laserExplosion,
    private player: Player,
    private framesToShoot,
    private burstLength,
    private maxposition
  ) {
    super(x, y, w, h, images, explosionsImages, hp, crashDamage, damagedImages, laserImages, laserExplosion);
    this.shootingCoolDown = framesToShoot;
    this.imgOffset = -Math.PI / 2;
  }

  turnToFacePlayer() {
    const center = this.getCenter();
    const playerCenter = this.player.getCenter();

    this.rad = -Math.atan2(-(playerCenter.y - center.y), playerCenter.x - center.x) + this.imgOffset;
  }

  update(frame) {
    if (!this.dying) {
      if (this.shootingCoolDown) {
        this.shootingCoolDown--;
      } else {
        this.ammo = this.burstLength;
        this.shootingCoolDown = this.framesToShoot;
      }
      this.turnToFacePlayer();
      this.fireLasers();
    }

    if (this.y > this.maxposition) {
      this.y = this.maxposition;
      this.vy = 0;
    }

    super.update(frame);
  }

  explode(frame) {
    super.explode(frame, this.h, this.h);
  }
}
