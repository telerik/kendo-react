import * as React from 'react';
import {
    TreeList,
    mapTreeItem,
    extendDataItem,
    TreeListExpandChangeEvent,
    TreeListPageChangeEvent
} from '@progress/kendo-react-treelist';
import { TreeListPager } from './pager';
import { generateData } from './treelist-data';

const numberOfColumns = 4;
const columnWidth = 200;
const numberOfRows = 5000;
const subItemsField = 'subItems';
const expandField = 'expanded';

const { columns, data } = generateData(numberOfColumns, columnWidth, numberOfRows, subItemsField);

interface TreeListState {
    data: any[];
    expanded: number[];
    skip: number;
    take: number;
}

const App = () => {
    const [state, setState] = React.useState<TreeListState>({
        data: [...data],
        expanded: [],
        skip: 0,
        take: 20
    });

    const onExpandChange = (event: TreeListExpandChangeEvent) => {
        const expanded = !event.value;
        const tree = [...state.data];
        mapTreeItem(tree, event.level, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: expanded
            })
        );
        setState({
            ...state,
            data: tree,
            expanded: event.value
                ? state.expanded.filter((id) => id !== event.dataItem.id)
                : [...state.expanded, event.dataItem.id]
        });
    };
    const treeListRef = React.useRef<TreeList>(null);
    const onPageChange = (event: TreeListPageChangeEvent) => {
        const skip = event.skip || 0;
        const take = event.take || 20;
        setState({
            ...state,
            skip,
            take
        });
        setTimeout(() => {
            if (treeListRef.current?.element) {
                treeListRef.current.element.scrollTop = 0;
            }
        });
    };
    return (
        <TreeList
            ref={treeListRef}
            style={{
                height: '430px',
                overflow: 'auto'
            }}
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
