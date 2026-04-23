---
title: Message
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the Message."
api_reference: true
type: inner_api
slug: api_conversational-ui_message
---

# Message
Represents a Chat message.

> * Provide the `author` field.
> * [Local users](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/chatprops#toc-user) display to the right in left-to-right languages and to the left in right-to-left languages.
> * If `typing` is `true`, the Chat displays a typing indicator instead of text.


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


#### attachmentLayout?


</td>
<td type class="table-cell-type">


<code>


[AttachmentLayout]({% slug api_conversational-ui_attachmentlayout %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Layout used for displaying message attachments, if any ([see example](https://www.telerik.com/kendo-react-ui/components/conversational-ui/chat/file-uploads-and-media/attachments#toc-display-modes)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### attachments?


</td>
<td type class="table-cell-type">


<code>


[Attachment]({% slug api_conversational-ui_attachment %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional message attachments ([see example](https://www.telerik.com/kendo-react-ui/components/conversational-ui/chat/file-uploads-and-media/attachments)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### author


</td>
<td type class="table-cell-type">


<code>


[User]({% slug api_conversational-ui_user %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Author of the message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### files?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Files attached to the message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Unique identifier of the message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isDeleted?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the message has been deleted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isFailed?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Indicates whether the message has failed to send.
When `true`, renders a retry button that fires the `onResendMessage` event.




```tsx
const message: Message = {
  id: 1,
  author: user,
  text: 'Hello',
  isFailed: true
};
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### isPinned?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the message is pinned.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedAt?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Date and time when the message was pinned.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedBy?


</td>
<td type class="table-cell-type">


<code>


[User]({% slug api_conversational-ui_user %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


User who pinned the message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### replyToId?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


ID of the message this message replies to.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectionIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Index used for keyboard selection navigation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### status?


</td>
<td type class="table-cell-type">


<code>


string | [MessageStatus]({% slug api_conversational-ui_messagestatus %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the current status of the message.
The status appears when the message is selected by clicking or through keyboard navigation.

```tsx
const message: Message = {
  id: 1,
  author: user,
  text: 'Hello',
  status: 'Seen'
};
```


```tsx
import { eyeIcon } from '@progress/kendo-svg-icons';

const message: Message = {
  id: 1,
  author: user,
  text: 'Hello',
  status: {
    text: 'Seen',
    svgIcon: eyeIcon
  }
};
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestedActions?


</td>
<td type class="table-cell-type">


<code>


[Action]({% slug api_conversational-ui_action %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Suggested quick actions displayed below this message ([see example](https://www.telerik.com/kendo-react-ui/components/conversational-ui/chat/quick-actions/suggested-actions#toc-defining-quick-actions)).

> The Chat displays suggested actions only for the last message in the conversation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional text for the message.
Some messages contain only attachments or quick actions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### timestamp?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Time when the message was composed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### typing?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the user is still typing the message.
If `true`, the Chat displays a typing indicator instead of the message.


</td>
</tr>
</tbody>
</table>



