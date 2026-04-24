---
title: Role-Specific Configuration
description: 'Configure different behaviors and appearances for author and receiver messages in the KendoReact Chat component.'
components: ["chat"]
slug: messages_role_specific_configuration_chat
position: 30
tag: new
---

# Role-Specific Message Configuration

The Chat component provides a powerful configuration system that allows you to customize message behavior and appearance differently for author messages (messages from the local user) versus receiver messages (messages from other users) using the [`authorMessageSettings`](slug:api_conversational-ui_chatprops#authormessagesettings) and [`receiverMessageSettings`](slug:api_conversational-ui_chatprops#receivermessagesettings) properties.

## Configuration Overview

Both `authorMessageSettings` and `receiverMessageSettings` accept a `MessageSettings` object that allows you to override global message settings for each message type independently:

-   [`allowMessageCollapse`](slug:messages_appearance_chat#collapsible-messages)
-   [`messageWidthMode`](slug:messages_appearance_chat#messages-width)
-   [`messageTemplate`](slug:customization_message_templates_chat)
-   [`messageContentTemplate`](slug:customization_message_content_templates_chat)
-   [`messageToolbarActions`](slug:messages_tools_chat#toolbar-tools)
-   [`messageContextMenuActions`](slug:messages_tools_chat#context-menu)
-   [`fileActions`](slug:messages_tools_chat#file-actions)
-   [`showAvatar`](slug:messages_appearance_chat#avatar-visibility)
-   [`showUsername`](slug:messages_appearance_chat#username-visibility)

> When you configure both global settings and role-specific settings, the role-specific settings take precedence.

## AI Assistant Interface Example

The following example demonstrates an AI Assistant interface using role-specific configuration. AI messages use a custom template with full width, while user messages maintain a cleaner standard appearance with toolbar actions:

{% meta height:660 %}
{% embed_file chat/messages/role-specific/ai-assistant/app.tsx preview %}
{% embed_file chat/messages/role-specific/ai-assistant/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Appearance](slug:messages_appearance_chat)
-   [Message Templates](slug:customization_message_templates_chat)
-   [Message Content Templates](slug:customization_message_content_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
