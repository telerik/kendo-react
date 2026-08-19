---
title: Overview
description: 'Get started with the KendoReact Grid which supports the styling of columns, rows, and cells.'
components: ['grid']
slug: styling_grid
position: 10
---

# KendoReact Grid Styling Overview

The KendoReact Grid enables you to style its columns, rows, and cells.

<div data-component="StartKendoReactFreeSection"></div>

## Styling the KendoReact Grid Columns

To style the columns of the Grid, either:

-   [Add custom cells for columns](slug:cells_grid), or
-   [Add class names for `td` elements](#setting-class-names).

### Setting Class Names

The [`className`]({% slug api_grid_gridcolumnprops %}#toc-classname) property applies additional class to the `td` element and can be used for styling the background, text color, text alignment, and other styling options of the Grid.

```jsx-no-run
    <GridColumn field="ProductName" title="Product Name" className="product-name">
```

```css
product-name {
    color: 'white';
    background-color: '#888888';
}
```

## Styling the KendoReact Grid Rows

To style the rows of the Grid, use the [`rows`]({% slug api_grid_gridprops %}#toc-rows) function, which allows you to modify the appearance of the rows based on the provided values:

-   [Implement custom rows in KendoReact Grid](slug:custom-rows_grid)

## Styling the KendoReact Grid Individual Elements

You can individually style Grid elements using CSS.

> The Grid provides multiple elements that can be individually styled. Before you apply the styling options to the desired elements, inspect the element and use selectors of higher priority.

## Applying Conditional Styling

You can use the custom `cells.data` functionality of the Grid to change the appearance of the cells on condition and based on the provided value.

The following example demonstrates conditional cell styling using `cells.data`, where cell background colors change dynamically based on the field value.

{% meta height:220 %}
{% embed_file styling-dynamic/func/app.tsx preview %}
{% embed_file styling-dynamic/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Index of the Grid]({% slug api_grid %})
-   [Creating Custom Styles]({% slug themebuilder %})
-   [Custom Cells](https://www.telerik.com/kendo-react-ui/components/grid/cells/)
