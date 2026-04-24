---
title: Adornments
description: 'Add custom items using adornments for the KendoReact TextBox component'
components: ["textbox"]
slug: adornments_textbox
position: 7
---

# Adornments

The Textbox component provides the option for adding custom items as prefix and suffix adornments.

## Suffix and Prefix Adornment

Render custom React Components like `Icon`, `Button`, or plain text as `prefix` and `suffix` to the TextBox and implement custom functionality on top of them. To specify the layout alignment of the prefix and suffix adornments, set the `orientation` property to `horizontal` or `vertical`.

> For correct styling, wrap custom adornments in [`InputPrefix`]({% slug api_inputs_inputprefix %}) and [`InputSuffix`]({% slug api_inputs_inputsuffix %}) containers.

{% meta height:480 %}
{% embed_file textbox/customization/adornments/func/app.tsx preview %}
{% embed_file textbox/customization/adornments/func/main.tsx %}
{% endmeta %}

## Separator

To visually separate the specified adornments, you can add a [`InputSeparator`]({% slug api_inputs_inputseparator %}) component. To specify the layout alignment of the separator element, set the `orientation` property to `horizontal` or `vertical`.

{% meta height:150 %}
{% embed_file textbox/customization/separator/func/app.tsx preview %}
{% embed_file textbox/customization/separator/func/main.tsx %}
{% endmeta %}

## Clear Value

The `InputClearValue` container component can be utilized to further enhance the functionality of the TextBox component by rendering clickable component inside which resets the input value.

{% meta height:150 %}
{% embed_file textbox/customization/clear-value/func/app.tsx preview %}
{% embed_file textbox/customization/clear-value/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TextBox]({% slug api_inputs_textboxprops %})
-   [API Reference of the Button]({% slug api_buttons_buttonprops %})
-   [API Reference of the Icon]({% slug api_common_iconprops %})
