---
title: Pinning Rows
description: 'Pin rows to the top or bottom of the KendoReact Data Grid so they remain visible while scrolling.'
components: ['datagrid']
slug: pinning_rows_grid
position: 35
tier: premium
tag: new
---

# Pinning Rows

The Data Grid provides built-in row pinning that lets you lock rows at the top or bottom of the scrollable area. Pinned rows stay visible while the user scrolls through the body data and are immune to filtering and pagination.

<CtaPanelOverview></CtaPanelOverview>

## Getting Started

To enable row pinning, set the [`pinnable`](slug:api_grid_gridprops#pinnable) prop to `true`. The Grid will manage the pinning state internally.

```jsx
<Grid pinnable={true}>
```

To allow users to pin rows, provide at least one of the following UI entry points:

-   A Grid column with the **pin** [`columnType`](slug:api_grid_gridcolumntype), which renders a built-in pin dropdown for every row.

    ```jsx
    <Column columnType="pin" />
    ```

-   The built-in [`contextMenu`](slug:api_grid_gridprops#contextMenu), which exposes **Pin to Top**, **Pin to Bottom**, and **Unpin** actions when right-clicking a row.

    ```jsx
    <Grid pinnable={true} contextMenu={true}>
    ```

You can use either option or both together.

To pre-populate rows that are pinned on initial render, use [`defaultPinnedTopRows`](slug:api_grid_gridprops#defaultPinnedTopRows) and [`defaultPinnedBottomRows`](slug:api_grid_gridprops#defaultPinnedBottomRows).

```jsx
<Grid
    pinnable={true}
    defaultPinnedTopRows={[products[0], products[1]]}
    defaultPinnedBottomRows={[products[products.length - 1]]}
>
    <Column columnType="pin" />
    ...
</Grid>
```

The following example demonstrates row pinning in action. Click the pin icon in any row to open the dropdown and choose where to pin the row.

{% meta height:480 %}
{% embed_file row-pinning/basic/func/app.tsx preview %}
{% embed_file row-pinning/basic/func/main.tsx %}
{% endmeta %}

## Controlled Mode

When you need full control over which rows are pinned, provide the [`pinnedTopRows`](slug:api_grid_gridprops#pinnedTopRows) and/or [`pinnedBottomRows`](slug:api_grid_gridprops#pinnedBottomRows) arrays and handle the [`onRowPinChange`](slug:api_grid_gridprops#onRowPinChange) event to update them. The [`GridRowPinChangeEvent`](slug:api_grid_gridrowpinchangeevent) provides the updated arrays and the affected data item.

{% meta height:480 %}
{% embed_file row-pinning/controlled/func/app.tsx preview %}
{% embed_file row-pinning/controlled/func/main.tsx %}
{% endmeta %}

## Custom Pinned Row Rendering

You can customize how pinned rows are rendered using the [`rows.pinnedData`](slug:api_grid_gridprops#rows) setting or the [`cells.pin`](slug:api_grid_gridprops#cells) setting for the pin column cells.

```jsx
<Grid
    pinnable={true}
    rows={{ pinnedData: CustomPinnedRow }}
    cells={{ pin: { data: CustomPinCell } }}
>
```

## Suggested Links

-   [Locking Rows (CSS-based)](slug:locked_rows_grid)
-   [API Reference of the Grid](slug:api_grid_gridprops)
-   [API Index of the Grid](slug:api_grid)
