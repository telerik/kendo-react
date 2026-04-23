---
title: TreeListRowDragEvent
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the TreeListRowDragEvent."
api_reference: true
type: inner_api
slug: api_treelist_treelistrowdragevent
---

# TreeListRowDragEvent
Represents the object of the TreeList row Drag and Drop event.


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


#### dragged


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The level of the dragged row.
The level represents an array of indexes of each parent and current item in the data tree.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### draggedItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item which corresponds to the dragged row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### draggedOver


</td>
<td type class="table-cell-type">


<code>


"null" | number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The level of the draggedOver row.
The level represents an array of indexes of each parent and current item in the data tree.


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


#### target


</td>
<td type class="table-cell-type">


<code>


[TreeList]({% slug api_treelist_treelist %})


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



