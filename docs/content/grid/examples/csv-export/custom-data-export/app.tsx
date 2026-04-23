import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridCsvExportButton,
    GridCSVExportOptions
} from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    const csvOptions: GridCSVExportOptions = {
        data: products.slice(0, 5),
        preventFormulaInjection: true,
        fileName: 'custom-products-export.csv'
    };

    return (
        <Grid data={products} csv={csvOptions}>
            <GridToolbar>
                <GridCsvExportButton themeColor={'primary'} />
            </GridToolbar>
            <Column field="ProductID" title="ID" width="80px" />
            <Column field="ProductName" title="Product Name" width="300px" />
            <Column field="Category.CategoryName" title="Category" />
            <Column field="UnitPrice" title="Unit Price" />
            <Column field="UnitsInStock" title="In Stock" />
        </Grid>
    );
};

export default App;
