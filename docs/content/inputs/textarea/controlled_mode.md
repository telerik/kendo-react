---
title: Controlled Mode
description: 'Control the value of the KendoReact TextArea in React projects.'
components: ['textarea']
slug: controlled_textarea
position: 1
---

# Controlled Mode

By default, the TextArea is in an uncontrolled state.

The TextArea provides options for controlling the value. It supports setting it's value using `value` prop to the underlying `textarea` element.

## Controlling the Value

To manage the value of the TextArea:

1. Use its [`value`]({% slug api_inputs_textareaprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_textareaprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:170 %}
{% embed_file textarea/controlled/func/app.tsx preview %}
{% embed_file textarea/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the TextArea]({% slug api_inputs_textarea %})
-   [API Reference of the TextAreaProps]({% slug api_inputs_textareaprops %})
