---
title: MapMarkerLayerProps
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the MapMarkerLayerProps."
api_reference: true
type: inner_api
slug: api_map_mapmarkerlayerprops
---

# MapMarkerLayerProps
Represents the props of the KendoReact MapMarkerLayer component.


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


#### attribution?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The attribution for the layer. Accepts HTML.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The child components. Supports `MapMarkerLayerTooltip`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of data items for this layer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### extent?


</td>
<td type class="table-cell-type">


<code>


[Extent]({% slug api_map_extent %}) | [[number, number], [number, number]]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the extent of the region covered by this layer.
The layer will be hidden when the specified area is out of view. If not specified, the layer is always visible.

Accepts an `Extent` or an array that specifies the extent covered by this layer:
`[[NW lat, NW long], [SE lat, SE long]]`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### locationField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the marker location.

The field should be an array with two numbers - latitude and longitude in decimal degrees.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxZoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The minimum zoom level at which to show this layer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minZoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The minimum zoom level at which to show this layer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opacity?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The the opacity for the layer.

The value must be in the range from 0 (fully transparent) to 1 (fully opaque).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shape?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default marker shape for data-bound markers.

The following pre-defined marker shapes are available:
* "pinTarget"
* "pin"

Marker shapes are implemented as CSS classes on the marker element (span.k-marker). For example "pinTarget" is rendered as "k-marker-pin-target".


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item field which contains the marker title.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The zIndex for this layer.

Layers are normally stacked in declaration order (last one is on top).


</td>
</tr>
</tbody>
</table>



