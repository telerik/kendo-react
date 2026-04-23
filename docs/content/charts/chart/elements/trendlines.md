---
title: Trendlines
description: 'Explore data trends by using trendlines in the KendoReact Chart.'
components: ["chart"]
slug: trendlines_chart_charts
---

# Trendlines

Trendlines (or trend lines) are automatically generated indicators that show the the overall trends in the series data.

## Defining Trendlines

Trendlines are defined as a special type of series that are linked to the main series by **name**.

To define a trendline, define a [series item](slug:api_charts_chartseriesitem#toc-for) and set its [`for`](slug:api_charts_chartseriesitemprops#toc-for) prop to the parent series name:

{% meta height:460 %}
{% embed_file chart/trendlines/basic/func/app.tsx preview %}
{% embed_file chart/trendlines/basic/func/main.tsx %}
{% endmeta %}

## Trendline Types

The Chart supports the following types of trendlines:

-   [Linear Trendline](#toc-linear-trendline)
-   [Exponential Trendline](#toc-exponential-trendline)
-   [Logarithmic Trendline](#toc-logarithmic-trendline)
-   [Power Trendline](#toc-power-trendline)
-   [Polynomial Trendline](#toc-polynomial-trendline)
-   [Moving Average](#toc-moving-average-trendline)

### Linear Trendline

The linear trendline shows if a particular quantity is increasing or decreasing in time. They are commonly used to create [Forecasts](#toc-forecasts).

The following example demonstrates how to create a linear trendline for Categorical series.

{% meta height:460 %}
{% embed_file chart/trendlines/linear/categorical/func/app.tsx preview %}
{% embed_file chart/trendlines/linear/categorical/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to create a linear trendline for Scatter series.

{% meta height:460 %}
{% embed_file chart/trendlines/linear/scatter/func/app.tsx preview %}
{% embed_file chart/trendlines/linear/scatter/func/main.tsx %}
{% endmeta %}

## Exponential Trendline

Exponential trendlines are most suitable for data sets with accelerating rate of growth or decline. They can be used only for positive values.

The following example demonstrates how to create an exponential trendline for Categorical series.

{% meta height:460 %}
{% embed_file chart/trendlines/exponential/categorical/func/app.tsx preview %}
{% embed_file chart/trendlines/exponential/categorical/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to create an exponential trendline for Scatter series.

{% meta height:460 %}
{% embed_file chart/trendlines/exponential/scatter/func/app.tsx preview %}
{% embed_file chart/trendlines/exponential/scatter/func/main.tsx %}
{% endmeta %}

## Logarithmic Trendline

Logarithmic trendlines are best suited for data sets that grow quickly at the beginning and then taper off. They can only be use with both positive and negative values.

The following example demonstrates how to create a logarithmic trendline for Categorical series.

{% meta height:460 %}
{% embed_file chart/trendlines/logarithmic/categorical/func/app.tsx preview %}
{% embed_file chart/trendlines/logarithmic/categorical/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to create a logarithmic trendline for Scatter series.

{% meta height:460 %}
{% embed_file chart/trendlines/logarithmic/scatter/func/app.tsx preview %}
{% embed_file chart/trendlines/logarithmic/scatter/func/main.tsx %}
{% endmeta %}

## Power Trendline

Similar to Linear trendlines, power trendlines. They can be used only with positive values.

The following example demonstrates how to create a power trendline for Categorical series.

{% meta height:460 %}
{% embed_file chart/trendlines/power/categorical/func/app.tsx preview %}
{% embed_file chart/trendlines/power/categorical/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to create a power trendline for Scatter series.

{% meta height:460 %}
{% embed_file chart/trendlines/power/scatter/func/app.tsx preview %}
{% embed_file chart/trendlines/power/scatter/func/main.tsx %}
{% endmeta %}

## Polynomial Trendline

Polynomial trendlines are best suited for data series that alternates between growth and decline.

This type of trendlines accepts an [`order`](slug:api_charts_seriestrendline#toc-order) property that specifies the degree of the polynomial.
The default order is 2. Accepted values are from 2 to 6:

-   2: a Quadratic polynomial with a single extreme point (minimum or maximum) point.
-   3: a Cubic polynomial with up to 2 extreme points.
-   4: a polynomial of 4th degree with up to 3 extreme points.
-   5: a polynomial of 5th degree with up to 4 extreme points.
-   6: a polynomial of 6th degree with up to 5 extreme points.

The following example demonstrates how to create a polynomial trendline for Categorical series.

{% meta height:460 %}
{% embed_file chart/trendlines/polynomial/categorical/func/app.tsx preview %}
{% embed_file chart/trendlines/polynomial/categorical/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to create a polynomial trendline for Scatter series.

{% meta height:460 %}
{% embed_file chart/trendlines/polynomial/scatter/func/app.tsx preview %}
{% embed_file chart/trendlines/polynomial/scatter/func/main.tsx %}
{% endmeta %}

### Moving Average Trendline

The moving average trendline is used to smooth out the variations in the data by averaging all points in a period. By default, the period is set to `2` chart intervals.

The following example demonstrates how to create a moving average trendline for Categorical series.

{% meta height:460 %}
{% embed_file chart/trendlines/moving-average/categorical/func/app.tsx preview %}
{% embed_file chart/trendlines/moving-average/categorical/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to create a moving average linear trendline for Scatter series.

{% meta height:460 %}
{% embed_file chart/trendlines/moving-average/scatter/func/app.tsx preview %}
{% embed_file chart/trendlines/moving-average/scatter/func/main.tsx %}
{% endmeta %}

## Data Binding

Trendline series use the data from the main series and do not support binding to a different data set. However, it's possible to bind to a different data field.

The following example demonstrates binding to the `'low'` field of the main OHLC series. Please note, that the trendline must use the canonical field name ("low") and not the data item name ("Low").

{% meta height:460 %}
{% embed_file chart/trendlines/custom-field/func/app.tsx preview %}
{% embed_file chart/trendlines/custom-field/func/main.tsx %}
{% endmeta %}

### Date Series and Aggregates

If the main series is using [Aggregates]({% slug databinding_chart_charts %}#toc-handling-duplicate-categories), as is most common for [Date Series]({% slug axes_chart_charts %}#toc-displaying-dates), the trendlines will bind to the aggregated data. For example, if you're using a `"sum"` aggregate, the trendline will plot the trend for the sums in each category.

{% meta height:460 %}
{% embed_file chart/trendlines/date-series/func/app.tsx preview %}
{% embed_file chart/trendlines/date-series/func/main.tsx %}
{% endmeta %}

## Forecasts

For date and scatter series, trendlines can be extended in both directions using the [forecast]({% slug api_charts_seriestrendline %}#toc-forecast) setting on the trendline.

> The setting has no effect for Moving Average trendlines as this type does not support forecasts.

To enable the forecast for a trendline, set the [`before`]({% slug api_charts_trendlineforecast %}#toc-before) or [`after`]({% slug api_charts_trendlineforecast %}#toc-after) properties to the desired number of intervals.

The example below demonstrates how to add a forecast to a trendline:

{% meta height:460 %}
{% embed_file chart/trendlines/forecast/func/app.tsx preview %}
{% embed_file chart/trendlines/forecast/func/main.tsx %}
{% endmeta %}

## Supported Series Types

Trendlines are supported for the following [chart types]({% slug api_charts_seriestype %}):

-   `"area"`
-   `"bar"`
-   `"boxPlot"`
-   `"bubble"`
-   `"bullet"`
-   `"candlestick"`
-   `"column"`
-   `"horizontalWaterfall"`
-   `"line"`
-   `"ohlc"`
-   `"pie"`
-   `"polarArea"`
-   `"polarLine"`
-   `"polarScatter"`
-   `"radarArea"`
-   `"radarColumn"`
-   `"radarLine"`
-   `"rangeArea"`
-   `"rangeBar"`
-   `"rangeColumn"`
-   `"scatter"`
-   `"scatterLine"`
-   `"verticalArea"`
-   `"verticalBoxPlot"`
-   `"verticalBullet"`
-   `"verticalLine"`
-   `"verticalRangeArea"`
-   `"waterfall"`

## Customization

The trendlines support many of the common series options:

-   [color]({% slug api_charts_chartseriesitemprops %}#toc-color)
-   [dashType]({% slug api_charts_chartseriesitemprops %}#toc-dashtype)
-   [field]({% slug api_charts_chartseriesitemprops %}#toc-field)&mdash;(see [notes on data binding](#data-binding)).
-   [highlight]({% slug api_charts_chartseriesitemprops %}#toc-highlight)
-   [labels]({% slug api_charts_chartseriesitemprops %}#toc-labels)
-   [markers]({% slug api_charts_chartseriesitemprops %}#toc-markers)
-   [style]({% slug api_charts_chartseriesitemprops %}#toc-style)
-   [name]({% slug api_charts_chartseriesitemprops %}#toc-name)
-   [opacity]({% slug api_charts_chartseriesitemprops %}#toc-opacity)
-   [tooltip]({% slug api_charts_chartseriesitemprops %}#toc-tooltip)
-   [type]({% slug api_charts_chartseriesitemprops %}#toc-type)
-   [visible]({% slug api_charts_chartseriesitemprops %}#toc-visible)
-   [visibleInLegend]({% slug api_charts_chartseriesitemprops %}#toc-visibleinlegend)
-   [width]({% slug api_charts_chartseriesitemprops %}#toc-width)
-   [zIndex]({% slug api_charts_chartseriesitemprops %}#toc-zindex)

## Legend Items

By default, the trendlines are displayed in the [Legend]({% slug api_charts_chartlegend %}). They can be toggled by clicking on the legend item as regular series. Hiding the main series will also hide the trendlines.

To hide the trendlines from the legend, set their [visibleInLegend]({% slug api_charts_chartseriesitemprops %}#toc-visibleinlegend) option to `false`:

{% meta height:460 %}
{% embed_file chart/trendlines/hidden-legend-item/func/app.tsx preview %}
{% embed_file chart/trendlines/hidden-legend-item/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts_charts %})
