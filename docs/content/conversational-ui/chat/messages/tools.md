---
title: Tools
description: 'Configure message context menus and toolbar actions for enhanced user interaction in the KendoReact Chat.'
components: ["chat"]
slug: messages_tools_chat
position: 1
tag: updated
---

# Message Tools

The KendoReact Chat provides message tools that enable users to perform various actions on messages such as copy, reply, delete, and pin.

The Chat component supports three types of message tools:

-   [Context Menu](#context-menu)&mdash;Right-click actions available on any message
-   [Toolbar Tools](#toolbar-tools)&mdash;Button actions displayed under each message
-   [File Actions](#file-actions)&mdash;Actions available for file attachments in messages

> The message toolbar functionality introduced in v12.0.0 provides enhanced message-level actions and differs from the previous Chat toolbar implementation.

## Context Menu

The context menu actions are specific message actions that are available when a user right-clicks any message in the Chat.

Upon right-clicking a message, the context menu displays the available actions, allowing users to quickly perform the desired action without navigating away from the chat interface.

The default actions are **Copy** and **Reply**. However, you can extend them and add any other custom actions like Delete, Pin, Forward, and others by setting the [`messageContextMenuActions`](slug:api_conversational-ui_chatprops#messagecontextmenuactions) property of the Chat to a [MessageAction](slug:api_conversational-ui_messageaction) array. This provides a way to customize the user experience and add functionality that is specific to your application.

Upon selecting an action from the context menu, the [`onContextMenuAction`](slug:api_conversational-ui_chatprops#oncontextmenuaction) event is triggered, returning the selected [`MessageAction`](slug:api_conversational-ui_messageaction) as an argument, allowing you to handle the action accordingly.

{% meta height:680 %}
{% embed_file chat/messages/context-menu/app.tsx preview %}
{% embed_file chat/messages/context-menu/main.tsx %}
{% endmeta %}

## Toolbar Tools

The message toolbar actions are displayed as a set of buttons under each message. They provide quick access to common actions that can be performed on the message such as copy, forward, download, and others.

To customize the message toolbar actions, set the [`messageToolbarActions`](slug:api_conversational-ui_chatprops#messagetoolbaractions) property of the Chat to a [`MessageAction`](slug:api_conversational-ui_messageaction) array.

Upon clicking any of the toolbar action buttons, the [`onToolbarAction`](slug:api_conversational-ui_chatprops#ontoolbaraction) event is triggered, returning the selected [`MessageAction`](slug:api_conversational-ui_messageaction) as an argument. This allows you to handle the action accordingly.

{% meta height:680 %}
{% embed_file chat/messages/toolbar/app.tsx preview %}
{% embed_file chat/messages/toolbar/main.tsx %}
{% endmeta %}

## File Actions

The file actions provide users with options to interact with file attachments in messages, such as downloading, previewing, sharing, or removing files.

To customize the file actions, set the [`fileActions`](slug:api_conversational-ui_chatprops#fileactions) property of the Chat to a [`MessageAction`](slug:api_conversational-ui_messageaction) array.

When a user clicks any of the file action buttons, the [`onFileAction`](slug:api_conversational-ui_chatprops#onfileaction) event is triggered, returning the selected [`MessageAction`](slug:api_conversational-ui_messageaction) along with the file information. This allows you to handle file-related operations accordingly.

{% meta height:680 %}
{% embed_file chat/messages/file-actions/app.tsx preview %}
{% embed_file chat/messages/file-actions/main.tsx %}
{% embed_file chat/messages/file-actions/ActionLogger.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Appearance](slug:messages_appearance_chat)
-   [Message Persistence](slug:messages_persistence_chat)
-   [Events Handling](slug:events_chat)
-   [Chat API Reference](slug:api_conversational-ui)
