---
title: ToolCallActionEvent
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ToolCallActionEvent."
api_reference: true
type: inner_api
slug: api_conversational-ui_toolcallactionevent
---

# ToolCallActionEvent
The arguments for the `onAction` event of the `ToolCall` component, fired when
the user clicks the Approve or Reject button.


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


#### action


</td>
<td type class="table-cell-type">


<code>


[ToolCallActionType]({% slug api_conversational-ui_toolcallactiontype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Which action the user took.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React Synthetic Event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


HTMLButtonElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
</tbody>
</table>



