---
title: Appearance
description: 'Add styling options to the KendoReact Chart in React projects.'
components: ["chart"]
slug: appearance_chart_charts
position: 10
tag: updated
---

# Appearance

The colors of the Chart are derived from the active [KendoReact theme](https://github.com/telerik/kendo-themes). For customization of the themes, refer to the [customizing themes]({% slug themesandstyles %}#toc-customizing-themes) article.

## Setting the Dimensions

By default, the Chart is 400px high and as wide as its container. To set the dimensions of the Chart, use inline styles and CSS.

{% meta height:265 %}
{% embed_file styling/dimensions/func/app.tsx preview %}
{% embed_file styling/dimensions/func/main.tsx %}
{% endmeta %}

# Using Series Color from Themes v4

The 5.0 release of the Kendo Themes features an updated color palette for the chart series.

To revert to the series colors from version 4.x, you can:

-   Use the `default-dataviz-v4`, `bootstrap-dataviz-v4` or `material-dataviz-v4` swatches.

```ts
import '@progress/kendo-theme-default/dist/default-dataviz-v4.css';

// or
import '@progress/kendo-theme-bootstrap/dist/bootstrap-dataviz-v4.css';

// or
import '@progress/kendo-theme-material/dist/material-dataviz-v4.css';
```

-   Use [SCSS variables]({% slug customizingthemes %}) to revert the series colors to their previous defaults:

    -   `kendo-theme-default`:

    ```scss
    // Default v4
    $series-a: #ff6358;
    $series-b: #ffd246;
    $series-c: #78d237;
    $series-d: #28b4c8;
    $series-e: #2d73f5;
    $series-f: #aa46be;

    @import 'all.scss';
    ```

    -   `kendo-theme-bootstrap`:

    ```scss
    // Bootstrap v4
    $series-a: #0275d8;
    $series-b: #5bc0de;
    $series-c: #5cb85c;
    $series-d: #f0ad4e;
    $series-e: #e67d4a;
    $series-f: #d9534f;

    @import 'all.scss';
    ```

    -   `kendo-theme-material`:

    ```scss
    // Material v4
    $series-a: #3f51b5;
    $series-b: #2196f3;
    $series-c: #43a047;
    $series-d: #ffc107;
    $series-e: #ff5722;
    $series-f: #e91e63;

    @import 'all.scss';
    ```

*   Use the [`seriesColors`]({% slug api_charts_chart %}#toc-series-colors) prop on individual Chart instances:

{% meta height:470 %}
{% embed_file styling/v4-series-colors/func/app.tsx preview %}
{% embed_file styling/v4-series-colors/func/main.tsx %}
{% endmeta %}

## Using Pattern Fills

In addition to solid colors, the Chart series can also be filled with repeating patterns by using the series item [`pattern`](slug:api_charts_chartseriesitemprops#toc-pattern) property.

> The pattern inherits the series [`color`](slug:api_charts_chartseriesitemprops#toc-color) as main color and accepts an optional `background` color.

The following customizable pattern fills are available:

-   [Crosshatch Pattern]({% slug api_charts_crosshatchpattern %})&mdash;Uses crisscrossing lines to form a grid-like pattern.
-   [Diagonal Stripes Pattern]({% slug api_charts_diagonalstripespattern %})&mdash;Applies diagonal lines across the series.
-   [Dots Pattern]({% slug api_charts_dotspattern %})&mdash;Fills the series with evenly spaced dots.
-   [Grid Pattern]({% slug api_charts_gridpattern %})&mdash;Renders a regular grid pattern.
-   [Vertical Stripes Pattern]({% slug api_charts_verticalstripespattern %})&mdash;Displays vertical stripes.

The following example demonstrates the usage of the pattern fills for series.

{% meta height:470 %}
{% embed_file styling/patterns/app.tsx preview %}
{% embed_file styling/patterns/main.tsx %}
{% embed_file styling/patterns/data.ts %}
{% endmeta %}

## Limiting the Displayed Range

To limit the range which is displayed by the Chart:

1. Set the [`min`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-min) and [`max`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-max) options of the category axis.
1. Enable [panning]({% slug api_charts_chartprops %}#toc-pannable) and [zooming]({% slug api_charts_chartprops %}#toc-zoomable), so that the user is able to see the rest of the data.

{% meta height:470 %}
{% embed_file styling/range/func/app.tsx preview %}
{% embed_file styling/range/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
-   [Creating Custom Styles]({% slug themebuilder %})
