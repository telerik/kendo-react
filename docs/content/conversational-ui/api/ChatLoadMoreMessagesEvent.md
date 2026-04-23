---
title: ChatLoadMoreMessagesEvent
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ChatLoadMoreMessagesEvent."
api_reference: true
type: inner_api
slug: api_conversational-ui_chatloadmoremessagesevent
---

# ChatLoadMoreMessagesEvent
Arguments for the `onLoadMoreMessages` event of the Chat.
Fires in remote mode (`messages.length < total`) when the user scrolls near the edge
of the rendered message window.


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


#### endIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end index of the requested message range (exclusive).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start index of the requested message range (inclusive).


</td>
</tr>
</tbody>
</table>



