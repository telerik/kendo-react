import * as React from 'react';
import { Grid, GridColumn as Column, GridSelectionChangeEvent } from '@progress/kendo-react-grid';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const [select, setSelect] = React.useState<SelectDescriptor>({ 3: true, 4: true, 5: true });

    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
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
                    mode: 'multiple'
                }}
                select={select}
                navigatable={true}
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
