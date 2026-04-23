---
title: MarkerCreatedEvent
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the MarkerCreatedEvent."
api_reference: true
type: inner_api
slug: api_map_markercreatedevent
---

# MarkerCreatedEvent
Fires when a marker has been created and is about to be displayed.

Cancelling the event prevents the marker from being shown.


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


The marker layer instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### marker


</td>
<td type class="table-cell-type">


<code>


[MapMarker]({% slug api_map_mapmarker %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The marker instance.


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


`true` if the default action was prevented.
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


Prevents the default action for a specified event. In this way, the source component suppresses the built-in behavior that follows the event.


</td>
</tr>

</tbody>
</table>



