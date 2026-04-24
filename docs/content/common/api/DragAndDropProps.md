---
title: DragAndDropProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the DragAndDropProps."
api_reference: true
type: inner_api
slug: api_common_draganddropprops
---

# DragAndDropProps
Represents the properties of the `DragAndDrop` component.


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


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `children` of the `DragAndDrop` component. The `children` prop can be any valid React Element.


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


Allows passing a custom context to the `DragAndDrop` component. Useful when there are multiple drag-and-drop functionalities in a single component.


</td>
</tr>
</tbody>
</table>



