---
title: SeriesStack
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesStack."
api_reference: true
type: inner_api
slug: api_charts_seriesstack
---

# SeriesStack
Configures the Stacked series.


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


#### group?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The optional stack group name. The `group` option is supported for the Bar and Column series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"normal" | "100%"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of stack to plot.

The supported types are:
* `"normal"`&mdash;The value of the stack is the sum of all points in the category (or group).
* `"100%"`&mdash;The value of the stack is always 100% (1.00). Points within the category (or group) are represented in percentage.


</td>
</tr>
</tbody>
</table>



