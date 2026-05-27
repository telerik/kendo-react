---
title: Affix Templates
description: 'Extend the built-in message box of the KendoReact Chat component with extra controls using affix templates.'
components: ["chat"]
slug: customization_affix_templates_chat
tag: new
release_tag: Q2 2026
position: 55
---

# Affix Templates

The affix templates let you extend the built-in message box with extra controls without replacing the default UI. The Chat provides three affix positions through the [`messageBoxSettings`](slug:api_conversational-ui_chatprops#toc-messageboxsettings) property:

* [`startAffix`](slug:api_conversational-ui_messageboxsettings#toc-startaffix)&mdash;Renders content at the start of the message box, to the right of the file select button.
* [`endAffix`](slug:api_conversational-ui_messageboxsettings#toc-endaffix)&mdash;Renders content at the end of the message box, to the left of the speech-to-text button.
* [`topAffix`](slug:api_conversational-ui_messageboxsettings#toc-topaffix)&mdash;Renders content above the text input area. Only visible in `multi` mode.

The following example demonstrates all three affix positions. Use the configurator to toggle each affix on or off and switch between message box modes.

{% meta height:670 %}
{% embed_file chat/customization/affix-templates/app.tsx preview %}
{% embed_file chat/customization/affix-templates/main.tsx %}
{% embed_file chat/customization/affix-templates/templates.tsx %}
{% endmeta %}

## Suggested Links

-   [Message Box Templates](slug:customization_messagebox_templates_chat)
-   [Attachment Templates](slug:customization_attachment_templates_chat)
-   [Chat API Reference](slug:api_conversational-ui)
