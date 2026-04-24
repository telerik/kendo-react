---
title: TaskBoardEditCardProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardEditCardProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardeditcardprops
---

# TaskBoardEditCardProps
Represents the props of the TaskBoardEditCard component


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


#### editPane


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardTaskEditPaneProps]({% slug api_taskboard_taskboardtaskeditpaneprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the TaskBoardTaskEditPane component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered on `onClose` event of the TaskBoardAddCard.


</td>
</tr>
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


Triggered on `onSave` event of the TaskBoardAddCard.


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


Represent the priorities of the task board card.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### task


</td>
<td type class="table-cell-type">


<code>


[TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the task of the TaskBoardEditCard component.


</td>
</tr>
</tbody>
</table>



