---
title: MapShapeLayerProps
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the MapShapeLayerProps."
api_reference: true
type: inner_api
slug: api_map_mapshapelayerprops
---

# MapShapeLayerProps
Represents the props of the KendoReact MapShapeLayer component.


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


The child components. Supports `MapShapeLayerTooltip`.


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


#### style?


</td>
<td type class="table-cell-type">


<code>


ShapeOptions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default style for shapes.


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



