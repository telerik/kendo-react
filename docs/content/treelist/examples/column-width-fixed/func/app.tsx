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

const expandField: string = 'expanded';
const subItemsField: string = 'employees';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', expandable: true, width: '300px' },
    { field: 'position', title: 'Position', width: '300px' },
    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '200px' }
];

interface AppState {
    data: Employee[];
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        expanded: [1, 2, 32]
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const { data, expanded } = state;
    const callback = (item: Employee) =>
        expanded.includes(item.id) ? extendDataItem(item, subItemsField, { [expandField]: true }) : item;

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto', width: '820px' }}
            tableProps={{ style: { width: '800px' } }}
            data={mapTree(data, subItemsField, callback)}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            columns={columns}
        />
    );
};

export default App;
