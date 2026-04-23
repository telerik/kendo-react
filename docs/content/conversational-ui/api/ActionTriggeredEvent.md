---
title: ActionTriggeredEvent
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ActionTriggeredEvent."
api_reference: true
type: inner_api
slug: api_conversational-ui_actiontriggeredevent
---

# ActionTriggeredEvent



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


[MessageAction]({% slug api_conversational-ui_messageaction %}) | [FileAction]({% slug api_conversational-ui_fileaction %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The action that was triggered, can be a message action or file action.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### event


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;Element&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The synthetic event that triggered the action.


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


The target message associated with the action, if applicable.


</td>
</tr>
</tbody>
</table>



