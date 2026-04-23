---
title: Adornments
description: 'Learn how to improve the usability and aesthetics of the AutoComplete component by adding custom elements in the form of prefix and suffix adornments.'
components: ["autocomplete"]
slug: adornments_autocomplete
position: 7
---

# Adornments

Using custom elements in the form of prefix or suffix adornments helps you improve the appearance, usability, and functionality of the KendoReact AutoComplete component, significantly elevating the overall user experience.

## Prefix and Suffix Adornments

The [`prefix`]({% slug api_dropdowns_autocompleteprops %}#toc-prefix) and [`suffix`]({% slug api_dropdowns_autocompleteprops %}#toc-suffix) properties allow you to render any React component or HTML element as a prefix or suffix for the KendoReact AutoComplete component.

For correct styling, wrap the custom adornments in the [`InputPrefix`]({% slug api_inputs_inputprefix %}) and [`InputSuffix`]({% slug api_inputs_inputsuffix %}) containers. These components also provide the [`orientation`]({% slug api_inputs_inputprefixprops %}#toc-orientation) property that lets you specify the layout alignment as either `horizontal` or `vertical`.

{% meta height:310 %}
{% embed_file autocomplete/adornments/suffix-and-prefix/app.tsx preview %}
{% embed_file autocomplete/adornments/suffix-and-prefix/main.tsx %}
{% endmeta %}

## Separator

To visually separate the specified adornments, you can add an [`InputSeparator`]({% slug api_inputs_inputseparator %}) component. To specify the layout alignment of the separator element, set its [`orientation`]({% slug api_inputs_inputseparatorprops %}#toc-orientation) property to either `horizontal` or `vertical`.

{% meta height:310 %}
{% embed_file autocomplete/adornments/separator/app.tsx preview %}
{% embed_file autocomplete/adornments/separator/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
