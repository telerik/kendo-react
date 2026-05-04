---
title: Data and Value Binding
description: 'Bind the KendoReact DropDownList to data and render the selected option in React projects.'
components: ['dropdownlist']
slug: binding_dropdownlist
position: 2
---

# Data and Value Binding

The DropDownList enables you to configure the predefined list of options by setting its [`data`]({% slug api_dropdowns_dropdownlistprops %}#toc-data) property and the selected value by setting its [`value`]({% slug api_dropdowns_dropdownlistprops %}#toc-value) property.

## Data Binding

To bind the DropDownList to data, use the [`data`]({% slug api_dropdowns_dropdownlistprops %}#toc-data) property of the component.

The `data` property accepts both:

-   [Datasets of objects](#toc-datasets-of-objects), and
-   [Arrays of primitive values](#toc-arrays-of-primitive-values).

### Datasets of Objects

If the DropDownList is bound to a dataset of objects, the value of the component will correspond to the selected object. To implement the approach, set the [`textField`]({% slug api_dropdowns_dropdownlistprops %}#toc-textfield) property.

By default, the DropDownList compares the items by reference. To specify a field from the data object which will be used for the comparison, utilize the [`dataItemKey`]({% slug api_dropdowns_dropdownlistprops %}#toc-dataitemkey) property. The `dataItemKey` property is useful when the reference to the selected item which is configured in the `value` or `defaultValue` property do not match its corresponding item from the `data` collection. If `dataItemKey` is not set and the references in `data` and `value` do not correspond, the selected item will not be highlighted in the drop-down list.

{% meta height:330 %}
{% embed_file dropdownlist/complex-value/func/app.tsx preview %}
{% embed_file dropdownlist/complex-value/func/main.tsx %}
{% endmeta %}

### Arrays of Primitive Values

The following example demonstrates how to bind the DropDownList to an array of primitive values.

{% meta height:400 %}
{% embed_file dropdownlist/primitive-value/func/app.tsx preview %}
{% embed_file dropdownlist/primitive-value/func/main.tsx %}
{% endmeta %}

## Value Binding

To render the selected value, use the [`value`]({% slug api_dropdowns_dropdownlistprops %}#toc-value) property of the DropDownList. If you set the value through the `value` property, hook up to the [`onChange`]({% slug api_dropdowns_dropdownlistprops %}#toc-onchange) event and manually update the value of the `value` property.

{% meta height:300 %}
{% embed_file dropdownlist/controlled/func/app.tsx preview %}
{% embed_file dropdownlist/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
