---
title: Data and Value Binding
description: 'Bind the KendoReact AutoComplete to data and render the selected option in React projects.'
components: ["autocomplete"]
slug: binding_autocomplete
position: 2
---

# Data and Value Binding

The AutoComplete enables you to configure its predefined list of options and selected value.

To set the predefined option list, use the [`data`]({% slug api_dropdowns_autocompleteprops %}#toc-data) property. To set the selected value, use the [`value`]({% slug api_dropdowns_autocompleteprops %}#toc-value) property.

## Data Binding

To bind the AutoComplete to data, use the [`data`]({% slug api_dropdowns_autocompleteprops %}#toc-data) property of the component.

The `data` property accepts both:

-   [Arrays of primitive values](#toc-arrays-of-primitive-values) and
-   [Datasets of objects](#toc-datasets-of-objects).

### Arrays of Primitive Values

The following example demonstrates how to bind the AutoComplete to an array of primitive values.

{% meta height:310 %}
{% embed_file autocomplete/primitive-value/func/app.tsx preview %}
{% embed_file autocomplete/primitive-value/func/main.tsx %}
{% endmeta %}

### Datasets of Objects

If the AutoComplete is bound to a dataset of objects, use the [`textField`]({% slug api_dropdowns_autocompleteprops %}#toc-textfield) property to specify the text of the data objects.

{% meta height:410 %}
{% embed_file autocomplete/objects-data/func/app.tsx preview %}
{% embed_file autocomplete/objects-data/func/main.tsx %}
{% endmeta %}

## Value Binding

To render the selected value, use the [`value`]({% slug api_dropdowns_autocompleteprops %}#toc-value) property of the AutoComplete. If you set the value through the `value` property, hook up to the [`onChange`]({% slug api_dropdowns_autocompleteprops %}#toc-onchange) event and manually update the value of the `value` property.

{% meta height:310 %}
{% embed_file autocomplete/controlled/func/app.tsx preview %}
{% embed_file autocomplete/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
