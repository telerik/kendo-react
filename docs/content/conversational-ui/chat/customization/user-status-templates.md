---
title: User Status Templates
description: 'Customize the appearance of user status indicators in the KendoReact Chat component.'
components: ["chat"]
slug: customization_user_status_templates_chat
position: 70
tag: new
---

# User Status Templates

The Chat component allows you to display custom user status indicators next to user avatars through the [`userStatusTemplate`](slug:api_conversational-ui_chatprops#toc-userstatustemplate) property.

To set a custom user status template, create a React component and assign it to the `userStatusTemplate` property of the Chat component. The template receives the last `message` object from the message group. You can add custom fields to the object, and display indicators like online/offline status, availability, or custom presence states based on custom fields.

The following demo shows how to implement custom user status indicators that display online/offline badges with different colors and icons based on a custom `author.status` field.

{% meta height:830 %}
{% embed_file chat/customization/user-status-templates/app.tsx preview %}
{% embed_file chat/customization/user-status-templates/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Templates](slug:customization_message_templates_chat)
-   [Header Templates](slug:customization_header_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui_chatprops)
