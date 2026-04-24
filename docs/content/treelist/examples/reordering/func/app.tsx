import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListExpandChangeEvent,
    TreeListColumnReorderEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '310px', expandable: true },
    { field: 'position', title: 'Position', width: '260px' },
    { field: 'hireDate', title: 'Hire Date', width: '160px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '160px' },
    { field: 'fullTime', title: 'Full Time', width: '150px' }
];

interface AppState {
    expanded: number[];
    columns: TreeListColumnProps[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({ expanded: [1, 2, 32], columns });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
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

    const onColumnReorder = (event: TreeListColumnReorderEvent) => {
        setState({ ...state, columns: event.columns });
    };

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={addExpandField(employees)}
            columns={state.columns}
            reorderable={true}
            onColumnReorder={onColumnReorder}
        />
    );
};

export default App;
