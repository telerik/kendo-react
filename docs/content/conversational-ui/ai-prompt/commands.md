---
title: Commands
description: 'Discover how to make prompt commands for the KendoReact AIPrompt component and learn how to use it in React projects.'
components: ["aiprompt"]
slug: commands_aiprompt
position: 40
---

# Commands

The KendoReact AIPrompt enables you to define custom prompt commands that can be used by the users to fine-tune a response. The custom commands are handled by the [`AIPromptCommandsView`]({% slug api_conversational-ui_aipromptcommandsview %}) component.

The following demo displays a command view that enables you to change the formality, expand, simplify, or translate the current output.

{% meta height:500 %}
{% embed_file ai-prompt/commands/func/app.tsx preview %}
{% embed_file ai-prompt/commands/func/main.tsx %}
{% embed_file ai-prompt/commands/func/service-ai-data.ts %}
{% embed_file ai-prompt/commands/func/overview-styles.css %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Conversational UI Package]({% slug get_started_convui %})
-   [API Reference of the KendoReact AIPrompt]({% slug api_conversational-ui_aiprompt %})
-   [API Reference of the AIPromptProps]({% slug api_conversational-ui_aipromptprops %})
