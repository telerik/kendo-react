import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Tooltip } from '@progress/kendo-react-tooltip';

const App = () => {
	return (
		<div>
			<Tooltip anchorElement="target">
				<span
					title="tooltip for disabled button"
					style={{
						display: 'inline-block'
					}}
				>
					<Button disabled={true}>Disabled Button</Button>
				</span>
			</Tooltip>
		</div>
	);
};

export default App;
