import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { PDFExport } from '@progress/kendo-react-pdf';

import './styles.css';

const App = () => {
	const pdfExportComponent = React.useRef<PDFExport>(null);

	return (
		<div>
			<div className="example-config">
				<Button
					className="k-button"
					onClick={() => {
						pdfExportComponent.current?.save();
					}}
				>
					Export PDF
				</Button>
			</div>
			<PDFExport ref={pdfExportComponent} paperSize="A4">
				<Grid style={{ maxHeight: '400px' }} data={products}>
					<GridColumn field="ProductID" title="ID" width="40px" />
					<GridColumn field="ProductName" title="Name" width="250px" />
					<GridColumn field="Category.CategoryName" title="CategoryName" />
					<GridColumn field="UnitPrice" title="Price" width="80px" />
					<GridColumn field="UnitsInStock" title="In stock" width="80px" />
				</Grid>
			</PDFExport>
		</div>
	);
};

const products = [
	{
		ProductID: 1,
		ProductName: 'Chai',
		CategoryID: 1,
		UnitPrice: 18.0,
		UnitsInStock: 39,
		Category: {
			CategoryID: 1,
			CategoryName: 'Beverages'
		}
	},
	{
		ProductID: 2,
		ProductName: 'Chang',
		CategoryID: 1,
		UnitPrice: 19.0,
		UnitsInStock: 17,
		Category: {
			CategoryID: 1,
			CategoryName: 'Beverages'
		}
	},
	{
		ProductID: 3,
		ProductName: 'Aniseed Syrup',
		CategoryID: 2,
		UnitPrice: 10.0,
		UnitsInStock: 13,
		Category: {
			CategoryID: 2,
			CategoryName: 'Condiments'
		}
	},
	{
		ProductID: 4,
		ProductName: "Chef Anton's Cajun Seasoning",
		CategoryID: 2,
		UnitPrice: 22.0,
		UnitsInStock: 53,
		Category: {
			CategoryID: 2,
			CategoryName: 'Condiments'
		}
	}
];

export default App;
