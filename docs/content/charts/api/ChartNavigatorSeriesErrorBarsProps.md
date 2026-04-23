---
title: ChartNavigatorSeriesErrorBarsProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartNavigatorSeriesErrorBarsProps."
api_reference: true
type: inner_api
slug: api_charts_chartnavigatorserieserrorbarsprops
---

# ChartNavigatorSeriesErrorBarsProps
Represents the props of the KendoReact ChartNavigatorSeriesErrorBars component.


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


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The color of the error bars. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endCaps?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, the caps of the error bars are not displayed. By default, the caps are visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### line?


</td>
<td type class="table-cell-type">


<code>


[ErrorBarLine]({% slug api_charts_errorbarline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The error bars line options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string | number | any[] | (data: { value: number; }) => string | number | any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The error bars value ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-calculating-values-based-on-data)). The value option is supported when [series.type](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"line"`, or `"area"`.

The following value types are supported:
- `"stderr"`&mdash;The standard error of the series values will be used to calculate the point low and high values.
- `"stddev(n)"`&mdash;The standard deviation of the series values will be used to calculate the point low and high values. Between the parentheses, a number can be specified that will be multiplied by the calculated standard deviation.
- `"percentage(n)"`&mdash;A percentage of the point value.
- A number that will be subtracted or added to the point value.
- An array that holds the low and high difference from the point value.
- A function that returns the `errorBars` point value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [ErrorBarsVisualArgs]({% slug api_charts_errorbarsvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that for creating custom visuals for the error bars.

The available argument fields are:
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `options`&mdash;The error bar options.
- `createVisual`&mdash;A function that can be used to get the default visual.
- `low`&mdash;The error bar low value.
- `high`&mdash;The error bar high value.
- `sender`&mdash;The Chart instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### xValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the [`xAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops) error bars ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-calculating-values-based-on-data)).

For a list of the supported value types, refer to the [`series.errorBars.value`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartserieserrorbarsprops#toc-value) option. The `xValue` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"scatter"`, `"scatterLine"`, or `"bubble"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### yValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the [`yAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartyaxisitemprops) error bars ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/error-bars#toc-calculating-values-based-on-data)).

For a list of supported value types, refer to the [`series.errorBars.value`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartserieserrorbarsprops#toc-value) option. The `yValue` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"scatter"`, `"scatterLine"`, or `"bubble"`.


</td>
</tr>
</tbody>
</table>



