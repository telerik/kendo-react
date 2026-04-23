---
title: Overview
description: 'Discover the React Conversational UI package by KendoReact and learn more about how to use the Chat and AIPrompt component in React projects.'
components: ["aiprompt", "chat", "inlineaiprompt"]
slug: overview_convui
position: 0
---

# KendoReact Conversational UI Overview

The KendoReact Conversational UI package delivers the AIPrompt, InlineAIPrompt, and Chat components which allow the user to participate in chat sessions with other users and chatbots.

The KendoReact Chat, AIPrompt, and InlineAIPrompt components are distributed through the [kendo-react-conversational-ui NPM package](https://www.npmjs.com/package/@progress/kendo-react-conversational-ui).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the Chat, AIPrompt, and InlineAIPrompt components in action.

{% meta height:780 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/Chat.tsx preview %}
{% embed_file overview/func/AIPrompt.tsx preview %}
{% embed_file overview/func/InlineAIPrompt.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file overview/func/styles.css %}
{% endmeta %}

## Key Features

The KendoReact Conversational UI provides a wide and always growing range of built-in features that isn't limited by the list in this section. This developer-friendly feature set allows you to create beautiful and functional applications faster. At the same time, the KendoReact development team works constantly to improve the performance of the components and their capabilities.

### Data Binding

The Chat Component provides a comprehensive data model and allows you to bind the messages to a remote stream service that provides automated responses. [Read more about the data binding options of the Chat]({% slug databinding_standard_chat %})

### Suggested Actions

You can configure the Chat to display suggested actions for the last message by using built-in action types. This allows chat users to save valuable time when responding to messages. If you need to create a custom suggested action, you can add your code in the `ExecuteActionEvent`. [Read more about the suggested actions]({% slug quick_actions_suggested_actions_chat %})

### Customization

The KendoReact Chat component comes with built-in properties that allow you to render custom components in the Chat and customize the messages. You can also display any valid HTML to adjust the component's behavior to your requirements. [Read more about the customization of the Chat]({% slug customization_message_templates_chat %})

### Commands

The KendoReact AIPrompt component provides the ability to define custom prompt commands. [Read more about the commands of the AIPrompt]({% slug commands_aiprompt %})

### Globalization

The KendoReact Chat comes with globalization features that allow you to create applications that can be used all over the world. This is achieved by combining the translation of component messages with adaptation to specific cultures. [Read more about the globalization of the Chat]({% slug globalization_chat %})

## Support Options

For any questions about the use of KendoReact Chat, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   KendoReact license holders and anyone in an active trial can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).
-   Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Get Started with the KendoReact Chat component]({% slug get_started_convui %})
