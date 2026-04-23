import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';

const DATA_ITEM_KEY: string = 'ProductID';

const App = () => {
    return (
        <div>
            <Grid
                data={products}
                autoProcessData={true}
                style={{ height: '400px' }}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: false,
                    cell: false,
                    mode: 'multiple'
                }}
                defaultSelect={{ [3]: true, [4]: true }}
            >
                <Column columnType="checkbox" />
                <Column field="ProductName" title="Product Name" width="300px" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="UnitsOnOrder" title="Units On Order" />
                <Column field="ReorderLevel" title="Reorder Level" />
            </Grid>
        </div>
    );
};
export default App;
