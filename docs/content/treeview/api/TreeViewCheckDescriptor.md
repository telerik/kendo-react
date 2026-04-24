---
title: TreeViewCheckDescriptor
description: "Learn how to build custom functionality when working with the React TreeView by Kendo UI with the help of the TreeViewCheckDescriptor."
api_reference: true
type: inner_api
slug: api_treeview_treeviewcheckdescriptor
---

# TreeViewCheckDescriptor
The descriptor which is used for checking.


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


#### applyCheckIndeterminate?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if a parent item will have an indeterminate state when not all its children are checked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkIndeterminateField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the field which will provide a Boolean representation for the indeterminate state of a parent item.
Defaults to `checkIndeterminate`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### idField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the field which will uniquely describe an item as an alternative to its hierarchical index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ids?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The IDs of the items to which the operation will be applied. By default, the TreeView applies the hierarchical indices of the items. These indices are zero-based. The first root item has a `0` (zero) index. If the first root item has children, the first child acquires a `0_0` index and the second acquires a `0_1` index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operationField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the field which will provide a Boolean representation for the operation state of the item.

The default fields are:
* `expanded`&mdash;Indicates that an item is expanded.
* `selected`&mdash;Indicates that an item is selected.
* `checked`&mdash;Indicates that an item is checked.


</td>
</tr>
</tbody>
</table>



