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
    {
        field: 'Personal Information',
        children: [
            { field: 'name', title: 'Name', width: '300px', expandable: true },
            {
                title: 'Contact Information',
                children: [
                    { field: 'phone', title: 'Phone', width: '200px' },
                    { field: 'extension', title: 'Extension', width: '200px' }
                ]
            }
        ]
    },
    {
        title: 'Employee Details',
        children: [
            { field: 'position', title: 'Position', width: '300px' },
            { field: 'fullTime', title: 'Full Time', width: '100px' }
        ]
    }
];

interface AppState {
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({ expanded: [1, 2, 32] });

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
            style={{ maxHeight: '510px', overflow: 'auto' }}
            tableProps={{ style: { tableLayout: 'fixed' } }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={addExpandField(employees)}
            columns={columns}
        />
    );
};

export default App;
