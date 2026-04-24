import { Surface, Path, geometry } from '@progress/kendo-drawing';
const { transform } = geometry;

export function drawScene(surface) {
  // Draw a path
    const path = new Path({
        stroke: {
            color: 'red',
            width: 10
        }
    });
    path.moveTo(25, 50).lineTo(75, 50);

  // Rotate the path
    path.transform(transform().rotate(-45, [ 50, 50 ]));

  // Render the group on the surface
    surface.draw(path);
}

