---
title: Bullet
description: 'Basic usage of the KendoReact Bullet charts in React projects.'
components: ["chart"]
subject: Bullet Chart
slug: bullet_seriestypes_charts
---

# Bullet

Bullet charts are categorical charts which are a variation of the Bar charts.

You can use them as a replacement for dashboard gauges and meters. The bullet graph compares a given quantitative measure, such as temperature, against a qualitative range, such as warm, hot, and cold, and a symbol marker which encodes the comparative measure, such as the max temperature a year ago.

<CtaPanelOverview></CtaPanelOverview>

## Basic Usage

The following example demonstrates the Bullet chart in action.

{% meta height:450 %}
{% embed_file series-types/bullet/basic/func/app.tsx preview %}
{% embed_file series-types/bullet/basic/func/main.tsx %}
{% endmeta %}

## Displaying labels

To display labels for the bullet chart value, add a [`ChartSeriesLabels`]({% slug api_charts_chartserieslabels %}) configuration component to the series.

{% meta height:450 %}
{% embed_file series-types/bullet/labels/func/app.tsx preview %}
{% embed_file series-types/bullet/labels/func/main.tsx %}
{% endmeta %}

See [Series Labels]({% slug labels_chart_charts %}) for more details on customizing the labels content.

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
