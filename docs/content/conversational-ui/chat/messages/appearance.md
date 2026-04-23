---
title: Appearance
description: 'Customize the styling and appearance of messages in the KendoReact Chat component.'
components: ["chat"]
slug: messages_appearance_chat
position: 20
---

# Message Appearance

The Chat component provides several options for styling messages, allowing you to customize their appearance to match your application's design.

The Chat component supports the following appearance customization options:

-   [Expanding and Collapsing Messages](#expanding-and-collapsing-messages)&mdash;Configure messages to expand and collapse for better readability
-   [Messages Width](#messages-width)&mdash;Control the width calculation and layout of individual messages
-   [Avatar Visibility](#avatar-visibility)&mdash;Control whether avatars are displayed for message groups
-   [Username Visibility](#username-visibility)&mdash;Control whether author names are displayed for message groups
-   [Timestamp Visibility](#timestamp-visibility)&mdash;Control when timestamps are displayed for messages
-   [Role-Specific Configuration](#role-specific-configuration)&mdash;Customize appearance differently for author versus receiver messages

## Expanding and Collapsing Messages

In some cases, messages may contain information that makes it difficult for users to quickly scan the chat history and find relevant messages.

To improve readability, you can enable the expanding and collapsing functionality of Chat messages. This allows users to click on a message to expand it and view the full content, or collapse it to hide the content and save space in the chat window.

To enable this feature, set the [`allowMessageCollapse`](slug:api_conversational-ui_chatprops#allowmessagecollapse) property of the Chat to `true`.

{% meta height:800 %}
{% embed_file chat/messages/collapse/app.tsx preview %}
{% embed_file chat/messages/collapse/main.tsx %}
{% endmeta %}

## Messages Width

The Chat component provides several properties to control the dimensions and layout of messages, allowing you to customize the appearance to fit your application's design requirements.

Apart from the standard `width` and `height` properties, the Chat also provides an option to set the messages width. The [`messageWidthMode`](slug:api_conversational-ui_chatprops#messagewidthmode) property controls how the width of individual messages is calculated within the Chat component. The available options are:

-   `standard` (default)&mdash;Messages use standard width calculation.
-   `full`&mdash;Messages take the full width of the chat container.

These dimension properties work together to provide a flexible layout system that adapts to different screen sizes and design requirements while maintaining optimal readability of the chat messages.

{% meta height:750 %}
{% embed_file chat/messages/width/app.tsx preview %}
{% embed_file chat/messages/width/main.tsx %}
{% endmeta %}

## Avatar Visibility

The [`showAvatar`](slug:api_conversational-ui_chatprops#showavatar) property controls whether avatars are displayed for message groups. By default, avatars are visible.

{% meta height:700 %}
{% embed_file chat/messages/show-avatar/app.tsx preview %}
{% embed_file chat/messages/show-avatar/main.tsx %}
{% endmeta %}

## Username Visibility

The [`showUsername`](slug:api_conversational-ui_chatprops#showusername) property controls whether author names are displayed for message groups. By default, usernames are visible.

{% meta height:700 %}
{% embed_file chat/messages/show-username/app.tsx preview %}
{% embed_file chat/messages/show-username/main.tsx %}
{% endmeta %}

## Timestamp Visibility

The [`timestampVisibility`](slug:api_conversational-ui_chatprops#timestampvisibility) property controls when timestamps are displayed for messages. The available modes are `'onFocus'` (default) which shows timestamps only for selected messages, and `'hidden'` which never displays timestamps.

{% meta height:700 %}
{% embed_file chat/messages/timestamp-visibility/app.tsx preview %}
{% embed_file chat/messages/timestamp-visibility/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Role-Specific Configuration](slug:messages_role_specific_configuration_chat)
-   [Message Tools](slug:messages_tools_chat)
-   [Message Persistence](slug:messages_persistence_chat)
-   [Events Handling](slug:events_chat)
-   [Chat API Reference](slug:api_conversational-ui)
