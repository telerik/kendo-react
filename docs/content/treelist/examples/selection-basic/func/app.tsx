import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    getSelectedState,
    getSelectedStateFromKeyDown,
    TreeListExpandChangeEvent,
    TreeListSelectionChangeEvent,
    TreeListKeyDownEvent
} from '@progress/kendo-react-treelist';
import { Checkbox, CheckboxChangeEvent, RadioGroup, RadioGroupChangeEvent } from '@progress/kendo-react-inputs';
import { getter } from '@progress/kendo-react-common';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';

const DATA_ITEM_KEY: string = 'id';
const SUB_ITEMS_FIELD: string = 'employees';
const EXPAND_FIELD: string = 'expanded';
const SELECTED_FIELD: string = 'selected';
const idGetter: (values: any) => any = getter(DATA_ITEM_KEY);

const selectionModes: { value: 'single' | 'multiple'; label: string }[] = [
    { value: 'single', label: 'Single selection mode' },
    { value: 'multiple', label: 'Multiple selection mode' }
];

const extendData = (dataState, selectedState, expandedState) => {
    return mapTree(dataState, SUB_ITEMS_FIELD, (item) =>
        extendDataItem(item, SUB_ITEMS_FIELD, {
            selected: selectedState[idGetter(item)],
            expanded: expandedState[idGetter(item)]
        })
    );
};

const App = () => {
    const [dataState, setDataState] = React.useState<Employee[]>(employees.slice());
    const [selectedState, setSelectedState] = React.useState<{ [id: string]: number[] | boolean }>({});
    const [expandedState, setExpandedState] = React.useState<{ [n: number]: boolean }>({ 1: true, 2: true, 32: true });

    const [dragEnabled, setDragEnabled] = React.useState<boolean>(true);
    const [cellEnabled, setCellEnabled] = React.useState<boolean>(true);
    const [selectionMode, setSelectionMode] = React.useState<'single' | 'multiple'>(selectionModes[1].value);

    const onExpandChange = React.useCallback(
        (e: TreeListExpandChangeEvent) => {
            setExpandedState({ ...expandedState, [idGetter(e.dataItem)]: !e.value });
        },
        [expandedState]
    );

    const onSelectionChange = React.useCallback(
        (event: TreeListSelectionChangeEvent) => {
            const newSelectedState = getSelectedState({
                event,
                selectedState: selectedState,
                dataItemKey: DATA_ITEM_KEY
            });
            setSelectedState(newSelectedState);
        },
        [selectedState]
    );

    const onKeyDown = (event: TreeListKeyDownEvent) => {
        const newSelectedState = getSelectedStateFromKeyDown({
            event,
            selectedState: selectedState,
            dataItemKey: DATA_ITEM_KEY
        });
        setSelectedState(newSelectedState);
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
            <Checkbox value={dragEnabled} label={'Enable drag selection'} onChange={onDragChange} />
            <Checkbox value={cellEnabled} label={'Enable cell selection'} onChange={onCellChange} />
            <RadioGroup value={selectionMode} onChange={onSelectionModeChange} data={selectionModes} />
            <TreeList
                style={{ maxHeight: '510px', overflow: 'auto' }}
                data={extendData(dataState, selectedState, expandedState)}
                selectedField={SELECTED_FIELD}
                expandField={EXPAND_FIELD}
                subItemsField={SUB_ITEMS_FIELD}
                dataItemKey={DATA_ITEM_KEY}
                selectable={{
                    enabled: true,
                    drag: dragEnabled,
                    cell: cellEnabled,
                    mode: selectionMode
                }}
                navigatable={true}
                onSelectionChange={onSelectionChange}
                onExpandChange={onExpandChange}
                onKeyDown={onKeyDown}
                columns={[
                    { field: 'name', title: 'Name', expandable: true, width: '31%' },
                    { field: 'position', title: 'Position', width: '31%' },
                    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '31%' }
                ]}
            />
        </div>
    );
};

export default App;
