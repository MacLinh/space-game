export interface Updateable {
  update: (frame: number) => void;
}
export interface Drawable {
  draw: (context: CanvasRenderingContext2D) => void;
}
