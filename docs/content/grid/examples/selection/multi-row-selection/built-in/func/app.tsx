import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    return (
        <div>
            <div style={{ padding: '5px', color: '#999' }}>
                <div>Ctrl+Click/Enter - add to selection</div>
                <div>Shift+Click/Enter - select range </div>
            </div>
            <Grid
                style={{ height: '400px' }}
                data={products}
                autoProcessData={true}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: true,
                    mode: 'multiple'
                }}
                defaultSelect={{ 3: true, 4: true, 5: true }}
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
