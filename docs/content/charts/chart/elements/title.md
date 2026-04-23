---
title: Title and Subtitle
description: 'Configure the title and subtitle of the KendoReact Chart in React projects.'
components: ["chart"]
slug: title_chart_charts
---

# Title

To configure the Chart title, use the [`ChartTitle`]({% slug api_charts_charttitle %}) configuration component.

By default, the Chart displays no title.

The following example demonstrates how to configure the title font and alignment.

{% meta height:500 %}
{% embed_file chart/title/overview/func/app.tsx preview %}
{% embed_file chart/title/overview/func/main.tsx %}
{% endmeta %}

## Title Position

To control the position of the title, use the [`position`]({% slug api_charts_charttitleprops %}#toc-position) property.

The following example demonstrates how to display the title at the bottom of the Chart:

{% meta height:500 %}
{% embed_file chart/title/position/func/app.tsx preview %}
{% embed_file chart/title/position/func/main.tsx %}
{% endmeta %}

# Subtitle

The Chart supports configuring an additional subtitle via the [`ChartSubtitle`]({% slug api_charts_chartsubtitle %}) configuration component.

By default, the subtitle is displayed below the main title.

The following example demonstrates how to configure a subtitle:

{% meta height:500 %}
{% embed_file chart/title/subtitle/func/app.tsx preview %}
{% embed_file chart/title/subtitle/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
