import * as React from 'react'

import { TreeView } from '@progress/kendo-react-treeview';

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
    text: 'Decor', expanded: true, items: [
        { text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
}];

const App = () => {
    const [data, setData] = React.useState<Array<any>>(tree);

    React.useEffect(()=>{
        setInterval(() => setData(tree), 2000);
    },[])

    return <TreeView data={data} />;
}

export default App;
