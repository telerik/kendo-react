---
title: Area
description: 'Basic usage of the KendoReact Area and Vertical Area charts in React projects.'
components: ["chart"]
subject: Area Chart
slug: area_seriestypes_charts
---

# Area

Area charts and Vertical Area charts are categorical charts which are suitable for displaying quantitative data by using continuous lines.

<CtaPanelOverview></CtaPanelOverview>

The lines of the Area charts pass through points that are defined by the values of their items. The portion of the graph beneath the lines is filled with a particular color for each series. The different colors in an Area chart are useful for emphasizing changes in values which come from several sets of similar data. The series are overlaid on top of each other either fully or with partial opacity. The stacking order is either implicit or controlled through an user-set [`zIndex`]({% slug api_charts_chartseriesitemprops %}#toc-zindex).

Vertical Area charts are functionally equivalent to Area charts, but transpose the axes&mdash;the category axis is vertical and the value axis is horizontal.

## Basic Usage

The following example demonstrates the Area chart in action.

{% meta height:465 %}
{% embed_file series-types/area/basic/func/app.tsx preview %}
{% embed_file series-types/area/basic/func/main.tsx %}
{% endmeta %}

The following example demonstrates the Vertical Area chart in action.

{% meta height:465 %}
{% embed_file series-types/area/vertical/func/app.tsx preview %}
{% embed_file series-types/area/vertical/func/main.tsx %}
{% endmeta %}

## Data Binding

You can bind the Area series to an array that contains:

-   Numbers.
-   Arrays which represent `[value, category]` tuples.
-   Objects which are also referred to as models.

When the Area series is bound to objects (models), it is your responsibility to select the relevant fields through the available bindings:

| Model binding   | Data type                       | Required | Description                             |
| --------------- | ------------------------------- | -------- | --------------------------------------- |
| `field`         | `number`/`null`                 | Yes      | The value of the data point, if any.    |
| `categoryField` | `string`/`date`/`number`/`null` | No       | The category of the data point, if any. |

For more information on how to configure each data-binding mode, refer to the article on [binding the KendoReact Chart to data]({% slug databinding_chart_charts %}).

## Sub-Types

The Area charts feature the following sub-types:

-   [Stacked Area Charts](#toc-stacked-area-charts)
-   [100% Stacked Area Charts](#toc-100-stacked-area-charts)

### Stacked Area Charts

Stacked Area charts are suitable for indicating the proportion of individual values to the total. To select this series sub-type, set the [`stack`]({% slug api_charts_chartseriesitemprops %}#toc-stack) property of the first series item to `true`. The setting of the `stack` property is applied to all series and you do not have to set the rest of the series explicitly.

The following example demonstrates how to stack the red and green series on top of each other. The blue series contains positive and zero values as well as a negative one. In all cases, the plotted value is the sum of all values up to the current series.

{% meta height:465 %}
{% embed_file series-types/area/stacked/func/app.tsx preview %}
{% embed_file series-types/area/stacked/func/main.tsx %}
{% endmeta %}

### 100% Stacked Area Charts

100% Stacked Area charts are suitable for indicating the proportion of individual values as a percentage of the total. To select this series sub-type, set the [`stack`]({% slug api_charts_chartseriesitemprops %}#toc-stack) property of the first series item to a `{ type: '100%' }` object. The setting of the `stack` property is applied to all series and you do not have to set the rest of the series explicitly.

> While it is possible to plot negative values in a 100% stacked chart, the results are hard for the user to interpret.

The following example demonstrates how the series data is converted into percentages.

{% meta height:465 %}
{% embed_file series-types/area/stacked-percentages/func/app.tsx preview %}
{% embed_file series-types/area/stacked-percentages/func/main.tsx %}
{% endmeta %}

## Line Style

Area charts enable you to render the lines between the points in different styles. To set the appearance of the lines, use the [`line.style`]({% slug api_charts_seriesline %}#toc-style) option which provides the following available styles:

-   Normal&mdash;The default style which produces a straight line between data points.
-   Step&mdash;The style renders the connection between the data points through vertical and horizontal lines. It is suitable for indicating that the value is constant between the changes.
-   Smooth&mdash;The style causes the Area chart to display a fitted curve through data points. It is suitable displaying data with a curve and for connecting the points with smooth instead of straight lines.

The following example demonstrates how to use the different types of lines.

{% meta height:500 %}
{% embed_file series-types/area/line/func/app.tsx preview %}
{% embed_file series-types/area/line/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
