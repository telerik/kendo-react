---
title: GridHeaderSelectionChangeEvent
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridHeaderSelectionChangeEvent."
api_reference: true
type: inner_api
slug: api_grid_gridheaderselectionchangeevent
---

# GridHeaderSelectionChangeEvent
Represents the object of the `onHeaderSelectionChange` Grid event.


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


#### dataItems


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current Grid leaf data items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field of the column in which the cell is located.


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


#### select


</td>
<td type class="table-cell-type">


<code>


SelectDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new [SelectDescriptor](https://www.telerik.com/kendo-react-ui/components/datatools/api/selectdescriptor) based on the user action.


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


[GridHandle]({% slug api_grid_gridhandle %})


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



