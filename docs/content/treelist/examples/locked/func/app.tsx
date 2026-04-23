import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListExpandChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '300px', expandable: true, locked: true },
    { field: 'position', title: 'Position', width: '300px' },
    { field: 'hireDate', title: 'Hire Date', width: '200px', format: '{0:d}' },
    { field: 'phone', title: 'Phone', width: '200px' },
    { field: 'extension', title: 'Extension', width: '200px' },
    { field: 'fullTime', title: 'Full Time', width: '100px', locked: true },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '200px' }
];

interface AppState {
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        expanded: [1, 2, 32]
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
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

    return (
        <TreeList
            style={{ maxHeight: '510px', width: '720px', overflow: 'auto' }}
            tableProps={{ style: { width: '1500px' } }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={addExpandField(employees)}
            columns={columns}
        />
    );
};

export default App;
