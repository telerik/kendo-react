---
title: No Data Templates
description: 'Customize the appearance of the empty state in the KendoReact Chat component.'
components: ["chat"]
slug: customization_no_data_template_chat
position: 60
tag: new
---

# No Data Templates

The Chat component allows you to customize the empty state that appears when there are no messages through the [`noDataTemplate`](slug:api_conversational-ui_chatprops#toc-nodatatemplate) property.

To set a custom template when the Chat is empty, create a React component and assign it to the `noDataTemplate` property of the Chat component. This template is displayed when the messages array is empty, providing an opportunity to guide users, establish brand identity, or offer helpful actions to start the conversation.

{% meta height:870 %}
{% embed_file chat/customization/empty-chat-templates/app.tsx preview %}
{% embed_file chat/customization/empty-chat-templates/main.tsx %}
{% embed_file chat/customization/empty-chat-templates/templates.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Templates](slug:customization_message_templates_chat)
-   [Header Templates](slug:customization_header_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui_chatprops)
