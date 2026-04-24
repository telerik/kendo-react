---
title: Controlled Mode
description: 'Control the value of the KendoReact ColorPicker in React projects.'
components: ["colorpicker"]
slug: controlled_colorpicker
position: 2
---

# Controlled Mode

By default, the ColorPicker is in an uncontrolled state.

The ColorPicker provides options for:

-   [Controlling its value](#toc-controlling-the-value)
-   [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Value

To manage the value of the ColorPicker:

1. Use its [`value`]({% slug api_inputs_colorpickerprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_colorpickerprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:500 %}
{% embed_file colorpicker/controlled/value/func/app.tsx preview %}
{% embed_file colorpicker/controlled/value/func/main.tsx %}
{% endmeta %}

## Controlling the Popup State

To manage the popup and set the open state of the ColorPicker, use its [`open`]({% slug api_inputs_colorpickerprops %}#toc-open) property.

The following example demonstrates how to control the state of the ColorPicker upon display.

{% meta height:500 %}
{% embed_file colorpicker/controlled/popup/func/app.tsx preview %}
{% embed_file colorpicker/controlled/popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ColorPicker]({% slug api_inputs_colorpickerprops %})
