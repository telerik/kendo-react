---
title: PromptBoxPromptActionEvent
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the PromptBoxPromptActionEvent."
api_reference: true
type: inner_api
slug: api_conversational-ui_promptboxpromptactionevent
---

# PromptBoxPromptActionEvent
Event argument for the PromptBox `onPromptAction` event.


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


#### attachments


</td>
<td type class="table-cell-type">


<code>


UploadFileInfo[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The currently attached files when the action button is clicked.
Allows accessing attachments without requiring controlled mode.


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


[PromptBoxHandle]({% slug api_conversational-ui_promptboxhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current value of the PromptBox when the action button is clicked.
Allows accessing the message content without requiring controlled mode.


</td>
</tr>
</tbody>
</table>



