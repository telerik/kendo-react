---
title: Controlled Mode
description: 'Learn how to set the KendoReact TextBox in controlled mode.'
components: ["textbox"]
slug: controlled_textbox
position: 7
---

# Controlled Mode

By default, the KendoReact TextBox component is in an uncontrolled mode.

## Controlling the Value

1. Use its [`value`]({% slug api_inputs_textboxprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_textboxprops %}#toc-onchange) event.

The following example showcases the controlled mode in action.

{% meta height:250 %}
{% embed_file textbox/controlled/app.tsx preview %}
{% embed_file textbox/controlled/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TextBox Props]({% slug api_inputs_textboxprops %})
