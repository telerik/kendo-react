---
title: ChartSeriesDefaultsProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartSeriesDefaultsProps."
api_reference: true
type: inner_api
slug: api_charts_chartseriesdefaultsprops
---

# ChartSeriesDefaultsProps
Represents the props of the KendoReact ChartSeriesDefaults component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/series#toc-default-series-configuration)).


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


The border of the series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusHighlight?


</td>
<td type class="table-cell-type">


<code>


[FocusHighlight]({% slug api_charts_focushighlight %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The focus highlight configuration options.


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


The distance between category clusters.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaultsLabels


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The label configuration of the Chart series. The Chart displays the series labels when the [`seriesDefaults.labels.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesdefaultslabelsprops#toc-visible) option is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### notes?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaultsNotes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `seriesDefaults` notes configuration.


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


The Chart series overlay options.


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


The space between the Chart series as a proportion of the series width. The `spacing` option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`, and `"waterfall"`.


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


A Boolean value which indicates if the series has to be stacked. The stack option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bar"`, `"column"`, `"line"`, `"area"`, `"verticalLine"`, `"verticalArea"`, `"radarLine"`, `"radarArea"`, and `"radarColumn"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltip?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaultsTooltip


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


The default type of the series.

The supported values are:
- `area`
- `bar`
- `bubble`
- `bullet`
- `candlestick`
- `column`
- `donut`
- `funnel`
- `pyramid`
- `line`
- `ohlc`
- `pie`
- `polarArea`
- `polarLine`
- `polarScatter`
- `radarArea`
- `radarColumn`
- `radarLine`
- `rangeArea`
- `rangeBar`
- `rangeColumn`
- `scatter`
- `scatterLine`
- `waterfall`
- `verticalArea`
- `verticalBullet`
- `verticalLine`
- `verticalRangeArea`
- `waterfall`


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


A function for creating custom visuals for the points. Applicable for the Bar and Column series.

The available argument fields are:
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `options`&mdash;The point options.
- `createVisual`&mdash;A function that can be used to get the default visual.
- `category`&mdash;The point category.
- `dataItem`&mdash;The point `dataItem`.
- `value`&mdash;The point value.
- `sender`&mdash;The Chart instance.
- `series`&mdash;The point series.


</td>
</tr>
</tbody>
</table>



