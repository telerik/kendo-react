import { Image, Surface, Path, Text, Group, geometry } from '@progress/kendo-drawing';
const { Rect, Point, Size, transform } = geometry;

export function drawScene(surface) {
	// Create the square border by drawing a straight path
	const path = new Path({
		stroke: {
			color: '#9999b6',
			width: 2
		}
	});

	// The path is constructed by using a chain of commands
	path.moveTo(0, 0).lineTo(150, 0).lineTo(150, 65).lineTo(0, 65).close();

	// This rectangle defines the image position and size
	const imageRect = new Rect(new Point(5, 5), new Size(50, 50));

	// Create the image
	const imageUrl = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/drawing/diego.jpg';
	const image = new Image(imageUrl, imageRect);

	// Create the text
	const text = new Text('Diego Roel', new Point(60, 25), { font: 'bold 15px Arial' });

	// Place all the shapes in a group
	const group = new Group();
	group.append(path, image, text);

	// Translate the group
	group.transform(transform().translate(50, 50));

	// Render the group on the surface
	surface.draw(group);
}
