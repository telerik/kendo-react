import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridPdfExportButton } from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';
import { saveGridPDF } from '@progress/kendo-react-pdf';

const App = () => {
    const exportCallback = () => {
        console.log('PDF export completed');
    };

    const handlePdfExport = async (event) => {
        // we could load the @progress/kendo-react-pdf module dynamically
        // const { saveGridPDF } = await import('@progress/kendo-react-pdf');
        saveGridPDF(event.target, {}, exportCallback);
    };

    return (
        <div>
            <Grid data={sampleProducts} style={{ height: '445px' }} pdf={true} onPdfExport={handlePdfExport}>
                <GridToolbar>
                    <GridPdfExportButton themeColor={'primary'} />
                </GridToolbar>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="300px" />
                <Column field="Category.CategoryName" title="Category" />
                <Column field="UnitPrice" title="Price" />
                <Column field="UnitsInStock" title="In stock" />
            </Grid>
        </div>
    );
};

export default App;
