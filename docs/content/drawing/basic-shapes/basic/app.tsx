import * as React from 'react';
import { Surface } from '@progress/kendo-drawing';
import { drawScene } from './draw-scene';

const App = () => {
	const surfaceRef = React.useRef(null);

	const createSurface = () => {
		const surface = surfaceRef.current && Surface.create(surfaceRef.current);

		return surface;
	};

	React.useEffect(() => {
		drawScene(createSurface());
	}, []);

	return <div ref={surfaceRef} id="surface" />;
};

export default App;
