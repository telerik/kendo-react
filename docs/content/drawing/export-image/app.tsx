import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@progress/kendo-react-buttons';
import { exportScene } from './export-scene';

const App = () => {
	const handleClick = () => {
		exportScene();
	};
	return (
		<div>
			<Button onClick={handleClick}>Export PNG...</Button>
		</div>
	);
};

export default App;
