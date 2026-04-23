---
title: GridRowReorderEvent
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridRowReorderEvent."
api_reference: true
type: inner_api
slug: api_grid_gridrowreorderevent
---

# GridRowReorderEvent
Represents the object of the `onReorderRow` Grid event.


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


#### dragEvent


</td>
<td type class="table-cell-type">


<code>


NormalizedDragEvent


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents a unified drag event that is triggered regardless if the native event underneath is a pointer, mouse, touch, or scroll event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### draggedDataItems


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the currently dragged row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### droppedDataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the row over which the dragged row is dropped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dropPosition


</td>
<td type class="table-cell-type">


<code>


[GridReorderDropPosition]({% slug api_grid_gridreorderdropposition %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The exact dragged row position relative to the position of the drop target row..


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


Event | MouseEvent | PointerEvent | TouchEvent


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


#### target


</td>
<td type class="table-cell-type">


<code>


[GridHandle]({% slug api_grid_gridhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The reference of the Grid in which the row is dropped.


</td>
</tr>
</tbody>
</table>



