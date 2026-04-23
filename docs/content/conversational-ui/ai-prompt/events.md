---
title: Events
description: 'Learn about the KendoReact AIPrompt events and how to handle user interactions in React projects.'
components: ["aiprompt"]
slug: events_aiprompt
position: 50
---

# Events

The KendoReact AIPrompt emits several events that enable you to control its behavior upon user interaction:

-   [`onActiveViewChange`](slug:api_conversational-ui_aipromptprops#onActiveViewChange) - Fires when the user switches between different views (Prompt, Output, Commands).
-   [`onPromptRequest`](slug:api_conversational-ui_aipromptprops#onPromptRequest) - Fires when the user submits a prompt for AI processing, including retry and rating actions.
-   [`onCommandExecute`](slug:api_conversational-ui_aipromptprops#onCommandExecute) - Fires when the user executes a command from the Commands view.
-   [`onCancel`](slug:api_conversational-ui_aipromptprops#onCancel) - Fires when the user cancels an ongoing request.

The following example demonstrates all the events that the AIPrompt features.

{% meta height:500 %}
{% embed_file ai-prompt/events/func/app.tsx preview %}
{% embed_file ai-prompt/events/func/main.tsx %}
{% embed_file ai-prompt/events/func/service-ai-data %}
{% embed_file ai-prompt/events/func/overview-styles.css %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Conversational UI Package](slug:get_started_convui)
-   [API Reference of the KendoReact AIPrompt](slug:api_conversational-ui_aiprompt)
-   [API Reference of the AIPromptProps](slug:api_conversational-ui_aipromptprops)
