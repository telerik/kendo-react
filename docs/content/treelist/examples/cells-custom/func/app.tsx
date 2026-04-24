import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListExpandChangeEvent,
    TreeListCellProps,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';

const MyCell = (props: TreeListCellProps) => {
    const { dataItem } = props;
    const field = props.field || '';
    const cellData = dataItem[field];
    return (
        <td>
            <span style={{ color: cellData ? 'green' : 'red' }}>{String(cellData)}</span>
        </td>
    );
};

const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', expandable: true, width: '40%' },
    { field: 'position', title: 'Position', width: '40%' },
    { field: 'fullTime', title: 'Full Time', width: '20%', cell: MyCell }
];
interface AppState {
    data: Employee[];
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        expanded: []
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };
    const updateFields = (dataArr: Employee[]) => {
        const { expanded } = state;
        return mapTree(dataArr, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                expanded: expanded.includes(item.id)
            })
        );
    };

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            data={updateFields(state.data)}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            columns={columns}
        />
    );
};

export default App;
