import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridCsvExportButton,
    GridCSVExportOptions
} from '@progress/kendo-react-grid';

const App = () => {
    const testProducts = [
        { ProductID: 1, ProductName: '=1+1', UnitPrice: 10, UnitsInStock: 5 },
        { ProductID: 2, ProductName: '+SUM(A1:A10)', UnitPrice: 20, UnitsInStock: 10 },
        { ProductID: 3, ProductName: '-2*3', UnitPrice: 30, UnitsInStock: 15 },
        { ProductID: 4, ProductName: '@cmd|calc', UnitPrice: 40, UnitsInStock: 20 },
        { ProductID: 5, ProductName: 'Safe Product Name', UnitPrice: 50, UnitsInStock: 25 }
    ];

    const csvOptions: GridCSVExportOptions = {
        preventFormulaInjection: true,
        fileName: 'export-with-protection.csv'
    };

    return (
        <Grid data={testProducts} csv={csvOptions}>
            <GridToolbar>
                <GridCsvExportButton themeColor={'primary'} />
            </GridToolbar>
            <Column field="ProductID" title="ID" width="80px" />
            <Column field="ProductName" title="Product Name" width="300px" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="Stock" />
        </Grid>
    );
};

export default App;
