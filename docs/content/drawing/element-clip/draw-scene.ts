import { Circle, Surface, Path, geometry } from '@progress/kendo-drawing';
const { transform, Circle: GeomCircle } = geometry;

export function drawScene(surface) {
  // Create the circle geometry and shape
    const geometry = new GeomCircle([ 100, 100 ], 80);
    const circle = new Circle(geometry, {
        stroke: { color: "red", width: 1 }
    });

  // Create a clipping path
    const clipPath = new Path();
    clipPath.moveTo(0, 0).lineTo(100, 100).lineTo(100, 0).close();

  // Clip the circle
    circle.clip(clipPath);

  // Render the group on the surface
    surface.draw(circle);
}
