import * as React from 'react';
import { Surface } from '@progress/kendo-drawing';
import { drawScene } from './draw-scene';

const App = () => {
	const surfaceRef = React.useRef(null);

	const createSurface = () => {
		if (!surfaceRef.current) {
			return;
		}

		// Create a drawing surface
		const surface = Surface.create(surfaceRef.current, {
			width: '300',
			height: '300'
		});

		return surface;
	};

	React.useEffect(() => {
		drawScene(createSurface());
	}, []);

	return <div ref={surfaceRef} />;
};

export default App;
