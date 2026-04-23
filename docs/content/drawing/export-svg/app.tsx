import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { exportScene } from './export-scene';

const App = () => {
	const handleClick = () => {
		exportScene();
	};

	return <Button onClick={handleClick}>Export SVG...</Button>;
};
export default App;
