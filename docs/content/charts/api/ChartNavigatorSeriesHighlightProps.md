---
title: ChartNavigatorSeriesHighlightProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartNavigatorSeriesHighlightProps."
api_reference: true
type: inner_api
slug: api_charts_chartnavigatorserieshighlightprops
---

# ChartNavigatorSeriesHighlightProps
Represents the props of the KendoReact ChartNavigatorSeriesHighlight component.


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


The border of the highlighted Chart series.

The color is computed automatically from the base point color. The border option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"`, `"bubble"`, `"pie"`, `"candlestick"`, or `"ohlc"`.


</td>
</tr>
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


The highlight color. Accepts a valid CSS color string, including hex and rgb. The color option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"` or `"pie"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### inactiveOpacity?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The opacity of the series when another series is highlighted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### line?


</td>
<td type class="table-cell-type">


<code>


[HighlightLine]({% slug api_charts_highlightline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The line of the highlighted Chart series. The color is computed automatically from the base point color. The line option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"candlestick"` or `"ohlc"`.


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


The opacity of the highlighted points. The opacity option is supported when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"bubble"`, `"pie"`, or `"donut"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toggle?


</td>
<td type class="table-cell-type">


<code>


(e: [HighlightToggleArgs]({% slug api_charts_highlighttoggleargs %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for handling the toggling of the points highlight.

The available argument fields are:
- `preventDefault`&mdash;A function that can be used to prevent the showing of the default highlight overlay.
- `show`&mdash;A Boolean value indicating whether the highlight has to be shown.
- `visual`&mdash;The visual element that needs to be highlighted.
- `category`&mdash;The point category.
- `dataItem`&mdash;The point `dataItem`.
- `value`&mdash;The point value.
- `series`&mdash;The point series.


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


If set to `true`, the Chart highlights the series when the user hovers over it with the mouse. By default, the highlighting of the Chart series is enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [HighlightVisualArgs]({% slug api_charts_highlightvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for setting custom visuals for the point highlights.

The available argument fields are:
- `createVisual`&mdash;A function that can be used to get the default highlight visual.
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `visual`&mdash;The visual element that needs to be highlighted.
- `options`&mdash;The point options.
- `category`&mdash;The point category.
- `dataItem`&mdash;The point `dataItem`.
- `value`&mdash;The point value.
- `sender`&mdash;The Chart instance.
- `series`&mdash;The point series.
- `stackValue`&mdash;The cumulative point value on the stack. Available only for the stackable series.
- `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked charts.
- `runningTotal`&mdash;The sum of point values since the last `"runningTotal"` summary point. Available for the Waterfall series.
- `total`&mdash;The sum of all previous series values. Available for the Waterfall series.
- `from`&mdash;The `from` point highlight visual options. Available for the RangeArea and VerticalRangeArea series.
- `to`&mdash;The `to` point highlight visual options. Available for the RangeArea and VerticalRangeArea series.


</td>
</tr>
</tbody>
</table>



