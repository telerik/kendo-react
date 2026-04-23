---
title: Panes
description: 'Configure the panes of the KendoReact Chart in React projects.'
components: ["chart"]
slug: panes_chart_charts
---

# Panes

The Chart panes enable you to create vertical sub-divisions in a single categorical Chart.

You have to set an individual value axis to each pane. Multiple panes can share a category axis.

> Only the [Categorical Chart series]({% slug overview_seriestypes_charts %}) support the configuration of panes.

Panes are declared through the [ChartPane]({% slug api_charts_chartpane %}) configuration components and placed in a [ChartPanes]({% slug api_charts_chartpanes %}) collection. To control the series placement, plot the series on a value axis which is placed in the desired pane.

{% meta height:500 %}
{% embed_file chart/panes/overview/func/app.tsx preview %}
{% embed_file chart/panes/overview/func/main.tsx %}
{% endmeta %}

## Default Settings

Settings that apply to all panes can be declared through the [ChartPaneDefaults]({% slug api_charts_chartpanedefaults %}) configuration component.

The following example sets the default margin and title font for the panes:

{% meta height:500 %}
{% embed_file chart/panes/defaults/func/app.tsx preview %}
{% embed_file chart/panes/defaults/func/main.tsx %}
{% endmeta %}

## Disable Clipping

By default, the pane content cannot extend beyond its border. This prevents charts from overlapping other elements like the legend or title.

Pane clipping may be undesired, for example when plotting series markers at the edge of the pane.
To disable clipping, set the [clip]({% slug api_charts_chartpaneprops %}#toc-clip) prop to `false`:

{% meta height:500 %}
{% embed_file chart/panes/clip/func/app.tsx preview %}
{% embed_file chart/panes/clip/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
