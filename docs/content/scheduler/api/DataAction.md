---
title: DataAction
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the DataAction."
api_reference: true
type: inner_api
slug: api_scheduler_dataaction
---

# DataAction
Specifies the action which can be dispatched through the [SchedulerDataContext](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerdatacontext).

For more information refer to the [Scheduler Context](https://www.telerik.com/kendo-react-ui/components/scheduler/context) article.


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


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `dataItem` being edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### series


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the action should be applied to the whole series of a recurring item. If the item is not recurring, set `series` to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


[DATA_ACTION]({% slug api_scheduler_data_action %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `type` of the action. The available types are:
- `create`
- `update`
- `remove`


</td>
</tr>
</tbody>
</table>



