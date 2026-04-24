---
title: SeriesVisualArgs
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesVisualArgs."
api_reference: true
type: inner_api
slug: api_charts_seriesvisualargs
---

# SeriesVisualArgs
The context for the series point visual function.


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


#### category


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point category.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### center?


</td>
<td type class="table-cell-type">


<code>


Point


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The center point of the segment.
Available for the Donut and Pie series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### createVisual


</td>
<td type class="table-cell-type">


<code>


() => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that can be used to get the default visual.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point data item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endAngle?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end angle of the segment. Available for the Donut and Pie series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### innerRadius?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The inner radius of the segment. Available for the Donut and Pie series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### options


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### percentage?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked charts.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### points?


</td>
<td type class="table-cell-type">


<code>


Point[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The segment points. Available for the Donut and Pie series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### radius?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The segment radius. Available for the Donut and Pie series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rect


</td>
<td type class="table-cell-type">


<code>


Rect


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rectangle that defines the normal position of the visual.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### runningTotal?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The sum of point values since the last `runningTotal` summary point. Available for the Waterfall series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sender


</td>
<td type class="table-cell-type">


<code>


[Chart]({% slug api_charts_chart %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The instance of the Chart component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### series


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point series.


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


The start angle of the segment. Available for the Donut and Pie series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### total?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The sum of all previous series values. Available for the Waterfall series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point value.


</td>
</tr>
</tbody>
</table>



