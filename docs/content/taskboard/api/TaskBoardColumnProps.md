---
title: TaskBoardColumnProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardColumnProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardcolumnprops
---

# TaskBoardColumnProps
Represents the props of the TaskBoardColumn component


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


Specifies the add button title.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### addCardDialog


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardAddCardProps]({% slug api_taskboard_taskboardaddcardprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardAddCard component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### body


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardColumnBodyProps]({% slug api_taskboard_taskboardcolumnbodyprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardColumnBody component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### card


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardCardProps]({% slug api_taskboard_taskboardcardprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardCard component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the children nodes.


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


Specifies the close button title.


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


The column of the TaskBoard.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### confirmDialog


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardConfirmDialogProps]({% slug api_taskboard_taskboardconfirmdialogprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardConfirmDialog component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### confirmDialogCancelButton


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the cancel dialog confirm button node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### confirmDialogConfirmButton


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the confirm dialog confirm button node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### confirmDialogMessage


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the confirm dialog message


</td>
</tr>
<tr>
<td class="table-cell-name">


#### confirmDialogTitle


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the confirm dialog title.


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


Specifies the edit button title.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editCardDialog


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardEditCardProps]({% slug api_taskboard_taskboardeditcardprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardEditCard component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editedTask?


</td>
<td type class="table-cell-type">


<code>


[TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the edited task.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### elementRef?


</td>
<td type class="table-cell-type">


<code>


React.RefObject&lt;"null" | HTMLDivElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the reference of the element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardColumnHeaderProps]({% slug api_taskboard_taskboardcolumnheaderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardColumnHeader component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCloseDialog


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Close Button click event handler of the TaskBoardConfirmDialog component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnConfirmDelete


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on confirmation of column deletion.


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


Fires on column deletion.


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


Fires when column enters edit.


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


Fires when column exits edit.


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


Fires when the add card dialog is shown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShowEditCardPane


</td>
<td type class="table-cell-type">


<code>


(task: [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the edit card pane is shown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskCreate


</td>
<td type class="table-cell-type">


<code>


(task: [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fire on task creation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskDelete


</td>
<td type class="table-cell-type">


<code>


(task: [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when task is deleted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskEdit


</td>
<td type class="table-cell-type">


<code>


(task: [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %}), prevTask: [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when task is edited.


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


Fires when title is changed.


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


The priorities that are set in the TaskBoard.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showAddCard


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the visibility of the add card.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showColumnConfirmDelete


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the visibility of the column confirm/delete.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showEditCard


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the visibility of the edit card.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The styles for the TaskBoard.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `tabIndex` that will be added to the TaskBoard Column element.


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


The tasks of the TaskBoard.


</td>
</tr>
</tbody>
</table>



