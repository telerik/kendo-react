---
title: Responsive Design
description: 'Find out how the responsive web design of the KendoKendoReact Data Grid allows your apps to adapt their layout to the available screen size.'
components: ["datagrid"]
slug: responsive_grid
position: 30
---

# KendoReact Data Grid Responsive Design

The Grid offers responsive web design and adapts its layout based on the available screen size.

The responsive features of the KendoKendoReact Data Grid are:

-   Responsive columns&mdash;Based on the viewport width, the visibility of the Grid columns toggles.
-   Responsive height&mdash;Based on the height setting (for example, `"100%"`), the Grid adjusts its size depending on the height of its container.

{% meta height:510 %}
{% embed_file responsive-design/basic/app.tsx preview %}
{% embed_file responsive-design/basic/main.tsx %}
{% endmeta %}

## Columns

To control the visibility of the columns, use their [`media`]({% slug api_grid_gridcolumnprops %}#toc-media) property. The property accepts valid strings for the [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) browser API and toggles the visibility of the columns based on the media queries. If you set the [`hidden`]({% slug api_grid_gridcolumnprops %}#toc-hidden) property, the behavior of `media` is overridden.

| `media` configuration                            | The columns are visible when                                                          |
| ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `"(min-width: 500px)"`                           | The viewport width is `500px` or more.                                                |
| `"(max-width: 300px)"`                           | The viewport width is `300px` or less.                                                |
| `"(min-width: 500px) and (max-width: 1200px)"`   | The viewport width is between `500px` and `1,200px`.                                  |
| `"(max-width: 320px), (orientation: landscape)"` | The viewport width is more than `320px` and the device is in a landscape orientation. |

{% meta height:370 %}
{% embed_file responsive-design/multicolumn-grid/app.tsx preview %}
{% embed_file responsive-design/multicolumn-grid/main.tsx %}
{% endmeta %}

### Bootstrap 4 Compatibility

The [`media`]({% slug api_grid_gridcolumnprops %}#toc-media) property accepts the device identifiers which are [available in Bootstrap 4](https://v4-alpha.getbootstrap.com/layout/grid/#grid-options) and which range from extra small (`xs`) to extra large (`xl`).

| `media` configuration | Equivalent to           |
| --------------------- | ----------------------- |
| `"xs"`                | `"(max-width: 576px)"`  |
| `"sm"`                | `"(min-width: 576px)"`  |
| `"md"`                | `"(min-width: 768px)"`  |
| `"lg"`                | `"(min-width: 992px)"`  |
| `"xl"`                | `"(min-width: 1200px)"` |

Using the Bootstrap 4 identifiers is a less flexible approach than declaring the responsive breakpoints. However, the identifiers enable the Grid to match the Bootstrap grid system of the surrounding template.

```jsx
<div class="col-xs-12 col-md-6">
<Grid
    style={{
    height: '400px',
    }}
    data={products}
>
    <GridColumn field="UnitPrice" title="Price" media={'xs'} />
    <GridColumn field="UnitsInStock" title="In stock" media={'md'} />
</Grid>
</div>
<div class="col-xs-12 col-md-6">{/* Second column */}</div>
```

## Height

You can control the height of the Grid through the `height` CSS property. If the height is set in percentage units, the Grid adjusts its layout accordingly just like a regular HTML element. In CSS, setting the `height` of an element to percentage units requires that its parent element has its `height` defined. Because this rule is applied recursively, to make the Grid fill 100% of the browser window, all elements up to the document root `<html>` element must have a height of 100%.

{% meta height:460 %}
{% embed_file responsive-design/height/app.tsx preview %}
{% embed_file responsive-design/height/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Using Responsive Columns with Virtualization]({% slug virtualscrolling_grid %}#toc-virtualization-with-responsive-columns)
-   [API Reference of the GridColumn]({% slug api_grid_gridcolumnprops %})
