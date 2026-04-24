---
title: Connection
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the Connection."
api_reference: true
type: inner_api
slug: api_diagram_connection
---

# Connection
The visual link between two Shapes through the intermediate of Connectors.


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


#### definers


</td>
<td type class="table-cell-type">


<code>


PathDefiner[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of path definers for intermediate points along the connection.


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


#### from


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The source endpoint of the connection (Shape, Connector, or Point).


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


#### path


</td>
<td type class="table-cell-type">


<code>


[Polyline]({% slug api_diagram_polyline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The polyline visual element that represents the connection path.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sourceConnector


</td>
<td type class="table-cell-type">


<code>


[Connector]({% slug api_diagram_connector %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connector at the source end of the connection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetConnector


</td>
<td type class="table-cell-type">


<code>


[Connector]({% slug api_diagram_connector %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connector at the target end of the connection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### to


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target endpoint of the connection (Shape, Connector, or Point).


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

### Connection
<code>


(from: any, to: any, options?: any)


</code>
Creates a new Connection instance.

#### Parameters
##### from
<code>


any


</code>
The source endpoint (Shape, Connector, or Point)

##### to
<code>


any


</code>
The target endpoint (Shape, Connector, or Point)

##### options?
<code>


any


</code>
Configuration options for the connection



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### allPoints


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets all the points of this connection. This is the combination of the sourcePoint, the points and the targetPoint.





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


Array of all points including source, intermediate, and target points


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


[Connection]({% slug api_diagram_connection %})


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


Gets or sets the bounds of this connection.








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


A Rect object to set as bounds. If not provided, returns the current bounds.


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


The bounds of the connection


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


Returns a clone of this connection.





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


[Connection]({% slug api_diagram_connection %})


</code>


</td>
<td>


A new Connection instance that is a copy of this connection


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


Gets or sets the content of the connection.





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


[Connection]({% slug api_diagram_connection %})


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


[Connection]({% slug api_diagram_connection %})


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


#### points


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the collection of intermediate points.
The 'allPoints()' property will return all the points.
The 'definers' property returns the definers of the intermediate points.
The 'sourceDefiner' and 'targetDefiner' return the definers of the endpoints.





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


Array of Points or point-like objects to set as intermediate points. If not provided, returns the current points.


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


Array of intermediate points when used as a getter


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


Sets the position of the diagram element.


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


point


</td>
<td type>


<code>


any


</code>


</td>
<td>


The new position point with x and y coordinates


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


Redraws the connection with new options.


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


The options to apply when redrawing the connection


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


#### refresh


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Refreshes the connection's visual representation.
Resolves connectors, refreshes the path, aligns content, and updates adorners.


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


Selects or deselects this connection.





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


True to select, false to deselect the connection


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


Returns a serialized connection in JSON format. Consists of the options and the dataItem.





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


Serialized connection object containing options, endpoints, and data


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


#### source


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the source endpoint of the connection.





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


source?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The source endpoint (Shape, Connector, or Point) to set. If not provided, returns the current source.


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


Whether this operation should be undoable


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


[Point]({% slug api_diagram_point %}) | [Connector]({% slug api_diagram_connector %})


</code>


</td>
<td>


The current source when used as a getter


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


#### sourceDefiner


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the PathDefiner of the sourcePoint.
The left part of this definer is always null since it defines the source tangent.





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


The PathDefiner to set. If not provided, returns the current source definer.


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


PathDefiner


</code>


</td>
<td>


The source definer when used as a getter


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


#### sourcePoint


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets the Point where the source of the connection resides.
If the endpoint is Auto-connector the location of the resolved connector will be returned.
If the endpoint is floating the location of the endpoint is returned.





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


The source point of the connection


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


#### target


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the target endpoint of the connection.





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


target?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The target endpoint (Shape, Connector, or Point) to set. If not provided, returns the current target.


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


Whether this operation should be undoable


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


[Point]({% slug api_diagram_point %}) | [Connector]({% slug api_diagram_connector %})


</code>


</td>
<td>


The current target when used as a getter


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


#### targetDefiner


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the PathDefiner of the targetPoint.
The right part of this definer is always null since it defines the target tangent.





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


The PathDefiner to set. If not provided, returns the current target definer.


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


PathDefiner


</code>


</td>
<td>


The target definer when used as a getter


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


#### targetPoint


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets the Point where the target of the connection resides.





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


The target point of the connection


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


Converts the connection to a JSON representation for serialization.





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


{ from: any; to: any; }


</code>


</td>
<td>


Object containing the connection's endpoints information


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


#### type


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the connection type (see ConnectionType enumeration).





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


A ConnectionType value to set. If not provided, returns the current type.


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


The connection type


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


[Connection]({% slug api_diagram_connection %})


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


#### updateModel


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Updates the connection's model data and optionally synchronizes changes.


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


syncChanges?


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


Updates the connection options from the model data.


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



