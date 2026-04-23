---
title: GridColumnResizeEvent
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnResizeEvent."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnresizeevent
---

# GridColumnResizeEvent
Represents the object of the `onColumnResize` Grid event.


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


[GridColumnProps]({% slug api_grid_gridcolumnprops %})[]


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


**Deprecated**. Use `targetColumnId` instead.
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
Can be `null` when the callback source is not user action (e.g.: method call).


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


**Deprecated**.
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


**Deprecated**.
The actual width of the column prior to resizing.


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


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetColumnId?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The id of the clicked/dragged column.
When the callback source is not user action (e.g.: method call), contains only the first column id from the list.


</td>
</tr>
</tbody>
</table>



