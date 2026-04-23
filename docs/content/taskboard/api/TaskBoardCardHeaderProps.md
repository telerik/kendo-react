---
title: TaskBoardCardHeaderProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardCardHeaderProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardcardheaderprops
---

# TaskBoardCardHeaderProps
Represents the props of the TaskBoardCardHeader component.


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


Fires when menu item is selected.


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


Specifies the popup reference.


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


Determines the visibility of the show menu.


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
<tr>
<td class="table-cell-name">


#### title


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rendered title.


</td>
</tr>
</tbody>
</table>



