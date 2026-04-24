import * as React from 'react'

import { TreeView, TreeViewItemClickEvent } from '@progress/kendo-react-treeview';

const tree = [{
    text: 'Furniture', expanded: true, items: [
        { text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
}, {
    text: 'Decor', expanded: true, items: [
        { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
}];

const App = () => {
    let selectedItem: any = undefined;

    const onItemClick = (event: TreeViewItemClickEvent) => {
        if (selectedItem) {
            selectedItem.selected = false;
        }
        event.item.selected = true;
        selectedItem = event.item;
    }

    return <TreeView data={tree} onItemClick={onItemClick} />;
}

export default App;
