---
title: DroppableProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the DroppableProps."
api_reference: true
type: inner_api
slug: api_common_droppableprops
---

# DroppableProps
Represents the props of the KendoReact Droppable component.


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


#### childRef?


</td>
<td type class="table-cell-type">


<code>


React.Ref&lt;"null" | HTMLElement | {[key: string]: any}&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback to get the child element ref. Useful as the Droppable overrides ref of the child element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### context?


</td>
<td type class="table-cell-type">


<code>


React.Context&lt;{ deregisterDrag?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; deregisterDrop?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; drag?: "null" | RefObject&lt;"null" | DragTarget&gt;; drags?: RefObject&lt;"null" | DragTarget&gt;[]; drop?: "null" | RefObject&lt;"null" | DropTarget&gt;; drops?: RefObject&lt;"null" | DropTarget&gt;[]; registerDrag?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; registerDrop?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; setDrag?: (value: "null" | RefObject&lt;DragTarget&gt;) => void; setDrop?: (value: "null" | RefObject&lt;DropTarget&gt;) => void; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The context to use for the droppable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [DroppableDragEnterEvent]({% slug api_common_droppabledragenterevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user enters the element during drag.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragLeave?


</td>
<td type class="table-cell-type">


<code>


(event: [DroppableDragLeaveEvent]({% slug api_common_droppabledragleaveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user leaves the element during drag.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragOver?


</td>
<td type class="table-cell-type">


<code>


(event: [DroppableDragOverEvent]({% slug api_common_droppabledragoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user is dragging an element over the Droppable component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrop?


</td>
<td type class="table-cell-type">


<code>


(event: [DroppableDropEvent]({% slug api_common_droppabledropevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user drops a draggable element inside the Droppable component.


</td>
</tr>
</tbody>
</table>



