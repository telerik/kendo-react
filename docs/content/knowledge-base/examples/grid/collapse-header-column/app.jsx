import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { HeaderThElement } from '@progress/kendo-react-data-tools';
import products from './products.json';

const App = () => {
	const [expandedColumnsState, setExpandedColumnsState] = React.useState({
		'Product Information': true,
		Category: true
	});

	const CollapsableHeaderCell = React.useCallback(
		(props) => {
			let currentState = expandedColumnsState[props.title];
			const onClick = (ev) => {
				let newState = { ...expandedColumnsState };
				newState[props.title] = !currentState;
				ev.preventDefault();
				setExpandedColumnsState(newState);
			};
			return (
				<HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
					{props.title}
					<span
						style={{ cursor: 'pointer' }}
						onClick={onClick}
						class={
							currentState
								? 'k-icon k-font-icon k-i-arrow-chevron-right'
								: 'k-icon k-font-icon k-i-arrow-chevron-left'
						}
					/>
				</HeaderThElement>
			);
		},
		[expandedColumnsState, setExpandedColumnsState]
	);
	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />

			<Grid
				style={{
					height: '420px'
				}}
				resizable={true}
				reorderable={true}
				data={products.slice(0, 10)}
			>
				<Column field="ProductID" title="ID" width={40} resizable={false} />
				<Column title="Product Information" cells={{ headerCell: CollapsableHeaderCell }}>
					{expandedColumnsState['Product Information'] != true ? (
						<>
							<Column field="ProductName" title="Name" />
							<Column title="Unit">
								<Column field="UnitPrice" title="Price" />
								<Column field="UnitsInStock" title="In Stock" />
							</Column>
						</>
					) : (
						<Column field="ProductName" title="Name" />
					)}
				</Column>
				<Column
					title="Category"
					children={[
						{
							field: 'Category.CategoryName',
							title: 'Name'
						},
						<Column key={2} field="Category.Description" title="Description" />
					]}
				/>
			</Grid>
		</>
	);
};

export default App;
