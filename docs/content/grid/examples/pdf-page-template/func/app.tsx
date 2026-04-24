import * as React from 'react';
import { Grid, GridColumn, GridPdfExportButton, GridToolbar } from '@progress/kendo-react-grid';
import { saveGridPDF, PageTemplateProps } from '@progress/kendo-react-pdf';
import { products } from './products';

const PageTemplate = (props: PageTemplateProps) => {
    return (
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
            Page {props.pageNum} of {props.totalPages}
        </div>
    );
};

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
                pageTemplate: PageTemplate,
                paperSize: 'A4',
                margin: '1.2cm',
                landscape: true
            },
            callBack
        );
    };

    return (
        <div>
            {' '}
            <Grid data={products} style={{ maxHeight: '490px' }} pdf={true} onPdfExport={handlePdfExport}>
                <GridToolbar>
                    <GridPdfExportButton themeColor={'primary'} />
                </GridToolbar>
                <GridColumn field="ProductID" title="ID" width="50px" />
                <GridColumn field="ProductName" title="Name" width="300px" />
                <GridColumn field="Category.CategoryName" title="Category" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
