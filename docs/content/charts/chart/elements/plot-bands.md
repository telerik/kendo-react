---
title: Plot Bands
description: 'Highlight a static range on the axes by using plot bands in the KendoReact Chart.'
components: ["chart"]
slug: plotbands_chart_charts
---

# Plot Bands

The Chart plot bands allow you to highlight a specific range of an axis.

To display plot bands, set the axis `plotBands` option to an array of [`PlotBand`]({% slug api_charts_plotband %}).

The following example demonstrates how to configure the plot bands of an axis.

{% meta height:465 %}
{% embed_file chart/plot-bands/overview/func/app.tsx preview %}
{% embed_file chart/plot-bands/overview/func/main.tsx %}
{% endmeta %}

## Labels

Each plot band can be configured to display an optional [label]({% slug api_charts_plotband %}).

The following example demonstrates how to display and style plot band labels.

{% meta height:465 %}
{% embed_file chart/plot-bands/labels/func/app.tsx preview %}
{% embed_file chart/plot-bands/labels/func/main.tsx %}
{% endmeta %}

## Custom Plot Bands

To visualize the range in a different way or to show additional elements, manually draw the plot bands by using the [Drawing API]({% slug overview_drawing %}) in the [`onRender`]({% slug api_charts_chartprops %}#toc-onrender) event.

To get the range coordinates:

1. Find the [axis]({% slug api_charts_chartaxistype %}) by name.
1. Use the [`slot`]({% slug api_charts_chartaxistype %}#toc-slot) method.

The following example demonstrates how to draw custom plot bands.

{% meta height:465 %}
{% embed_file chart/plot-bands/custom/func/app.tsx preview %}
{% embed_file chart/plot-bands/custom/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
