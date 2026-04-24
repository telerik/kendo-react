---
title: Legend
description: 'Configure the legend of the KendoReact Chart in React projects.'
components: ["chart"]
slug: legend_chart_charts
---

# Legend

The Chart legend displays the name of the configured data series.

To customize the legend, use the [ChartLegend]({% slug api_charts_chartlegend %}) configuration component.

The following example demonstrates how to configure the position and orientation of the Chart legend.

{% meta height:500 %}
{% embed_file chart/legend/overview/func/app.tsx preview %}
{% embed_file chart/legend/overview/func/main.tsx %}
{% endmeta %}

## Hiding the Legend

If you set the series names, the Chart displays a default legend.

The following example demonstrates how to hide the legend by using its [`visible`]({% slug api_charts_chartlegendprops %}#toc-visible) property.

{% meta height:500 %}
{% embed_file chart/legend/hiding-the-legend/func/app.tsx preview %}
{% embed_file chart/legend/hiding-the-legend/func/main.tsx %}
{% endmeta %}

## Configuring the Legend Items

The Legend Item types and settings are derived from the series configuration. For additional configuration, use the series [`legendItem`]({% slug api_charts_chartseriesitemprops %}#toc-legenditem)
property.

The following example shows the different Legend Item types:

{% meta height:500 %}
{% embed_file chart/legend/legend-items-types/func/app.tsx preview %}
{% embed_file chart/legend/legend-items-types/func/main.tsx %}
{% embed_file chart/legend/legend-items-types/func/data.ts %}
{% endmeta %}

## Clicking Legend Items

Clicking the legend items triggers the [`onLegendItemClick`]({% slug api_charts_chartprops %}#toc-onlegenditemclick) event which can be used to toggle the visibility of the clicked series. When `onLegendItemClick` is not handled, the Chart itself toggles the series visibility.

{% meta height:500  %}
{% embed_file chart/legend/legend-items/func/app.tsx preview %}
{% embed_file chart/legend/legend-items/func/main.tsx %}
{% endmeta %}

## Customizing the Position

You can remove the legend from the flow and absolutely position it by setting the position to `custom` and configuring the `offsetX` and `offsetY` options.

{% meta height:500 %}
{% embed_file chart/legend/customizing/func/app.tsx preview %}
{% embed_file chart/legend/customizing/func/main.tsx %}
{% endmeta %}

## Setting a Title

The Chart legend section can be configured to hold a title with customizable layout and content.
To define a title, use the [`ChartLegendTitle`]({% slug api_charts_chartlegendtitle %}) component.

{% meta height:500 %}
{% embed_file chart/legend/title/func/app.tsx preview %}
{% embed_file chart/legend/title/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
