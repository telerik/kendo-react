import * as React from 'react';
import { Grid, GridColumn, GridToolbar, GridPdfExportButton } from '@progress/kendo-react-grid';
import { saveGridPDF } from '@progress/kendo-react-pdf';
import sampleProducts from './gd-sample-products';

const App = () => {
    const handlePdfExport = async (event) => {
        const pdfExportDone = () => {
            console.log('PDF Exported');
        };

        // we could load the @progress/kendo-react-pdf module dynamically
        // const { saveGridPDF } = await import('@progress/kendo-react-pdf');
        saveGridPDF(event.target, {}, pdfExportDone);
    };

    const grid = (
        <Grid
            data={sampleProducts}
            style={{ height: '445px' }}
            pdf={{
                defaultColumnsState: [
                    { id: 'ProductID', field: 'ProductID' },
                    { id: 'ProductName', field: 'ProductName' },
                    { id: 'Category.CategoryName', field: 'Category.CategoryName', hidden: true },
                    { id: 'UnitPrice', field: 'UnitPrice', hidden: true },
                    { id: 'UnitsInStock', field: 'UnitsInStock' }
                ]
            }}
            onPdfExport={handlePdfExport}
        >
            <GridToolbar>
                <GridPdfExportButton themeColor={'primary'} />
            </GridToolbar>
            <GridColumn id="ProductID" field="ProductID" title="ID" width="50px" />
            <GridColumn id="ProductName" field="ProductName" title="Name" width="350px" />
            <GridColumn id="Category.CategoryName" field="Category.CategoryName" title="Category" />
            <GridColumn id="UnitPrice" field="UnitPrice" title="Price" />
            <GridColumn id="UnitsInStock" field="UnitsInStock" title="In stock" />
        </Grid>
    );

    return <div>{grid}</div>;
};

export default App;
