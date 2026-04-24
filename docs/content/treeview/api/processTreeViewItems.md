---
title: processTreeViewItems
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the processTreeViewItems."
api_reference: true
type: inner_api
slug: api_treeview_processtreeviewitems
---

# processTreeViewItems
A helper function which applies the specified operation descriptors to the data.
* [Expanding and collapsing items](https://www.telerik.com/kendo-react-ui/components/treeview/expansion/update-expanded-items#toc-using-a-helper-function)
* [Selecting and deselecting items](https://www.telerik.com/kendo-react-ui/components/treeview/selection/update-selected-items#toc-using-a-helper-function)
* [Checking and unchecking items](https://www.telerik.com/kendo-react-ui/components/treeview/checkboxes/helper-functions)




```jsx
const App = () => {
    const [items] = React.useState(tree);
    const [expand, setExpand] = React.useState([]);
    const [select, setSelect] = React.useState([]);
    const [check, setCheck] = React.useState([]);

    const onExpandChange = (event) => {
        let newExpand = expand.slice();
        const index = newExpand.indexOf(event.itemHierarchicalIndex);
        index === -1 ? newExpand.push(event.itemHierarchicalIndex) : newExpand.splice(index, 1);
        setExpand(newExpand);
    }

    return (
        <TreeView
            data={processTreeViewItems(items, { expand, select, check })}
            expandIcons={true} onExpandChange={onExpandChange} checkboxes={true}
            onCheckChange={event => setCheck([ event.itemHierarchicalIndex ])}
            onItemClick={event => setSelect([ event.itemHierarchicalIndex ])}
        />
    );
}

const tree = [{
    text: 'Item1',
    items: [
        { text: 'Item1.1' },
        { text: 'Item1.2' },
        { text: 'Item1.3', items: [{ text: 'Item1.3.1' }] }]
}, {
    text: 'Item2', disabled: true,
    items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }]
}, {
    text: 'Item3'
}];
```


#### Parameters
##### data
<code>


undefined | "null" | any[]


</code>
The data that will be processed.

##### operations
<code>


[TreeViewOperationDescriptors]({% slug api_treeview_treeviewoperationdescriptors %})


</code>
The operation descriptors that will be applied to the data.

#### Returns
<code>


any[]


</code>
 - The processed copy of the input data.
