---
title: Error Bars
description: 'Indicate the data variability by using error bars of the KendoReact Chart.'
components: ["chart"]
slug: errorbars_chart_charts
---

# Error Bars

The error bars enable you to indicate the variability of the Chart data.

To display error bars, either:

-   [Bind specific high and low values from the data](#toc-binding-specific-values), or
-   [Configure the Chart to calculate the high and low values based on the series values](#toc-calculating-values-based-on-data).

## Binding Specific Values

The binding of specific high and low values in the Charts requires different approaches when working with:

-   [Categorical charts](#toc-categorical-charts)
-   [Scatter charts](#toc-scatter-charts)

### Categorical Charts

For categorical charts, you can bind the values by specifying the high and low fields from the data through the [`errorHighField`]({% slug api_charts_chartseriesitemprops %}#toc-errorhighfield) and [`errorLowField`]({% slug api_charts_chartseriesitemprops %}#toc-errorlowfield) options of the series.

The following example demonstrates how to bind the values for Categorical series.

{% meta height:470 %}
{% embed_file chart/error-bars/overview/func/app.tsx preview %}
{% embed_file chart/error-bars/overview/func/main.tsx %}
{% endmeta %}

### Scatter Charts

For scatter charts, you can display error bars both for the X-axis and for the Y-axis values. To bind the values for the X axis, set the [`xErrorLowField`]({% slug api_charts_chartseriesitemprops %}#toc-xerrorlowfield) and [`xErrorHighField`]({% slug api_charts_chartseriesitemprops %}#toc-xerrorhighfield) options of the series. To bind the values for the Y axis, set the [`yErrorLowField`]({% slug api_charts_chartseriesitemprops %}#toc-yerrorlowfield) and [`yErrorHighField`]({% slug api_charts_chartseriesitemprops %}#toc-yerrorhighfield) options of the series.

The following example demonstrates how to bind the values for scatter series.

{% meta height:470 %}
{% embed_file chart/error-bars/scatter-charts/func/app.tsx preview %}
{% embed_file chart/error-bars/scatter-charts/func/main.tsx %}
{% endmeta %}

## Calculating Values Based on Data

The Chart supports the calculation of the low and high values based on the point value.

To specify the way the values are calculated:

-   For categorical charts, set the [`errorBars.value`]({% slug api_charts_chartserieserrorbarsprops %}#toc-value).
-   For scatter charts, set the [`errorBars.xValue`]({% slug api_charts_chartserieserrorbarsprops %}#toc-xvalue) and [`errorBars.yValue`]({% slug api_charts_chartserieserrorbarsprops %}#toc-yvalue) for scatter series, to one of the following values:
    -   [Numeric](#toc-numeric-values)
    -   [Array](#toc-array-values)
    -   [Percentage](#toc-percentage-values)
    -   [Statistical](#toc-statistical-values)
    -   [Custom](#toc-custom-values)

### Numeric Values

The high and low values are calculated by adding or subtracting the value to the point value.

{% meta height:470 %}
{% embed_file chart/error-bars/numeric-values/func/app.tsx preview %}
{% embed_file chart/error-bars/numeric-values/func/main.tsx %}
{% endmeta %}

### Array Values

The high and low values are calculated by adding the second element to and subtracting the first element from the point value.

{% meta height:470 %}
{% embed_file chart/error-bars/array-values/func/app.tsx preview %}
{% embed_file chart/error-bars/array-values/func/main.tsx %}
{% endmeta %}

### Percentage Values

The high and low values are calculated by adding or subtracting the value to a percentage of the point value. To use percentage values, set a string value in the `'percentage(n)'` format where `n` indicates the percentage.

{% meta height:470 %}
{% embed_file chart/error-bars/percentage-values/func/app.tsx preview %}
{% embed_file chart/error-bars/percentage-values/func/main.tsx %}
{% endmeta %}

### Statistical Values

The error bars support statistical calculations based on the series data.

The available types are:

-   [Standard errors](https://en.wikipedia.org/wiki/Standard_error). To specify that a standard error will be used, set `"stderr"` as a value.
-   [Population standard deviations](https://en.wikipedia.org/wiki/Standard_deviation). To use a standard deviation, set `"stddev"` with an optional number between parentheses appended at the end. The number will be multiplied by the calculated standard deviation value.

{% meta height:470 %}
{% embed_file chart/error-bars/statistical-values/func/app.tsx preview %}
{% embed_file chart/error-bars/statistical-values/func/main.tsx %}
{% endmeta %}

### Custom Values

If you need a custom algorithm to calculate the high and low value, specify a function. The function is expected to return a valid error bar value and passes an object with the following fields:

-   `dataItem`&mdash;The point data item.
-   `value`&mdash;The point value.
-   `category`&mdash;The point category.
-   `index`&mdash;The point index.
-   `series`&mdash;The series configuration.

{% meta height:470 %}
{% embed_file chart/error-bars/custom-values/func/app.tsx preview %}
{% embed_file chart/error-bars/custom-values/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Chart]({% slug api_charts %})
