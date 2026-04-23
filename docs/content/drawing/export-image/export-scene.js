import { Path, Text, Group, exportImage } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

export function exportScene() {
  // Create a path and draw a straight line
    const path = new Path({
        stroke: {
            color: `#9999b6`,
            width: 2
        }
    });

    path.moveTo(0, 50).lineTo(200, 50).close();

  // Create the text
    const text = new Text(`Hello World!`, [ 20, 25 ], {
        font: `bold 15px Arial`
    });

  // Place all the shapes in a group
    const group = new Group();
    group.append(path, text);

    exportImage(group).then((data) => {
        saveAs(data, "scene.png");
    });
}

