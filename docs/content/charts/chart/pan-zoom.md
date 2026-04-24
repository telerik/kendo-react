---
title: Panning and Zooming
description: 'Enable panning and zooming for the KendoReact Chart in React projects.'
components: ["chart"]
slug: panzoom_chart_charts
position: 7
---

# Panning and Zooming

The Chart enables the user to change the displayed range by panning and zooming.

Panning is performed by dragging over the plot area.

Zooming is performed by either:

-   Mouse-wheeling on desktop or pinch zoom on mobile, or
-   Holding the `Shift` key and selecting an area.

To enable the pan-and-zoom functionality, use the [`pannable`]({% slug api_charts_chartprops %}#toc-pannable) and [`zoomable`]({% slug api_charts_chartprops %}#toc-zoomable) options.

{% meta height:465 %}
{% embed_file chart/pan-zoom/basic/func/app.tsx preview %}
{% embed_file chart/pan-zoom/basic/func/main.tsx %}
{% endmeta %}

## Disabling Pan-and-Zoom Direction

You can prevent panning and zooming for an axis by using the `lock` configuration. To disable pan-and-zoom in the vertical direction, set the `pannable.lock`, `zoomable.mousewheel.lock`, and `zoomable.selection.lock` options to `'y'`. To disable pan-and-zoom in the horizontal direction, set the `pannable.lock`, `zoomable.mousewheel.lock`, and `zoomable.selection.lock` options to `'x'`.

{% meta height:500 %}
{% embed_file chart/pan-zoom/lock/func/app.tsx preview %}
{% embed_file chart/pan-zoom/lock/func/main.tsx %}
{% endmeta %}

## Setting Mousewheel Zoom Rate

By default, one click on the mousewheel will expand or contract the axis ranges by 30%. To set the zoom rate to a different value, set the [`rate`]({% slug api_charts_mousewheelzoom %}#toc-rate) to a number in the range from 0.01 to 0.9 (1% to 90%).

{% meta height:600 %}
{% embed_file chart/pan-zoom/rate/func/app.tsx preview %}
{% embed_file chart/pan-zoom/rate/func/main.tsx %}
{% embed_file chart/pan-zoom/rate/func/data.ts %}
{% endmeta %}

## Suggested Links

-   [Elements]({% slug axes_chart_charts %})
-   [API Reference of the Chart]({% slug api_charts %})
-   [Glossary]({% slug glossary_charts %})
