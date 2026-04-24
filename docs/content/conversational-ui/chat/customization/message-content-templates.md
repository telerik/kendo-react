---
title: Message Content Templates
description: 'Customize the content area of messages while preserving the default Chat structure in the KendoReact Chat component.'
components: ["chat"]
slug: customization_message_content_templates_chat
position: 11
tag: new
---

# Message Content Templates

The Chat component lets you customize the message content area while preserving the default Chat message structure through the [`messageContentTemplate`](slug:api_conversational-ui_chatprops#messagecontenttemplate) property. For example, you can apply custom text formatting, add icons, or process markdown syntax.

## Content Template Examples

The following demo shows how to customize message content with text highlighting, icon rendering, and markdown processing while maintaining the Chat's native bubble structure and functionality.

{% meta height:830 %}
{% embed_file chat/customization/message-content-templates/app.tsx preview %}
{% embed_file chat/customization/message-content-templates/main.tsx %}
{% embed_file chat/customization/message-content-templates/templates.tsx %}
{% endmeta %}

## Suggested Links

-   [Role-Specific Configuration](slug:messages_role_specific_configuration_chat)
-   [Message Templates](slug:customization_message_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
