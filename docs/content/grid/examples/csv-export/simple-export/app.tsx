import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridCsvExportButton } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    return (
        <Grid data={products} autoProcessData={true} csv={true} pageable={true}>
            <GridToolbar>
                <GridCsvExportButton themeColor={'primary'} />
            </GridToolbar>
            <Column field="ProductID" title="ID" width="80px" />
            <Column field="ProductName" title="Product Name" width="300px" />
            <Column field="Category.CategoryName" title="Category" />
            <Column field="UnitPrice" title="Unit Price" />
            <Column field="UnitsInStock" title="In Stock" />
            <Column field="Discontinued" title="Discontinued" />
        </Grid>
    );
};

export default App;
