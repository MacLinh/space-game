import { Sprite } from './sprite';

const Width = 640;

export class Message extends Sprite {
  private currentFrame = 0;

  private readonly maxW;

  private readonly maxH;

  private readonly speed = 5;

  private readonly growth;

  constructor(x, y, w, h, images, private frames, private endX) {
    super(x, y, w, h, images);
    this.vx = -this.speed;
    this.maxH = h;
    this.maxW = w;
    this.w = 0;
    this.h = 0;
    this.growth = this.speed / (this.x - endX);
  }

  update(frame) {
    if (this.x <= this.endX) {
      this.vx = 0;
      if (this.currentFrame === this.frames) {
        this.vx = this.speed;
      } else {
        this.currentFrame++;
      }
    } else if (this.vx < 0) {
      this.w += this.growth * this.maxW;
      this.h += this.growth * this.maxH;
    } else if (this.x > Width) {
      this.alive = false;
    }
    super.update(frame);
  }
}

export class Toast extends Sprite {
  private currentFrame = 0;

  private readonly speed = 3;

  constructor(x, y, w, h, private msg, private frames, private endY) {
    super(x, y, w, h, false);
    this.vy = this.speed;
  }

  update(frame) {
    if (this.y >= this.endY) {
      this.vy = 0;
      this.currentFrame++;
      if (this.currentFrame === this.frames) {
        this.alive = false;
      }
    }
    super.update(frame);
  }

  draw(c: CanvasRenderingContext2D) {
    c.fillStyle = '#FFFFFF';
    c.font = '20px Montserrat';
    c.fillText(this.msg, this.x, this.y);
  }
}
