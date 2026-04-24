---
title: ChartNavigatorSeriesLabelsFromProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartNavigatorSeriesLabelsFromProps."
api_reference: true
type: inner_api
slug: api_charts_chartnavigatorserieslabelsfromprops
---

# ChartNavigatorSeriesLabelsFromProps
Represents the props of the KendoReact ChartNavigatorSeriesLabelsFrom component.


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


The background color of the `from` labels. Accepts a valid CSS color string, including hex and rgb.


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


The border of the `from` labels.


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


The text color of the `from` labels. Accepts a valid CSS color string, including hex and rgb.


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


The function which returns the Chart series `from` label content.

The fields available in the function argument are:
- `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Line, Pie, and Waterfall series.
- `dataItem`&mdash;The original data item used to construct the point. If binding to an array, it will be `null`.
- `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked charts.
- `series`&mdash;The data series.
- `value`&mdash;The point value. Can be a number or object containing each bound field.
- `runningTotal`&mdash;The sum of point values since the last `"runningTotal"` summary point. Available for the Waterfall series.
- `total`&mdash;The sum of all previous series values. Available for the Waterfall series.

The text can be split into multiple lines by using the line feed characters (`"\n"`).


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


The font style of the `from` labels.


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


The format of the `from` labels. Uses the IntlService [`format`](https://www.telerik.com/kendo-react-ui/components/intl/api/intlservice#toc-format) method.


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


The margin of the `from` labels. A numeric value sets all margins.


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


The padding of the `from` labels. A numeric value sets all paddings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"center" | "insideBase" | "insideEnd" | "outsideEnd"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The position of the `from` labels.

The supported values are:
- `"center"`&mdash;The label is positioned at the point center.
- `"insideBase"`&mdash;The label is positioned inside, near the base of the bar.
- `"insideEnd"`&mdash;The label is positioned inside, near the end of the point.
- `"outsideEnd"`&mdash;The label is positioned outside, near the end of the point.
- `"above"`&mdash;the label is positioned at the top of the marker. Applicable for `"rangeArea"` and `"verticalRangeArea"` series.
- `"below"`&mdash;the label is positioned at the bottom of the marker. Applicable for `"rangeArea"` and `"verticalRangeArea"` series.
- `"left"`&mdash;the label is positioned to the left of the marker. Applicable for `"rangeArea"` and `"verticalRangeArea"` series.
- `"right"`&mdash;the label is positioned to the right of the marker. Applicable for `"rangeArea"` and `"verticalRangeArea"` series.


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


If set to `true`, the Chart displays the series `from` labels. By default, the Chart series `from` labels are not displayed.


</td>
</tr>
</tbody>
</table>



