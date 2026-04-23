---
title: TaskEditingProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskEditingProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskeditingprops
---

# TaskEditingProps



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


#### onSave


</td>
<td type class="table-cell-type">


<code>


(task: [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %}), prevTask: [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function called when the task is saved.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### priorities


</td>
<td type class="table-cell-type">


<code>


[TaskBoardPriority]({% slug api_taskboard_taskboardpriority %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of available priority options for the task.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### task?


</td>
<td type class="table-cell-type">


<code>


[TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The task to be edited. If not provided, creates a new task.


</td>
</tr>
</tbody>
</table>



