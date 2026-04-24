---
title: AI Service Integration
description: 'Integrate the KendoReact Chat with AI services and Large Language Models for intelligent conversations.'
components: ["chat"]
slug: integrations_ai_llm_chat
position: 1
---

# AI Service Integration

AI Service Integration allows you to connect your Chat component with modern artificial intelligence and machine learning services to create intelligent conversational experiences.

To integrate AI services with the Chat component, implement an async function that sends user messages to your AI service and handles the responses. Use the [`onSendMessage`](slug:api_conversational-ui_chatprops#onsendmessage) event to capture user input, call your AI service, and add the AI response as a new message. Handle loading states and errors gracefully to provide a smooth user experience.

> This example uses a Telerik-hosted AI service for demonstration purposes only. For production applications, you should implement your own AI service that understands your specific domain, data, and business requirements.

{% meta height:680 %}
{% embed_file chat/integrations/ai-communication/app.tsx preview %}
{% embed_file chat/integrations/ai-communication/main.tsx %}
{% endmeta %}

> Note: The responses marked with an asterisk (\*) are not AI generated.

## Suggested Links

-   [Chat Data Binding](slug:databinding_standard_chat)
-   [Message Templates](slug:customization_message_templates_chat)
-   [Quick Actions](slug:quick_actions_suggestions_chat)
-   [Chat API Reference](slug:api_conversational-ui)
