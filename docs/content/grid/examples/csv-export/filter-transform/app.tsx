import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridCsvExportButton } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    const handleFilteredExport = (data: any[]) => {
        return data
            .filter((item) => !item.Discontinued)
            .map((item) => ({
                ...item,
                UnitPrice: `$${item.UnitPrice.toFixed(2)}`,
                UnitsInStock: item.UnitsInStock > 0 ? item.UnitsInStock : 'Out of Stock'
            }));
    };

    return (
        <Grid data={products} csv={true} onCsvExport={handleFilteredExport}>
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
