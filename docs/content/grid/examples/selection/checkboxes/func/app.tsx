import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent
} from '@progress/kendo-react-grid';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const DATA_ITEM_KEY: string = 'ProductID';

const App = () => {
    const [select, setSelect] = React.useState<SelectDescriptor>({});

    const onSelectionChange = React.useCallback((event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    }, []);

    const onHeaderSelectionChange = React.useCallback((event: GridHeaderSelectionChangeEvent) => {
        setSelect(event.select);
    }, []);

    return (
        <div>
            <Grid
                data={products}
                style={{ height: '400px' }}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: false,
                    cell: false,
                    mode: 'single'
                }}
                select={select}
                onSelectionChange={onSelectionChange}
                onHeaderSelectionChange={onHeaderSelectionChange}
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
