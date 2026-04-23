---
title: moveTreeViewItem
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the moveTreeViewItem."
api_reference: true
type: inner_api
slug: api_treeview_movetreeviewitem
---

# moveTreeViewItem
A helper function which moves a TreeView item in an immutable way.




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


#### Parameters
##### sourceItemHierarchicalIndex
<code>


string


</code>
The hierarchical index of the item that will be moved.

##### sourceData
<code>


undefined | "null" | any[]


</code>
The tree which contains the item that will be moved.

##### operation
<code>


"child" | "after" | "before"


</code>
The specific move operation.

The available options are:
 * `before`&mdash;Indicates that the source item will become the previous sibling of the target item.
 * `after`&mdash;Indicates that the source item will become the next sibling of the target item.
 * `child`&mdash;Indicates that the source item will become a child of the target item.

##### targetItemHierarchicalIndex
<code>


string


</code>
The hierarchical index of the item next to which the source item will be moved.

##### targetData?
<code>


"null" | any[]


</code>
The tree which contains the target item.
If the argument is skipped, then the move operation will be executed within the same tree.
Setting the `sourceData` and `targetData` arguments to the same tree is also supported.

##### childrenField?
<code>


string


</code>
The field that points to the dataItem sub items. Defaults to `items`.

#### Returns
<code>


undefined | "null" | any[] | { sourceData: undefined | "null" | any[]; targetData: any[]; }


</code>
 - The updated copies of the `sourceData` and `targetData` input arguments.
If `targetData` is not passed, then only the updated copy of the `sourceData` will be returned.
