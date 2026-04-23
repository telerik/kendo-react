---
title: TreeViewDragAnalyzer
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the TreeViewDragAnalyzer."
api_reference: true
type: inner_api
slug: api_treeview_treeviewdraganalyzer
---

# TreeViewDragAnalyzer
A class which provides an API for analyzing the `drag` events
of the TreeView.

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


#### destinationMeta


</td>
<td type class="table-cell-type">


<code>


{ itemHierarchicalIndex: string; treeViewGuid: string; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns an object which contains:
* The `itemHierarchicalIndex` of the destination item (the item below the dragged item) and
* The `guid` of the destination TreeView (the TreeView which renders the destination item).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isDropAllowed


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns `true` if dropping is allowed. Otherwise, returns `false`.


</td>
</tr>
</tbody>
</table>



## Constructors

### TreeViewDragAnalyzer
<code>


(event: [TreeViewItemDragOverEvent]({% slug api_treeview_treeviewitemdragoverevent %}) | [TreeViewItemDragEndEvent]({% slug api_treeview_treeviewitemdragendevent %}))


</code>


#### Parameters
##### event
<code>


[TreeViewItemDragOverEvent]({% slug api_treeview_treeviewitemdragoverevent %}) | [TreeViewItemDragEndEvent]({% slug api_treeview_treeviewitemdragendevent %})


</code>
The event that will be analyzed.



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### getDropOperation


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the specific drop operation.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


undefined | "child" | "after" | "before"


</code>


</td>
<td>


- The following values are returned:
* `before`&mdash;Indicates that the dragged item is positioned at the beginning of the destination item.
* `after`&mdash;Indicates that the dragged item is positioned at the end of the destination item.
* `child`&mdash;Indicates that the dragged item is positioned in the middle of the destination item.
* `undefined`&mdash;Indicates that dropping is not allowed.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### init


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


The method which initializes the analyzer.
Invoke the method before you call any other methods.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[TreeViewDragAnalyzer]({% slug api_treeview_treeviewdraganalyzer %})


</code>


</td>
<td>


- The analyzer object of the `drag` event.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



