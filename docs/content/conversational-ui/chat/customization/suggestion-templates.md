---
title: Suggestion Templates
description: 'Customize suggestion button appearance and behavior in the KendoReact Chat component.'
components: ["chat"]
slug: customization_suggestion_templates_chat
position: 30
---

# Suggestion Templates

The KendoReact Chat allows you to customize the appearance and behavior of suggestion buttons through the [`suggestionTemplate`](slug:api_conversational-ui_chatprops#toc-suggestiontemplate) property.

To set a custom suggestion template, create a React component and assign it to the `suggestionTemplate` property of the Chat component.

The following example demonstrates different suggestion templates tailored for various scenarios:

-   **Default**: Built-in Chat Suggestions styling
-   **Category**: Color-coded suggestions with icons based on categories (action, question, info, help)
-   **Animated**: Modern gradient styling with hover animations, shimmer effects, and floating motion
-   **Accessible**: Optimized for keyboard navigation and screen readers with enhanced focus states
-   **Card**: Card-style layout with descriptions and hover effects for detailed information
-   **Icon**: Icon-based suggestions with emojis in rounded containers
-   **Poll**: Interactive voting suggestions with progress bars and vote counts

Each template automatically uses appropriate suggestion data structures to showcase their unique capabilities and interaction patterns.

The flexibility of the `suggestionTemplate` property allows you to create any visual design and interaction pattern that fits your application's requirements.

{% meta height:830 %}
{% embed_file chat/customization/suggestion-templates/app.tsx preview %}
{% embed_file chat/customization/suggestion-templates/main.tsx %}
{% embed_file chat/customization/suggestion-templates/templates.tsx %}
{% embed_file chat/customization/suggestion-templates/styles.css %}
{% endmeta %}

## Suggested Links

-   [Predefined Suggestions](slug:quick_actions_suggestions_chat)
-   [Message Templates](slug:customization_message_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
