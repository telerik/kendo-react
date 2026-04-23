import * as React from 'react';
import { Grid, GridColumn as Column, GridSelectionChangeEvent } from '@progress/kendo-react-grid';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        console.log(event.select);
    };

    return (
        <div>
            <div style={{ padding: '5px', color: '#999' }}>
                <div>Ctrl+Click/Enter - add to selection</div>
                <div>Shift+Click/Enter - select range </div>
            </div>
            <Grid
                style={{ height: '400px' }}
                data={products}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: true,
                    cell: true,
                    mode: 'multiple'
                }}
                navigatable={true}
                defaultSelect={{ 3: [1], 4: [1], 5: [1] }}
                onSelectionChange={onSelectionChange}
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
