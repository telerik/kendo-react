---
title: Reordering Rows
description: 'Get started with the KendoKendoReact Data Grid supporting row reordering either by using built-in browser APIs or third-party libraries.'
components: ["datagrid"]
slug: rowreordering_grid
position: 20
tag: updated
---

# Reordering Rows

The Data Grid comes with a built-in reordering [column type](slug:api_grid_gridcolumntype), allowing you to easily change the order of each row by dragging it to the target position.

## Getting Started

Implementing row reordering requires the following steps:

1. Enable the [`rowReorderable`](slug:api_grid_gridprops#rowReorderable) prop of the Grid.

```jsx
<Grid rowReorderable={{ enabled: true }}>
```

1. Add Grid column with **reorder** [`columnType`](slug:api_grid_gridrowprops) to render the built-in drag handles to every row.

```jsx
<Column columnType="reorder" width={60} />
```

1. Handle the [`onRowReorder`](sslug:api_grid_gridprops#onrowreorder) event of the Grid in order to update the data with the new row indexes. You can use the `dropPosition` available in the [`GridRowReorderEvent`](slug:api_grid_gridrowreorderevent#dropPosition) object to calculate the target position of the dragged row.

```jsx
 <Grid onRowReorder={handleRowReorder}>
```

```JavaScript
const handleRowReorder = (event: GridRowReorderEvent) => {
    const reorderedData = [...data];
    const droppedItemIndex = data.findIndex((item) => item === event.droppedDataItem);

    event.draggedDataItems.forEach((draggedItem) => {
        const draggedItemIndex = data.findIndex((item) => item === draggedItem);
        const idxToAdd: number = calculateIndexToAdd(draggedItemIndex, droppedItemIndex, event.dropPosition)!;

        reorderedData.splice(draggedItemIndex, 1);
        reorderedData.splice(idxToAdd, 0, event.draggedDataItems[0]);
    });

    setData(reorderedData);
};

const calculateIndexToAdd = (dragIndex: number, dropIndex: number, dropPosition: GridReorderDropPosition) => {
    const isDropPosition = dropPosition === 'after';

    if (dragIndex > dropIndex) {
        return isDropPosition ? dropIndex + 1 : dropIndex;
    }

    return isDropPosition ? dropIndex : dropIndex - 1;
};
```

The following example demonstrates this approach in action:

{% meta height:480 %}
{% embed_file row-reordering/custom/func/app.tsx preview %}
{% embed_file row-reordering/custom/func/main.tsx %}
{% endmeta %}

## Built-in Browser APIs

The following example demonstrates an approach that utilizes the [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

{% meta height:480 %}
{% embed_file row-reordering/native/func/app.tsx preview %}
{% embed_file row-reordering/native/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Multi-row Reordering](slug:multi_row_selection_grid#multi-row-reordering)
-   [Detail Rows Reordering](slug:detailrow_grid#detail-rows-reordering)
-   [API of the HTML Drag and Drop Functionality](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
