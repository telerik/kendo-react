---
title: Crosshairs
description: 'Highlight the current cursor position by using the crosshairs of the KendoReact Chart.'
components: ["chart"]
slug: crosshairs_chart_charts
---

# Crosshairs

The Chart crosshairs are lines which are perpendicular to the axes and enable the user to see the exact value at the current cursor position.

To enable the crosshair for an axis, either:

-   Add the corresponding crosshair component, or
-   Set the `crosshair.visible` option to `true`.

The following example demonstrates how to enable the crosshairs.

{% meta height:465 %}
{% embed_file chart/chrosshairs/func/app.tsx preview %}
{% embed_file chart/chrosshairs/func/main.tsx %}
{% endmeta %}

## Current Cursor Values

To get the current hovered values, use the [`onPlotAreaHover`]({% slug api_charts_chartprops %}#toc-onplotareahover) event.

The following example demonstrates how to get the hovered values.

{% meta height:465 %}
{% embed_file chart/chrosshairs/current-cursor-values/func/app.tsx preview %}
{% embed_file chart/chrosshairs/current-cursor-values/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
