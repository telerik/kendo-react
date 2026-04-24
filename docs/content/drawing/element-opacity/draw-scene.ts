import { Surface, Path } from '@progress/kendo-drawing';

export function drawScene(surface) {
  // Draw a path
    const path = new Path({
        stroke: {
            color: 'red',
            width: 10
        }
    });
    path.moveTo(25, 75).lineTo(75, 25);

  // Set its opacity to 50%
    path.opacity(0.5);

  // Render the group on the surface
    surface.draw(path);
}

