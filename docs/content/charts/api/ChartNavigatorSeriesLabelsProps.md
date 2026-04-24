---
title: ChartNavigatorSeriesLabelsProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartNavigatorSeriesLabelsProps."
api_reference: true
type: inner_api
slug: api_charts_chartnavigatorserieslabelsprops
---

# ChartNavigatorSeriesLabelsProps
Represents the props of the KendoReact ChartNavigatorSeriesLabels component.


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


#### align?


</td>
<td type class="table-cell-type">


<code>


"center" | "circle" | "left" | "right" | "column"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The alignment of the label when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"`, `"funnel"`, `"pyramid"` or `"pie"`.

The supported values  for `"donut"` and `"pie"` are:
- `"circle"`&mdash;The labels are positioned in circle around the Chart.
- `"column"`&mdash;The labels are positioned in columns to the left and right of the Chart.

The supported values for `"funnel"` and `"pyramid"` are:
- `"center"`&mdash;The labels are positioned in the center over the funnel segment.
- `"right"`&mdash;The labels are positioned on the right side of the Chart and, if there is enough space, do not overlap the funnel segments.
- `"left"`&mdash;The labels are positioned on the left side of the Chart and, if there is enough space, do not overlap the funnel segments.


</td>
</tr>
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


React child components that can be used to configure nested chart series label components.

Supported child components include label configuration components for specialized chart types.


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


The function which returns the Chart series label content. You can split the text into multiple lines by using line feed characters (`"\n"`).

The fields available in the function argument are:

- `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Line, Pie, and Waterfall series.
- `dataItem`&mdash;The original data item used to construct the point. If binding to an array, it will be `null`.
- `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked charts.
- `series`&mdash;The data series.
- `stackValue`&mdash;The cumulative point value on the stack. Available only for the stackable series.
- `value`&mdash;The point value. Can be a number or object containing each bound field.
- `runningTotal`&mdash;The sum of point values since the last `"runningTotal"` summary point. Available for the Waterfall series.
- `total`&mdash;The sum of all previous series values. Available for the Waterfall series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### distance?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The distance between the labels when [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) is set to `"donut"` or `"pie"`.


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


SeriesLabelsFrom


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `from` label configuration of the Chart series. The Chart displays the series from labels when either the [`series.labels.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartserieslabelsprops#toc-visible) or the [`series.labels.from.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesdefaultslabelsfromprops#toc-visible) option is set to `true`.


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


The padding of the labels. A numeric value sets all paddings. Bar and Column series always apply full padding and ignore this setting.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


[SeriesLabelsPosition]({% slug api_charts_serieslabelsposition %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The position of the labels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### to?


</td>
<td type class="table-cell-type">


<code>


SeriesLabelsTo


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `to` label configuration of the Chart series. The Chart displays the series to labels when either the [`series.labels.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartserieslabelsprops#toc-visible) or the [`series.labels.to.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartserieslabelstoprops#toc-visible) option is set to `true`.


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
- `options`&mdash;The label options.
- `createVisual`&mdash;A function that can be used to get the default visual.
- `sender`&mdash;The Chart instance (might be `undefined`).


</td>
</tr>
</tbody>
</table>



