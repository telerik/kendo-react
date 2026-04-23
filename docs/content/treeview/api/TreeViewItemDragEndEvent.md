---
title: TreeViewItemDragEndEvent
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the TreeViewItemDragEndEvent."
api_reference: true
type: inner_api
slug: api_treeview_treeviewitemdragendevent
---

# TreeViewItemDragEndEvent
Represents the object of the `onItemDragEnd` event ([see example](https://www.telerik.com/kendo-react-ui/components/treeview/drag-drop)).


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


#### clientX


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the horizontal coordinate within the client area of the application at which the event occurred
(as opposed to the coordinate within the page).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### clientY


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the vertical coordinate within the client area of the application at which the event occurred
(as opposed to the coordinate within the page).


</td>
</tr>
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


#### pageX


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The X (horizontal) coordinate (in pixels) at which the event occured that is relative to the left edge of the entire document.
`pageX` includes any portion of the document that is not currently visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageY


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Y (vertical) coordinate (in pixels) at which the event occured that is relative to the whole document.
`pageY` observes any vertical scrolling of the page.


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


The target that is associated with the dragged item.


</td>
</tr>
</tbody>
</table>



