---
title: Series
description: 'Configure the KendoReact Chart series in React projects.'
slug: series_chart_charts
---

# Series

The data series are the main components of the Chart.

The rest of the Chart elements play a supportive role for the user when understanding the plotted series.

The Chart supports the following series types:

-   [Area and Vertical Area]({% slug area_seriestypes_charts %})
-   [Bar and Column]({% slug barcolumn_seriestypes_charts %})
-   [Box Plot]({% slug boxplot_seriestypes_charts %})
-   [Bubble]({% slug bubble_seriestypes_charts %})
-   [Bullet]({% slug bullet_seriestypes_charts %})
-   [Donut]({% slug donut_seriestypes_charts %})
-   [Funnel]({% slug funnel_seriestypes_charts %})
-   [Pyramid]({% slug pyramid_seriestypes_charts %})
-   [Line and Vertical Line]({% slug line_seriestypes_charts %})
-   [Pie]({% slug pie_seriestypes_charts %})
-   [Polar]({% slug polar_seriestypes_charts %})
-   [Radar]({% slug radar_seriestypes_charts %})
-   [Range Bar]({% slug rangebar_seriestypes_charts %})
-   [Scatter and Scatter Line]({% slug scatterline_seriestypes_charts %})
-   [Waterfall]({% slug waterfall_seriestypes_charts %})

## Basic Usage

Series are declared by using the [ChartSeriesItem]({% slug api_charts_chartseriesitem %}) configuration components and placed in a [ChartSeries]({% slug api_charts_chartseries %}) collection.

For more information on how to configure each Chart series, refer to the articles on the [series types]({% slug area_seriestypes_charts %}). For more information on how to bind the series to data, refer to the article on [data binding]({% slug databinding_chart_charts %}).

The following example configures a set of Scatter Line series.

{% meta height:475 %}
{% embed_file chart/series/overview/func/app.tsx preview %}
{% embed_file chart/series/overview/func/main.tsx %}
{% endmeta %}

## Default Series Configuration

You can apply a subset of settings to all Chart series by using the [`ChartSeriesDefaults`]({% slug api_charts_chartseriesdefaults %}) component.

The ChartSeriesDefaults component supports the following child components:

-   [`ChartSeriesDefaultsLabels`]({% slug api_charts_chartseriesdefaultslabels %})
-   [`ChartSeriesDefaultsNotes`]({% slug api_charts_chartseriesdefaultsnotes %})

The following example demonstrates how to set the default series type and labels.

{% meta height:475 %}
{% embed_file chart/series/default/func/app.tsx preview %}
{% embed_file chart/series/default/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
