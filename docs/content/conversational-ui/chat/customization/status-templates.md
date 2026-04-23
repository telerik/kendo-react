---
title: Status Templates
description: 'Customize message status indicators in the KendoReact Chat component.'
components: ["chat"]
slug: customization_status_templates_chat
position: 40
---

# Status Templates

The Chat allows you to customize how message status indicators are displayed through the [`statusTemplate`](slug:api_conversational-ui_chatprops#toc-statustemplate) property.

To set a custom status template, create a React component and assign it to the `statusTemplate` property of the Chat component.

## Status Template Examples

The demo showcases three status template implementations:

-   **Default**: Built-in Chat component status indicators
-   **Enhanced**: Custom icons with text labels (✓ Sent, ✓✓ Delivered, ✓✓✓ Read)
-   **Animated**: Enhanced template with smooth animations and transitions

Click on message bubbles in the demo to see the different templates in action.

{% meta height:970 %}
{% embed_file chat/customization/status-templates/app.tsx preview %}
{% embed_file chat/customization/status-templates/main.tsx %}
{% embed_file chat/customization/status-templates/templates.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Templates](slug:customization_message_templates_chat)
-   [Timestamp Templates](slug:customization_timestamp_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
