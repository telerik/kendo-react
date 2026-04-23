---
title: Persistence
description: 'Implement message persistence and storage in the KendoReact Chat component.'
components: ["chat"]
slug: messages_persistence_chat
position: 30
---

# Message Persistence

The Chat component provides comprehensive persistence capabilities, allowing you to maintain both the message input state and the entire conversation history across browser sessions.

You can implement the following persistence options:

-   [Messages Persistence](#messages-persistence)&mdash;Maintain the entire conversation history across browser sessions
-   [Message Box Value Persistence](#message-box-value-persistence)&mdash;Persist the text that users compose but haven't sent yet

## Messages Persistence

You can implement persistence for the entire messages collection, allowing users to maintain their conversation history across browser sessions.

In a real-world scenario, messages should be stored on a remote server and fetched when the component initializes. This ensures that conversation history is available across different devices and provides better data security and backup capabilities.

To implement messages persistence, save the messages array to your server's database whenever new messages are added and fetch them from the server when the component initializes. This ensures that conversations continue seamlessly even after page refreshes, browser restarts, or when users switch between different devices.

> The following example uses localStorage for demonstration purposes only. In production applications, replace localStorage operations with appropriate API calls to your server endpoints for storing and retrieving messages.

{% meta height:970 %}
{% embed_file chat/messages/messages-persistence/app.tsx preview %}
{% embed_file chat/messages/messages-persistence/main.tsx %}
{% endmeta %}

## Message Box Value Persistence

The value of the message box is the text that the user has composed but not yet sent.

The Chat component provides comprehensive control over the message input through the `inputValue` property and the `onInputValueChange` event.

Use the `inputValue` property to set the value of the message box and handle the `onInputValueChange` event whenever the user types in the message input box. This allows you to track changes in real-time and helps implement features like auto-saving drafts, validating input, or pre-filling the message box based on user context.

{% meta height:900 %}
{% embed_file chat/messages/persistence/app.tsx preview %}
{% embed_file chat/messages/persistence/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Tools](slug:messages_tools_chat)
-   [Message Appearance](slug:messages_appearance_chat)
-   [Events Handling](slug:events_chat)
-   [Chat API Reference](slug:api_conversational-ui)
