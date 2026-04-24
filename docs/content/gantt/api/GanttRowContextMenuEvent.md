---
title: GanttRowContextMenuEvent
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttRowContextMenuEvent."
api_reference: true
type: inner_api
slug: api_gantt_ganttrowcontextmenuevent
---

# GanttRowContextMenuEvent
Represents the object of the `onRowContextMenu` Gantt event.


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


The data item which corresponds to the clicked row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### level


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of indexes of each parent and current item in the data tree.


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


A native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React Synthetic Event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[GanttHandle]({% slug api_gantt_gantthandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
</tbody>
</table>



