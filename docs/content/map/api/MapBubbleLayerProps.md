---
title: MapBubbleLayerProps
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the MapBubbleLayerProps."
api_reference: true
type: inner_api
slug: api_map_mapbubblelayerprops
---

# MapBubbleLayerProps
Represents the props of the KendoReact MapBubbleLayer component.


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


The child tooltip components.


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


The data item field which contains the symbol location.

The field should be an array with two numbers - latitude and longitude in decimal degrees.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


100


</code>


</td>
<td class="table-cell-comment">


The maximum symbol size for bubble layer symbols.





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


#### minSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


The minimum symbol size for bubble layer symbols.

> Setting non-zero value will distort symbol area to value ratio.





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


The default style for symbols.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### symbol?


</td>
<td type class="table-cell-type">


<code>


[BubbleLayerSymbol]({% slug api_map_bubblelayersymbol %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The symbol to use for bubble layers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value field for the symbols used to determine their relative size.
The data item field should be a number.


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



