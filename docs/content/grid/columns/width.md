---
title: Column Widths
description: 'Get started with the KendoKendoReact Data Grid and set up the widths of its columns.'
components: ["datagrid"]
slug: width_grid
position: 10
subject: Data Grid
tier: free
---

# Column Widths

The KendoKendoReact Data Grid is responsive and has no fixed width&mdash;it behaves like a block-level element, expanding to occupy 100% of its parent element's width.

As a result, the Grid will be resized based on the available space.

## Getting Started

By default, the Grid divides its width equally among its columns, expanding or shrinking them responsively when the width of its parent container changes.

Depending on the requirements of your scenario, you can set the widths of the Grid columns by using either of the following specifics in the Grid:

-   If all columns have set widths and the sum of these set widths is larger than the width of the Grid, the Grid will display a scrollbar at the bottom of the table. If the sum of all column widths is less than the width of the Grid, the Grid will render a white space for the remaining space after the last column.
-   If you leave a column that has no fixed width after the columns that have set widths, that column will shrink or expand when the Grid is resized to fill in the remaining space. If the Grid is resized so that it becomes smaller than the sum of all other column widths, the width of the buffer column will become zero and will visually disappear.

## Setting a Minimum Column Width

You can dynamically change the width of the Grid columns and set a minimum width value by subscribing to the [`window.resize` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event). When the width of the Grid is smaller than the combined minimum width of all columns, a horizontal scrollbar will appear. If the width of the Grid is larger than the combined minimum width of the Grid columns, the columns will proportionally expand to fill the remaining space.

> The `resize` event is not debounced to show the main logic. Debouncing can be done depending on the application requirements.

{% meta height:480 %}
{% embed_file column-min-width/func/app.tsx preview %}
{% embed_file column-min-width/func/main.tsx %}
{% endmeta %}

## Setting Column Widths in Percentage

### Grid With Fixed Width

You can set the Grid column widths in percentage by using a function that programmatically calculates the real width based on the passed percentage value.

{% meta height:480 %}
{% embed_file column-width-percentage/func/app.tsx preview %}
{% embed_file column-width-percentage/func/main.tsx %}
{% endmeta %}

### Grid With No Fixed Width

When the Grid has no fixed width and resizes based on available space, you can set column widths in percentage using CSS.

```css
.k-grid-header col:nth-of-type(1) {
    width: 20%;
}
.k-grid-table col:nth-of-type(1) {
    width: 20%;
}
```

You can make these styles specific to one or more Grids by adding a [className]({% slug api_grid_gridprops %}#toc-className).

{% meta height:460 %}
{% embed_file column-width-percentage-100/func/app.tsx preview %}
{% embed_file column-width-percentage-100/func/main.tsx %}
{% endmeta %}

## Fitting Grids on Smaller Screens

To accommodate the Grid on smaller screens, you can programmatically hide columns based on the width of the Grid. To achieve this scenario, subscribe to the `resize` event of the Window and hide a column under a specific width of the Grid.

{% meta height:460 %}
{% embed_file grid-min-width/func/app.tsx preview %}
{% embed_file grid-min-width/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
