import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { exportScene } from './export-scene';

const App = () => {
	const handleSelect = () => {
		exportScene();
	};

	return (
		<div>
			<Button onClick={handleSelect}>Export PDF...</Button>
		</div>
	);
};

export default App;
