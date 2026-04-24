import * as React from 'react';
import { Grid, GridColumn, GridColumnMenuColumnsChooser, GridColumnMenuProps } from '@progress/kendo-react-grid';

const columnsState = [
    { id: 'ProductID', field: 'ProductID', hidden: false },
    { id: 'ProductName', field: 'ProductName', hidden: false },
    { id: 'UnitPrice', field: 'UnitPrice', hidden: true },
    { id: 'QuantityPerUnit', field: 'QuantityPerUnit', hidden: false }
];

const sampleData = [
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18, QuantityPerUnit: '10 boxes x 20 bags' },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19, QuantityPerUnit: '24 - 12 oz bottles' },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10, QuantityPerUnit: '12 - 550 ml bottles' },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22, QuantityPerUnit: '48 - 6 oz jars' },
    { ProductID: 5, ProductName: "Chef Anton's Gumbo Mix", UnitPrice: 21.35, QuantityPerUnit: '36 boxes' }
];

const ColumnMenu = (props: GridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuColumnsChooser {...props} />
        </div>
    );
};

const App = () => {
    return (
        <Grid data={sampleData} adaptive={true} columnMenu={ColumnMenu} defaultColumnsState={columnsState}>
            <GridColumn id="ProductID" field="ProductID" filter="numeric" />
            <GridColumn id="ProductName" field="ProductName" />
            <GridColumn id="UnitPrice" field="UnitPrice" filter="numeric" />
            <GridColumn id="QuantityPerUnit" field="QuantityPerUnit" filter="numeric" />
        </Grid>
    );
};
export default App;
