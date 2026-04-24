---
title: Data and Value Binding
description: 'Bind the KendoReact ComboBox to data and render the selected option in React projects.'
components: ["combobox"]
slug: binding_combobox
position: 2
---

# Data and Value Binding

The ComboBox enables you to configure its predefined list of options and selected value.

To set the predefined option list, use the [`data`]({% slug api_dropdowns_comboboxprops %}#toc-data) property. To set the selected value, use the [`value`]({% slug api_dropdowns_comboboxprops %}#toc-value) property.

## Data Binding

To bind the ComboBox to data, use the [`data`]({% slug api_dropdowns_comboboxprops %}#toc-data) property of the component.

The `data` property accepts both:

-   [Arrays of primitive values](#toc-arrays-of-primitive-values) and
-   [Datasets of objects](#toc-datasets-of-objects).

### Arrays of Primitive Values

The following example demonstrates how to bind the ComboBox to an array of primitive values.

{% meta height:380 %}
{% embed_file combobox/primitive-value/func/app.tsx preview %}
{% embed_file combobox/primitive-value/func/main.tsx %}
{% endmeta %}

### Datasets of Objects

If the ComboBox is bound to a dataset of objects, the value of the component will correspond to the selected object. To implement the approach, set the [`textField`]({% slug api_dropdowns_comboboxprops %}#toc-textfield) property.

By default, the ComboBox compares the items by reference. To specify a field from the data object which will be used for the comparison, utilize the [`dataItemKey`]({% slug api_dropdowns_comboboxprops %}#toc-dataitemkey) property. The `dataItemKey` property is useful when the reference to the selected item which is configured in the `value` or `defaultValue` property do not match its corresponding item from the `data` collection. If `dataItemKey` is not set and the references in `data` and `value` do not correspond, the selected item will not be highlighted in the drop-down list.

{% meta height:220 %}
{% embed_file combobox/complex-value/func/app.tsx preview %}
{% embed_file combobox/complex-value/func/main.tsx %}
{% endmeta %}

## Value Binding

To render the selected value, use the [`value`]({% slug api_dropdowns_comboboxprops %}#toc-value) property of the ComboBox. If you set the value through the `value` property, hook up to the [`onChange`]({% slug api_dropdowns_comboboxprops %}#toc-onchange) event and manually update the value of the `value` property.

{% meta height:300 %}
{% embed_file combobox/controlled/func/app.tsx preview %}
{% embed_file combobox/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
