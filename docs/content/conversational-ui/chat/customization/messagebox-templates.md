---
title: MessageBox Templates
description: 'Customize the input area of the KendoReact Chat component using messageBox templates.'
components: ["chat"]
slug: customization_messagebox_templates_chat
position: 50
---

# MessageBox Templates

The Chat allows you to customize the input area through the [`messageBox`](slug:api_conversational-ui_chatprops#toc-messagebox) property.

To set a custom messageBox template, create a React component and assign it to the `messageBox` property of the Chat component.

The messageBox template gives you complete control over the input experience, allowing you to add custom buttons, modify the input field, or create entirely new input interfaces.

## MessageBox Template Examples

The demo showcases two messageBox implementations:

-   **Default**: Built-in Chat component messageBox with standard input and send functionality
-   **Enhanced**: Custom messageBox with additional action buttons for attachments and voice messages, styled input field, and improved visual design

> **Note**: The Enhanced template is a custom implementation that demonstrates how to extend the messageBox functionality. You can implement any custom input controls, validation, action buttons, or styling based on your specific requirements.

{% meta height:830 %}
{% embed_file chat/customization/messagebox-templates/app.tsx preview %}
{% embed_file chat/customization/messagebox-templates/main.tsx %}
{% embed_file chat/customization/messagebox-templates/templates.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Templates](slug:customization_message_templates_chat)
-   [Attachment Templates](slug:customization_attachment_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
