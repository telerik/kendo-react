---
title: Line
page_title: 'React Line Chart - KendoReact Docs & Demos'
description: 'React line charts and vertical line charts are categorical charts that show continuous data as lines passing through points.'
components: ["chart"]
subject: Line Chart
slug: line_seriestypes_charts
---

# Line

Line charts and Vertical Line charts are categorical charts which display continuous data as lines that pass through points defined by the values of their items.

<CtaPanelOverview></CtaPanelOverview>

Line charts are useful for rendering trends over time or at equal time intervals, and for comparing sets of similar data.

Vertical Line charts are functionally equivalent to Line charts, but transpose the axes&mdash;the category axis is vertical and the value axis is horizontal.

## Basic Usage

The following example demonstrates the Line chart in action.

{% meta height:465 %}
{% embed_file series-types/line/basic/func/app.tsx preview %}
{% embed_file series-types/line/basic/func/main.tsx %}
{% endmeta %}

The following example demonstrates the Vertical Line chart in action.

{% meta height:465 %}
{% embed_file series-types/line/vertical-line/func/app.tsx preview %}
{% embed_file series-types/line/vertical-line/func/main.tsx %}
{% endmeta %}

## Choosing Between Line and Scatter Line Charts

Line charts and [Scatter Line charts]({% slug scatterline_seriestypes_charts %}) look visually the same because the data points in the plot area are connected with lines. However, they significantly differ in the way each series type plots the data it presents in the plot area.

In line charts, the vertical axis is a value axis and the horizontal axis is a category axis. This means that the category axis displays groupings of data and not numerical values. That is why the data points of the Line charts are distributed as evenly-spaced coordinates.

The fundamental differences between the two series types make each a more suitable solution in particular scenarios. Line charts are better to use when your project requires you to:

-   Use text labels along the horizontal axis.
-   Use a few numerical labels along the horizontal axis.
-   Use time scales along the horizontal axis.

## Line Style

Line charts enable you to render the lines between the points in different styles. To set the appearance of the lines, use the [`style`]({% slug api_charts_chartseriesitemprops %}#toc-style) option which provides the following available styles:

-   Normal&mdash;The default style which produces a straight line between data points.
-   Step&mdash;The style renders the connection between the data points through vertical and horizontal lines. It is suitable for indicating that the value is constant between the changes.
-   Smooth&mdash;The style causes the Line chart to display a fitted curve through data points. It is suitable displaying data with a curve and for connecting the points with smooth instead of straight lines.

The following example demonstrates how to use the different types of lines in line chart.

{% meta height:465 %}
{% embed_file series-types/line/line-style/func/app.tsx preview %}
{% embed_file series-types/line/line-style/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
