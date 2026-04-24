---
title: TreeListSelectionChangeEvent
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the TreeListSelectionChangeEvent."
api_reference: true
type: inner_api
slug: api_treelist_treelistselectionchangeevent
---

# TreeListSelectionChangeEvent
Represents the object of the `onSelectionChange` TreeList event.


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


#### altKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Is alt key modifier pressed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cell


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if cell selection mode is enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### componentId


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component unique identifier.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ctrlKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Is ctrl key modifier pressed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item which was selected or deselected when the checkbox selection column is used. It will be `null` when the row or cell selection is used.


</td>
</tr>
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


The current component leaf data items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endColIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Selection end column index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endRowIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Selection end row index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isDrag


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if current event is created from drag.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### level


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of indexes of each parent and current item in the data tree.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### metaKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Is meta key modifier pressed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode


</td>
<td type class="table-cell-type">


<code>


"multiple" | "single"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Selection mode.


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


#### selectedField


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `selectedField` prop of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shiftKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Is shift key modifier pressed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startColIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Selection start column index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startRowIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Selection start row index.


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



