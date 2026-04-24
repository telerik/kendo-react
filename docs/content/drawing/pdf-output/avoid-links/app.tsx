import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { exportElement } from './export-element';

const App = () => {
	const element = React.useRef(null);
	const handleClick = () => {
		exportElement(element.current, {
			avoidLinks: true
		});
	};
	return (
		<div>
			<Button onClick={handleClick}>Export PDF... </Button>
			<div ref={element}>
				This is <a href="http://www.telerik.com/kendo-react-ui/">a non-clickable link</a>.
			</div>
		</div>
	);
};

export default App;
