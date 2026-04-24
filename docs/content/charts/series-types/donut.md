---
title: Donut
description: 'Basic usage of the KendoReact Donut charts in React projects.'
components: ["chart"]
subject: Donut Chart
slug: donut_seriestypes_charts
---

# Donut

Donut charts are circular charts which represent a variation of the [Pie charts]({% slug pie_seriestypes_charts %}) and are capable of displaying multiple nested series.

You can utilize the blank center of a Donut chart to show additional information within it.

<CtaPanelOverview></CtaPanelOverview>

## Basic Usage

The following example demonstrates the Donut chart in action.

{% meta height:465 %}
{% embed_file chart/donut/func/app.tsx preview %}
{% embed_file chart/donut/func/main.tsx %}
{% endmeta %}

## Displaying Multiple Series

The Donut chart renders multiple series in the form of concentric rings. This behavior is different from the behavior of the Pie chart, which supports only one series.

{% meta height:465 %}
{% embed_file chart/donut-series/func/app.tsx preview %}
{% embed_file chart/donut-series/func/main.tsx %}
{% endmeta %}

## Displaying Information in the Center

To display content in the center of the Donut chart, either:

-   [Utilize the Donut center template](#toc-using-the-center-template), or
-   [Implement drawing visuals](#toc-using-drawing-visuals).

### Using the Center Template

The center template is an HTML overlay that is positioned over the center of the Donut chart. To implement the content use the [donutCenterRender]({% slug api_charts_chartprops %}#toc-donutcenterrender) render prop of the `Chart` component.

> While documents which are exported through the [HTML Drawing API]({% slug drawingofhtmlelements_drawing %}) display the content of the center template, vector graphics and [exported files]({% slug export_chart_charts %}) do not render it.

{% meta height:465 %}
{% embed_file chart/donut-center/func/app.tsx preview %}
{% embed_file chart/donut-center/func/main.tsx %}
{% endmeta %}

### Using Drawing Visuals

Similar to the other Chart types, you can overlay the Donut series with custom [drawing elements]({% slug overview_drawing %}). The approach of using drawing visuals is more flexible than using the donut center template and also has the advantage that the overlay is part of the chart drawing surface. As a result, all [exported files]({% slug export_chart_charts %}) render the content of the donut center as an integral element of the component.

{% meta height:465 %}
{% embed_file chart/donut-center-visuals/func/app.tsx preview %}
{% embed_file chart/donut-center-visuals/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [Pie Charts]({% slug pie_seriestypes_charts %})
