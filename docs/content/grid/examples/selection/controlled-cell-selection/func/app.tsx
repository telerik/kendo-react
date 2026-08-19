import * as React from 'react';
import { Grid, GridColumn as Column, GridSelectionChangeEvent } from '@progress/kendo-react-grid';
import { SelectDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';

const PRESETS: Array<{ label: string; select: SelectDescriptor }> = [
    { label: products[0].ProductName, select: { [products[0].ProductID]: [0] } },
    { label: products[1].ProductName, select: { [products[1].ProductID]: [0] } }
];

const App = () => {
    const [select, setSelect] = React.useState<SelectDescriptor>(PRESETS[0].select);

    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        const newSelect = event.select;
        const newKey = Object.keys(newSelect).find((k) => (newSelect[k] as number[])?.length > 0);

        if (newKey !== undefined && select[newKey]) {
            const newCol = (newSelect[newKey] as number[])[0];
            const existingCols = select[newKey] as number[];
            if (existingCols.includes(newCol)) {
                setSelect({});
                return;
            }
        }
        setSelect(newSelect);
    };

    const hasSelection = Object.values(select).some(Boolean);

    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '8px', gap: '8px' }}>
                {PRESETS.map((preset) => (
                    <Button key={preset.label} onClick={() => setSelect(preset.select)}>
                        Select &ldquo;{preset.label}&rdquo;
                    </Button>
                ))}
                <Button disabled={!hasSelection} onClick={() => setSelect({})}>
                    Clear Selection
                </Button>
            </div>
            <Grid
                style={{ height: '370px' }}
                data={products}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{ enabled: true, cell: true, mode: 'single' }}
                select={select}
                onSelectionChange={onSelectionChange}
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
