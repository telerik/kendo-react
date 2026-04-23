---
title: Sort
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the Sort."
api_reference: true
type: inner_api
slug: api_diagram_sort
---

# Sort
Represents a Sort shape, a flowchart element used to indicate sorting operations.
Extends MultiPathShape with two triangular shapes arranged vertically.


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


#### drawingElement


</td>
<td type class="table-cell-type">


<code>


MultiPath


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The underlying multi-path drawing element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier of the element.


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


Configuration options for the element.


</td>
</tr>
</tbody>
</table>



## Constructors

### Sort
<code>


(options: [ShapeOptionsBase]({% slug api_diagram_shapeoptionsbase %}))


</code>
Creates a new Sort instance.

#### Parameters
##### options
<code>


[ShapeOptionsBase]({% slug api_diagram_shapeoptionsbase %})


</code>
Configuration options for the sort shape



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### drawingContainer


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets the drawing container for this element.





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


The drawing element container


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


#### fill


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Sets the fill color and opacity of the visual element.


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


color


</td>
<td type>


<code>


any


</code>


</td>
<td>


The fill color


</td>
</tr>
<tr>
<td>


opacity?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The fill opacity (optional)


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


#### position


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the position of the element.





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


x


</td>
<td type>


<code>


any


</code>


</td>
<td>


The x coordinate or Point object, or undefined to get current position


</td>
</tr>
<tr>
<td>


y?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The y coordinate when x is a number


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


[Point]({% slug api_diagram_point %})


</code>


</td>
<td>


The current position as a Point when called as getter


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


#### redraw


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Redraws the rectangle with updated options.


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


options


</td>
<td type>


<code>


any


</code>


</td>
<td>


New options to apply to the rectangle


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


#### rotate


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the rotation of the element.





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


angle


</td>
<td type>


<code>


any


</code>


</td>
<td>


The rotation angle in radians, or undefined to get current rotation


</td>
</tr>
<tr>
<td>


center


</td>
<td type>


<code>


any


</code>


</td>
<td>


The center point for rotation


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


Rotation


</code>


</td>
<td>


The current rotation when called as getter


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


#### stroke


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Sets the stroke color, width, and opacity of the visual element.


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


color


</td>
<td type>


<code>


any


</code>


</td>
<td>


The stroke color


</td>
</tr>
<tr>
<td>


width


</td>
<td type>


<code>


any


</code>


</td>
<td>


The stroke width


</td>
</tr>
<tr>
<td>


opacity


</td>
<td type>


<code>


any


</code>


</td>
<td>


The stroke opacity


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


#### visible


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the visibility of the element.





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


value


</td>
<td type>


<code>


any


</code>


</td>
<td>


The visibility value to set, or undefined to get current visibility


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


any


</code>


</td>
<td>


The current visibility state when called as getter


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



