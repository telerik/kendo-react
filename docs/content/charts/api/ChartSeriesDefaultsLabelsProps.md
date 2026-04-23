---
title: ChartSeriesDefaultsLabelsProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartSeriesDefaultsLabelsProps."
api_reference: true
type: inner_api
slug: api_charts_chartseriesdefaultslabelsprops
---

# ChartSeriesDefaultsLabelsProps
Represents the props of the KendoReact ChartSeriesDefaultsLabels component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/series#toc-default-series-configuration)).


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


#### background?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The background color of the labels. Accepts a valid CSS color string, including hex and rgb.


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


The border of the labels.


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


The text color of the labels. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


(e: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The function which returns the Chart series labels content. You can split the text into multiple lines by using line feed characters (`"\n"`).

The available fields in the function argument are:
- `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Funnel, Pyramid, Line, and Pie series.
- `dataItem`&mdash;The original data item used to construct the point. If binding to an array, it will be `null`.
- `percentage`&mdash;The point value represented as a percentage value. Available for the Donut, Funnel, Pyramid and Pie series.
- `series`&mdash;The data series.
- `value`&mdash;The point value. Can be a number or object containing each bound field.
- `runningTotal`&mdash;The sum of point values since the last `"runningTotal"` summary point. Available for the Waterfall series.
- `total`&mdash;The sum of all previous series values. Available for the Waterfall series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### font?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font style of the labels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format of the labels. Uses the [`format`](https://www.telerik.com/kendo-react-ui/components/intl/api/intlservice#toc-format) method of IntlService.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### from?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaultsLabelsFrom


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Chart series `from` label configuration. The Chart displays the series labels when either the [`seriesDefaults.labels.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesdefaultslabelsprops#toc-visible) or the [`seriesDefaults.labels.from.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesdefaultslabelsfromprops#toc-visible) option is set to `true`.


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


The margin of the labels. A numeric value sets all margins.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number | [Padding]({% slug api_charts_padding %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The padding of the labels. A numeric value sets all margins.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### to?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaultsLabelsTo


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Chart series `to` label configuration. The Chart displays the series labels when either the [`seriesDefaults.labels.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesdefaultslabelsprops#toc-visible) or the [`seriesDefaults.labels.to.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesdefaultslabelstoprops#toc-visible) option is set to `true`.


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


If set to `true`, the Chart displays the series labels. By default, the Chart series labels are not displayed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [SeriesLabelsVisualArgs]({% slug api_charts_serieslabelsvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that can be used to create a custom visual for the labels.

The available argument fields are:
- `text`&mdash;The label text.
- `rect`&mdash;The geometry [`Rect`](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `sender`&mdash;The Chart instance (might be `undefined`).
- `options`&mdash;The label options.
- `createVisual`&mdash;A function that can be used to get the default visual.


</td>
</tr>
</tbody>
</table>



