import * as React from 'react';
import { Grid, GridColumn as Column, GridSelectableSettings, GridSelectionChangeEvent } from '@progress/kendo-react-grid';
import { SelectDescriptor, TableSelectableMode } from '@progress/kendo-react-data-tools';
import { Checkbox, RadioGroup, CheckboxChangeEvent, RadioGroupChangeEvent } from '@progress/kendo-react-inputs';
import products from './gd-products';

const DATA_ITEM_KEY = 'ProductID';
const selectionModes = [
    {
        value: 'single',
        label: 'Single selection mode'
    },
    {
        value: 'multiple',
        label: 'Multiple selection mode'
    }
];

interface DataItem {
    id: number;
    name: string;
  }

const App = () => {
    const [select, setSelect] = React.useState<SelectDescriptor>({});
    const [dragEnabled, setDragEnabled] = React.useState<boolean>(true);
    const [cellEnabled, setCellEnabled] = React.useState<boolean>(true);
    const [selectionMode, setSelectionMode] = React.useState<TableSelectableMode | undefined>('multiple');

    const [startDataItem, setStartDataItem] = React.useState<DataItem | null>(null);
    const [endDataItem, setEndDataItem] = React.useState<DataItem | null>(null);

    const selectable: GridSelectableSettings = {
        enabled: true,
        drag: dragEnabled,
        cell: cellEnabled,
        mode: selectionMode
    };

    const onSelectionChange = (event: GridSelectionChangeEvent) => {
        setStartDataItem(event.startDataItem.ProductID);
        setEndDataItem(event.endDataItem.ProductID);

        setSelect(event.select);
    };

    const onDragChange = (event: CheckboxChangeEvent) => {
        setDragEnabled(event.value);
    };

    const onCellChange = (event: CheckboxChangeEvent) => {
        setCellEnabled(event.value);
    };

    const onSelectionModeChange = (event: RadioGroupChangeEvent) => {
        setSelectionMode(event.value);
    };

    return (
        <div>
            <div>
                <div>
                    <Checkbox id="drag" value={dragEnabled} label={'Enable drag selection'} onChange={onDragChange} />
                    <Checkbox id="cell" value={cellEnabled} label={'Enable cell selection'} onChange={onCellChange} />
                </div>
                <div>
                    <RadioGroup value={selectionMode} onChange={onSelectionModeChange} data={selectionModes} />
                </div>
            </div>
            <Grid
                style={{ height: '400px' }}
                data={products}
                dataItemKey={DATA_ITEM_KEY}
                select={select}
                navigatable={true}
                selectable={selectable}
                onSelectionChange={onSelectionChange}
            >
                <Column field="ProductName" title="Product Name" width="300px" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="UnitsOnOrder" title="Units On Order" />
                <Column field="ReorderLevel" title="Reorder Level" />
            </Grid>

            <div>
                <div id="startDataItem">
                    <strong>Start Data Item:</strong> {startDataItem ? JSON.stringify(startDataItem) : 'None'}
                </div>
                <div id="endDataItem">
                    <strong>End Data Item:</strong> {endDataItem ? JSON.stringify(endDataItem) : 'None'}
                </div>
                <br />
                <div>
                    <div>Ctrl+Click/Enter - add to selection</div>
                    <div>Shift+Click/Enter - select range</div>
                </div>
            </div>
        </div>
    );
};

export default App;
