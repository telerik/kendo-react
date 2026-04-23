import * as React from 'react';
import {
    TreeList,
    filterBy,
    extendDataItem,
    mapTree,
    TreeListColumnProps,
    TreeListTextFilter,
    TreeListDateFilter,
    TreeListNumericFilter,
    TreeListBooleanFilter,
    TreeListExpandChangeEvent,
    TreeListFilterChangeEvent
} from '@progress/kendo-react-treelist';

import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';
import { FilterDescriptor } from '@progress/kendo-data-query';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '320px', filterCell: TreeListTextFilter, expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '280px', format: '{0:d}', filterCell: TreeListDateFilter },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '280px', filterCell: TreeListNumericFilter },
    { field: 'fullTime', title: 'Full Time', width: '190px', filterCell: TreeListBooleanFilter }
];

interface AppState {
    data: Employee[];
    filter: FilterDescriptor[];
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        filter: [],
        expanded: [1, 2, 32]
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const handleFilterChange = (event: TreeListFilterChangeEvent) => {
        setState({
            ...state,
            filter: event.filter
        });
    };

    const addExpandField = (dataTree: Employee[]) => {
        const expanded = state.expanded;
        return mapTree(dataTree, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: expanded.includes(item.id)
            })
        );
    };

    const processData = () => {
        let data = state.data;
        let filteredData = filterBy(data, state.filter, subItemsField);
        return addExpandField(filteredData);
    };

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            filter={state.filter}
            data={processData()}
            onFilterChange={handleFilterChange}
            columns={columns}
        />
    );
};

export default App;
