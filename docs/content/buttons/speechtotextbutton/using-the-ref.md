---
title: Using the Component Ref
description: 'Get an overview how to create ref and use it for the KendoReact SpeechToTextButton component in React projects.'
components: ["speechtotextbutton"]
slug: using_the_ref_speechtotextbutton
position: 4
---

# Using the Component Ref

The KendoReact SpeechToTextButton component provides programmatic control through the [`ref`](slug://api_buttons_speechtotextbuttonhandle) that allows you to start, stop, abort, and check the status of speech recognition operations from your application code.

The following example demonstrates how to create `ref` for the SpeechToTextButton and use it to programmatically invoke the `start()`, `stop()`, `abort()` and the `isActive()` methods.

{% meta height:600 %}
{% embed_file speechtotextbutton/using-ref/app.tsx preview %}
{% embed_file speechtotextbutton/using-ref/main.tsx %}
{% embed_file speechtotextbutton/using-ref/styles.css %}
{% endmeta %}

## See Also

-   [SpeechToTextButton Events](slug://events_speechtotextbutton)
-   [SpeechToTextButton Third-Party Integration](slug://integration_speechtotextbutton)
-   [SpeechToTextButton Speech Configurations](slug://speech_configs_speechtotextbutton)
