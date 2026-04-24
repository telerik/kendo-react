---
title: TaskBoardTaskEditPaneProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardTaskEditPaneProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardtaskeditpaneprops
---

# TaskBoardTaskEditPaneProps
Represents the props of the TaskBoardTaskEditPane component


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


#### cancelButton


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the cancel button of the TaskBoardTaskEditPane.


</td>
</tr>
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


The rendered description.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### descriptionInputTitle


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the descriptionInput title of the TaskBoardTaskEditPane.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### descriptionLabel


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the description label of the TaskBoardTaskEditPane.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the rendered header of the TaskBoardTaskEditPane.


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


Fires when Cancel button is clicked.


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


Fires when a description is changed.


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


Fires when a priority has been changed.


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


Fires when Save button is clicked.


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


Fires when a title is changed.


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


Determines the rendered priorities.


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


Determines the priority.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### priorityDropDownTitle


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the priorityDropDownTitle title of the TaskBoardTaskEditPane.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### priorityLabel


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the priority label of the TaskBoardTaskEditPane.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveButton


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the save button of the TaskBoardTaskEditPane.


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


Represents the rendered task of the TaskBoardTaskEditPane.


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


Represents the title of the TaskBoardTaskEditPane.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleInputTitle


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the titleInput title of the TaskBoardTaskEditPane.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleLabel


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the title label of the TaskBoardTaskEditPane.


</td>
</tr>
</tbody>
</table>



