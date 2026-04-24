---
title: Message Templates
description: 'Customize the appearance of messages in the KendoReact Chat component.'
components: ["chat"]
slug: customization_message_templates_chat
position: 10
---

# Message Templates

The Chat component allows you to customize the appearance and content of messages through various template options, providing full control over how messages are rendered.

You can implement the following message template customizations:

-   [Custom Message Templates](#custom-message-templates)&mdash;Create custom React components to control message appearance and layout
-   [Adding Images to Messages](#adding-images-to-messages)&mdash;Display images alongside text content using custom message templates
-   [Displaying Markdown Content](#displaying-markdown-content)&mdash;Render Markdown content within messages using external libraries

## Custom Message Templates

The Chat allows you to customize the appearance of messages through the [`messageTemplate`](slug:api_conversational-ui_chatprops#toc-messagetemplate) property. This template replaces the entire message rendering, giving you complete control over the message structure.

> Using `messageTemplate` overrides the entire message rendering and removes built-in functionalities such as message collapse, and timestamps. If you want to customize only the message content while preserving these features, use [`messageContentTemplate`](slug:customization_message_content_templates_chat) instead.

To set a custom message template, create a React component and assign it to the `messageTemplate` property of the Chat component.

{% meta height:830 %}
{% embed_file chat/customization/message-templates/app.tsx preview %}
{% embed_file chat/customization/message-templates/main.tsx %}
{% embed_file chat/customization/message-templates/templates.tsx %}
{% embed_file chat/customization/message-templates/styles.css %}
{% endmeta %}

## Adding Images to Messages

The following example demonstrates how to create custom message templates that can display images alongside text content. This approach gives you full control over image rendering, including sizing, positioning, and layout.

{% meta height:680 %}
{% embed_file chat/customization/message-templates-images/app.tsx preview %}
{% embed_file chat/customization/message-templates-images/main.tsx %}
{% embed_file chat/customization/message-templates-images/templates.tsx %}
{% embed_file chat/customization/message-templates-images/styles.css %}
{% endmeta %}

## Displaying Markdown Content

The following example demonstrates how to render Markdown by utilizing the marked library.

{% meta height:680 %}
{% embed_file chat/customization/markdown-messages/app.tsx preview %}
{% embed_file chat/customization/markdown-messages/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Content Templates](slug:customization_message_content_templates_chat)
-   [Attachment Templates](slug:customization_attachment_templates_chat)
-   [Header Templates](slug:customization_header_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
