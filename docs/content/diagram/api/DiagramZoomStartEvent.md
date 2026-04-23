---
title: DiagramZoomStartEvent
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramZoomStartEvent."
api_reference: true
type: inner_api
slug: api_diagram_diagramzoomstartevent
---

# DiagramZoomStartEvent
The event arguments for the `zoomStart` event of the Diagram.
This event is triggered before the zoom level changes.


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


#### isDefaultPrevented


</td>
<td type class="table-cell-type">


<code>


() => boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Checks if the default action of the event has been prevented.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### meta?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Additional metadata associated with the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent?


</td>
<td type class="table-cell-type">


<code>


MouseEvent | PointerEvent | TouchEvent | WheelEvent


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The native event that triggered the diagram event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### point


</td>
<td type class="table-cell-type">


<code>


[Point]({% slug api_diagram_point %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point where the event occurred, in diagram coordinates.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### preventDefault


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Prevents the default action of the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoom


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Diagram's zoom.


</td>
</tr>
</tbody>
</table>



