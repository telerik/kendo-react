---
title: Adornments
description: 'Add custom items using adornments for the KendoReact MaskedTextBox component'
components: ["maskedtextbox"]
slug: adornments_maskedtextbox
position: 9
---

# Adornments

The MaskedTextBox component provides the option for adding custom items as prefix and suffix adornments.

## Suffix and Prefix Adornment

Render custom React Components like `Icon`, `Button`, or plain text as `prefix` and `suffix` to the MaskedTextBox and implement custom functionality on top of them. To specify the layout alignment of the prefix and suffix adornments, set the `orientation` property to `horizontal` or `vertical`.

> For correct styling, wrap custom adornments in [`InputPrefix`]({% slug api_inputs_inputprefix %}) and [`InputSuffix`]({% slug api_inputs_inputsuffix %}) containers.

{% meta height:280 %}
{% embed_file maskedtextbox/customization/adornments/func/app.tsx preview %}
{% embed_file maskedtextbox/customization/adornments/func/main.tsx %}
{% endmeta %}

## Separator

To visually separate the specified adornments, you can add a [`InputSeparator`]({% slug api_inputs_inputseparator %}) component. To specify the layout alignment of the separator element, set the `orientation` property to `horizontal` or `vertical`.

{% meta height:280 %}
{% embed_file maskedtextbox/customization/separator/func/app.tsx preview %}
{% embed_file maskedtextbox/customization/separator/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MaskedTextBox]({% slug api_inputs_maskedtextboxprops %})
-   [API Reference of the Button]({% slug api_buttons_buttonprops %})
-   [API Reference of the Icon]({% slug api_common_iconprops %})
