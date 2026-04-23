---
title: DragEndEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the DragEndEvent."
api_reference: true
type: inner_api
slug: api_charts_dragendevent
---

# DragEndEvent
Arguments for the `dragEnd` event.


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


#### axisRanges


</td>
<td type class="table-cell-type">


<code>


{[name: string]: [AxisRange]({% slug api_charts_axisrange %})}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A dictionary which contains the range (min and max values) of named axes. The axis name is used as a key.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The original user event that triggered the drag action.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Charts]({% slug api_charts_charts %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Chart` component that triggered the event.


</td>
</tr>
</tbody>
</table>



