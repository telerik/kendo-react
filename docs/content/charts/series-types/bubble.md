---
title: Bubble
description: 'Basic usage of the KendoReact Bubble charts in React projects.'
components: ["chart"]
subject: Bubble Chart
slug: bubble_seriestypes_charts
---

# Bubble

Bubble charts are scatter charts which display data as points with coordinates and sizes that are defined by the value of their items.

<CtaPanelOverview></CtaPanelOverview>

Bubble charts are useful for visualizing different scientific relationships such as economic or social relations because the X-axis of the Bubble charts is numerical and does not require items. Bubble charts are also suitable for displaying dozens to hundreds of values, which is convenient for visualizing size values that differ by several orders of magnitude. Because the size value is represented by a circle area, it is recommended to plot positive values.

Bubble charts are similar to the [Scatter Plot and Scatter Line charts]({% slug scatterline_seriestypes_charts %}) but the data points are replaced with bubbles. This allows a Bubble chart to display three-dimensional data&mdash;two values for the coordinates of the item and one for their size.

## Basic Usage

The following example demonstrates the Bubble chart in action.

{% meta height:470 %}
{% embed_file chart/bubble/func/app.tsx preview %}
{% embed_file chart/bubble/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [Polar Charts]({% slug polar_seriestypes_charts %})
-   [Scatter Charts]({% slug scatterline_seriestypes_charts %})
