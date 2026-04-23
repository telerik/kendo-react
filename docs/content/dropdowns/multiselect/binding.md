---
title: Data and Value Binding
description: 'Bind the KendoReact MultiSelect to data and render the selected option in React projects.'
components: ["multiselect"]
slug: binding_multiselect
position: 2
---

# Data and Value Binding

The MultiSelect enables you to configure its predefined list of options and selected values.

To set the predefined option list, use the [`data`]({% slug api_dropdowns_multiselectprops %}#toc-data) property. To set the selected values, use the [`value`]({% slug api_dropdowns_multiselectprops %}#toc-value) property.

## Data Binding

To bind the MultiSelect to data, use the [`data`]({% slug api_dropdowns_multiselectprops %}#toc-data) property of the component.

The `data` property accepts both:

-   [Arrays of primitive values](#toc-arrays-of-primitive-values) and
-   [Datasets of objects](#toc-datasets-of-objects).

### Arrays of Primitive Values

The following example demonstrates how to bind the MultiSelect to an array of primitive values.

{% meta height:300 %}
{% embed_file multiselect/primitive-value/func/app.tsx preview %}
{% embed_file multiselect/primitive-value/func/main.tsx %}
{% endmeta %}

### Datasets of Objects

If the MultiSelect is bound to a dataset of objects, the [`textField`]({% slug api_dropdowns_multiselectprops %}#toc-textfield) property needs to be set and the value of the component will be an array of the selected objects.

By default, the MultiSelect compares the items by reference. To specify a field from the data object which will be used for the comparison, utilize the [`dataItemKey`]({% slug api_dropdowns_multiselectprops %}#toc-dataitemkey) property. The `dataItemKey` property is useful when the references to the selected items which are configured in the `value` or `defaultValue` property do not match their corresponding items from the `data` collection. If `dataItemKey` is not set and the references in `data` and `value` do not correspond, the selected items will not be highlighted in the drop-down list.

{% meta height:320 %}
{% embed_file multiselect/complex-value/func/app.tsx preview %}
{% embed_file multiselect/complex-value/func/main.tsx %}
{% endmeta %}

## Value Binding

To render the selected values, use the [`value`]({% slug api_dropdowns_multiselectprops %}#toc-value) property of the MultiSelect. If you set the value through the `value` property, hook up to the [`onChange`]({% slug api_dropdowns_multiselectprops %}#toc-onchange) event and manually update the value of the `value` property.

{% meta height:300 %}
{% embed_file multiselect/controlled/func/app.tsx preview %}
{% embed_file multiselect/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
