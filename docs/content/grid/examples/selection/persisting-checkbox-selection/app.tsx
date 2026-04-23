import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridToolbar
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const STORAGE_KEY = 'gridSelection';
const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const [select, setSelect] = React.useState<SelectDescriptor>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : { 3: true };
    });

    const onSelectionChange = React.useCallback((event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    }, []);

    const onHeaderSelectionChange = React.useCallback((event: GridHeaderSelectionChangeEvent) => {
        setSelect(event.select);
    }, []);

    const handleSaveSelection = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(select));
    };

    const handleLoadSelection = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        setSelect(saved ? JSON.parse(saved) : {});
    };

    return (
        <div>
            <GridToolbar>
                <Button themeColor="primary" onClick={handleSaveSelection} type="button">
                    Save Selection
                </Button>
                &nbsp;
                <Button themeColor="primary" onClick={handleLoadSelection} type="button">
                    Load Selection
                </Button>
            </GridToolbar>

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
                autoProcessData={true}
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
