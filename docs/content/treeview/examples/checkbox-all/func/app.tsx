import * as React from 'react';
import { TreeView, TreeViewCheckChangeEvent } from '@progress/kendo-react-treeview';
import { Button } from '@progress/kendo-react-buttons';

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
    const [data, setData] = React.useState(tree);

    const checkAll = () => {
        let newData = data.map((item: any) => {
            item.checked = true;
            item.items = item.items.map((child: any) => {
                child.checked = true;
                return child;
            });
            return item;
        });
        setData(newData);
    };

    const uncheckAll = () => {
        let newData = data.map((item: any) => {
            item.checked = false;
            item.items = item.items.map((child: any) => {
                child.checked = false;
                return child;
            });
            return item;
        });
        setData(newData);
    };

    const onCheckChange = (event: TreeViewCheckChangeEvent) => {
        event.item.checked = !event.item.checked;
        setData([...data]);
    };

    return (<div>
    <div className='example-config'>
      <Button type="button" onClick={checkAll}>Check all</Button>
      <Button type="button" onClick={uncheckAll}>Uncheck all</Button>
    </div>
    <TreeView data={tree} checkboxes={true} onCheckChange={onCheckChange} />
  </div>);
};

export default App;
