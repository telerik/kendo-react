import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListRowProps,
    TreeListExpandChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';

import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';

const dateFormat: string = '{0:MMMM d, yyyy}';
const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '34%', expandable: true },
    { field: 'position', title: 'Position', width: '33%' },
    { field: 'hireDate', title: 'Hire Date', width: '33%', format: dateFormat }
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

    const processData = () => {
        const data = addExpandField(state.data);
        const result = mapTree(data, subItemsField, aggregateSubItems);

        return aggregateSubItems({ [subItemsField]: result })[subItemsField];
    };

    const aggregateSubItems = (item: Employee) => {
        const subItems = item[subItemsField];
        if (subItems && subItems.length) {
            const lastHireDate: Date = subItems.reduce(
                (acc, curr) => Math.max(acc, curr.hireDate, curr.lastHireDate || acc),
                new Date(0)
            );

            const date = new Date(lastHireDate);
            const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
            const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
            const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
            const hireDateString = `Last employee hired on ${month} ${day}, ${year}`;

            const employeesCount: number = subItems.reduce((acc, curr) => acc + (curr.employeesCount || 0) + 1, 0);
            const aggregateItem = {
                footer: true,
                name: `${employeesCount} employee(s)`,
                hireDate: hireDateString
            };
            return extendDataItem(item, subItemsField, {
                employeesCount,
                lastHireDate,
                [subItemsField]: [...subItems, aggregateItem]
            });
        }
        return item;
    };

    const rowRender = (row, props: TreeListRowProps) =>
        props.dataItem.footer ? <row.type {...row.props} className="k-group-footer" /> : row;

    const onExpandChange = (event: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: event.value
                ? state.expanded.filter((id) => id !== event.dataItem.id)
                : [...state.expanded, event.dataItem.id]
        });
    };

    const addExpandField = (dataArr: Employee[]) => {
        const expanded: number[] = state.expanded;
        return mapTree(dataArr, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                expanded: expanded.includes(item.id)
            })
        );
    };

    return (
        <TreeList
            style={{ maxHeight: '430px', overflow: 'auto', width: '100%' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={processData()}
            columns={columns}
            rowRender={rowRender}
        />
    );
};

export default App;
