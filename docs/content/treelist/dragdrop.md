---
title: Drag and Drop
description: 'Get started with the KendoReact TreeList and learn how to move the treelist rows using the Drag and Drop functionality.'
components: ["treelist"]
slug: dragdrop_treelist
position: 160
---

# Drag and Drop

The TreeList component allows you to move its data items in the data tree by Drag and Drop the TreeList rows.

## Getting Started

To enable drag and drop for TreeList rows:

1. Import `TreeListDraggableRow` and `moveTreeItem` from the TreeList package.

    ```tsx
    import { TreeList, TreeListDraggableRow, moveTreeItem, TreeListRowDragEvent } from '@progress/kendo-react-treelist';
    ```

1. Set the [`row`]({% slug api_treelist_treelistprops %}#toc-row) prop to `TreeListDraggableRow` — this replaces the default row component with one that supports drag handles.

    ```tsx
    <TreeList row={TreeListDraggableRow} ... />
    ```

1. Handle the [`onRowDrop`]({% slug api_treelist_treelistprops %}#toc-onrowdrop) event and use the [`moveTreeItem`]({% slug api_treelist_movetreeitem %}) utility to reposition the dragged item in the data tree.

    ```tsx
    const onRowDrop = (event: TreeListRowDragEvent) => {
        setData(moveTreeItem(data, event.dragged, event.draggedOver, subItemsField));
    };
    ```

The following example demonstrates how to use the Drag and Drop feature to reorder rows within the TreeList hierarchy.

{% meta height:600 %}
{% embed_file dragdrop/func/app.tsx preview %}
{% embed_file dragdrop/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
