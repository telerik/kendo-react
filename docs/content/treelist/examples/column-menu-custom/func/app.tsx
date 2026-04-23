import * as React from 'react';
import {
    TreeList,
    filterBy,
    orderBy,
    extendDataItem,
    mapTree,
    TreeListExpandChangeEvent,
    TreeListSortChangeEvent,
    TreeListColumnMenuFilterChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';

import { ColumnMenuCustomTextColumn } from './textColumnMenu';
import { ColumnMenuCustomNumericColumn } from './numericColumnMenu';
import { ColumnMenuCustomDateColumn } from './dateColumnMenu';
import { ColumnMenuCustomBooleanColumn } from './booleanColumnMenu';

import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';
import { CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';

const subItemsField = 'employees';
const expandField = 'expanded';

const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '320px', expandable: true, columnMenu: ColumnMenuCustomTextColumn },
    { field: 'hireDate', title: 'Hire Date', width: '280px', format: '{0:d}', columnMenu: ColumnMenuCustomDateColumn },
    {
        field: 'timeInPosition',
        title: 'Year(s) in Position',
        width: '280px',
        columnMenu: ColumnMenuCustomNumericColumn
    },
    { field: 'fullTime', title: 'Full Time', width: '190px', columnMenu: ColumnMenuCustomBooleanColumn }
];

interface AppState {
    data: Employee[];
    filter: CompositeFilterDescriptor[];
    sort: SortDescriptor[];
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        filter: [],
        sort: [],
        expanded: [1, 2, 32]
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const onSortChange = (event: TreeListSortChangeEvent) => {
        setState({
            ...state,
            sort: event.sort
        });
    };

    const handleFilterChange = (event: TreeListColumnMenuFilterChangeEvent) => {
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
        const { data, filter, sort } = state;

        const dataTree = orderBy(filterBy(data, filter, subItemsField), sort, subItemsField);
        return addExpandField(dataTree);
    };

    return (
        <TreeList
            style={{ maxHeight: '590px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={processData()}
            columns={columns}
            columnMenuFilter={state.filter}
            onColumnMenuFilterChange={handleFilterChange}
            onSortChange={onSortChange}
            sort={state.sort}
        />
    );
};

export default App;
