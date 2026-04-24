---
title: ChatActionExecuteEvent
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ChatActionExecuteEvent."
api_reference: true
type: inner_api
slug: api_conversational-ui_chatactionexecuteevent
---

# ChatActionExecuteEvent
Arguments for the `actionexecute` event of the Chat.


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


[Action]({% slug api_conversational-ui_action %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The executed action.


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


#### target?


</td>
<td type class="table-cell-type">


<code>


[Message]({% slug api_conversational-ui_message %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target message.


</td>
</tr>
</tbody>
</table>



