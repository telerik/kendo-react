---
title: Selection
description: 'Enable users to select a range from a category axis in the KendoReact Chart.'
components: ["chart"]
slug: selection_chart_charts
---

# Selection

The Chart category axis enables users to select a specific range by clicking, dragging, resizing, or mouse-wheeling.

To enable the selection, set the [`select`]({% slug api_charts_chartcategoryaxisitemprops %}#toc-select) option of the category axis.

> Selection is supported only for horizontal category axes.

The following example demonstrates how to enable the selection.

{% meta height:465 %}
{% embed_file chart/selection/overview/func/app.tsx preview %}
{% embed_file chart/selection/overview/func/main.tsx %}
{% endmeta %}

## Using Selection as Navigator

The following example demonstrates how to use the [`onSelectEnd`]({% slug api_charts_chartprops %}#toc-onselectend) event to filter the main pane data.

{% meta height:465 %}
{% embed_file chart/selection/navigator/func/app.tsx preview %}
{% embed_file chart/selection/navigator/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
