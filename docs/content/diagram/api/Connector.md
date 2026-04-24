---
title: Connector
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the Connector."
api_reference: true
type: inner_api
slug: api_diagram_connector
---

# Connector



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


#### connections


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of connections attached to this connector.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### options


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configuration options for the connector.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shape


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The shape that owns this connector.


</td>
</tr>
</tbody>
</table>



## Constructors

### Connector
<code>


(shape: any, options: any)


</code>
Creates a new Connector instance.

#### Parameters
##### shape
<code>


any


</code>
The shape that owns this connector

##### options
<code>


any


</code>
Configuration options for the connector



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### position


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets the position of this connector.
Uses either a custom position function from options or the shape's getPosition method.
Applies offset if configured.





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


any


</code>


</td>
<td>


The Point representing the connector's position


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


#### toJSON


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Converts the connector to a JSON representation for serialization.





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


{ connector: any; shapeId: any; }


</code>


</td>
<td>


Object containing the shape ID and connector name


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



