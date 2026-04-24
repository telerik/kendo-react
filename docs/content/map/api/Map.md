---
title: Map
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the Map."
api_reference: true
type: inner_api
slug: api_map_map
---

# Map
Represents the [KendoReact Map component](https://www.telerik.com/kendo-react-ui/components/map).





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


#### extent


</td>
<td type class="table-cell-type">


<code>


undefined | [Extent]({% slug api_map_extent %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the extent (visible area) of the map.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### layers


</td>
<td type class="table-cell-type">


<code>


[MapLayer]({% slug api_map_maplayer %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The marker layers instances.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[MapProps]({% slug api_map_mapprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Map component.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### eventOffset


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the event coordinates relative to the map element. Offset coordinates are not synchronized to a particular location on the map.





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


e


</td>
<td type>


<code>


any


</code>


</td>
<td>


The mouse event.


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


undefined | Point


</code>


</td>
<td>


The event coordinates relative to the map element.


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


#### eventToLayer


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Retrieves projected (layer) coordinates that correspond to this mouse event.
Layer coordinates are absolute and change only when the zoom level is changed.





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


e


</td>
<td type>


<code>


any


</code>


</td>
<td>


The mouse event.


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


undefined | Point


</code>


</td>
<td>


The projected (layer) coordinates that correspond to this event.


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


#### eventToLocation


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Retrieves the geographic location that correspond to this mouse event.





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


e


</td>
<td type>


<code>


any


</code>


</td>
<td>


The mouse event.


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


undefined | Point


</code>


</td>
<td>


The geographic location that correspond to this mouse event.


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


#### eventToView


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Retrieves relative (view) coordinates that correspond to this mouse event.
Layer elements positioned on these coordinates will appear under the mouse cursor.
View coordinates are no longer valid after a map reset.





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


e


</td>
<td type>


<code>


any


</code>


</td>
<td>


The mouse event.


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


undefined | Point


</code>


</td>
<td>


The relative (view) coordinates that correspond to this mouse event.


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


#### layerToLocation


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Transforms layer (projected) coordinates to geographical location.





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


point


</td>
<td type>


<code>


number[] | Point


</code>


</td>
<td>


The layer (projected) coordinates. An array argument is assumed to be in x, y order.


</td>
</tr>
<tr>
<td>


zoom?


</td>
<td type>


<code>


number


</code>


</td>
<td>


Optional. Assumed zoom level. Defaults to the current zoom level.


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


undefined | [Location]({% slug api_map_location %})


</code>


</td>
<td>


The geographic location that corresponds to the layer coordinates.


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


#### loadMarkers


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Load markers in the Map. This method will clear the current markers and show the new ones.


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


newMarkers


</td>
<td type>


<code>


any[]


</code>


</td>
<td>


An array of markers.


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


#### locationToLayer


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the layer (projected) coordinates that correspond to a geographical location.





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


location


</td>
<td type>


<code>


number[] | [Location]({% slug api_map_location %})


</code>


</td>
<td>


The geographic location. An array argument is assumed to be in [Latitude, Longitude] order.


</td>
</tr>
<tr>
<td>


zoom?


</td>
<td type>


<code>


number


</code>


</td>
<td>


Optional. Assumed zoom level. Defaults to the current zoom level.


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


undefined | Point


</code>


</td>
<td>


The layer (projected) coordinates.


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


#### locationToView


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the view (relative) coordinates that correspond to a geographical location.





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


location


</td>
<td type>


<code>


number[] | [Location]({% slug api_map_location %})


</code>


</td>
<td>


The geographic location. An array argument is assumed to be in [Latitude, Longitude] order.


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


undefined | Point


</code>


</td>
<td>


The view coordinates that correspond to a geographical location.


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


#### resize


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Detects the size of the container and redraws the Map.
Resizing is automatic unless you set the `resizeRateLimit` option to `0`.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### viewSize


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Retrieves the size of the visible portion of the map.





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


{ height: number; width: number; }


</code>


</td>
<td>


The size (width and height) of the visible portion of the map.


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


#### viewToLocation


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the geographical location that correspond to the view (relative) coordinates.





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


point


</td>
<td type>


<code>


number[] | Point


</code>


</td>
<td>


The view coordinates. An array argument is assumed to be in x, y order.


</td>
</tr>
<tr>
<td>


zoom?


</td>
<td type>


<code>


number


</code>


</td>
<td>


Optional. Assumed zoom level. Defaults to the current zoom level.


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


undefined | [Location]({% slug api_map_location %})


</code>


</td>
<td>


The geographic location that corresponds to the view coordinates.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



