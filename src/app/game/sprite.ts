import { Point } from './point';
import { Drawable, Updateable } from './interfaces';

export const FramesBeforeUpdateImage = 5;

export const FramesBeforeUpdateImageExplosion = 2;

export class Sprite extends Point implements Drawable, Updateable {
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  maxSpeed = 10;

  imgCounter = 0;
  currentImage = 0;
  cycleFrameCount = FramesBeforeUpdateImage;

  alive = true;

  vrad = 0;
  rad = 0;
  imgOffset = Math.PI / 2;

  audio;

  constructor(x, y, public w, public h, public images: any) {
    super(x, y);
  }

  draw(c: CanvasRenderingContext2D) {
    if (this.rad) {
      c.save();
      const center = this.getCenter();
      c.translate(center.x, center.y);
      c.rotate(this.rad);
      c.drawImage(this.images[this.currentImage], this.w / -2, this.h / -2, this.w, this.h);
      c.restore();
    } else {
      c.drawImage(this.images[this.currentImage], this.x, this.y, this.w, this.h);
    }
  }

  update(frame) {
    this.x += this.vx;
    this.y += this.vy;
    this.rad += this.vrad;
    this.vx += this.ax;
    this.vy += this.ay;

    if (this.vx > this.maxSpeed) {
      this.vx = this.maxSpeed;
    } else if (this.vx < -this.maxSpeed) {
      this.vx = -this.maxSpeed;
    }

    if (this.vy > this.maxSpeed) {
      this.vy = this.maxSpeed;
    } else if (this.vy < -this.maxSpeed) {
      this.vy = -this.maxSpeed;
    }

    this.imgCounter++;
    if (this.imgCounter === this.cycleFrameCount) {
      this.imgCounter = 0;
      this.currentImage++;
      if (this.currentImage === this.images.length) {
        this.currentImage = 0;
      }
    }
  }

  isAlive() {
    return this.alive;
  }

  intersects(other: Sprite, flex = 5): boolean {
    return (
      !(this.x > other.x + other.w - flex || other.x > this.x + this.w - flex) &&
      !(this.y > other.y + other.h - flex || other.y > this.y + this.h - flex)
    );
  }

  getCenter(): Point {
    return new Point(this.x + this.w / 2, this.y + this.h / 2);
  }

  faceMotion() {
    if (this.vx || this.vy) {
      this.rad = -Math.atan2(-this.vy, this.vx) + this.imgOffset;
    } else {
      this.rad = 0;
    }
  }

  fullStop() {
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
  }
}

export class ExplodingSprite extends Sprite {
  // should be frame # of death as to allow overkill
  dying = 0;

  constructor(x, y, w, h, images, private explosionsImages) {
    super(x, y, w, h, images);
  }

  explode(frame, w = this.w, h = this.h) {
    if (!this.dying) {
      this.dying = frame;
      if (this.explosionsImages) {
        // adjust explosion center if its larger than original image
        if (this.w !== w) {
          this.x -= (w - this.w) / 2;
        }
        if (this.h !== h) {
          this.y -= (h - this.h) / 2;
        }

        this.fullStop();

        this.w = w;
        this.h = h;
        this.imgCounter = 0;
        this.currentImage = 0;
        this.images = this.explosionsImages;
        this.cycleFrameCount = FramesBeforeUpdateImageExplosion;
      } else {
        this.alive = false;
      }
    }
  }

  update(frame) {
    if (this.dying && this.currentImage === this.explosionsImages.length - 1) {
      this.alive = false;
    }
    super.update(frame);
  }
}
