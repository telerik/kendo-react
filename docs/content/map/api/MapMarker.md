---
title: MapMarker
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the MapMarker."
api_reference: true
type: inner_api
slug: api_map_mapmarker
---

# MapMarker
Represents a Map marker with title and location.


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


The data item used to create the marker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shape


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The marker shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The marker title. Displayed as browser tooltip.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### location


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the Marker location.





</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


value?


</td>
<td type>


<code>


number[] | [Location]({% slug api_map_location %})


</code>


</td>
<td>


The marker location on the map. Coordinates are listed as `[Latitude, Longitude]`.


</td>
</tr>
</tbody>
</table>
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


[Location]({% slug api_map_location %})


</code>


</td>
<td>


The marker location.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



