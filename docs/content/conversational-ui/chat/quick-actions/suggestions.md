---
title: Predefined Suggestions
description: 'Implement predefined message suggestions and quick reply options in the KendoReact Chat component.'
components: ['chat']
slug: quick_actions_suggestions_chat
position: 1
tag: updated
---

# Predefined Suggestions

Predefined suggestions streamline user interactions by offering quick-select options for common responses or phrases. This feature significantly improves user experience by reducing typing effort and ensuring consistent communication patterns.

The Chat component supports two approaches for handling suggestions:

-   [Direct Send](#direct-send)&mdash;Suggestions that are immediately sent as messages when clicked
-   [Input Population](#input-population)&mdash;Suggestions that populate the input field for review and editing before sending

You can control how suggestions are displayed using the [`suggestionsLayout`](slug:api_conversational-ui_chatprops#toc-suggestionslayout) property, which supports three layout modes: `scroll` (suggestions scroll horizontally), `wrap` (suggestions wrap to new rows), and `scrollbuttons` (horizontal scroll with navigation buttons).

## Direct Send

This is the default behavior where suggestions are immediately sent as messages when clicked. Configure suggestions using the [`suggestions`](slug:api_conversational-ui_chatprops#toc-suggestions) input with an array of ChatSuggestion objects. Each suggestion includes an identifier, display text, optional description for context, and a disabled state for conditional availability.

Suggestions appear as clickable items above the message input, allowing users to instantly send preset responses. Upon clicking a suggestion, the [`onSuggestionClick`](slug:api_conversational-ui_chatprops#toc-onsuggestionclick) event is triggered, returning the ChatSuggestion as an argument. This allows you to handle each suggestion accordingly.

{% meta height:900 %}
{% embed_file chat/quick-actions/suggestions/app.tsx preview %}
{% embed_file chat/quick-actions/suggestions/main.tsx %}
{% endmeta %}

## Input Population

This approach allows users to populate the Chat input field with suggested text rather than sending messages directly. When a suggestion is clicked, the text is populated into the input field using the [`inputValue`](slug:api_conversational-ui_chatprops#toc-inputvalue) property, enabling users to review, edit, or customize the text before sending.

This pattern is particularly useful for:

-   Templates that users might want to customize
-   Partial messages that need additional context
-   Scenarios where users want to review before sending
-   Multi-part messages where suggestions provide starting points

{% meta height:900 %}
{% embed_file chat/quick-actions/suggestions-input/app.tsx preview %}
{% embed_file chat/quick-actions/suggestions-input/main.tsx %}
{% endmeta %}

## Dismissible Suggestions

Dismissible suggestions provide a dynamic experience where suggestions are automatically removed from the list once clicked. This approach is particularly effective for progressive workflows where users work through a series of options, helping them:

-   Track which suggestions they've already explored
-   Reduce visual clutter as they progress through options
-   Maintain a cleaner interface focused on remaining choices
-   Prevent accidental resubmission of the same query

Implement this pattern by removing clicked suggestions from the suggestions array in the [`onSuggestionClick`](slug:api_conversational-ui_chatprops#toc-onsuggestionclick) handler. You can also provide a reset mechanism to restore all suggestions when needed.

{% meta height:900 %}
{% embed_file chat/quick-actions/suggestions-dismissible/app.tsx preview %}
{% embed_file chat/quick-actions/suggestions-dismissible/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Suggested Actions](slug:quick_actions_suggested_actions_chat)
-   [Message Tools](slug:messages_tools_chat)
-   [Events Handling](slug:events_chat)
-   [Chat API Reference](slug:api_conversational-ui)
