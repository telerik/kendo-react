import * as React from 'react';
import {
    Grid,
    GridColumnMenuProps,
    GridColumnMenuColumnsChooser,
    GridColumn,
    GridColumnState,
    GridColumnsStateChangeEvent
} from '@progress/kendo-react-grid';

const defaultColumnsState = [
    { id: 'ProductId', field: 'ProductID', hidden: true },
    { id: 'ProductName', field: 'ProductName', hidden: true },
    { id: 'UnitPrice', field: 'UnitPrice', hidden: false },
    { id: 'Discontinued', field: 'Discontinued', hidden: false }
];

const sampleProducts = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '10 boxes x 20 bags',
        UnitPrice: 18,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        },
        FirstOrderedOn: new Date(1996, 8, 20)
    },
    {
        ProductID: 2,
        ProductName: 'Chang',
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: '24 - 12 oz bottles',
        UnitPrice: 19,
        UnitsInStock: 17,
        UnitsOnOrder: 40,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: 'Beverages',
            Description: 'Soft drinks, coffees, teas, beers, and ales'
        },
        FirstOrderedOn: new Date(1996, 7, 12)
    }
];

const ColumnMenu = (props: GridColumnMenuProps) => (
    <div>
        <GridColumnMenuColumnsChooser {...props} />
    </div>
);

const App = () => {
    const [columnsState, setColumnsState] = React.useState<GridColumnState[]>(defaultColumnsState);

    const onColumnsStateChange = (evt: GridColumnsStateChangeEvent) => {
        setColumnsState(evt.columnsState);
    };

    console.log('### columnsState: ', columnsState);
    return (
        <Grid
            data={sampleProducts}
            adaptive={true}
            columnMenu={ColumnMenu}
            style={{ height: '400px' }}
            defaultColumnsState={defaultColumnsState}
            columnsState={columnsState}
            onColumnsStateChange={onColumnsStateChange}
        >
            <GridColumn id="ProductId" field="ProductID" filter="numeric" />
            <GridColumn id="ProductName" field="ProductName" />
            <GridColumn id="UnitPrice" field="UnitPrice" filter="numeric" />
            <GridColumn id="Discontinued" field="Discontinued" filter="boolean" />
        </Grid>
    );
};

export default App;
