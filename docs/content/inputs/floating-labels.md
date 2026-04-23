---
title: Floating Labels
description: 'Implement floating labels in the KendoReact Inputs components.'
components: ["checkbox", "colorgradient", "colorpalette", "colorpicker", "flatcolorpicker", "input", "maskedtextbox", "numerictextbox", "radiobutton", "radiogroup", "rangeslider", "rating", "signature", "slider", "switch", "textarea", "textbox"]
slug: floatinglabels_inputs
position: 39
---

# Floating Labels

Floating labels are part of the [Material Design Guidelines](https://material.io/guidelines/) and are fully supported by the KendoReact Inputs components.

## Basic Usage

To enable the floating label functionality, wrap the any Input component in a [`Floating Label`]({% slug api_labels_floatinglabel %}) container and sync the editor's `value` with the [`editorValue`]({% slug api_labels_floatinglabelprops %}#toc-editorvalue) property of the label.

The following example demonstrates how to implement floating labels in the TextBox, NumericTextBox, and TextArea components and style them with the [KendoReact Material theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/material/).

> Please note that the floating label that wraps the TextArea component should have `k-textarea-container` class in order to be styled as expected.

{% meta height:250 %}
{% embed_file label/func/app.tsx preview %}
{% embed_file label/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the NumericTextBox Component]({% slug api_inputs_numerictextbox %})
-   [API Reference of the TextBox Component]({% slug api_inputs_textboxprops %})
-   [API Reference of the TextArea Component]({% slug api_inputs_textareaprops %})
-   [Material Design Guidelines](https://material.io/guidelines/)
