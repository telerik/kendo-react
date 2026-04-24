---
title: Scatter
description: 'Basic usage of the KendoReact Scatter Plot and Scatter Line charts in React projects.'
components: ["chart"]
subject: Scatter Chart
slug: scatterline_seriestypes_charts
---

# Scatter

Scatter Plot and Scatter Line charts are the two main variations of scatter charts and are suitable for displaying numerical data.

<CtaPanelOverview></CtaPanelOverview>

Scatter Plot charts render the data over two independent axes&mdash;X and Y.

Scatter Line charts are functionally equivalent to the Scatter Plot charts, but they display connecting lines between the data points they render.

## Basic Usage

The following example demonstrates the Scatter Plot chart in action.

{% meta height:465 %}
{% embed_file chart/scatter-plot/func/app.tsx preview %}
{% embed_file chart/scatter-plot/func/main.tsx %}
{% endmeta %}

The following example demonstrates the Scatter Line chart in action.

{% meta height:500 %}
{% embed_file chart/scatter-line/func/app.tsx preview %}
{% embed_file chart/scatter-line/func/main.tsx %}
{% endmeta %}

## Choosing Scatter Line over Line Charts

Scatter Line charts and Line charts look visually the same because the data points in the plot area are connected with lines. However, they significantly differ in the way each series type plots the data it presents in the plot area.

In Scatter charts, both the vertical and the horizontal axis are value axes. This means that they render numerical values and not groupings of data, and are capable of displaying data at the intersection of each X- and Y-axis value. That is why the data points the Scatter Line charts display might be distributed as both evenly-spaced or unevenly-spaced coordinates.

The fundamental differences between the two series types make each a more suitable solution in particular scenarios. Scatter charts are better to use when your project requires you to:

-   Modify the scale of the horizontal axis.
-   Apply logarithms to scale the horizontal axis.
-   Display worksheet data that includes grouped sets of values.
-   Display patterns in large sets of data.
-   Compare large numbers of data points with no regard to time.

## Line Style

Scatter Line charts enable you to render the lines between the points in different styles. To set the appearance of the lines, use the [`style`]({% slug api_charts_chartseriesitemprops %}#toc-style) option which provides the following available styles:

-   Normal&mdash;The default style which produces a straight line between data points.
-   Smooth&mdash;The style causes the Scatter chart to display a fitted curve through data points. It is suitable displaying data with a curve and for connecting the points with smooth instead of straight lines.

The following example demonstrates how to use the different types of lines.

{% meta height:500 %}
{% embed_file chart/scatter-line-style/func/app.tsx preview %}
{% embed_file chart/scatter-line-style/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [Bubble Charts]({% slug bubble_seriestypes_charts %})
-   [Line Charts]({% slug line_seriestypes_charts %})
-   [Polar Charts]({% slug polar_seriestypes_charts %})
