---
title: ChartSeriesLabelsToProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartSeriesLabelsToProps."
api_reference: true
type: inner_api
slug: api_charts_chartserieslabelstoprops
---

# ChartSeriesLabelsToProps
Represents the props of the KendoReact ChartSeriesLabelsTo component.


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


The background color of the `to` labels. Accepts a valid CSS color string, including hex and rgb.


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


The border of the `to` labels.


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


The text color of the `to` labels. Accepts a valid CSS color string, including hex and rgb.


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


The function which returns the Chart series `to` label content. You can split the text into multiple lines by using line feed characters (`"\n"`).

The fields available in the function argument are:
- `category`&mdash;The category name. Available for the Area, Bar, Column, Bubble, Donut, Line, Pie, and Waterfall series.
- `dataItem`&mdash;The original data item used to construct the point. If binding to an array, it will be `null`.
- `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked charts.
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


The font style of the `to` labels.


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


The format of the `to` labels. Uses [IntlService format](https://www.telerik.com/kendo-react-ui/components/intl/api/intlservice#toc-format).


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


The margin of the `to` labels. A numeric value sets all margins.


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


The padding of the `to` labels. A numeric value sets all paddings.


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


The position of the `to` labels.

The available options are:
- `"center"`&mdash;The label is positioned at the point center.
- `"insideBase"`&mdash;The label is positioned inside, near the base of the bar.
- `"insideEnd"`&mdash;The label is positioned inside, near the end of the point.
- `"outsideEnd"`&mdash;The label is positioned outside, near the end of the point.
- `"above"`&mdash;The label is positioned at the top of the marker. Applicable for the RangeArea and VerticalRangeArea series.
- `"below"`&mdash;The label is positioned at the bottom of the marker. Applicable for the RangeArea and VerticalRangeArea series.
- `"left"`&mdash;The label is positioned to the left of the marker. Applicable for the RangeArea and VerticalRangeArea series.
- `"right"`&mdash;The label is positioned to the right of the marker. Applicable for the RangeArea and VerticalRangeArea series.


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


If set to `true`, the Chart displays the series `to` labels. By default, the Chart series `to` labels are not displayed.


</td>
</tr>
</tbody>
</table>



