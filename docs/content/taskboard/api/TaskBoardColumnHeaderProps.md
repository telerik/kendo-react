---
title: TaskBoardColumnHeaderProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardColumnHeaderProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardcolumnheaderprops
---

# TaskBoardColumnHeaderProps
Represents the props of the TaskBoardColumnHeader component.


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


#### addButtonTitle


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title of the addButton.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### closeButtonTitle


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title of the closeButton.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### column


</td>
<td type class="table-cell-type">


<code>


[TaskBoardColumnModel]({% slug api_taskboard_taskboardcolumnmodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rendered column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editButtonTitle


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title of the editButton.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnDelete


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when a column is deleted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnEnterEdit


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when a column enters edit mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnExitEdit


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;HTMLInputElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when a column exits edit mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShowAddCardDialog


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when a add card dialog is shown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTitleChange?


</td>
<td type class="table-cell-type">


<code>


(event: InputChangeEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the title is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tasks


</td>
<td type class="table-cell-type">


<code>


[TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rendered tasks.


</td>
</tr>
</tbody>
</table>



