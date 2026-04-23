---
title: TreeViewItemDragStartEvent
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the TreeViewItemDragStartEvent."
api_reference: true
type: inner_api
slug: api_treeview_treeviewitemdragstartevent
---

# TreeViewItemDragStartEvent
Represents the object of the `onItemDragStart` event.


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


#### item


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The item that is dragged.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemHierarchicalIndex


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The hierarchical index of the dragged item. The indices are zero-based.
The first root item has a `0` (zero) index. If the first root item has children, the first child acquires a `0_0` index and the second acquires a `0_1` index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[TreeView]({% slug api_treeview_treeview %})


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



