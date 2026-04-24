---
title: ShapeFeatureCreatedEvent
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the ShapeFeatureCreatedEvent."
api_reference: true
type: inner_api
slug: api_map_shapefeaturecreatedevent
---

# ShapeFeatureCreatedEvent
Fires when a [GeoJSON Feature](https://geojson.org/geojson-spec.html#feature-objects) is created on a shape layer.


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


The original data item for this Feature. Members include `geometries` and `properties`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group


</td>
<td type class="table-cell-type">


<code>


Group


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The group containing feature shape instances.


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


#### properties


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A reference to the `dataItem.properties` object.


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



