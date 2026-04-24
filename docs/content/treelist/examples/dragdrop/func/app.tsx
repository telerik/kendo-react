import * as React from 'react';
import {
    TreeList,
    TreeListDraggableRow,
    mapTree,
    moveTreeItem,
    extendDataItem,
    TreeListRowDragEvent,
    TreeListExpandChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';

import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '34%', expandable: true },
    { field: 'position', title: 'Position', width: '33%' }
];

interface AppState {
    data: Employee[];
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        expanded: [1, 3]
    });

    const onRowDrop = (event: TreeListRowDragEvent) => {
        setState({
            ...state,
            data: moveTreeItem(state.data, event.dragged, event.draggedOver, subItemsField)
        });
    };

    const onExpandChange = (event: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: event.value
                ? state.expanded.filter((id) => id !== event.dataItem.id)
                : [...state.expanded, event.dataItem.id]
        });
    };

    const addExpandField = (dataArr: Employee[]) => {
        const expanded = state.expanded;
        return mapTree(dataArr, subItemsField, (item: Employee) =>
            extendDataItem(item, subItemsField, { expanded: expanded.includes(item.id) })
        );
    };

    return (
        <TreeList
            style={{ maxHeight: '540px', overflow: 'auto', width: '100%' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={addExpandField(state.data)}
            columns={columns}
            onRowDrop={onRowDrop}
            row={TreeListDraggableRow}
        />
    );
};

export default App;
