---
title: Location
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the Location."
api_reference: true
type: inner_api
slug: api_map_location
---

# Location
Represents a geographic location.


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


#### lat


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The location latitude in decimal degrees.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### lng


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The location longitude in decimal degrees.


</td>
</tr>
</tbody>
</table>



## Constructors

### Location
<code>


(lat: number, lng: number)


</code>
Creates a new Location.

#### Parameters
##### lat
<code>


number


</code>
The location latitude in decimal degrees.

##### lng
<code>


number


</code>
The location longitude in decimal degrees.



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### clone


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Creates a new instance with the same coordinates.





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


The new Location instance.


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


#### destination


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Finds a destination at the given distance and bearing from this location.





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


distance


</td>
<td type>


<code>


number


</code>


</td>
<td>


The distance to the destination in meters.


</td>
</tr>
<tr>
<td>


bearing


</td>
<td type>


<code>


number


</code>


</td>
<td>


The initial bearing to the destination in decimal degrees.


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


The destination at the given distance and bearing.


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


#### distanceTo


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Calculates the [great-circle distance](https://en.wikipedia.org/wiki/Great-circle_distance) to the given destination in meters.





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


destination


</td>
<td type>


<code>


[Location]({% slug api_map_location %})


</code>


</td>
<td>


The destination location.


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


number


</code>


</td>
<td>


The distance to the specified location in meters.


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


#### equals


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Compares this location with another instance.





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


[Location]({% slug api_map_location %})


</code>


</td>
<td>


The location to compare with.


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


boolean


</code>


</td>
<td>


true if the location coordinates match; false otherwise.


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


#### fromLatLng


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Creates a Location instance from an [latitude, longitude] array.





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


latlng


</td>
<td type>


<code>


number[] | [number, number]


</code>


</td>
<td>


The [latitude, longitude] array.


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


The Location instance.


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


#### fromLngLat


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Creates a Location instance from an [longitude, latitude] array.





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


lnglat


</td>
<td type>


<code>


number[] | [number, number]


</code>


</td>
<td>


The [longitude, latitude] array.


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


The Location instance.


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


#### round


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Rounds the location coordinates to the specified number of fractional digits.





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


digits


</td>
<td type>


<code>


number


</code>


</td>
<td>


Number of fractional digits.


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


The current Location instance.


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


#### toArray


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the location coordinates as an [lat, lng] array.





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


[number, number]


</code>


</td>
<td>


An array representation of the location.


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


#### toString


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the location coordinates formatted as '{lat},{lng}'.





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


string


</code>


</td>
<td>


A string representation of the location.


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


#### wrap


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Wraps the latitude and longitude to fit into the [0, 90] and [0, 180] range.





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


The current Location instance.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



