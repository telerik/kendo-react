import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';

const defaultSelect: SelectDescriptor = { [products[0].ProductID]: true };

const App = () => (
    <Grid
        style={{ height: '400px' }}
        data={products}
        dataItemKey={DATA_ITEM_KEY}
        defaultSelect={defaultSelect}
        selectable={{
            enabled: true,
            mode: 'single'
        }}
        navigatable={true}
    >
        <Column field="ProductName" title="Product Name" width="300px" />
        <Column field="UnitsInStock" title="Units In Stock" />
        <Column field="UnitsOnOrder" title="Units On Order" />
        <Column field="ReorderLevel" title="Reorder Level" />
    </Grid>
);

export default App;
