---
title: ChatProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ChatProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_chatprops
---

# ChatProps
Configuration for mapping custom data fields to Chat properties.
Lets the Chat work with various data source formats by mapping
your field names to expected Chat interface properties.


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


#### attachmentsField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'attachments'


</code>


</td>
<td class="table-cell-comment">


Field name for message attachments.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### attachmentTemplate?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


React functional or class component used as an attachment template ([see example](https://www.telerik.com/kendo-react-ui/components/conversational-ui/chat/file-uploads-and-media/attachments#toc-attachment-templates)). The corresponding [`attachment`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/attachment) is passed as an `item` property.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### authorId


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


ID of the local user. Identifies messages authored by the local user.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### authorIdField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'authorId'


</code>


</td>
<td class="table-cell-comment">


Field name for message author ID.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### authorImageAltTextField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'authorImageAltText'


</code>


</td>
<td class="table-cell-comment">


Field name for alt text of the author's avatar (when flattened).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### authorImageUrlField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'authorImageUrl'


</code>


</td>
<td class="table-cell-comment">


Field name for message author avatar URL (when flattened).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### authorMessageSettings?


</td>
<td type class="table-cell-type">


<code>


[MessageSettings]({% slug api_conversational-ui_messagesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configuration settings for author messages (messages from the local user).
These settings override global message settings for author messages.
If both global and author-specific settings are provided, the author-specific settings take precedence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### authorNameField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'authorName'


</code>


</td>
<td class="table-cell-comment">


Field name for message author name (when flattened).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoScrollThreshold?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">


<code>


'20%'


</code>


</td>
<td class="table-cell-comment">


Specifies the minimum offset between the top of the latest receiver message and the top edge
of the visible message area when auto-scrolling on new receiver messages.

Accepts a percentage string relative to the visible message area height (for example, `'30%'`)
or an absolute pixel value as a number.

When a new receiver message arrives and the user is near or at the bottom of the scrollable
message list, the Chat scrolls down so that at least this much space is kept between the
new message and the top of the visible area. This ensures older messages remain partially
in view rather than being scrolled out entirely.

Has no effect on author messages, which always scroll to the bottom.

Negative values are intentionally allowed so receiver messages can scroll fully to the bottom if needed.




```tsx
// Keep at least 30% of the visible message area above the new receiver message
<Chat autoScrollThreshold='30%' />

// Keep at least 80px above the new receiver message
<Chat autoScrollThreshold={80} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


CSS class of the Chat DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Direction of the Chat component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index (exclusive) in the full conversation that marks the end of the current batch.
Only relevant in remote mode (`messages.length < total`).


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


Actions displayed for files in the message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filesField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'files'


</code>


</td>
<td class="table-cell-comment">


Field name for file attachments.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerTemplate?


</td>
<td type class="table-cell-type">


<code>


ReactElement&lt;unknown&gt; | () => ReactElement&lt;unknown&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Template for the header of the Chat component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Height of the Chat.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


ID of the Chat component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### idField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'id'


</code>


</td>
<td class="table-cell-comment">


Field name for message ID.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the controlled input value of the Chat component.
When provided, the Chat operates in controlled mode and you must handle `onInputValueChange` to update the value.

```tsx
const [inputValue, setInputValue] = useState('');
<Chat inputValue={inputValue} onInputValueChange={setInputValue} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### isDeletedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'isDeleted'


</code>


</td>
<td class="table-cell-comment">


Field name for message deletion status.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### isFailedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'isFailed'


</code>


</td>
<td class="table-cell-comment">


Field name for message failed status.
Indicates whether the message has failed to send.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### isPinnedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'isPinned'


</code>


</td>
<td class="table-cell-comment">


Field name for message pinned status.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading?


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


Specifies whether the Send button is transformed to a stop button.




```tsx
<Chat loading={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageBox?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ChatMessageBoxProps]({% slug api_conversational-ui_chatmessageboxprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables customization or override of the default message box item ([see example](https://www.telerik.com/kendo-react-ui/components/conversational-ui/chat/customization/messagebox-templates)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageBoxSettings?


</td>
<td type class="table-cell-type">


<code>


[MessageBoxSettings]({% slug api_conversational-ui_messageboxsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configuration for the Message Box (PromptBox component).

```tsx
<Chat messageBoxSettings={{ rows: 5, maxTextAreaHeight: '300' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageContentTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ChatMessageTemplateProps]({% slug api_conversational-ui_chatmessagetemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


React functional or class component used as a message content template. Rendered inside the .k-bubble-content element when provided. The corresponding [`message`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/message) is passed as an `item` property.


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


Actions displayed in the message context menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageFilesLayout?


</td>
<td type class="table-cell-type">


<code>


[FilesLayoutMode]({% slug api_conversational-ui_fileslayoutmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'vertical'


</code>


</td>
<td class="table-cell-comment">


Sets the file layout mode for file attachments in messages.
- `vertical`&mdash;Files are displayed in a vertical list layout.
- `wrap`&mdash;Files are displayed in a wrapped layout.
- `horizontal`&mdash;Files are displayed in a horizontal list layout with scrollable overflow.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### messages


</td>
<td type class="table-cell-type">


<code>


any[] | [Message]({% slug api_conversational-ui_message %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Messages of the Chat. Can be an array of `Message` objects or raw data objects
that map using the field mapping configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messageTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ChatMessageTemplateProps]({% slug api_conversational-ui_chatmessagetemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


React functional or class component used as a message template. The corresponding [`message`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/message) is passed as an `item` property.


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


Actions displayed in the message toolbar.


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


<code>


'standard'


</code>


</td>
<td class="table-cell-comment">


Sets the message width mode.
- `full`&mdash;Message occupies the full width of the Chat.
- `standard`&mdash;Message occupies a standard width for a compact display.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### noDataTemplate?


</td>
<td type class="table-cell-type">


<code>


ReactElement&lt;unknown&gt; | () => ReactElement&lt;unknown&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Template for the empty Chat state when no messages are present.
Only renders when there are no messages and this template is provided.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onActionExecute?


</td>
<td type class="table-cell-type">


<code>


(event: [ChatActionExecuteEvent]({% slug api_conversational-ui_chatactionexecuteevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a quick action button. The Chat internally handles the `reply`, `openUrl`, and `call` [known actions](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/actiontype). Emits [`ExecuteActionEvent`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/chatactionexecuteevent). The event is preventable. If you call `preventDefault`, the built-in action is suppressed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextMenuAction?


</td>
<td type class="table-cell-type">


<code>


(action: [MessageAction]({% slug api_conversational-ui_messageaction %}), event: SyntheticEvent&lt;any&gt;, target: [Message]({% slug api_conversational-ui_message %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a context menu action is executed on a message. Provides the action and target message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDownload?


</td>
<td type class="table-cell-type">


<code>


(files: [ChatFile]({% slug api_conversational-ui_chatfile %})[], message: [Message]({% slug api_conversational-ui_message %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a download action is executed on a message. Provides the selected files and parent message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFileAction?


</td>
<td type class="table-cell-type">


<code>


(action: [FileAction]({% slug api_conversational-ui_fileaction %}), event: SyntheticEvent&lt;any&gt;, target: [ChatFile]({% slug api_conversational-ui_chatfile %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a file action is executed on a message. Provides the action and target file.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onInputValueChange?


</td>
<td type class="table-cell-type">


<code>


(value: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the input value changes. Provides the new input value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLoadMoreMessages?


</td>
<td type class="table-cell-type">


<code>


(event: [ChatLoadMoreMessagesEvent]({% slug api_conversational-ui_chatloadmoremessagesevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires only in remote mode (`messages.length < total`) when the user scrolls near the edge
of the rendered message window.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onReferencedMessageClick?


</td>
<td type class="table-cell-type">


<code>


(event: [ChatReferencedMessageClickEvent]({% slug api_conversational-ui_chatreferencedmessageclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a referenced message (pinned indicator or reply preview).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResendMessage?


</td>
<td type class="table-cell-type">


<code>


(event: [ChatResendMessageEvent]({% slug api_conversational-ui_chatresendmessageevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the Retry button on a failed message.
Emits [`ChatResendMessageEvent`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/chatresendmessageevent).

```tsx
const handleResend = (event: ChatResendMessageEvent) => {
  console.log('Resending message:', event.message);
  // Implement retry logic
};
<Chat onResendMessage={handleResend} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSendMessage?


</td>
<td type class="table-cell-type">


<code>


(event: [ChatSendMessageEvent]({% slug api_conversational-ui_chatsendmessageevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user types a message and clicks **Send** or presses **Enter**. Emits [`SendMessageEvent`](https://www.telerik.com/kendo-react-ui/components/conversational-ui/api/chatsendmessageevent).

> The Chat does not automatically update with the new message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSuggestionClick?


</td>
<td type class="table-cell-type">


<code>


(suggestion: [ChatSuggestion]({% slug api_conversational-ui_chatsuggestion %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a suggestion is clicked. Provides the clicked suggestion.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onToolbarAction?


</td>
<td type class="table-cell-type">


<code>


(action: [MessageAction]({% slug api_conversational-ui_messageaction %}), event: SyntheticEvent&lt;any&gt;, target: [Message]({% slug api_conversational-ui_message %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a toolbar action is executed on a message. Provides the action and target message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onUnpin?


</td>
<td type class="table-cell-type">


<code>


(message: [Message]({% slug api_conversational-ui_message %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a message is unpinned. Provides the message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


50


</code>


</td>
<td class="table-cell-comment">


How many messages to load per scroll-triggered batch.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### pinnedMessages?


</td>
<td type class="table-cell-type">


<code>


[Message]({% slug api_conversational-ui_message %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The full set of pinned messages in the conversation.
Only needed in remote mode (`messages.length < total`).
The Chat uses this to render the pinned message indicator when the pinned message
is outside the current batch. In built-in mode, the Chat has all messages and can
look them up directly. This collection is stable — set once on load and updated
only when pins change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Text displayed inside the new message input when empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### quickActionsLayout?


</td>
<td type class="table-cell-type">


<code>


[QuickActionsLayoutMode]({% slug api_conversational-ui_quickactionslayoutmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'scroll'


</code>


</td>
<td class="table-cell-comment">


Controls how quick actions behave when they exceed available space.
- `scroll`&mdash;Quick actions scroll horizontally without navigation buttons.
- `wrap`&mdash;Quick actions wrap to new lines when they overflow.
- `scrollbuttons`&mdash;Quick actions scroll horizontally with navigation buttons.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### receiverMessageSettings?


</td>
<td type class="table-cell-type">


<code>


[MessageSettings]({% slug api_conversational-ui_messagesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configuration settings for receiver messages (messages from other users).
These settings override global message settings for receiver messages.
If both global and receiver-specific settings are provided, the receiver-specific settings take precedence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### repliedToMessages?


</td>
<td type class="table-cell-type">


<code>


[Message]({% slug api_conversational-ui_message %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Messages that are reply targets for messages in the current batch but live outside `messages[]`.
Only needed in remote mode (`messages.length < total`).
The Chat uses this to render reply previews when the replied-to message is not in the current batch.
This collection is scoped per batch — rebuilt on each `onLoadMoreMessages` or batch replacement.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### replyToIdField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'replyToId'


</code>


</td>
<td class="table-cell-comment">


Field name for reply-to message ID.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollMode?


</td>
<td type class="table-cell-type">


<code>


[ScrollMode]({% slug api_conversational-ui_scrollmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'scrollable'


</code>


</td>
<td class="table-cell-comment">


Controls the scroll behavior of the message list.
- `scrollable`&mdash;Default mode. All messages are rendered with standard scroll behavior.
- `endless`&mdash;Endless scroll mode. The Chat starts by rendering the last `pageSize` messages
  and prepends older ones as the user scrolls up.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollToBottomButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Enables or disables the scroll-to-bottom button that appears when the user scrolls up.
When enabled, a floating action button appears to allow quick navigation to the latest messages.




```tsx
<Chat scrollToBottomButton={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### sendButtonConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | ButtonProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the appearance and behavior of the send button in the Chat component.


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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Controls whether avatars are displayed for messages.
Can be overridden by author-specific and receiver-specific settings.





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


<code>


true


</code>


</td>
<td class="table-cell-comment">


Controls whether author names are displayed for messages.
Can be overridden by author-specific and receiver-specific settings.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### speechToTextConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | SpeechToTextButtonProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the speech-to-text functionality in the Chat.
This allows users to dictate messages instead of typing them.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index in the full conversation that `messages[0]` corresponds to.
Only relevant in remote mode (`messages.length < total`).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### statusField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'status'


</code>


</td>
<td class="table-cell-comment">


Field name for message status.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### statusTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[StatusTemplateProps]({% slug api_conversational-ui_statustemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Template for status items below each message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the styles that are applied to the Chat.

```tsx
<Chat style={{ maxWidth: '400px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestedActionsField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'suggestedActions'


</code>


</td>
<td class="table-cell-comment">


Field name for the `suggestedActions` property of a message.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestions?


</td>
<td type class="table-cell-type">


<code>


[ChatSuggestion]({% slug api_conversational-ui_chatsuggestion %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


List of message suggestions displayed above the message input.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestionsLayout?


</td>
<td type class="table-cell-type">


<code>


[SuggestionsLayoutMode]({% slug api_conversational-ui_suggestionslayoutmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'scroll'


</code>


</td>
<td class="table-cell-comment">


Controls how suggestions behave when they exceed available space.
- `scroll`&mdash;Suggestions scroll horizontally without navigation buttons.
- `wrap`&mdash;Suggestions wrap to new lines when they overflow.
- `scrollbuttons`&mdash;Suggestions scroll horizontally with navigation buttons.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestionTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[SuggestionTemplateProps]({% slug api_conversational-ui_suggestiontemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Template for suggestion items displayed above the message input.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### textField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'text'


</code>


</td>
<td class="table-cell-comment">


Field name for message text content.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### timestampField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'timestamp'


</code>


</td>
<td class="table-cell-comment">


Field name for message timestamp.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### timestampTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;{ item: DateMarker; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Template for the timestamp of the message.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### timestampVisibility?


</td>
<td type class="table-cell-type">


<code>


[TimestampVisibilityMode]({% slug api_conversational-ui_timestampvisibilitymode %})


</code>


</td>
<td class="table-cell-default">


<code>


'onFocus'


</code>


</td>
<td class="table-cell-comment">


Controls when timestamps are visible for messages.
- `onFocus`&mdash;Timestamps are only visible for selected/focused messages.
- `hidden`&mdash;Timestamps are never visible for any messages.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### total?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The total number of messages in the conversation.
Used to determine the mode: when `messages.length === total`, the Chat manages rendering
internally (built-in mode); when `messages.length < total`, the Chat fires `onLoadMoreMessages`
for the consumer to fetch data (remote mode).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### typingField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'typing'


</code>


</td>
<td class="table-cell-comment">


Field name for the `typing` property of a message.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### uploadConfig?


</td>
<td type class="table-cell-type">


<code>


boolean | [UploadButtonProps]({% slug api_conversational-ui_uploadbuttonprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the upload configuration for the Chat component.
This can be used to customize the file upload behavior, such as accepted file types and maximum file size.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### userStatusTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[UserStatusTemplateProps]({% slug api_conversational-ui_userstatustemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Template for user status display next to avatars.
Only rendered when an avatar for the user is provided.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Width of the Chat.


</td>
</tr>
</tbody>
</table>



