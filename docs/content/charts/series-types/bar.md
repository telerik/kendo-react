---
title: Bar
page_title: 'React Bar Chart - KendoReact Docs & Demos'
description: 'eact Bar charts and Column charts are categorical charts that display data using horizontal or vertical bars.'
components: ["chart"]
subject: Bar Chart
slug: barcolumn_seriestypes_charts
---

# Bar

Bar charts and Column charts are categorical charts which display data by using horizontal or vertical bars whose lengths vary according to their value.

<CtaPanelOverview></CtaPanelOverview>

The bar charts are suitable for displaying a comparison between several sets of data&mdash;for example, for showing a summary of unique and total site visitors over a certain period of time. The series are placed next to each other with predefined spacing between them.

Column charts are functionally equivalent to Bar charts, but transpose the axes&mdash;the category axis is vertical and the value axis is horizontal.

## Basic Usage

The following example demonstrates the Bar chart in action.

{% meta height:465 %}
{% embed_file series-types/bar/basic/func/app.tsx preview %}
{% embed_file series-types/bar/basic/func/main.tsx %}
{% endmeta %}

The following example demonstrates the Column chart in action.

{% meta height:465 %}
{% embed_file series-types/bar/column/func/app.tsx preview %}
{% embed_file series-types/bar/column/func/main.tsx %}
{% endmeta %}

## Gap and Spacing in Bar Chart

You can control the distance between bars by using the gap and spacing variables. To control the distance between the categories, set [`gap`]({% slug api_charts_chartseriesitemprops %}#toc-gap) to the first series item as a percentage of the bar width. The setting of the `gap` property is applied to all series and you do not have to set the rest of the series explicitly.

{% meta height:465 %}
{% embed_file series-types/bar/gap-spacing/func/app.tsx preview %}
{% embed_file series-types/bar/gap-spacing/func/main.tsx %}
{% endmeta %}

To control the distance between bars in a single category, set [`spacing`]({% slug api_charts_chartseriesitemprops %}#toc-spacing) to the first series item as a percentage of the bar width. The setting of the `spacing` property is applied to all series and you do not have to set the rest of the series explicitly.

{% meta height:465 %}
{% embed_file series-types/bar/spacing/func/app.tsx preview %}
{% embed_file series-types/bar/spacing/func/main.tsx %}
{% endmeta %}

## Data Binding

You can bind the series of the bar chart to an array that contains:

-   Numbers.
-   Arrays which represent `[value, category]` tuples.
-   Objects which are also referred to as models.

When the Bar series is bound to objects (models), the user selects the relevant fields through the available bindings:

| Model binding   | Data type                       | Required | Description                                 |
| --------------- | ------------------------------- | -------- | ------------------------------------------- |
| `field`         | `number`/`null`                 | Yes      | The value of the data point, if any.        |
| `categoryField` | `string`/`date`/`number`/`null` | No       | The category of the data point, if any.     |
| `colorField`    | `string`                        | No       | The color of the data point, if overridden. |

For more information on how to configure data-binding mode, refer to the article on [binding the KendoReact Chart to data]({% slug databinding_chart_charts %}).

## Bar Chart Sub-Types

The Bar charts feature the following sub-types:

-   [Stacked Bar Charts](#toc-stacked-bar-charts)
-   [100% Stacked Bar Charts](#toc-100-stacked-bar)

### Stacked Bar Charts

Stacked bar charts are suitable for indicating the proportion of individual values to the total. To select this series sub-type, set the [`stack`]({% slug api_charts_chartseriesitemprops %}#toc-stack) property of the first series item to `true`. The setting of the `stack` property is applied to all series and you do not have to set the rest of the series explicitly. Yet, you can override the configuration per series.

Series are plotted on top of each other. The stack value is the sum of all values up until the current series. Negative values are placed on a separate stack.

{% meta height:465 %}
{% embed_file series-types/bar/stacked-bar/func/app.tsx preview %}
{% embed_file series-types/bar/stacked-bar/func/main.tsx %}
{% endmeta %}

You can also place groups of series on separate stacks.

{% meta height:465 %}
{% embed_file series-types/bar/seperate-stack/func/app.tsx preview %}
{% embed_file series-types/bar/seperate-stack/func/main.tsx %}
{% endmeta %}

### 100% Stacked Bar

100% Stacked Bar Charts are suitable for indicating the proportion of individual values as a percentage of the total. To select this series sub-type, set the [`stack`]({% slug api_charts_chartseriesitemprops %}#toc-stack) property of the first series item to a `{ type: '100%' }` object. The setting of the `stack` property is applied to all series and you do not have to set the rest of the series explicitly. Yet, you can override the configuration per series.

> While it is possible to plot negative values in a 100% stacked chart, the results are hard for the user to interpret.

The following example demonstrates how the series data is converted into percentages.

{% meta height:465 %}
{% embed_file series-types/bar/percentages/func/app.tsx preview %}
{% embed_file series-types/bar/percentages/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
