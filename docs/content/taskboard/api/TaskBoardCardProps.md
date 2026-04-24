---
title: TaskBoardCardProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardCardProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardcardprops
---

# TaskBoardCardProps
Represents the props of the TaskBoardCard component.


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


#### card


</td>
<td type class="table-cell-type">


<code>


React.ForwardRefExoticComponent&lt;CardProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | CardHandle&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the Card component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cardBody


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardCardBodyProps]({% slug api_taskboard_taskboardcardbodyprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardCardBody component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cardHeader


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardCardHeaderProps]({% slug api_taskboard_taskboardcardheaderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardCardHeader component.


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


Represents the content of the cancel button of the TaskBoardConfirmDialog component.


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


Represents the content of the confirm button of the TaskBoardConfirmDialog component.


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


Represents the content of the TaskBoardConfirmDialog component.


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


Represents the title of the TaskBoardConfirmDialog component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The disabled state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### elementRef?


</td>
<td type class="table-cell-type">


<code>


React.RefObject&lt;"null" | CardHandle&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the CardHandle reference.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### menuItems


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the menu items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCloseConfirmDialog


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


#### onClosePreviewPane


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the preview pane needs to be closed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onHideMenu


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the menu needs to be hidden.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMenuButtonBlur


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on blur of the menu button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMenuItemSelect


</td>
<td type class="table-cell-type">


<code>


(event: MenuSelectEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on menu item selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShowMenu


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the menu needs to be shown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShowPreviewPane


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the preview pane needs to be shown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskDelete


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when task's delete button is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskEdit


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when task's edit button is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupRef


</td>
<td type class="table-cell-type">


<code>


React.RefObject&lt;"null" | PopupHandle&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the popup reference.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previewDialog


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardPreviewDialogProps]({% slug api_taskboard_taskboardpreviewdialogprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardPreviewDialog component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previewDialogDelete


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the preview dialog delete node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previewDialogEdit


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the preview dialog edit node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previewDialogPriorityLabel


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the priority label in the preview dialog.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showDeleteConfirm


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the visibility of the task's delete confirmation dialog.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showMenu


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the menu visibility.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showTaskPreviewPane


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the visibility of the task's preview pane.


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


The applied styles.


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


Specifies the `tabIndex` that will be added to the TaskBoard Card element.


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


The rendered task.


</td>
</tr>
</tbody>
</table>



