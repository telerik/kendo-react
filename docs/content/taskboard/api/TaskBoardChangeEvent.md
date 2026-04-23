---
title: TaskBoardChangeEvent
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardChangeEvent."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardchangeevent
---

# TaskBoardChangeEvent
Represents the return type of TaskBoardChangeEvent.


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


#### data


</td>
<td type class="table-cell-type">


<code>


[TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})[] | undefined[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the returned data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item


</td>
<td type class="table-cell-type">


<code>


"null" | [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %}) | [TaskBoardColumnModel]({% slug api_taskboard_taskboardcolumnmodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previousItem


</td>
<td type class="table-cell-type">


<code>


"null" | [TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %}) | [TaskBoardColumnModel]({% slug api_taskboard_taskboardcolumnmodel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the previous item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the returned type.


</td>
</tr>
</tbody>
</table>



