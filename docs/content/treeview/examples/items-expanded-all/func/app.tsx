import * as React from 'react'

import { TreeView, TreeViewExpandChangeEvent } from '@progress/kendo-react-treeview';
import { Button } from '@progress/kendo-react-buttons';

const tree = [
    { text: 'Item1', items: [{ text: 'Item1.1' }, { text: 'Item1.2' }] },
    { text: 'Item2', items: [{ text: 'Item2.1' }, { text: 'Item2.2' }] },
    { text: 'Item3', items: [{ text: 'Item3.1' }, { text: 'Item3.2' }] },
    { text: 'Item4', items: [{ text: 'Item4.1' }, { text: 'Item4.2' }] },
    { text: 'Item5', items: [{ text: 'Item5.1' }, { text: 'Item5.2' }] },
    { text: 'Item6', items: [{ text: 'Item6.1' }, { text: 'Item6.2' }] }
];

const App = () => {

    const [data, setData] = React.useState(tree)

    const expandAll = () => {
        setData(
            data.map(item => Object.assign({}, item, { expanded: true }))
        );
    }
    const collapseAll = () => {
        setData(
            data.map(item => Object.assign({}, item, { expanded: false }))
        );
    }
    const onExpandChange = (event: TreeViewExpandChangeEvent) => {
        const updatedData: any = data.slice();

        const itemIndex: number = updatedData.indexOf(event.item);
        updatedData[itemIndex] = { ...event.item };
        updatedData[itemIndex].expanded = !updatedData[itemIndex].expanded;

        setData(updatedData);
    }

    return (
    <div>
      <div className='example-config'>
        <Button type="button" onClick={expandAll}>Expand all</Button>
        <Button type="button" onClick={collapseAll}>Collapse all</Button>
      </div>
      <TreeView data={data} expandIcons={true} onExpandChange={onExpandChange} />
    </div>
    );
}

export default App;
