---
title: DiagramItemBoundsChangeEvent
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramItemBoundsChangeEvent."
api_reference: true
type: inner_api
slug: api_diagram_diagramitemboundschangeevent
---

# DiagramItemBoundsChangeEvent
The event arguments for the itemBoundsChange event of the Diagram.


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


#### bounds


</td>
<td type class="table-cell-type">


<code>


[Rect]({% slug api_diagram_rect %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The bounds of the item that changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item


</td>
<td type class="table-cell-type">


<code>


[Shape]({% slug api_diagram_shape %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The item that changed bounds.


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
</tbody>
</table>



