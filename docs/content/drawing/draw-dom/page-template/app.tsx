import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { exportElement } from './export-element';

const App = () => {
	const element = React.useRef(null);
	const handleClick = () => {
		exportElement(element.current, {
			forcePageBreak: '.page-break',
			template: (data) => `<span>Page ${data.pageNum} of ${data.totalPages}</span>`
		});
	};
	return (
		<div>
			<Button onClick={handleClick}>Export PDF...</Button>
			<div ref={element}>
				<h3>Page 1</h3>
				<h3 className="page-break">Page 2</h3>
			</div>
		</div>
	);
};

export default App;
