---
title: HighlightVisualArgs
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the HighlightVisualArgs."
api_reference: true
type: inner_api
slug: api_charts_highlightvisualargs
---

# HighlightVisualArgs
The context for the point highlight visual function.


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


The data item of the point.


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


The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked series.


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


The series of the point.


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


The value of the point.


</td>
</tr>
</tbody>
</table>



