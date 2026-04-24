import * as React from 'react'

import { TreeView, TreeViewExpandChangeEvent} from '@progress/kendo-react-treeview';

interface TreeViewDataItem {
    text: string,
    expanded?: boolean,
    checked?: boolean,
    selected?: boolean,
    items?: TreeViewDataItem[]
}

const tree: TreeViewDataItem[] = [{
    text: 'Furniture', expanded: true, items: [
        { text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
}, {
    text: 'Decor', items: [
        { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
}];

const App = () => {
    const [data, setData] = React.useState(tree);
    const onExpandChange = (event: TreeViewExpandChangeEvent) => {
        event.item.expanded = !event.item.expanded;
        setData([...data]);
    }
     
    return <TreeView data={data} expandIcons={true} onExpandChange={onExpandChange} />;
}

export default App;
