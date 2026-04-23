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
        saveGridPDF(event.target, {}, callBack);
    };

    return (
        <div>
            <Grid data={sampleProducts} pdf={true} onPdfExport={handlePdfExport}>
                <GridToolbar>
                    <GridPdfExportButton themeColor={'primary'} />
                </GridToolbar>
                <Column field="ProductID" title="ID" width="50px" />
                <Column field="ProductName" title="Name" width="300px" />
                <Column field="Category.CategoryName" title="Category" />
                <Column field="UnitPrice" title="Price" />
                <Column field="UnitsInStock" title="In stock" />
                <Column field="Discontinued" title="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
