---
title: GanttAddClickEvent
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttAddClickEvent."
api_reference: true
type: inner_api
slug: api_gantt_ganttaddclickevent
---

# GanttAddClickEvent
Represents the object of the `onAddClick` Gantt event.


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


#### direction


</td>
<td type class="table-cell-type">


<code>


[AddDirection]({% slug api_gantt_adddirection %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The direction of the add action.


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


#### selectedDataItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item which is currently selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slotEnd


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Current view first slot range end date.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### slotStart


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Current view first slot range start date.


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



