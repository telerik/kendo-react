---
title: SeriesLine
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesLine."
api_reference: true
type: inner_api
slug: api_charts_seriesline
---

# SeriesLine
The appearance settings for the line of the Area, Candlestick, OHLC, and Waterfall series.


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


The color of the line. Accepts a valid CSS color string, including hex and rgb.


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


The line opacity. By default, the line is opaque (`opacity = 1`).


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


The drawing style of the line. Applicable for the Area, Range Area, Polar Area, and Radar Area series.

The supported values are:
* `"normal" (default)`&mdash;The values are connected with a straight line.
* `"step"`&mdash;The values are connected with a right-angled line. Supported only for the Area and Range Area series.
* `"smooth"`&mdash;The values are connected with a smooth line.


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


The line width in pixels.
By default, the width is set to `0` and the line is not visible.


</td>
</tr>
</tbody>
</table>



