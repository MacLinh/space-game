export class Point {
  constructor(public x, public y) {}

  rotateAbout(p: Point, rad): Point {
    const oldX = this.x;
    this.x = Math.cos(rad) * (oldX - p.x) - Math.sin(rad) * (this.y - p.y) + p.x;
    this.y = Math.sin(rad) * (oldX - p.x) + Math.cos(rad) * (this.y - p.y) + p.y;
    return this;
  }

  translate(p: Point): Point {
    this.x += p.x;
    this.y += p.y;
    return this;
  }
}
