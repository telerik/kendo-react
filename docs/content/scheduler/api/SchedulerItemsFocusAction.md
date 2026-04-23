---
title: SchedulerItemsFocusAction
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the SchedulerItemsFocusAction."
api_reference: true
type: inner_api
slug: api_scheduler_scheduleritemsfocusaction
---

# SchedulerItemsFocusAction
Represents the object passed to the `items-focus` reducer.


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


#### ignoreIsAllDay?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Whether to ignore the isAllDay property when performing the action.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


RefObject&lt;"null" | [SchedulerItemHandle]({% slug api_scheduler_scheduleritemhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The reference to the scheduler item handle.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


[ITEMS_FOCUS_ACTION]({% slug api_scheduler_items_focus_action %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of focus action to perform on the item.


</td>
</tr>
</tbody>
</table>



