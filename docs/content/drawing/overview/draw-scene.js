import { Surface, Path, Text, Group, geometry } from '@progress/kendo-drawing';
const { transform } = geometry;

export function drawScene(surface) {
    // Create a path and draw a straight line
    const path = new Path({
        stroke: {
            color: `#9999b6`,
            width: 2
        }
    });

    path.moveTo(0, 50).lineTo(200, 50).close();

    // Create the text
    const text = new Text(`Hello World!`, [20, 25], {
        font: `bold 15px Arial`
    });

    // Place all the shapes in a group
    const group = new Group();
    group.append(path, text);

    // Rotate the group
    group.transform(
        transform().rotate(-20, [150, 25])
    );

    // Render the group on the surface
    surface.draw(group);
}

