import { Drawable } from './interfaces';

export class Background implements Drawable {
  private nullPoint = 0;
  private readonly height;

  constructor(private readonly image: HTMLImageElement, private readonly scrollingSpeed, private readonly width) {
    this.height = Math.round((width * image.height) / image.width);
  }

  draw(context: CanvasRenderingContext2D) {
    this.nullPoint += this.scrollingSpeed;
    if (this.nullPoint >= this.height) {
      this.nullPoint = 0;
    }

    context.drawImage(
      this.image,
      0,
      // tslint:disable-next-line:no-bitwise
      (this.height - this.nullPoint) | 0,
      this.width,
      this.nullPoint,
      0,
      0,
      (this.width * this.width) / this.image.width,
      // tslint:disable-next-line:no-bitwise
      this.nullPoint | 0
    );

    // tslint:disable-next-line:no-bitwise
    context.drawImage(this.image, 0, this.nullPoint | 0, this.width, this.height);
  }
}
