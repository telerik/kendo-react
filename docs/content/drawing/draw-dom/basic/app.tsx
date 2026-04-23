import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { exportElement } from './export-element';

const App = () => {
	const element = React.useRef(null);
	const handleClick = () => {
		exportElement(element);
	};
	return (
		<div>
			<Button onClick={handleClick}>Export PDF...</Button>
			<div ref={element}>... more HTML code here ...</div>
		</div>
	);
};

export default App;
