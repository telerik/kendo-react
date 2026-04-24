import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListSelectionCell,
    TreeListHeaderSelectionCell,
    getSelectedState,
    TreeListHeaderSelectionChangeEvent,
    TreeListSelectionChangeEvent,
    TreeListExpandChangeEvent
} from '@progress/kendo-react-treelist';
import { getter } from '@progress/kendo-react-common';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';

const DATA_ITEM_KEY: string = 'id';
const SUB_ITEMS_FIELD: string = 'employees';
const EXPAND_FIELD: string = 'expanded';
const SELECTED_FIELD: string = 'selected';
const idGetter: (values: any) => any = getter(DATA_ITEM_KEY);

const extendData: (
    dataState: Employee[],
    selectedState: { [id: string]: number[] | boolean },
    expandedState: { [n: number]: boolean }
) => Employee[] = (dataState, selectedState, expandedState) => {
    return mapTree(dataState, SUB_ITEMS_FIELD, (item) =>
        extendDataItem(item, SUB_ITEMS_FIELD, {
            selected: selectedState[idGetter(item)],
            expanded: expandedState[idGetter(item)]
        })
    );
};

const headerSelectionValue = (dataState, selectedState) => {
    let allSelected = true;

    mapTree(dataState, SUB_ITEMS_FIELD, (item) => {
        allSelected = allSelected && selectedState[idGetter(item)];
        return item;
    });

    return allSelected;
};

const App = () => {
    const dataState: Employee[] = employees.slice();
    const [selectedState, setSelectedState] = React.useState<{ [id: string]: number[] | boolean }>({});
    const [expandedState, setExpandedState] = React.useState<{ [n: number]: boolean }>({ 1: true, 2: true, 32: true });

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

    const onHeaderSelectionChange = React.useCallback((event: TreeListHeaderSelectionChangeEvent) => {
        const checkboxElement: any = event.syntheticEvent.target;
        const checked: boolean = checkboxElement.checked;
        const newSelectedState = {};

        event.dataItems.forEach((item) => {
            newSelectedState[idGetter(item)] = checked;
        });
        setSelectedState(newSelectedState);
    }, []);

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            data={extendData(dataState, selectedState, expandedState)}
            selectedField={SELECTED_FIELD}
            expandField={EXPAND_FIELD}
            subItemsField={SUB_ITEMS_FIELD}
            dataItemKey={DATA_ITEM_KEY}
            onSelectionChange={onSelectionChange}
            onHeaderSelectionChange={onHeaderSelectionChange}
            onExpandChange={onExpandChange}
            columns={[
                {
                    field: 'selected',
                    width: '7%',
                    headerSelectionValue: headerSelectionValue(dataState, selectedState),
                    cell: TreeListSelectionCell,
                    headerCell: TreeListHeaderSelectionCell
                },
                { field: 'name', title: 'Name', expandable: true, width: '31%' },
                { field: 'position', title: 'Position', width: '31%' },
                { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '31%' }
            ]}
        />
    );
};

export default App;
