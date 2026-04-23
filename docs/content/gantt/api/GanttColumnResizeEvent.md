---
title: GanttColumnResizeEvent
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttColumnResizeEvent."
api_reference: true
type: inner_api
slug: api_gantt_ganttcolumnresizeevent
---

# GanttColumnResizeEvent
Represents the object of the `onColumnResize` Gantt event.


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


#### columns


</td>
<td type class="table-cell-type">


<code>


[GanttColumnProps]({% slug api_gantt_ganttcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current columns collection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### end


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates that resizing is complete and the user has dropped the resize handler.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the column.


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


#### newWidth


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new width of the column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### oldWidth


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The actual width of the column prior to resizing.


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
<tr>
<td class="table-cell-name">


#### totalWidth


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The total width of the columns after the resizing.


</td>
</tr>
</tbody>
</table>



