import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    return (
        <div>
            <Grid
                style={{ height: '400px' }}
                data={products}
                autoProcessData={true}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    mode: 'single'
                }}
                defaultSelect={{ 2: true }}
                navigatable={true}
            >
                <Column field="ProductName" title="Product Name" width="300px" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="UnitsOnOrder" title="Units On Order" />
                <Column field="ReorderLevel" title="Reorder Level" />
            </Grid>
        </div>
    );
};

export default App;
