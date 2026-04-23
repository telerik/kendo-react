---
title: Shape
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the Shape."
api_reference: true
type: inner_api
slug: api_diagram_shape
---

# Shape



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


#### adorner


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The adorner used for visual feedback during interactions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### connectors


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of connectors attached to this shape.


</td>
</tr>
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


The data item associated with this diagram element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### events


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of event names that this observable supports.


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


The unique identifier of this diagram element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSelected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether this element is currently selected.


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


Configuration options for the observable instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shapeVisual


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The visual representation of the shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


[ShapeType]({% slug api_diagram_shapetype %}) | [FlowchartShapeType]({% slug api_diagram_flowchartshapetype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the shape (e.g., 'rectangle', 'circle', 'text', etc.) or FlowchartShapeTypes.Extract.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The visual representation (Group) of this diagram element.


</td>
</tr>
</tbody>
</table>



## Constructors

### Shape
<code>


(options: any, diagram: any)


</code>
Creates a new Shape instance.

#### Parameters
##### options
<code>


any


</code>
Configuration options for the shape

##### diagram
<code>


any


</code>
The diagram that will contain this shape



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### bind


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Binds event handlers to one or more events.





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


event


</td>
<td type>


<code>


EventNames | {[key: string]: Handler}


</code>


</td>
<td>


The event name(s) to bind to, or an object mapping event names to handlers


</td>
</tr>
<tr>
<td>


handlers?


</td>
<td type>


<code>


EventHandlers


</code>


</td>
<td>


The event handler(s) to bind. Can be a function or an object mapping event names to handlers


</td>
</tr>
<tr>
<td>


one?


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


If true, the handler will be executed only once and then automatically unbound


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


[Shape]({% slug api_diagram_shape %})


</code>


</td>
<td>


The Observable instance for method chaining


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


#### bounds


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the bounds of the shape.





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


value?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The bounds to set, or a string constant for different bound types ('TRANSFORMED', 'ABSOLUTE', 'ROTATED'). If not provided, returns the current bounds.


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


The bounds of the shape


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


#### clone


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns a clone of this shape.





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


[Shape]({% slug api_diagram_shape %})


</code>


</td>
<td>


A new Shape instance that is a copy of this shape


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


#### connections


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets connections of this shape based on type.





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


type?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The type of connections to retrieve: 'in' for incoming, 'out' for outgoing, or undefined for all connections.


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


any[]


</code>


</td>
<td>


Array of connections


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


#### content


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the content of the shape.





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


content?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The content to set. If not provided, returns the current content.


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


The current content when used as a getter


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


#### createShapeVisual


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Creates the visual representation of the shape based on its type and options.
Supports custom templates, predefined shapes (rectangle, circle, text, image), and custom paths.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### destroy


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Destroys the observable instance and removes all event handlers.
This method should be called when the observable is no longer needed to prevent memory leaks.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### first


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Binds event handlers to be executed first (prepends to the handlers list).
These handlers will be called before any previously bound handlers for the same event.





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


eventName


</td>
<td type>


<code>


EventNames


</code>


</td>
<td>


The event name(s) to bind to


</td>
</tr>
<tr>
<td>


handlers


</td>
<td type>


<code>


EventHandlers


</code>


</td>
<td>


The event handler(s) to bind


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


[Shape]({% slug api_diagram_shape %})


</code>


</td>
<td>


The Observable instance for method chaining


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


#### getConnector


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets a connector of this shape either by the connector's supposed name or
via a Point in which case the closest connector will be returned.





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


nameOrPoint


</td>
<td type>


<code>


any


</code>


</td>
<td>


The name of a Connector or a Point.


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


The connector matching the name or closest to the point


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


#### getPosition


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets the position of the shape at a specific side.





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


side


</td>
<td type>


<code>


any


</code>


</td>
<td>


The side to get position for (e.g., 'top', 'bottom', 'left', 'right', 'center')


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


The position point at the specified side


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


#### one


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Binds event handlers that will be executed only once.
After execution, the handlers are automatically unbound.





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


eventNames


</td>
<td type>


<code>


EventNames


</code>


</td>
<td>


The event name(s) to bind to


</td>
</tr>
<tr>
<td>


handlers


</td>
<td type>


<code>


EventHandlers


</code>


</td>
<td>


The event handler(s) to bind


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


[Shape]({% slug api_diagram_shape %})


</code>


</td>
<td>


The Observable instance for method chaining


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


Gets or sets the position of the shape.





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


point?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The position to set. If not provided, returns the current position.


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


The current position when used as a getter


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


Redraws the shape with new options.


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


The options to apply when redrawing the shape


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


#### redrawVisual


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Redraws the shape's visual representation.
Updates both the visual and content if present.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### refresh


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Refreshes the visual representation of the diagram element.
Triggers a redraw of the visual component.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### refreshConnections


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Refreshes all connections attached to this shape.
Updates the visual representation of all connected connections.


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


Rotates the shape by the specified angle.





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


angle?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The rotation angle in degrees. If not provided, returns the current rotation.


</td>
</tr>
<tr>
<td>


center?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The center point for rotation. If not provided, uses the shape's center.


</td>
</tr>
<tr>
<td>


undoable?


</td>
<td type>


<code>


any


</code>


</td>
<td>


Whether the rotation should be undoable. Defaults to true.


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


The current rotation when used as a getter


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


#### select


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Selects or deselects the shape.





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


Whether to select (true) or deselect (false) the shape. If not provided, defaults to true.


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


True if the selection state changed, false otherwise


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


#### serialize


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Serializes the diagram element to a JSON object.





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


An object containing the element's options and data item information


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


Converts the shape to a JSON representation for serialization.





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


{ shapeId: any; }


</code>


</td>
<td>


Object containing the shape's ID


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


Returns a string representation of the diagram element.





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


The ID of the element as a string


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


#### trigger


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Triggers an event, calling all bound handlers for that event.





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


eventName


</td>
<td type>


<code>


string


</code>


</td>
<td>


The name of the event to trigger


</td>
</tr>
<tr>
<td>


eventArgs?


</td>
<td type>


<code>


any


</code>


</td>
<td>


Optional event arguments to pass to the handlers


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


True if any handler called preventDefault(), false otherwise


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


#### unbind


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Removes event handlers from events.





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


eventName?


</td>
<td type>


<code>


string


</code>


</td>
<td>


The event name to unbind from. If undefined, all events are unbound


</td>
</tr>
<tr>
<td>


handler?


</td>
<td type>


<code>


EventHandlers


</code>


</td>
<td>


The specific handler to remove. If undefined, all handlers for the event are removed


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


[Shape]({% slug api_diagram_shape %})


</code>


</td>
<td>


The Observable instance for method chaining


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


#### updateBounds


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Updates the shape's bounds based on its visual representation and handles rotation and content alignment.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### updateModel


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Updates the shape's model data and optionally synchronizes changes.


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


syncChanges


</td>
<td type>


<code>


any


</code>


</td>
<td>


Whether to synchronize changes immediately


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


#### updateOptionsFromModel


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Updates the shape options from the model data.


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


model?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The model data to extract options from


</td>
</tr>
<tr>
<td>


field?


</td>
<td type>


<code>


any


</code>


</td>
<td>


Specific field to update, if any


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


Gets or sets the visibility of the diagram element.





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


value?


</td>
<td type>


<code>


any


</code>


</td>
<td>


If provided, sets the visibility. If undefined, returns the current visibility.


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


boolean | void


</code>


</td>
<td>


The current visibility when used as a getter


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



