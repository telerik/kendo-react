import { Path, Group, geometry } from '@progress/kendo-drawing';
const { Rect, transform } = geometry;

export function drawScene(surface) {
    const rect = new Rect([ 0, 20 ], [ 100, 50 ]);
    const path = Path.fromRect(rect, {
        stroke: {
            color: '#ffffff',
            width: 1
        },
        fill: { color: '#ff0000' },
        cursor: 'pointer',
        tooltipContent: 'Foo'
    });

  // Place all the shapes in a group
    const group = new Group();
    group.append(path);

  // Rotate the group
    group.transform(
    transform().rotate(-20, [ 150, 25 ])
  );

  // Render the group on the surface
    surface.draw(group);
}
