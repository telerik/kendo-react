---
title: Labels
description: 'Customize the content and appearance of the series and axis labels of the KendoReact Chart in React projects.'
components: ["chart"]
slug: labels_chart_charts
---

# Labels

The Chart enables you to set the appearance and customize the content of the series and axis labels.

## Setting the Appearance

You can control the appearance of the labels through the following properties:

-   `background`
-   `border`
-   `color`
-   `font`
-   `margin`
-   `padding`

The following example demonstrates how to customize the appearance of the axis label by using the [`ChartValueAxisLabels`]({% slug api_charts_chartvalueaxislabels %}) component.

{% meta height:470 %}
{% embed_file chart/labels/style-axis/func/app.tsx preview %}
{% embed_file chart/labels/style-axis/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to customize the appearance of the series label by using the [`ChartSeriesLabels`]({% slug api_charts_chartserieslabels %}) component.

{% meta height:470 %}
{% embed_file chart/labels/style-series/func/app.tsx preview %}
{% embed_file chart/labels/style-series/func/main.tsx %}
{% endmeta %}

## Customizing the Content

Normally, the series and axis Chart labels display an unformatted numeric value or a category name.

You can override the Chart label content by:

-   [Using format strings](#toc-using-format-strings)
-   [Setting content callbacks](#toc-setting-content-callbacks)
-   [Rendering custom visuals](#toc-rendering-custom-visuals)

### Using Format Strings

The Chart enables you to assign a format string for the label. For the full list of available formats, refer to the [kendo-intl library](https://github.com/telerik/kendo-intl/blob/master/docs/num-formatting/index.md#types-of-number-formats).

#### Formatting Labels as Currency Values

The following example demonstrates how to format the value axis labels as a currency value.

{% meta height:470 %}
{% embed_file chart/labels/chart-label/func/app.tsx preview %}
{% embed_file chart/labels/chart-label/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to format the series labels as a currency value.

{% meta height:470 %}
{% embed_file chart/labels/currency-value/func/app.tsx preview %}
{% embed_file chart/labels/currency-value/func/main.tsx %}
{% endmeta %}

#### Formatting Placeholders

Format strings for series labels can contain multiple value placeholders&mdash;for example, an X and Y value for the Scatter series. The following table lists the available placeholders.

| Series Type                                       | Placeholders                                                                                                     |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Area, Bar, Column, Funnel, Pyramid, Line, and Pie | {0}&mdash;value                                                                                                  |
| Box Plot                                          | {0}&mdash;lower, {1}&mdash;q1, {2}&mdash;median, {3}&mdash;q3, {4}&mdash;upper, {5}&mdash;mean{6}&mdash;category |
| Bubble                                            | {0}&mdash;X value, {1}&mdash;Y value, {2}&mdash;size value, {3}&mdash;category name                              |
| Bullet                                            | {0}&mdash;Value, {1}&mdash;Target value                                                                          |
| RangeBar and RangeArea                            | {0}&mdash;from, {1}&mdash;to                                                                                     |
| Scatter and ScatterLine                           | {0}&mdash;X value, {1}&mdash;Y value                                                                             |
| Candlestick and OHLC                              | {0}&mdash;open value, {1}&mdash;high value, {2}&mdash;low value, {3}&mdash;close value, {4}&mdash;category name  |

The following example demonstrates how to use value placeholders for the Scatter series labels.

{% meta height:500 %}
{% embed_file chart/labels/scatter-series/func/app.tsx preview %}
{% embed_file chart/labels/scatter-series/func/main.tsx %}
{% endmeta %}

### Setting Content Callbacks

If provided, a `content` function is called to compute the text of each label. The function receives different parameters depending on the context. For more information, refer to the documentation on [`ChartCategoryAxisLabelsProps`]({% slug api_charts_chartcategoryaxislabelsprops %}#toc-content), [`ChartValueAxisLabelsProps`]({% slug api_charts_chartvalueaxislabelsprops %}#toc-content), and [`ChartSeriesLabelsProps`]({% slug api_charts_chartserieslabelsprops %}#toc-content).

The following example demonstrates how to override the content of the axis labels.

{% meta height:470 %}
{% embed_file chart/labels/content-callbacks/func/app.tsx preview %}
{% embed_file chart/labels/content-callbacks/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to override the content of the series labels.

{% meta height:470 %}
{% embed_file chart/labels/series-labels/func/app.tsx preview %}
{% embed_file chart/labels/series-labels/func/main.tsx %}
{% endmeta %}

### Rendering Custom Visuals

You can customize the rendering of labels by using a `visual` function. The function receives a single parameter of type [`AxisLabelVisualArgs`]({% slug api_charts_axislabelvisualargs %}) or [`SeriesLabelsVisualArgs`]({% slug api_charts_serieslabelsvisualargs %}), and returns a group of [Drawing primitives]({% slug basicshapes_drawing %}) to represent the label.

The following example demonstrates how to override the rendering of the axis labels.

{% meta height:470 %}
{% embed_file chart/labels/visual-axis/func/app.tsx preview %}
{% embed_file chart/labels/visual-axis/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to override the rendering of the series labels.

{% meta height:470 %}
{% embed_file chart/labels/visual-series/func/app.tsx preview %}
{% embed_file chart/labels/visual-series/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
