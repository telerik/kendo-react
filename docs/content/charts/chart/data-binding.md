---
title: Data Binding
description: 'Bind the KendoReact Chart component to data in React projects.'
components: ["chart"]
slug: databinding_chart_charts
position: 4
---

# Data Binding

The Chart supports the binding of its data series and category axis to arrays and Datasets of objects.

## Binding Series

This section provides information on the binding methods for the Chart series in general. For more information on how to configure each Chart series, refer to the articles on the [Chart series types]({% slug area_seriestypes_charts %}).

### Arrays of Values

The simplest form of data binding involves the supplying of each series with an array of values.

{% meta height:470 %}
{% embed_file data-binding/values/func/app.tsx preview %}
{% embed_file data-binding/values/func/main.tsx %}
{% endmeta %}

### Arrays of Arrays

Some series require more than one value per point&mdash;for example, the Scatter (x and y) and Bubble (x, y, and size) series.

The following example demonstrates how to bind a Bubble series to an array of arrays.

{% meta height:470 %}
{% embed_file data-binding/arrays/func/app.tsx preview %}
{% embed_file data-binding/arrays/func/main.tsx %}
{% endmeta %}

### Objects

The Chart allows you to bind it to objects by specifying the fields you want to use&mdash;for the value, category, X value, Y value, and so on. This is the most commonly used type of binding as it allows you to use your model with little or no modification.

The following example demonstrates how to configure a Column series with bound category text and a value.

{% meta height:470 %}
{% embed_file data-binding/objects/func/app.tsx preview %}
{% embed_file data-binding/objects/func/main.tsx %}
{% endmeta %}

### Groups of Objects

It is often convenient to plot a separate series for each unique category in a data set. For example, a Line Chart for each product in a sales report. Typically, the exact number of categories is not known in advance.

The [Data Query]({% slug overview_dataquery %}) package offers a convenient [`groupBy`]({% slug api_kendo-data-query_groupby %}) method that you can use to split the records into groups. It takes the data and a [`GroupDescriptor`]({% slug api_kendo-data-query_groupdescriptor %}). The output is a [`GroupResult`]({% slug api_kendo-data-query_groupresult %}) that contains the groups and their items.

The following example demonstrates how to plot a Line Chart for each service.

{% meta height:470 %}
{% embed_file data-binding/group-objects/func/app.tsx preview %}
{% embed_file data-binding/group-objects/func/main.tsx %}
{% endmeta %}

## Binding Categories

The category axis of Categorical Charts is a data-bound component just like the series.

It supports the following basic approaches for providing the category list:

-   [Arrays of labels](#toc-arrays-of-labels)
-   [Category fields](#toc-category-fields)

> When the Chart is bound to dates, the category axis provides dedicated functions. For more information, refer to the section on [displaying time series]({% slug axes_chart_charts %}#toc-displaying-time-series).

### Arrays of Labels

The simplest form of data binding involves the supplying of an array of labels for the categories to the axis. The list will be displayed as is, without any modifications. Series data points are positioned in sequence along the axis.

> -   The order of the categories has no relation to the order of the series data points.
> -   The number of the categories has to be equal to the number of the data points in the series.
> -   To preserve the order, the missing values in the series have to be represented by `null`.

{% meta height:470 %}
{% embed_file data-binding/arrays-labels/func/app.tsx preview %}
{% embed_file data-binding/arrays-labels/func/main.tsx %}
{% endmeta %}

### Category Fields

The [previous approach](#toc-arrays-of-labels) is error-prone because of the necessity for you to maintain a category and a particular data order. To avoid this requirement, bind the categories to the same model object as the series. In this way, the series points and categories will always be matched automatically.

{% meta height:470 %}
{% embed_file data-binding/category-fields/func/app.tsx preview %}
{% embed_file data-binding/category-fields/func/main.tsx %}
{% endmeta %}

### Handling Duplicate Categories

Binding to a category field makes it possible for two data points to have the same category&mdash;the following example demonstrates two values that are declared for `'Chai'`.

{% meta height:470 %}
{% embed_file data-binding/duplicate-categories/func/app.tsx preview %}
{% embed_file data-binding/duplicate-categories/func/main.tsx %}
{% endmeta %}

In this case, the Chart takes the data points from the source data set and produces a new point by using an aggregate function.

By default, the [`aggregate`]({% slug api_charts_chartseriesitemprops %}#toc-aggregate) function returns the maximum value of the value fields. If the category contains only one point, it returns it without modification. Other aggregates, such as count and sum, produce their own value even if the category contains just one data point.

{% meta height:470 %}
{% embed_file data-binding/aggregates/func/app.tsx preview %}
{% embed_file data-binding/aggregates/func/main.tsx %}
{% endmeta %}

It is also possible to define your own aggregate functions, as demonstrated in the following example.

> When the category binding is in use, the aggregate function is executed for all unique categories.

{% meta height:470 %}
{% embed_file data-binding/custom-aggregate/func/app.tsx preview %}
{% embed_file data-binding/custom-aggregate/func/main.tsx %}
{% endmeta %}

## No Data Overlay

Use the [ChartNoDataOverlay](slug:api_charts_chartnodataoverlay) component when no series data is available. The Chart will display a No Data overlay with a message "No data available.". The message can be localized and is part of the Charts [Globalization - Messages](slug:globalization_charts#toc-messages).

{% meta height:470 %}
{% embed_file data-binding/no-data-overlay/func/app.tsx preview %}
{% embed_file data-binding/no-data-overlay/func/main.tsx %}
{% endmeta %}

For further customization, add the custom content as `children` of the [ChartNoDataOverlay](slug:api_charts_chartnodataoverlay) component.

{% meta height:470 %}
{% embed_file data-binding/no-data-overlay-custom/func/app.tsx preview %}
{% embed_file data-binding/no-data-overlay-custom/func/main.tsx %}
{% endmeta %}

## Dynamic Data Updates

The Chart enables you to show dynamic data updates by changing the series [`data`](slug:api_charts_chartseriesitemprops#data) at runtime to display points that are added, removed, or modified.

The following example demonstrates how to add, remove, and randomize data points in a [`line`](slug:api_charts_chartseriesitemprops#type) series of a Chart. Each button rebinds a new array to the [`data`](slug:api_charts_chartseriesitemprops#data) prop of the [ChartSeriesItem](slug:api_charts_chartseriesitem).

<demo metaUrl="charts/data-binding/data-operations/" height="570"></demo>

The [StockChart](slug:api_charts_stockchartprops) supports the same dynamic updates. The following example simulates a live feed by appending a new [`candlestick`](slug:api_charts_chartseriesitemprops#toc-type) point every second while the **Play** control is active. Use the **Pause** control to stop the stream, inspect the current range through the [`ChartNavigator`](slug:api_charts_chartnavigatorprops), and resume whenever you need to continue receiving updates. The visible range stays fixed through the [ChartNavigatorSelect](slug:api_charts_chartnavigatorselectprops) [`from`](slug:api_charts_chartnavigatorselectprops#toc-from) and [`to`](slug:api_charts_chartnavigatorselectprops#toc-to) props.

<demo metaUrl="charts/data-binding/stock-operations/" height="570"></demo>

## Suggested Links

-   [Elements]({% slug axes_chart_charts %})
-   [API Reference of the Chart]({% slug api_charts %})
-   [Glossary]({% slug glossary_charts %})
