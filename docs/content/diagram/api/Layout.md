---
title: Layout
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the Layout."
api_reference: true
type: inner_api
slug: api_diagram_layout
---

# Layout
Represents a layout container that automatically arranges child elements.
Extends Group to provide automatic layout and positioning capabilities.


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


#### children


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of child visual elements contained in this group.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### drawingElement


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The underlying drawing element that handles the actual rendering.


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

### Layout
<code>


(rect?: any, options?: any)


</code>
Creates a new Layout instance.

#### Parameters
##### rect?
<code>


any


</code>
The rectangle bounds for the layout

##### options?
<code>


any


</code>
Configuration options for the layout



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### append


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Appends a visual element to this group.


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


visual


</td>
<td type>


<code>


any


</code>


</td>
<td>


The visual element to append to the group


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


#### clear


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Removes all child visual elements from this group.


</td>
</tr>

</tbody>
</table>

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


#### rect


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the rectangle bounds of the layout.





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


rect


</td>
<td type>


<code>


any


</code>


</td>
<td>


The rectangle bounds to set, or undefined to get current bounds


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


[Rect]({% slug api_diagram_rect %})


</code>


</td>
<td>


The current rectangle bounds when called as getter


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


Redraws the layout with updated options.


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


New options to apply to the layout


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


#### reflow


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Triggers a reflow of the layout, recalculating positions and sizes.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### remove


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Removes a visual element from this group.


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


visual


</td>
<td type>


<code>


any


</code>


</td>
<td>


The visual element to remove from the group


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


#### toBack


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Moves the specified visual elements to the back of the display order.


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


visuals


</td>
<td type>


<code>


any


</code>


</td>
<td>


Array of visual elements to move to back


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


#### toFront


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Moves the specified visual elements to the front of the display order.


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


visuals


</td>
<td type>


<code>


any


</code>


</td>
<td>


Array of visual elements to move to front


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


#### toIndex


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Moves the specified visual elements to specific indices in the display order.


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


visuals


</td>
<td type>


<code>


any


</code>


</td>
<td>


Array of visual elements to reorder


</td>
</tr>
<tr>
<td>


indices


</td>
<td type>


<code>


any


</code>


</td>
<td>


Target indices for the visual elements


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



