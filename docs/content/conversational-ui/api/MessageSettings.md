---
title: MessageSettings
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the MessageSettings."
api_reference: true
type: inner_api
slug: api_conversational-ui_messagesettings
---

# MessageSettings
Configuration settings for message display and behavior.


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


#### allowMessageCollapse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables expand or collapse for messages to save space.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fileActions?


</td>
<td type class="table-cell-type">


<code>


[MessageAction]({% slug api_conversational-ui_messageaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Actions displayed for files in messages for this message type.
When provided, this overrides the global fileActions for the specific message type (author/receiver).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageContentTemplate?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[ChatMessageTemplateProps]({% slug api_conversational-ui_chatmessagetemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


React functional or class component used as a message content template for this message type.
Rendered inside the .k-bubble-content element when provided.
The corresponding [`message`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/message) is passed as an `item` property.
When provided, this template overrides the global messageContentTemplate for the specific message type (author/receiver).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageContextMenuActions?


</td>
<td type class="table-cell-type">


<code>


[MessageAction]({% slug api_conversational-ui_messageaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Actions displayed in the message context menu for this message type.
When provided, this overrides the global messageContextMenuActions for the specific message type (author/receiver).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageTemplate?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[ChatMessageTemplateProps]({% slug api_conversational-ui_chatmessagetemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


React functional or class component used as a message template for this message type.
The corresponding [`message`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/message) is passed as an `item` property.
When provided, this template overrides the global messageTemplate for the specific message type (author/receiver).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageToolbarActions?


</td>
<td type class="table-cell-type">


<code>


[MessageAction]({% slug api_conversational-ui_messageaction %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Actions displayed in the message toolbar for this message type.
When provided, this overrides the global messageToolbarActions for the specific message type (author/receiver).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageWidthMode?


</td>
<td type class="table-cell-type">


<code>


[MessageWidthMode]({% slug api_conversational-ui_messagewidthmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the message width mode.
- `full`&mdash;Message occupies the full width of the Chat.
- `standard`&mdash;Message occupies a standard width for a compact display.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showAvatar?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls whether avatars are displayed for this message type.
When provided, this overrides the global showAvatar setting for the specific message type (author/receiver).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showUsername?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls whether author names are displayed for this message type.
When provided, this overrides the global showUsername setting for the specific message type (author/receiver).


</td>
</tr>
</tbody>
</table>



