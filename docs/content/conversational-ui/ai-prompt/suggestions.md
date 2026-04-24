---
title: Suggestions
description: 'Discover the Suggestions feature of the KendoReact AIPrompt component and learn how to use it in React projects.'
components: ["aiprompt"]
slug: suggestions_aiprompt
position: 20
---

# Suggestions

The AIPrompt enables you to generate custom suggestions that will be prompted to the user. This can be achieved by creating a custom `suggestionsList` and passing it to the [`promptSuggestions`]({% slug api_conversational-ui_aipromptviewprops %}#toc-promptSuggestions) prop. Select one of the suggestions to see the generated response, if no suggestion is selected, the AIPrompt will display a `The request cannot be processed at this time.` message.

{% meta height:470 %}
{% embed_file ai-prompt/suggestions/func/app.tsx preview %}
{% embed_file ai-prompt/suggestions/func/main.tsx %}
{% embed_file ai-prompt/suggestions/func/service-ai-data %}
{% embed_file ai-prompt/suggestions/func/overview-styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the KendoReact AIPrompt]({% slug api_conversational-ui_aiprompt %})
-   [API Reference of the AIPromptProps]({% slug api_conversational-ui_aipromptprops %})
