---
title: Initial Focus
description: 'Specify the initially focused element of the KendoReact Dialog component.'
components: ["dialog"]
slug: initial_focus_dialogs
position: 20
---

# Initial Focus

The Dialog provides an option to set the initially focused element.

You can control which element will be focused after the Dialog has been opened by setting the [`autoFocusedElement`]({% slug api_dialogs_dialogprops %}#toc-autofocusedelement) property to a query selector string.

The following example demonstrates how to focus the first input element within the Dialog.

{% meta height:400 %}
{% embed_file dialog/initial-focus/app.tsx preview %}
{% embed_file dialog/initial-focus/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Dialog]({% slug api_dialogs_dialog %})
