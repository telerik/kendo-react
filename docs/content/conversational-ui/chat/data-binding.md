---
title: Data Binding
description: 'Bind data to the KendoReact Chat component using standard data binding approaches.'
components: ["chat"]
slug: databinding_standard_chat
position: 15
---

# React Chat Data Binding

The Chat component is a powerful tool that requires data-binding to display array collections into messages. This article shows how to connect your Chat component to streaming data, manage user identities, and handle message flow in React applications.

You can use the Chat component to build customer support chats or AI-powered conversations. This article gives you practical examples and best practices for working with message data in Chat.

The Chat component supports two data binding approaches:

-   [Standard Data Binding](#standard-data-binding)&mdash;When your data structure matches the Chat's Message interface
-   [Field Mapping](#field-mapping)&mdash;When you have custom data structures that need to be mapped to Chat properties

## Standard Data Binding

To bind the Chat messages, set the [`messages`](slug:api_conversational-ui_chatprops#messages) property to an array of [`Message`](slug:api_conversational-ui_message) objects. Each `Message` object contains properties such as `id`, `text`, `author`, `timestamp`, `status`, `replyToId`, and other metadata that control how the message appears and behaves in the Chat interface.

Chat conversations involve multiple participants, so messages must be visually distinguished by their author. To differentiate between messages sent by the current user and those received from other participants (such as AI services, support agents, or other users), set the [`authorId`](slug:api_conversational-ui_chatprops#authorid) property. Messages from this user will appear aligned to the right side of the chat, while messages from other senders appear on the left.

The following example demonstrates how to bind the messages of the Chat when your data structure matches the expected Message interface. It also shows message status tracking and threaded reply functionality using the `replyToId` property.

{% meta height:760 %}
{% embed_file chat/data-binding/standard/app.tsx preview %}
{% embed_file chat/data-binding/standard/main.tsx %}
{% endmeta %}

## Field Mapping

When your data source uses custom field names that don't match the Chat component's default Message interface, you can use field mapping to map your custom properties to the expected Chat properties. This approach is particularly useful when integrating with existing APIs or databases that use different naming conventions.

The Chat component provides field mapping properties that allow you to specify which fields in your data correspond to the Chat's expected properties:

-   [`idField`](slug:api_conversational-ui_chatprops#idfield)&mdash;Maps to the message ID
-   [`textField`](slug:api_conversational-ui_chatprops#textfield)&mdash;Maps to the message text content
-   [`authorIdField`](slug:api_conversational-ui_chatprops#authoridfield)&mdash;Maps to the author ID
-   [`authorNameField`](slug:api_conversational-ui_chatprops#authornamefield)&mdash;Maps to the author name (when flattened)
-   [`authorImageUrlField`](slug:api_conversational-ui_chatprops#authorimageurlfield)&mdash;Maps to the author avatar URL (when flattened)
-   [`statusField`](slug:api_conversational-ui_chatprops#statusfield)&mdash;Maps to the message status
-   [`replyToIdField`](slug:api_conversational-ui_chatprops#replytoidfield)&mdash;Maps to the ID of the message being replied to

For a complete list of all available field mapping properties and their configuration options, refer to the [Chat API documentation](slug:api_conversational-ui_chatprops). Additional field mapping properties are available for advanced scenarios and custom data structures.

{% meta height:730 %}
{% embed_file chat/data-binding/field-mapping/app.tsx preview %}
{% embed_file chat/data-binding/field-mapping/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with Chat](slug:getting_started_chat)
-   [AI Service Integration](slug:integrations_ai_llm_chat)
-   [API Reference of the Chat](slug:api_conversational-ui)
