import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListColumnProps,
    TreeListExpandChangeEvent
} from '@progress/kendo-react-treelist';
import { Employee, employees } from './data';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    {
        field: 'name',
        title: 'Name',
        width: '250px',
        expandable: true
    }
];

interface AppState {
    data: Employee[];
    expanded: number[];
}

export const TreeListApp = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        expanded: [1, 2, 7, 8, 10, 15, 32]
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        if (e.syntheticEvent.type === 'click') {
            // Disables built-in enter key for this demo
            setState({
                ...state,
                expanded: e.value
                    ? state.expanded.filter((id) => id !== e.dataItem.id)
                    : [...state.expanded, e.dataItem.id]
            });
        }
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
        <React.Fragment>
            <TreeList
                style={{ maxHeight: '510px', width: '300px', overflow: 'auto' }}
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={onExpandChange}
                data={addExpandField(state.data)}
                columns={columns}
                navigatable={false}
            />
            <style>{'.k-table-thead { display: none; }'}</style>
        </React.Fragment>
    );
};
