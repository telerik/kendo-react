---
title: ChartNavigatorSeriesItemProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartNavigatorSeriesItemProps."
api_reference: true
type: inner_api
slug: api_charts_chartnavigatorseriesitemprops
---

# ChartNavigatorSeriesItemProps
Represents the props of the KendoReact ChartNavigatorSeriesItem component.


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### aggregate?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The aggregate function for the date series ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-aggregating-data)). The function is used when a category (year, month, or other) contains two or more points. The Chart displays the return value of the function instead of the individual points.

The supported values are:
- `"avg"`&mdash;The average of all values for the date period.
- `"count"`&mdash;The number of values for the date period.
- `"max"`&mdash;The highest value for the date period.
- `"min"`&mdash;The lowest value for the date period.
- `"sum"`&mdash;The sum of all values for the date period. Defaults to `0` if no data points are defined.
- `"sumOrNull"`&mdash;The sum of all values for the date period. Defaults to `null` if no data points are defined.
- `"first"`&mdash;The first value.
- function (values, series, dataItems, category)&mdash;A user-defined aggregate function. Returns a single value or a data item.
- object (compound aggregate)&mdash;Applicable to the Candlestick, Box Plot, and OHLC series. Specifies the aggregate for each data item field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoFit?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to true, the Chart automatically scales down to fit the content area. Applicable for the Pie and Donut series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### axis?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the value axis. The axis option is supported for Scatter plots. For more information on Scatter plots, refer to [`xAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops) and [`yAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartyaxisitemprops).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


[Border]({% slug api_charts_border %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The border of the Chart series. The border option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"donut"`, `"pie"`, `"bubble"`, `"boxPlot"`, `"candlestick"`, or `"ohlc"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### categoryAxis?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the category axis that will be used for the series. If no [`categoryAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops) is specified, the first axis is used.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### categoryField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the category name or date. If the category is a date, the points are rendered in chronological order.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


React child components that can be used to configure nested chart series components.

Supported child components include components for configuring series-specific properties
such as error bars, extremes, highlights, labels, markers, notes, outliers, and tooltips.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### closeField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field that contains the `close` value. The `closeField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"candlestick"` or `"ohlc"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### color?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The series base color.

The supported values are:
- CSS color string, including hex and rgb.
- function (point)&mdash;A user-defined function that is evaluated for each point. Returning `undefined` assumes the default series color.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colorField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series color. The `colorField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"rangeBar"`, `"rangeColumn"`, `"bubble"`, `"donut"`, `"pie"`, `"candlestick"`, `"ohlc"`, or `"waterfall"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### connectors?


</td>
<td type class="table-cell-type">


<code>


[LabelConnectors]({% slug api_charts_labelconnectors %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The label connectors options. The connectors option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"` or `"pie"` and [`series.labels.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartserieslabelsprops#toc-visible) is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### currentField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the current value. The `currentField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bullet"` or `"verticalBullet"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dashType?


</td>
<td type class="table-cell-type">


<code>


[DashType]({% slug api_charts_dashtype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The dash type of line Chart. The `dashType` option is considered only if the [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) option is set to `"line"`.

The following dash types are supported:
- `"dash"`&mdash;A line consisting of dashes.
- `"dashDot"`&mdash;A line consisting of a repeating pattern of dash-dot.
- `"dot"`&mdash;A line consisting of dots.
- `"longDash"`&mdash;A line consisting of a repeating pattern of long-dash.
- `"longDashDot"`&mdash;A line consisting of a repeating pattern of long-dash-dot.
- `"longDashDotDot"`&mdash;A line consisting of a repeating pattern of long-dash-dot-dot.
- `"solid"`&mdash;A solid line.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of data items which represent the series data.

You can set it to:
- Array of objects. Each point is bound to the field specified through the [`series.field`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-field) option.
- Array of numbers. Supported when the [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) option is set to `"area"`, `"bar"`, `"column"`, `"donut"`, `"pie"`, `"line"`, or `"waterfall"`.
- Array of arrays of numbers. Supported when the [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) option is set to `"bubble"`, `"scatter"`, `"scatterLine"`, `"ohlc"`, `"polar"`, `"rangeBar"`, or `"rangeArea"`.

The Bubble series need arrays of three values&mdash;X value, Y value, and Size value&mdash;for example, `[1, 1, 10]`. The Scatter and ScatterLine series need arrays of two values&mdash;X value and Y value. The OHLC and Candlestick series need arrays of four values&mdash;open, high, low, and close. The RangeBar and RangeArea series need arrays of two values&mdash;the from and to value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### downColor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The series color when the open value is greater than the close value. The `downColor` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"candlestick"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### downColorField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field which contains the color that is applied when the `open` value is greater than the `close` value. The `downColorField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"candlestick"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### drilldownField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field which contains the value to use to [drill down](https://www.telerik.com/kendo-react-ui/components/charts/drill-down) into detailed data for the point.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dynamicHeight?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `dynamicHeight` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"funnel"` or `"pyramid"`. When set to `false`, all segments become with the same height. Otherwise, the height of each segment is based on its value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dynamicSlope?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `dynamicSlope` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"funnel"`. When set to `true`, the ratio of the bases of each segment is calculated based on the ratio of `currentDataItem.value`/`nextDataItem.value`. The last element is always created like a rectangle since there is no following element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorBars?


</td>
<td type class="table-cell-type">


<code>


SeriesErrorBars


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The error bars of the Chart series. The `errorBars` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"line"`, `"area"`, `"scatter"`, `"scatterLine"`, or `"bubble"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorHighField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the [`series.errorBars`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-errorbars) high value ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-categorical-charts)). The `errorHighField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"line"`, or `"area"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorLowField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the [`series.errorBars`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-errorbars) low value ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-categorical-charts)). The `errorLowField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"line"`, or `"area"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### explodeField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains a Boolean value indicating whether the sector is exploded. The `explodeField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"` or `"pie"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### extremes?


</td>
<td type class="table-cell-type">


<code>


SeriesExtremes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the Chart series extremes. Applies to extreme outliers. For more information, refer to [`series.outliers`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-outliers).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### for?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the parent series of the trendline.

The `for` option is supported  when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to
"`linearTrendline`", "`exponentialTrendline`", "`logarithmicTrendline`", "`powerTrendline`", "`polynomialTrendline`" or "`movingAverageTrendline`".


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fromField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series from value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gap?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The distance between the categories expressed as a percentage of the bar width. See the related spacing setting. The `gap` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`, `"radarColumn"`, or `"waterfall"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### highField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field which contains the high value. The `highField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"candlestick"` or `"ohlc"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### highlight?


</td>
<td type class="table-cell-type">


<code>


SeriesHighlight


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the Chart series highlight.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### holeSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The diameter of the donut hole in pixels. The `holeSize` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


SeriesLabels


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the Chart series label. The Chart displays the series labels when the [`series.labels.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartserieslabelsprops#toc-visible) option is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### legendItem?


</td>
<td type class="table-cell-type">


<code>


[LegendItem]({% slug api_charts_legenditem %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the Chart legend item.
By default, the Legend item type and markers are inherited from the series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### line?


</td>
<td type class="table-cell-type">


<code>


[SeriesLine]({% slug api_charts_seriesline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Chart line configuration options. The line option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"area"`, `"candlestick"`, `"ohlc"`, or `"waterfall"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### lowerField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series lower value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### lowField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field containing the low value. The `lowField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"candlestick"` or `"ohlc"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


number | [Margin]({% slug api_charts_margin %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The margin around each donut series (ring). A numeric value sets all margins.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### markers?


</td>
<td type class="table-cell-type">


<code>


SeriesMarkers


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the Chart series marker. The Chart displays the series markers when the [`series.markers.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesmarkersprops#toc-visible) option is set to `true`. The markers option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"area"`, `"rangeArea"`, `"line"`, `"scatter"`, `"scatterLine"`, `"radarLine"`, `"radarArea"`, `"polarLine"`, `"polarScatter"`, or `"polarArea"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The maximum size of the Chart bubble series marker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### meanField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series mean value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### medianField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series median value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The minimum size of the Chart bubble series marker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### missingValues?


</td>
<td type class="table-cell-type">


<code>


"gap" | "interpolate" | "zero"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The behavior for handling missing values. The `missingValues` option is available when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"area"`, `"rangeArea"`, `"line"`, `"scatterLine"`, `"radarLine"`, `"radarArea"`, `"polarLine"`, or `"polarArea"`.

The supported values are:
- `"gap"`&mdash;The plot stops before the missing point and continues after it.
- `"interpolate"`&mdash;The value is interpolated from neighboring points. Represents the default value for all series except for the `"area"` and stacked series. Area and stacked series default to `"zero"`.
- `"zero"`&mdash;The value is assumed to be zero.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the Chart series which is visible in the legend.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### neckRatio?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the top-base/bottom-base ratio of the whole Funnel Chart. If the `neckRatio` is set to `3`, it means the top base is three times smaller than the bottom base. The `neckRatio` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"funnel"` and `dynamicSlope` is set to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### negativeColor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The color to use for the Bar, Column, or Waterfall series with negative values. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### negativeValues?


</td>
<td type class="table-cell-type">


<code>


[NegativeBubbleValues]({% slug api_charts_negativebubblevalues %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The options for displaying the Chart negative bubble values.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### notes?


</td>
<td type class="table-cell-type">


<code>


SeriesNotes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the series notes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### noteTextField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series note text ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/notes#toc-series-notes)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opacity?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The opacity of the series. By default, the series are opaque.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### openField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field which contains the open value. The `openField` option is available when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"candlestick"` or `"ohlc"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### outliers?


</td>
<td type class="table-cell-type">


<code>


SeriesOutliers


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the Chart series outliers. Applies to mild outliers. For more information, refer to [`series.extremes`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-extremes).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### outliersField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series outliers value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### overlay?


</td>
<td type class="table-cell-type">


<code>


[Overlay]({% slug api_charts_overlay %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The overlay options of the Chart series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The padding around the Chart (equal on all sides). The padding option is available when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"` or `"pie"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pattern?


</td>
<td type class="table-cell-type">


<code>


[SeriesPattern]({% slug api_charts_seriespattern %}) | (point: any) => [SeriesPattern]({% slug api_charts_seriespattern %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration options of the series pattern.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### patternField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series pattern.
The `patternField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"pie"`, `"donut"`, `"funnel"`, `"heatmap"`, or `"pyramid"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### q1Field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series `q1` value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### q3Field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series `q3` value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### segmentSpacing?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The space in pixels between the different segments of the Funnel or Pyramid Chart. The `segmentSpacing` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"funnel"` or `"pyramid"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The radius of the Chart Donut series in pixels. If not set, the available space is split evenly between the series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sizeField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field which contains the bubble size value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### spacing?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The distance between series points within a category. Expressed as a percentage of the bar width. See the related `gap` setting. The spacing option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`, or `"radarColumn"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stack?


</td>
<td type class="table-cell-type">


<code>


string | boolean | [SeriesStack]({% slug api_charts_seriesstack %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A Boolean value which indicates if the series have to be stacked. A string value is interpreted as [`series.stack.group`](https://www.telerik.com/kendo-react-ui/components/charts/api/seriesstack#toc-group).

The `stack` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"line"`, `"area"`, `"verticalLine"`, `"verticalArea"`, `"radarLine"`, `"radarArea"`, and `"radarColumn"`. If not overridden, the stack settings of the first series are inherited as a default value by the rest of the series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startAngle?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start angle (in degrees) of the first Donut or Pie segment. Angles increase clockwise with zero to the left. Negative values are acceptable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


[LineStyle]({% slug api_charts_linestyle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `style` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"line"`, `"scatterLine"`, `"radarLine"`, or `"polarLine"`.

The supported values are:
- `"normal"` (default)&mdash;The values are connected with a straight line.
- `"step"`&mdash;The values are connected with a right-angled line.
Only available when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"line"`.
- `"smooth"`&mdash;The values are connected with a smooth line.
Not supported for stacked area series with missing values.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### summaryField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the summary type for the Waterfall series. The value (if any) of a data item marked as a summary point will be discarded.

Summary columns are optional and can be one of two types:
- `"runningTotal"`&mdash;Displays the sum of all items since the last `"runningTotal"` point.
- `"total"`&mdash;Displays the sum of all previous items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target?


</td>
<td type class="table-cell-type">


<code>


[BulletTarget]({% slug api_charts_bullettarget %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration options of the target. The `target` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bullet"` or `"verticalBullet"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series to value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltip?


</td>
<td type class="table-cell-type">


<code>


SeriesTooltip


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration options of the Chart series tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### trendline?


</td>
<td type class="table-cell-type">


<code>


[SeriesTrendline]({% slug api_charts_seriestrendline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration options of the series trendlines.

The `trendline` option is supported  when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to
"`linearTrendline`", "`exponentialTrendline`", "`logarithmicTrendline`", "`powerTrendline`", "`polynomialTrendline`" or "`movingAverageTrendline`".


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


[SeriesType]({% slug api_charts_seriestype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the series.

The supported values are:
- `area`
- `bar`
- `boxPlot`
- `bubble`
- `bullet`
- `candlestick`
- `column`
- `donut`
- `exponentialTrendline`
- `funnel`
- `pyramid`
- `heatmap`
- `horizontalWaterfall`
- `line`
- `linearTrendline`
- `logarithmicTrendline`
- `movingAverageTrendline`
- `ohlc`
- `pie`
- `polarArea`
- `polarLine`
- `polarScatter`
- `polynomialTrendline`
- `powerTrendline`
- `radarArea`
- `radarColumn`
- `radarLine`
- `rangeArea`
- `rangeBar`
- `rangeColumn`
- `scatter`
- `scatterLine`
- `verticalArea`
- `verticalBoxPlot`
- `verticalBullet`
- `verticalLine`
- `verticalRangeArea`
- `waterfall`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### upperField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the series upper value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the visible property of a Chart series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visibleInLegend?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A value which indicates whether to show the point category (for Funnel, Pyramid, Donut, and Pie series) or the series name (for other available series types) in the legend.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visibleInLegendField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which indicates whether to show the point category name in the legend. The `visibleInLegendField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"funnel"`, `"pyramid"`, `"donut"`, or `"pie"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [SeriesVisualArgs]({% slug api_charts_seriesvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that can be used to create a custom visual for the points. Applicable for the Bar, Column, Pie, Donut, Funnel, Pyramid, Range Bar, Range Column, and Waterfall series.

The available argument fields are:

- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `options`&mdash;The point options.
- `createVisual`&mdash;A function that can be used to get the default visual.
- `category`&mdash;The point category.
- `dataItem`&mdash;The point `dataItem`.
- `value`&mdash;The point value.
- `stackValue`&mdash;The cumulative point value on the stack. Available only for the stackable series.
- `sender`&mdash;The Chart instance.
- `series`&mdash;The point series.
- `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked Charts.
- `runningTotal`&mdash;The sum of point values since the last `"runningTotal"` summary point. Available for the Waterfall series.
- `total`&mdash;The sum of all previous series values. Available for the Waterfall series.
- `radius`&mdash;The segment radius. Available for the Donut and Pie series.
- `innerRadius`&mdash;The segment inner radius. Available for the Donut series.
- `startAngle`&mdash;The segment start angle. Available for the Donut and Pie series.
- `endAngle`&mdash;The segment end angle. Available for the Donut and Pie series.
- `center`&mdash;The segment center point. Available for the Donut and Pie series.
- `points`&mdash;The segment points. Available for the Funnel and Pyramid series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The line width. The `width` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"line"`, `"scatterLine"`, `"radarLine"`, or `"polarLine"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### xAxis?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the X axis. The [`xAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops) option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bubble"`, `"scatter"`, `"scatterLine"`, or `"polar"` series. For the Polar series, the [`xAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops) range is expressed in degrees.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### xErrorHighField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the [`series.errorBars`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-errorbars) xAxis high value ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-scatter-charts)). The `xErrorHighField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"scatter"``, `"scatterLine"`, or `"bubble"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### xErrorLowField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the [`series.errorBars`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-errorbars) xAxis low value ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-scatter-charts)). The `xErrorLowField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"scatter"`, `"scatterLine"`, or `"bubble"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### xField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field containing the x value. The `xField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bubble"`, `"scatter"`, `"scatterLine"`, or `"polar"` series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### yAxis?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the Y axis to use. Available for the Bubble, Scatter, Scatter Line, and Polar series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### yErrorHighField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the [`series.errorBars`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-errorbars) yAxis high value ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-scatter-charts)). The `yErrorHighField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"scatter"`, `"scatterLine"`, or `"bubble"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### yErrorLowField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the [`series.errorBars`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-errorbars) yAxis low value ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-scatter-charts)). The `yErrorLowField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"scatter"`, `"scatterLine"`, or `"bubble"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### yField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field containing the y value. The `yField` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bubble"`, `"scatter"`, or `"scatterLine"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional Z-index that can be used to change the default stacking order of series. The series with the highest Z-index are placed on top. Series with no Z-index use the default stacking order based on the series type. For example, Line series will be on top with the Bar and Area following after.


</td>
</tr>
</tbody>
</table>



