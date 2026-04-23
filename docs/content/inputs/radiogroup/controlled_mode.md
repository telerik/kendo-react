---
title: Controlled Mode
description: "Control the value of the KendoReact Radio Buttons within a RadioGroup in React projects."
components: ["radiogroup"]
slug: controlled_radiogroup
position: 2
---

# Controlled Mode

The RadioGroup provides options for controlling the checked state. It supports setting it's boolean value using `value` prop to the underlying `input` element.

## Controlling the Checked and Disabled states

To manage the checked state of the Radio buttons in a RadioGroup:

1. Use its [`value`]({% slug api_inputs_radiogroupprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_radiogroupprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:350 %}
{% embed_file radiogroup/controlled/func/app.tsx preview %}
{% embed_file radiogroup/controlled/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the RadioGroupProps]({% slug api_inputs_radiogroupprops %})
