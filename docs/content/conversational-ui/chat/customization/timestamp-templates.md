---
title: Timestamp Templates
description: 'Customize timestamp display and formatting in the KendoReact Chat component.'
components: ["chat"]
slug: customization_timestamp_templates_chat
position: 40
---

# Timestamp Templates

The Chat allows you to customize how timestamps are displayed for messages through the [`timestampTemplate`](slug:api_conversational-ui_chatprops#toc-timestamptemplate) property.

To set a custom timestamp template, create a React component and assign it to the `timestampTemplate` property of the Chat component.

## Timestamp Template Examples

The demo showcases four timestamp template implementations:

-   **Default**: Built-in Chat component timestamp display
-   **Relative**: Shows relative time (e.g., "5m ago", "2h ago") that updates automatically
-   **Detailed**: Full date and time in a multi-line format
-   **Interactive**: Clickable button to toggle between relative and absolute time formats

> **Note**: The Relative, Detailed, and Interactive templates are custom implementations that demonstrate the flexibility of the timestamp template feature. You can implement any custom logic, formatting, or interaction patterns based on your specific requirements.

{% meta height:830 %}
{% embed_file chat/customization/timestamp-templates/app.tsx preview %}
{% embed_file chat/customization/timestamp-templates/main.tsx %}
{% embed_file chat/customization/timestamp-templates/templates.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Templates](slug:customization_message_templates_chat)
-   [Status Templates](slug:customization_status_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
