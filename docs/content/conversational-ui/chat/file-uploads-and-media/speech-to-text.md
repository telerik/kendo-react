---
title: Speech to Text
description: 'Enable speech-to-text functionality for voice input in the KendoReact Chat component.'
components: ["chat"]
slug: speech_to_text_chat
position: 10
---

# Speech to Text

The Chat component allows users to input messages using voice commands. This feature enhances accessibility and provides hands-free messaging.

The speech-to-text feature is enabled by default. To customize its behavior, configure the [`speechToTextConfig`](slug:api_conversational-ui_chatprops#toc-speechtotextconfig) property. This property accepts either a boolean or a [`SpeechToTextButtonProps`](slug:api_buttons_speechtotextbuttonprops) object for customizing speech recognition, language settings, and event handling. To disable the feature, set `speechToTextConfig` to `false`.

In the following demo, the application language is set to German and the speech-to-text button uses a different color. You can try using German language input during voice recognition to evaluate the functionality.

{% meta height:680 %}
{% embed_file chat/file-uploads-and-media/speech-to-text/app.tsx preview %}
{% embed_file chat/file-uploads-and-media/speech-to-text/main.tsx %}
{% endmeta %}

## Suggested Links

-   [File Upload](slug:upload_chat)
-   [Message Tools](slug:messages_tools_chat)
-   [Accessibility](slug:accessibility_chat)
-   [Chat API Reference](slug:api_conversational-ui)
