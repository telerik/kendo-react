---
title: Suggested Actions
description: 'Use the quick action suggestions of the KendoReact Chat.'
components: ["chat"]
slug: quick_actions_suggested_actions_chat
position: 20
---

# Suggested Actions

The Chat messages may contain suggestions for quick actions such as preset replies.

> The Chat displays suggested actions for the last message only.

## Supported Action Types

The Chat provides built-in support for the following action types:

-   `openUrl`&mdash;Opens a new browser window with the specified URL.
-   `reply`&mdash;Sends the action value as a reply in the Chat.
-   `call`&mdash;Treats the value as a phone number. Similar to clicking a [telephone link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#linking_to_telephone_numbers).
-   other&mdash;Handled by user code in the [`onActionExecute`](slug:api_conversational-ui_chatactionexecuteevent).

## Defining Quick Actions

To define quick actions for a message, populate the [`suggestedActions`](slug:api_conversational-ui_message#suggestedactions) field of the message.

You can control how suggested actions are displayed using the [`quickActionsLayout`](slug:api_conversational-ui_chatprops#toc-quickactionslayout) property, which supports three layout modes: `scroll` (actions scroll horizontally), `wrap` (actions wrap to new rows), and `scrollbuttons` (horizontal scroll with navigation buttons).

{% meta height:870 %}
{% embed_file chat/quick-actions/suggested-actions/app.tsx preview %}
{% embed_file chat/quick-actions/suggested-actions/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Predefined Suggestions](slug:quick_actions_suggestions_chat)
-   [Attachments](slug:attachments_chat)
-   [Message Templates](slug:customization_message_templates_chat)
-   [Keyboard Navigation](slug:keyboard_navigation_chat)
-   [API Reference of the Chat](slug:api_conversational-ui)
