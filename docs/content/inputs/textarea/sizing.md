---
title: Sizing
description: 'Set the height of the KendoReact TextArea component in React projects.'
components: ["textarea"]
slug: sizing_textarea
position: 5
---

# Sizing

You can easily set the initial height of the TextArea component as well as setting an auto size option as the user types.

## Setting the Initial Rows

To set initial rows of the TextArea, use its [`rows`]({% slug api_inputs_textareaprops %}#toc-rows) property.

{% meta height:200 %}
{% embed_file textarea/sizing/func/app.tsx preview %}
{% embed_file textarea/sizing/func/main.tsx %}
{% endmeta %}

## Auto-Resizing

To automatically adjust the height of the TextArea as the user types, set its [`autoSize`]({% slug api_inputs_textareaprops %}#toc-autoSize) property to `true`.

{% meta height:250 %}
{% embed_file textarea/auto-sizing/func/app.tsx preview %}
{% embed_file textarea/auto-sizing/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the TextArea]({% slug api_inputs_textarea %})
*   [API Reference of the TextAreaProps]({% slug api_inputs_textareaprops %})
