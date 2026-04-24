---
title: NormalizedDragEvent
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the NormalizedDragEvent."
api_reference: true
type: inner_api
slug: api_common_normalizeddragevent
---

# NormalizedDragEvent
Represents a unified drag event that is triggered regardless if the native event underneath is a pointer, mouse, touch, or scroll event.


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


#### altKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the `alt` key was pressed when the event occurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### clientX


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the horizontal coordinate within the viewport


</td>
</tr>
<tr>
<td class="table-cell-name">


#### clientY


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the vertical coordinate within the viewport


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ctrlKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the `control` key was pressed when the event occurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isTouch?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the native event is a touch event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### metaKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the `command` (on Mac) key was pressed when the event occurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offsetX


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the horizontal offset coordinate of the mouse pointer between that event and the padding edge of the target node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offsetY


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the vertical offset coordinate of the mouse pointer between that event and the padding edge of the target node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### originalEvent


</td>
<td type class="table-cell-type">


<code>


Event | MouseEvent | PointerEvent | TouchEvent


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the original event which resulted in a drag event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageX


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the horizontal coordinate at which the mouse was clicked, relative to the left edge of the entire document.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageY


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the vertical coordinate at which the mouse was clicked, relative to the left edge of the entire document.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollX


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the number of pixels that the document is currently scrolled horizontally.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollY


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the number of pixels that the document is currently scrolled vertically.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shiftKey


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the `shift` key was pressed when the event occurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the event's type.


</td>
</tr>
</tbody>
</table>



