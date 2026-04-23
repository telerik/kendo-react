import * as React from 'react'
import { Button } from '@progress/kendo-react-buttons';

import { TreeView, processTreeViewItems, TreeViewItemClickEvent } from '@progress/kendo-react-treeview';

const initialSelect: string[] = [];

interface TreeViewDataItem {
    text: string,
    expanded?: boolean,
    checked?: boolean,
    selected?: boolean,
    items?: TreeViewDataItem[]
}

const tree: TreeViewDataItem[] = [
    { text: 'Item1', expanded: true, items: [{ text: 'Item1.1' }, { text: 'Item1.2' }] },
    { text: 'Item2', expanded: true, items: [{ text: 'Item2.1' }, { text: 'Item2.2' }] },
    { text: 'Item3', expanded: true, items: [{ text: 'Item3.1' }, { text: 'Item3.2' }] }
];


const App = () => {

    const [state, setState] = React.useState({ data: tree, select: initialSelect })

    const selectAll = () => {
    // Provide the hierarchical indices of all items.
        setState({ ...state, select: ['0', '0_0', '0_1', '1', '1_0', '1_1', '2', '2_0', '2_1'] });
    }
    const unselectAll = () => {
        setState({ ...state, select: [] });
    }
    const onItemClick = (event: TreeViewItemClickEvent) => {
        let select: any = state.select.slice();
        const index = select.indexOf(event.itemHierarchicalIndex);
        index === -1 ? select.push(event.itemHierarchicalIndex) : select.splice(index, 1);
        setState({ ...state, select: select });
    }

    return (
    <div>
      <div className='example-config'>
        <Button type="button" onClick={selectAll}>Select all</Button>
        <Button type="button" onClick={unselectAll}>Unselect all</Button>
      </div>
      <TreeView
        aria-multiselectable={true}
        data={processTreeViewItems(state.data, { select: state.select })}
        onItemClick={onItemClick}
      />
    </div>
    );
}

export default App;
