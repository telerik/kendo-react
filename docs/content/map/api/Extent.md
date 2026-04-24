---
title: Extent
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the Extent."
api_reference: true
type: inner_api
slug: api_map_extent
---

# Extent
Represents a geographic region defined by two extreme locations (North West and South East).


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


#### nw


</td>
<td type class="table-cell-type">


<code>


[Location]({% slug api_map_location %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The North West extreme location.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### se


</td>
<td type class="table-cell-type">


<code>


[Location]({% slug api_map_location %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The South East extreme location.


</td>
</tr>
</tbody>
</table>



## Constructors

### Extent
<code>


(nw: number[] | [Location]({% slug api_map_location %}) | [number, number], se: number[] | [Location]({% slug api_map_location %}) | [number, number])


</code>
Creates a new Extent.

#### Parameters
##### nw
<code>


number[] | [Location]({% slug api_map_location %}) | [number, number]


</code>
The North West extreme location.

##### se
<code>


number[] | [Location]({% slug api_map_location %}) | [number, number]


</code>
The South East extreme location.



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### center


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the center of the extent.





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


The extent center location.


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


#### contains


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Tests if a location is contained within the extent.





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


The location to test for.


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


true if the extent contains the location, false otherwise.


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


#### containsAny


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Tests if any of the locations is contained within the extent.





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


locations


</td>
<td type>


<code>


[Location]({% slug api_map_location %})[]


</code>


</td>
<td>


An array of locations to test for.


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


true if the extent contains any of the locations, false otherwise.


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


#### edges


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the four extreme locations of the extent.





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


{ ne: [Location]({% slug api_map_location %}); nw: [Location]({% slug api_map_location %}); se: [Location]({% slug api_map_location %}); sw: [Location]({% slug api_map_location %}); }


</code>


</td>
<td>


An object with nw, ne, se and sw locations.


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


#### include


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Grows the extent, if required, to contain the specified location.


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


The location to include in the extent.


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


#### includeAll


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Grows the extent, if required, to contain all specified locations.


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


locations


</td>
<td type>


<code>


any


</code>


</td>
<td>


The locations to include in the extent.


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


#### overlaps


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Tests if the given extent overlaps with this instance.





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


extent


</td>
<td type>


<code>


[Extent]({% slug api_map_extent %})


</code>


</td>
<td>


The extent to test with.


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


true if the extents overlap, false otherwise.


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


Returns the four extreme locations of the extent as an array.





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


[[Location]({% slug api_map_location %}), [Location]({% slug api_map_location %}), [Location]({% slug api_map_location %}), [Location]({% slug api_map_location %})]


</code>


</td>
<td>


An array with [NW, NE, SE, SW] locations.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



