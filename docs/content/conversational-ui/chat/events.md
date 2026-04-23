---
title: Events
description: 'Learn about the KendoReact Chat events and how to handle user interactions in React projects.'
components: ["chat"]
slug: events_chat
position: 80
---

# Events

The KendoReact Chat emits several events that enable you to control its behavior upon user interaction:

-   [`onSendMessage`](slug:api_conversational-ui_chatprops#onSendMessage) - Fires when the user sends a new message through the input field.
-   [`onActionExecute`](slug:api_conversational-ui_chatprops#onActionExecute) - Fires when the user clicks on a message action button (reply, postBack, openUrl).
-   [`onSuggestionClick`](slug:api_conversational-ui_chatprops#onSuggestionClick) - Fires when the user clicks on a suggestion button.
-   [`onToolbarAction`](slug:api_conversational-ui_chatprops#onToolbarAction) - Fires when the user clicks on a toolbar action (edit, delete, reply, react, etc.).
-   [`onContextMenuAction`](slug:api_conversational-ui_chatprops#onContextMenuAction) - Fires when the user performs a right-click context menu action.
-   [`onFileAction`](slug:api_conversational-ui_chatprops#onFileAction) - Fires when the user interacts with file attachments (download, preview, remove).
-   [`onInputValueChange`](slug:api_conversational-ui_chatprops#onInputValueChange) - Fires when the input field value changes, useful for typing indicators.
-   [`onUnpin`](slug:api_conversational-ui_chatprops#onUnpin) - Fires when the user unpins a previously pinned message.
-   [`onDownload`](slug:api_conversational-ui_chatprops#onDownload) - Fires when the user downloads an attachment from a message.

The following example demonstrates all the events that the Chat features.

{% meta height:680 %}
{% embed_file chat/events/app.tsx preview %}
{% embed_file chat/events/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Conversational UI Package](slug:get_started_convui)
-   [API Reference of the KendoReact Chat](slug:api_conversational-ui_chat)
-   [API Reference of the ChatProps](slug:api_conversational-ui_chatprops)
