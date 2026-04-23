---
title: Navigator
description: 'Discover the navigator feature of the KendoReact StockChart and use it to change the date interval in the main panes of yor next React project.'
components: ["stockchart"]
slug: navigator_stockchart_charts
position: 2
---

# Navigator

The StockChart navigator represents a pane that is placed at the bottom of the chart and which can be used to change the date interval in the main panes.

To configure the navigator, use the [`ChartNavigator`]({% slug api_charts_chartnavigator %}) component and its child components.

> To limit the range that is displayed by the Chart, refer to the article on [appearance]({% slug appearance_chart_charts %}#toc-limiting-the-displayed-range).

## Loading on Demand

To load the main series data for the selected period on demand, use the [`onNavigatorFilter`]({% slug api_charts_stockchartprops %}#toc-onnavigatorfilter) event. The event object contains the start and end of the selected period. As the navigator must not be re-rendered when the main series are filtered, set the [`partialRedraw`]({% slug api_charts_stockchartprops %}#toc-partialredraw) property of the StockChart to `true`.

{% meta height:500 %}
{% embed_file stock-chart/filter-data/func/app.tsx preview %}
{% embed_file stock-chart/filter-data/func/main.tsx %}
{% endmeta %}

## Navigator on Top

To display the navigator on top, set the [`position`]({% slug api_charts_chartnavigator %}#toc-position) prop to `"top"`.

{% meta height:500 %}
{% embed_file stock-chart/navigator-top/func/app.tsx preview %}
{% embed_file stock-chart/navigator-top/func/main.tsx %}
{% endmeta %}

## Multiple Panes

Similar to the Chart component, the StockChart supports multiple panes and displays all additional panes above the navigator pane.

{% meta height:700 %}
{% embed_file stock-chart/multiple-panes/func/app.tsx preview %}
{% embed_file stock-chart/multiple-panes/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
