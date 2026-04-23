---
title: TreeListDataStateChangeEvent
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the TreeListDataStateChangeEvent."
api_reference: true
type: inner_api
slug: api_treelist_treelistdatastatechangeevent
---

# TreeListDataStateChangeEvent
Represents the object of the `onDataStateChange` TreeList event.


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


#### dataState


</td>
<td type class="table-cell-type">


<code>


{ field?: string; filter?: FilterDescriptor[]; sort?: SortDescriptor[]; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The state of the TreeList based on the user action.


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



