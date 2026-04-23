---
title: TreeViewDragClue
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the TreeViewDragClue."
api_reference: true
type: inner_api
slug: api_treeview_treeviewdragclue
---

# TreeViewDragClue
Represents the KendoReact TreeViewDragClue component which renders a clue when an item is dragged.

```jsx
const App = () => {
    const dragClueRef = React.useRef(null);
    const [tree, setTree] = React.useState([{
        text: 'Furniture', expanded: true, items: [
            { text: 'Tables & Chairs', expanded: true },
            { text: 'Sofas', expanded: true },
            { text: 'Occasional Furniture', expanded: true }]
    }, {
        text: 'Decor', expanded: true, items: [
            { text: 'Bed Linen', expanded: true },
            { text: 'Curtains & Blinds', expanded: true },
            { text: 'Carpets', expanded: true }]
    }]);

    const SEPARATOR = '_';

    const getSiblings = (itemIndex, data) => {
        let result = data;
        const indices = itemIndex.split(SEPARATOR).map(index => Number(index));
        for (let i = 0; i < indices.length - 1; i++) {
            result = result[indices[i]].items;
        }
        return result;
    };

    const getClueClassName = (event) => {
        const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
        const itemIndex = eventAnalyzer.destinationMeta.itemHierarchicalIndex;

        if (eventAnalyzer.isDropAllowed) {
            switch (eventAnalyzer.getDropOperation()) {
                case 'child':
                    return 'k-i-plus';
                case 'before':
                    return itemIndex === '0' || itemIndex.endsWith(`${SEPARATOR}0`) ?
                        'k-i-insert-up' : 'k-i-insert-middle';
                case 'after':
                    const siblings = getSiblings(itemIndex, tree);
                    const lastIndex = Number(itemIndex.split(SEPARATOR).pop());

                    return lastIndex < siblings.length - 1 ? 'k-i-insert-middle' : 'k-i-insert-down';
                default:
                    break;
            }
        }

        return 'k-i-cancel';
    };

    const onItemDragOver = (event) => {
        dragClueRef.current.show(event.pageY + 10, event.pageX, event.item.text, getClueClassName(event));
    };

    const onItemDragEnd = (event) => {
        dragClueRef.current.hide();
        const eventAnalyzer = new TreeViewDragAnalyzer(event).init();

        if (eventAnalyzer.isDropAllowed) {
            const updatedTree = moveTreeViewItem(
                event.itemHierarchicalIndex,
                tree,
                eventAnalyzer.getDropOperation(),
                eventAnalyzer.destinationMeta.itemHierarchicalIndex,
            );

            setTree(updatedTree);
        }
    };

    return (
        <div>
            <TreeView data={tree} draggable={true}
                onItemDragOver={onItemDragOver} onItemDragEnd={onItemDragEnd} />
            <TreeViewDragClue ref={dragClueRef} />
        </div>
    );
}
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[TreeViewDragClueProps]({% slug api_treeview_treeviewdragclueprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the TreeViewDragClue component.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### hide


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Hides the TreeViewDragClue component.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### show


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Displays the TreeViewDragClue component.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


top


</td>
<td type>


<code>


number


</code>


</td>
<td>


The `top` CSS position of the component.


</td>
</tr>
<tr>
<td>


left


</td>
<td type>


<code>


number


</code>


</td>
<td>


The `left` CSS position of the component.


</td>
</tr>
<tr>
<td>


text


</td>
<td type>


<code>


string


</code>


</td>
<td>


The text of the component.


</td>
</tr>
<tr>
<td>


operationClassName


</td>
<td type>


<code>


string


</code>


</td>
<td>


The CSS class name which is related to the specific drop operation.


</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>



