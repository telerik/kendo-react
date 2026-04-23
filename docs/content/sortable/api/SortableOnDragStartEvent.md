---
title: SortableOnDragStartEvent
description: "Learn how to build custom functionality when working with the React Sortable by Kendo UI with the help of the SortableOnDragStartEvent."
api_reference: true
type: inner_api
slug: api_sortable_sortableondragstartevent
---

# SortableOnDragStartEvent
The `SortableOnDragStartEvent` event.


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


#### element


</td>
<td type class="table-cell-type">


<code>


HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### prevIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The previous index of the dragged item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Sortable]({% slug api_sortable_sortable %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Sortable component.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### isDefaultPrevented


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns `true` if the event was prevented by any of its subscribers.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


boolean


</code>


</td>
<td>


- Returns `true` if the default action was prevented.
Otherwise, returns `false`.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### preventDefault


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Prevents the default action for a specified event.
In this way, the source component suppresses the built-in behavior that follows the event.


</td>
</tr>

</tbody>
</table>



