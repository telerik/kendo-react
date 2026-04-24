import { Path, LinearGradient, geometry } from '@progress/kendo-drawing';
const { transform } = geometry;

export function drawScene(surface) {
    const gradient = new LinearGradient({
        name: "LG1",
        stops: [
            {
                offset: 0,
                color: "gray",
                opacity: 1
            }, {
                offset: 0.5,
                color: "orange",
                opacity: 0.8
            }
        ]
    });

    // Create the square border by drawing a straight path.
    const path = new Path({
        stroke: {
            color: "#9999b6",
            width: 2
        },
        fill: gradient
    });

    // The path is constructed by using a chain of commands.
    path.moveTo(0, 0)
        .lineTo(150, 0).lineTo(150, 65).lineTo(0, 65)
        .close();

    // Translate the path.
    path.transform(
        transform().translate(50, 50)
    );

    // Render the path on the surface.
    surface.draw(path);
}
