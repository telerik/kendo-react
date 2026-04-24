---
title: Configuration
description: 'Learn how to configure the speech recognition settings of the KendoReact SpeechToTextButton component in a React project.'
components: ["speechtotextbutton"]
slug: speech_configs_speechtotextbutton
position: 2
---

# KendoReact SpeechToTextButton Configuration Options

The KendoReact SpeechToTextButton component offers various configuration options for controlling how speech recognition works. This page outlines how to configure the speech recognition settings to meet your application's needs.

The SpeechToTextButton provides options for:

-   [Language configuration](#language-configuration)&mdash;You can set different languages used for speech recognition.
-   [Continuous recognition](#continuous-recognition)&mdash;Enables the user to continue speaking after results are returned.
-   [Interim results](#interim-results)&mdash;Enables real-time feedback to users as they speak.
-   [Multiple recognition alternatives](#multiple-recognition-alternatives)&mdash;Allows multiple interpretations of the spoken text.

## Language Configuration

You can set the language used for speech recognition with the [`lang`](slug://api_buttons_speechtotextbuttonprops#lang) property. The SpeechToTextButton component supports various language codes based on the [Web Speech API language support](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang).

{% meta height:510 %}
{% embed_file speechtotextbutton/language-selection/app.tsx preview %}
{% embed_file speechtotextbutton/language-selection/main.tsx %}
{% embed_file speechtotextbutton/language-selection/styles.css %}
{% endmeta %}

### Supported Languages

The available languages depend on the underlying speech recognition engine. For the browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), refer to the [list of supported languages](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang#languages).

## Continuous Recognition

The [`continuous`](slug://api_buttons_speechtotextbuttonprops#continuous) property determines whether the speech recognition should continue listening after results are returned. When set to `true`, the recognition will continue until explicitly stopped, allowing users to speak multiple sentences.

{% meta height:450 %}
{% embed_file speechtotextbutton/continuous-recognition/app.tsx preview %}
{% embed_file speechtotextbutton/continuous-recognition/main.tsx %}
{% embed_file speechtotextbutton/continuous-recognition/styles.css %}
{% endmeta %}

## Interim Results

With [`interimResults`](slug://api_buttons_speechtotextbuttonprops#interimResults) set to `true`, the component will return partial results as they become available while the user is speaking. This provides real-time feedback to users as they speak.

{% meta height:550 %}
{% embed_file speechtotextbutton/interim-results/app.tsx preview %}
{% embed_file speechtotextbutton/interim-results/main.tsx %}
{% embed_file speechtotextbutton/interim-results/styles.css %}
{% endmeta %}

## Multiple Recognition Alternatives

The SpeechToTextButton component can provide alternative interpretations of the spoken text by configuring the [`maxAlternatives`](slug://api_buttons_speechtotextbuttonprops#maxAlternatives) property. This is useful for ambiguous speech or words with similar pronunciations.

{% meta height:700 %}
{% embed_file speechtotextbutton/multiple-alternatives/app.tsx preview %}
{% embed_file speechtotextbutton/multiple-alternatives/main.tsx %}
{% embed_file speechtotextbutton/multiple-alternatives/styles.css %}
{% endmeta %}

## See Also

-   [API Reference of the SpeechToTextButton](slug://api_buttons_speechtotextbuttonprops)
-   [Third-party Integration](slug://integration_speechtotextbutton)
