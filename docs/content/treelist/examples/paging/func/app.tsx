import * as React from 'react';
import {
    TreeList,
    mapTreeItem,
    extendDataItem,
    TreeListExpandChangeEvent,
    TreeListPageChangeEvent
} from '@progress/kendo-react-treelist';
import { TreeListPager } from './shared-tl-pager';
import { generateData } from './shared-tl-treelist-data';
import { Employee } from './shared-tl-interfaces';

const numberOfColumns: number = 4;
const columnWidth: number = 200;
const numberOfRows: number = 5000;
const subItemsField: string = 'subItems';
const expandField: string = 'expanded';

const { columns, data } = generateData(numberOfColumns, columnWidth, numberOfRows, subItemsField);

interface AppState {
    data: Employee[];
    expanded: number[];
    skip: number;
    take: number;
}
const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...data],
        expanded: [],
        skip: 0,
        take: 8
    });

    const onExpandChange = (event: TreeListExpandChangeEvent) => {
        const expanded: boolean = !event.value;
        const tree: Employee[] = [...state.data];

        mapTreeItem(tree, event.level, subItemsField, (item) =>
            extendDataItem(item, subItemsField, { [expandField]: expanded })
        );

        setState({
            ...state,
            data: tree,
            expanded: event.value
                ? state.expanded.filter((id) => id !== event.dataItem.id)
                : [...state.expanded, event.dataItem.id]
        });
    };

    const onPageChange = (event: TreeListPageChangeEvent) => {
        const { skip, take } = event;
        setState({
            ...state,
            skip,
            take
        });
    };

    return (
        <TreeList
            pager={TreeListPager}
            onPageChange={onPageChange}
            skip={state.skip}
            take={state.take}
            data={state.data}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            columns={columns}
        />
    );
};

export default App;
