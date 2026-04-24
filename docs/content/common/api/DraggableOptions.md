---
title: DraggableOptions
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the DraggableOptions."
api_reference: true
type: inner_api
slug: api_common_draggableoptions
---

# DraggableOptions
Represents the configuration object type of the `Draggable` component and `useDraggable` hook.


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


#### autoScroll?


</td>
<td type class="table-cell-type">


<code>


boolean | [AutoScrollOptions]({% slug api_common_autoscrolloptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the `autoScroll` property to `false` to disable automatic container scroll when close to the edge.
For more information, refer to the [Auto Scroll](https://www.telerik.com/kendo-react-ui/components/common/drag-and-drop/auto-scroll) article.

Defaults to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### context?


</td>
<td type class="table-cell-type">


<code>


Context&lt;{ deregisterDrag?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; deregisterDrop?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; drag?: "null" | RefObject&lt;"null" | DragTarget&gt;; drags?: RefObject&lt;"null" | DragTarget&gt;[]; drop?: "null" | RefObject&lt;"null" | DropTarget&gt;; drops?: RefObject&lt;"null" | DropTarget&gt;[]; registerDrag?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; registerDrop?: (item: RefObject&lt;"null" | DragTarget&gt;) => void; setDrag?: (value: "null" | RefObject&lt;DragTarget&gt;) => void; setDrop?: (value: "null" | RefObject&lt;DropTarget&gt;) => void; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows passing custom context. Use it to isolate drag and drop events in scenarios with multiple drag and drop functionalities on a single component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hint?


</td>
<td type class="table-cell-type">


<code>


"null" | RefObject&lt;"null" | HTMLElement | { element: "null" | HTMLElement; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the `hint` to override the element used for collision detection.

For more information, refer to the [Drag Hint](https://www.telerik.com/kendo-react-ui/components/common/drag-and-drop/drag-hint) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mouseOnly?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the `mouseOnly` property to `true` to stop the draggable from attaching `touch` event handlers.

Defaults to `false`.


</td>
</tr>
</tbody>
</table>



