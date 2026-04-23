---
title: Failed Messages
description: 'Handle and display failed message delivery in the KendoReact Chat component.'
components: ['chat']
slug: messages_failed_messages_chat
position: 50
tag: new
---

# Failed Messages

The Chat component provides built-in functionality for handling and displaying failed message delivery, allowing users to retry sending messages that didn't go through successfully.

When a message fails to send, the Chat displays a visual indicator along with a retry action that lets users resend the message. This feature enhances the user experience by providing clear feedback about delivery status and offering a simple way to recover from failures.

## Failed Message States

The Chat component identifies failed messages using the [`isFailed`](slug:api_conversational-ui_message#isfailed) property on the [`Message`](slug:api_conversational-ui_message) object. When set to `true`, the message will display with a failed state indicator, making it clear to users that delivery was unsuccessful.

Failed messages can occur due to various reasons such as network connectivity issues, server errors, or validation failures.

## Resending Failed Messages

When a message is marked as failed, the Chat automatically displays a resend action button. Users can click this button to retry sending the message.

The [`onResendMessage`](slug:api_conversational-ui_chatprops#onresendmessage) event is triggered when a user attempts to resend a failed message, allowing you to implement the retry logic, such as re-attempting the API call or re-validating the message content.

{% meta height:680 %}
{% embed_file chat/messages/failed-message/app.tsx preview %}
{% embed_file chat/messages/failed-message/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Appearance](slug:messages_appearance_chat)
-   [Message Tools](slug:messages_tools_chat)
-   [Message Persistence](slug:messages_persistence_chat)
-   [Events Handling](slug:events_chat)
-   [Chat API Reference](slug:api_conversational-ui)
