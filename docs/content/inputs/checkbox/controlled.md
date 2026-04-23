---
title: Controlled Mode
description: "Control the value of the KendoReact Checkbox in React projects."
components: ["checkbox"]
slug: controlled_checkbox
position: 3
---

# Controlled Mode

By default, the Checkbox is in an uncontrolled state.

The Checkbox provides options for controlling the Value and Checked state. It supports setting it's boolean value using either `value` or `checked` prop. Note that if you provide both props, the `value` prop will be passed to the underlying `input` element.

## Controlling the Value

To manage the value of the Checkbox:

1. Use its [`value`]({% slug api_inputs_checkboxprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_checkboxprops %}#toc-onchange) event.
1. Pass the new value through the props.


{% meta height:330 %}
{% embed_file checkbox/controlled/value/func/app.tsx preview %}
{% embed_file checkbox/controlled/value/func/main.tsx %}
{% embed_file checkbox/controlled/value/func/styles.css %}
{% endmeta %}



## Controlling the Checked state

To manage the checked state of the Checkbox:

1. Use its [`checked`]({% slug api_inputs_checkboxprops %}#toc-checked) property.
1. Handle the [`onChange`]({% slug api_inputs_checkboxprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:370 %}
{% embed_file checkbox/controlled/checked/func/app.tsx preview %}
{% embed_file checkbox/controlled/checked/func/main.tsx %}
{% embed_file checkbox/controlled/checked/func/styles.css %}
{% endmeta %}


## Suggested Links

* [API Reference of the Checkbox]({% slug api_inputs_checkboxprops %})
