---
title: ShapeCreatedEvent
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the ShapeCreatedEvent."
api_reference: true
type: inner_api
slug: api_map_shapecreatedevent
---

# ShapeCreatedEvent
Fires when a shape is created, but is not rendered yet.


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


The original data item for this Shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### layer


</td>
<td type class="table-cell-type">


<code>


[MapLayer]({% slug api_map_maplayer %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The shape layer instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### location


</td>
<td type class="table-cell-type">


<code>


[Location]({% slug api_map_location %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The shape location


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shape


</td>
<td type class="table-cell-type">


<code>


Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The shape instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Map]({% slug api_map_map %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Map` component that triggered the event.


</td>
</tr>
</tbody>
</table>



