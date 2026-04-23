---
title: Customization
description: 'Customize the KendoReact AIPrompt component interface, behavior, and functionality to match your application requirements.'
components: ["aiprompt"]
slug: customization_aiprompt
position: 30
---

# Customization

The KendoReact AIPrompt supports extensive customization of its interface, behavior, and accessibility features to match your application's requirements.

The component allows you to:

-   [Customize the generate button and prompt input](#generate-button-and-prompt-input)
-   [Enable speech-to-text functionality](#speech-to-text-functionality)
-   [Create custom views and toolbar items](#custom-views)
-   [Customize the output card presentation](#output-card-customization)

## Generate Button and Prompt Input

You can customize the generate button and prompt input by passing custom components to the [`generateButton`](slug:api_conversational-ui_aipromptviewprops#generateButton) and [`promptInput`](slug:api_conversational-ui_aipromptviewprops#promptInput) props. This approach allows you to modify styling, behavior, and functionality to match your application's design.

{% meta height:470 %}
{% embed_file ai-prompt/customization/generate-button-and-input/app.tsx preview %}
{% embed_file ai-prompt/customization/generate-button-and-input/main.tsx %}
{% embed_file ai-prompt/customization/generate-button-and-input/service-ai-data %}
{% endmeta %}

## Speech-to-Text Functionality

You can enable voice input using the [`enableSpeechToText`](slug:api_conversational-ui_aipromptviewprops#enableSpeechToText) property. Set it to `true` for default settings, or provide a configuration object to customize language settings and recognition parameters.

{% meta height:470 %}
{% embed_file ai-prompt/customization/speech-to-text/app.tsx preview %}
{% embed_file ai-prompt/customization/speech-to-text/main.tsx %}
{% embed_file ai-prompt/customization/speech-to-text/service-ai-data %}
{% endmeta %}

## Custom Views

You can create custom views using the `AIPromptViewRender` component. Custom views appear as toolbar tabs and require corresponding [`toolbarItems`](slug:api_conversational-ui_aipromptprops#toolbarItems) configuration to be displayed as clickable toolbar buttons.

{% meta height:470 %}
{% embed_file ai-prompt/customization/custom-view/app.tsx preview %}
{% embed_file ai-prompt/customization/custom-view/main.tsx %}
{% embed_file ai-prompt/customization/custom-view/service-ai-data %}
{% endmeta %}

## Output Card Customization

You can customize how AI responses are displayed using the [`outputCard`] property of the `AIPromptOutputView`. You can customize the header, body, and actions sections to control presentation, add custom actions, and implement specialized formatting.

{% meta height:470 %}
{% embed_file ai-prompt/customization/output-card/app.tsx preview %}
{% embed_file ai-prompt/customization/output-card/main.tsx %}
{% embed_file ai-prompt/customization/output-card/service-ai-data %}
{% endmeta %}

## Suggested Links

-   [API Reference of the KendoReact AIPrompt](slug:api_conversational-ui_aiprompt)
-   [API Reference of the AIPromptProps](slug:api_conversational-ui_aipromptprops)
-   [API Reference of the AIPromptViewProps](slug:api_conversational-ui_aipromptviewprops)
-   [Streaming AI Responses](slug:streaming_aiprompt)
-   [Events Documentation](slug:events_aiprompt)
