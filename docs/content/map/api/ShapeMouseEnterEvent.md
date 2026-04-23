---
title: ShapeMouseEnterEvent
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the ShapeMouseEnterEvent."
api_reference: true
type: inner_api
slug: api_map_shapemouseenterevent
---

# ShapeMouseEnterEvent
Fires when the mouse enters a shape.

> This event fires reliably only for shapes that have set fill color.
> The opacity can still be set to 0 so the shapes appear to have no fill.


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


#### originalEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The source DOM event instance


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



