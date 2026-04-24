---
title: Dragging and Dropping
description: 'Use the drag-and-drop functionality of the KendoReact TreeView in React projects.'
components: ["treeview"]
slug: dragdrop_treeview
position: 70
---

# Dragging and Dropping

The drag-and-drop functionality enables the user to move the TreeView items by dragging and dropping them within a single tree or across multiple trees.

## Basics

To implement dragging and dropping in the TreeView:

1. Set the [`draggable`]({% slug api_treeview_treeviewprops %}#toc-draggable) property to `true`.
1. Handle the dispatched `drag` events.

To facilitate the event handling, the TreeView provides the following utilities:

-   [The `moveTreeViewItem` function]({% slug api_treeview_movetreeviewitem %})&mdash;A helper function which moves a TreeView item in an immutable way.
-   [The `TreeViewDragAnalyzer` class]({% slug api_treeview_treeviewdraganalyzer %})&mdash;An API for analyzing the `drag` events of the TreeView.
-   [The `TreeViewDragClue` component]({% slug api_treeview_treeviewdragclue %})&mdash;A component which renders a clue when an item is dragged.

## Moving Items within a Single Tree

The following example demonstrates how to:

-   Implement the drag-and-drop functionality within a single TreeView by using all drag-and-drop utilities.
-   Update the `expanded` and `selected` item fields by using the [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %}) function.

{% meta height:320 %}
{% embed_file drag/func/app.tsx preview %}
{% embed_file drag/func/main.tsx %}
{% endmeta %}

## Moving Items across Multiple Trees

The following example demonstrates how to:

-   Implement the drag-and-drop functionality across two TreeViews by using all drag-and-drop utilities.
-   Directly update the `expanded` and `selected` item fields.

```jsx
import * as React from 'react';
import { TreeView, TreeViewDragClue, TreeViewDragAnalyzer, moveTreeViewItem } from '@progress/kendo-react-treeview';

const SEPARATOR = '_';
const tree = [
    {
        text: 'Furniture',
        expanded: true,
        items: [{ text: 'Tables & Chairs' }, { text: 'Sofas' }, { text: 'Occasional Furniture' }]
    },
    {
        text: 'Decor',
        expanded: true,
        items: [{ text: 'Bed Linen' }, { text: 'Curtains & Blinds' }, { text: 'Carpets' }]
    }
];

const tree2 = [
    {
        text: 'Storage',
        expanded: true,
        items: [{ text: 'Wall Shelving' }, { text: 'Floor Shelving' }, { text: 'Kids Storage' }]
    },
    {
        text: 'Lights',
        expanded: true,
        items: [{ text: 'Ceiling' }, { text: 'Table' }, { text: 'Floor' }]
    }
];

const App = () => {
    const [treeData, setTreeData] = React.useState(tree);
    const [treeData2, setTreeData2] = React.useState(tree2);

    const treeView1Ref = React.useRef(null);
    const treeView2Ref = React.useRef(null);
    const dragClueRef = React.useRef(null);
    const dragOverCntRef = React.useRef(0);
    const isDragDropRef = React.useRef(false);

    const getClueClassName = (event) => {
        const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
        const { itemHierarchicalIndex: itemIndex, treeViewGuid } = eventAnalyzer.destinationMeta;

        if (eventAnalyzer.isDropAllowed) {
            switch (eventAnalyzer.getDropOperation()) {
                case 'child':
                    return 'k-i-plus';
                case 'before':
                    return itemIndex === '0' || itemIndex.endsWith(`${SEPARATOR}0`)
                        ? 'k-i-insert-up'
                        : 'k-i-insert-middle';
                case 'after':
                    const siblings = getSiblings(itemIndex, resolveData(treeViewGuid));
                    const lastIndex = Number(itemIndex.split(SEPARATOR).pop());

                    return lastIndex < siblings.length - 1 ? 'k-i-insert-middle' : 'k-i-insert-down';
                default:
                    break;
            }
        }

        return 'k-i-cancel';
    };

    const resolveData = (treeViewGuid) => {
        return treeViewGuid === treeView1Ref.current.guid ? treeData : treeData2;
    };

    const resolveDataKey = (treeViewGuid) => {
        return treeViewGuid === treeView1Ref.current.guid ? 'tree' : 'tree2';
    };

    const onItemDragOver = (event) => {
        dragOverCntRef.current++;
        dragClueRef.current.show(event.pageY + 10, event.pageX, event.item.text, getClueClassName(event));
    };

    const onItemDragEnd = (event) => {
        isDragDropRef.current = dragOverCntRef.current > 0;
        dragOverCntRef.current = 0;
        dragClueRef.current.hide();

        const eventAnalyzer = new TreeViewDragAnalyzer(event).init();

        if (eventAnalyzer.isDropAllowed) {
            const { sourceData, targetData } = moveTreeViewItem(
                event.itemHierarchicalIndex,
                resolveData(event.target.guid),
                eventAnalyzer.getDropOperation(),
                eventAnalyzer.destinationMeta.itemHierarchicalIndex,
                resolveData(eventAnalyzer.destinationMeta.treeViewGuid)
            );

            if (resolveDataKey(event.target.guid) === 'tree') {
                setTreeData(sourceData);
            } else {
                setTreeData2(sourceData);
            }

            if (resolveDataKey(eventAnalyzer.destinationMeta.treeViewGuid) === 'tree') {
                setTreeData(targetData);
            } else {
                setTreeData2(targetData);
            }
        }
    };

    const onItemClick = (event) => {
        if (!isDragDropRef.current) {
            const newItem = { ...event.item, selected: !event.item.selected };

            if (event.target.guid === treeView1Ref.current.guid) {
                const updatedTree = updateItemInTree(treeData, event.itemIndex, newItem);
                setTreeData(updatedTree);
            } else {
                const updatedTree = updateItemInTree(treeData2, event.itemIndex, newItem);
                setTreeData2(updatedTree);
            }
        }
    };

    const onExpandChange = (event) => {
        const newItem = { ...event.item, expanded: !event.item.expanded };

        if (event.target.guid === treeView1Ref.current.guid) {
            const updatedTree = updateItemInTree(treeData, event.itemIndex, newItem);
            setTreeData(updatedTree);
        } else {
            const updatedTree = updateItemInTree(treeData2, event.itemIndex, newItem);
            setTreeData2(updatedTree);
        }
    };

    return (
        <div>
            <TreeView
                data={treeData}
                draggable={true}
                onItemDragOver={onItemDragOver}
                onItemDragEnd={onItemDragEnd}
                ref={treeView1Ref}
                expandIcons={true}
                onExpandChange={onExpandChange}
                onItemClick={onItemClick}
            />
            <TreeView
                data={treeData2}
                draggable={true}
                onItemDragOver={onItemDragOver}
                onItemDragEnd={onItemDragEnd}
                ref={treeView2Ref}
                expandIcons={true}
                onExpandChange={onExpandChange}
                onItemClick={onItemClick}
            />
            <TreeViewDragClue ref={dragClueRef} />
        </div>
    );
};

function getSiblings(itemIndex, data) {
    let result = data;

    const indices = itemIndex.split(SEPARATOR).map((index) => Number(index));
    for (let i = 0; i < indices.length - 1; i++) {
        result = result[indices[i]].items;
    }

    return result;
}

function updateItemInTree(tree, itemIndex, newItem) {
    const indices = itemIndex.split('_').map(Number);
    const result = [...tree];
    let current = result;
    let parent = null;
    let lastIndex = 0;

    // Navigate to the correct level
    for (let i = 0; i < indices.length; i++) {
        const index = indices[i];
        if (i === indices.length - 1) {
            // Replace the item
            parent = current;
            lastIndex = index;
        } else {
            // Navigate deeper
            parent = current;
            current = current[index].items;
            if (!current) break;
        }
    }

    if (parent && parent[lastIndex]) {
        parent[lastIndex] = { ...parent[lastIndex], ...newItem };
    }

    return result;
}

export default App;
```

## Suggested Links

-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [`moveTreeViewItem`]({% slug api_treeview_movetreeviewitem %})
-   [`TreeViewDragAnalyzer`]({% slug api_treeview_treeviewdraganalyzer %})
-   [`TreeViewDragClue`]({% slug api_treeview_treeviewdragclue %})
-   [`TreeViewDragClueProps`]({% slug api_treeview_treeviewdragclueprops %})
-   [`onItemDragOver`]({% slug api_treeview_treeviewitemdragoverevent %})
-   [`onItemDragEnd`]({% slug api_treeview_treeviewitemdragendevent %})
-   [`processTreeViewItems`]({% slug api_treeview_processtreeviewitems %})
-   [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
