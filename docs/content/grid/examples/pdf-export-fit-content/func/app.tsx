import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridPdfExportButton } from '@progress/kendo-react-grid';
import { saveGridPDF } from '@progress/kendo-react-pdf';
import sampleProducts from './gd-sample-products';

const App = () => {
    const handlePdfExport = async (event) => {
        const callBack = () => {
            console.log('PDF Exported');
        };

        // we could load the @progress/kendo-react-pdf module dynamically
        // const { saveGridPDF } = await import('@progress/kendo-react-pdf');
        saveGridPDF(
            event.target,
            {
                paperSize: 'A4',
                scale: 0.5
            },
            callBack
        );
    };

    return (
        <div>
            <Grid data={sampleProducts} style={{ height: '445px' }} pdf={true} onPdfExport={handlePdfExport}>
                <GridToolbar>
                    <GridPdfExportButton themeColor={'primary'} />
                </GridToolbar>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="300px" />
                <Column field="Category.CategoryName" title="Category" width="150px" />
                <Column field="UnitPrice" title="Price" width="120px" />
                <Column field="QuantityPerUnit" title="Quantity Per Unit" width="180px" />
                <Column field="UnitsInStock" title="In stock" width="120px" />
                <Column field="Discontinued" title="Discontinued" width="130px" />
            </Grid>
        </div>
    );
};

export default App;
