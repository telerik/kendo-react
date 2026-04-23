import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListColumnProps,
    TreeListColumnResizeEvent,
    TreeListExpandChangeEvent
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

    const table = React.useRef<TreeList | null>(null);

    const onColumnResize = (event: TreeListColumnResizeEvent) => {
        if (table && table.current) {
            table.current.element!.style.width = `${event.totalWidth}px`;
        }
        if (event.end) {
            setState({ ...state, columns: event.columns });
        }
    };

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

    return (
        <TreeList
            ref={table}
            tableProps={{ ref: table } as any}
            style={{ maxHeight: '510px', overflow: 'auto', display: 'inline-block' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={addExpandField(employees)}
            columns={state.columns}
            resizable={true}
            onColumnResize={onColumnResize}
        />
    );
};

export default App;
