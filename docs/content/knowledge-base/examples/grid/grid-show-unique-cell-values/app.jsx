import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const sampleProducts = [
	{ Product: 'A', UnitSize: 1, Mon: 1, Tue: 2 },
	{ Product: 'A', UnitSize: 2, Mon: 2, Tue: 5 },
	{ Product: 'B', UnitSize: 14, Mon: 3, Tue: 2 },
	{ Product: 'C', UnitSize: 2, Mon: 1, Tue: 7 },
	{ Product: 'C', UnitSize: 5, Mon: 5, Tue: 4 }
];

const CustomCell = (props) => {
	// Find the index of the first product

	const currentIndex = props.dataIndex;

	const shouldRenderProduct =
		currentIndex != 0
			? sampleProducts[currentIndex - 1].Product == sampleProducts[currentIndex].Product
				? false
				: true
			: true;

	return (
		<td {...props.tdProps} colSpan={1}>
			{shouldRenderProduct ? props.children : null}
		</td>
	);
};

const App = () => {
	return (
		<Grid data={sampleProducts}>
			<GridColumn field="Product" title="Product" width="50px" cells={{ data: CustomCell }} />
			<GridColumn field="UnitSize" title="UnitSize" />
			<GridColumn field="Mon" title="Mon" />
			<GridColumn field="Tue" title="Tue" />
		</Grid>
	);
};

export default App;
