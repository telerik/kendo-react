---
title: TaskEditingResult
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskEditingResult."
api_reference: true
type: inner_api
slug: api_taskboard_taskeditingresult
---

# TaskEditingResult



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


#### description


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current description value of the task being edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDescriptionChange


</td>
<td type class="table-cell-type">


<code>


(event: InputChangeEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles changes to the task description input field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPriorityChange


</td>
<td type class="table-cell-type">


<code>


(event: DropDownListChangeEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles changes to the task priority dropdown selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSave


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Saves the current task changes and calls the parent save handler.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTitleChange


</td>
<td type class="table-cell-type">


<code>


(event: InputChangeEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles changes to the task title input field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### priority


</td>
<td type class="table-cell-type">


<code>


[TaskBoardPriority]({% slug api_taskboard_taskboardpriority %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current priority value of the task being edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current title value of the task being edited.


</td>
</tr>
</tbody>
</table>



