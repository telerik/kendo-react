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
        allPages: true,
        fileName: 'products-export.csv',
        lineSeparator: '\n',
        preventFormulaInjection: true,
        includeUTF8BOM: true
    };

    return (
        <Grid data={products} csv={csvOptions} autoProcessData={true} pageable={true}>
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
