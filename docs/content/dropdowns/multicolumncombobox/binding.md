---
title: Data and Value Binding
description: 'Bind the KendoReact MultiColumnComboBox to data and render the selected option in React projects.'
components: ["multicolumncombobox"]
slug: binding_multicolumncombobox
position: 2
---

# Data and Value Binding

The MultiColumnComboBox enables you to configure its predefined list of options and selected value.

To set the predefined list, use the [`data`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-data) property. To set the selected value, use the [`value`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-value) property.

## Data Binding

To bind the MultiColumnComboBox to data, use the [`data`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-data) property of the component.

The `data` property accepts datasets of objects.

{% meta height:330 %}
{% embed_file multicolumncombobox/binding/data/func/app.tsx preview %}
{% embed_file multicolumncombobox/binding/data/func/main.tsx %}
{% endmeta %}

## Value Binding

To render the selected value, use the [`value`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-value) property of the MultiColumnComboBox. When you set the value through the `value` property, hook up to the [`onChange`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-onchange) event and manually update the value of the `value` property.

{% meta height:330 %}
{% embed_file multicolumncombobox/binding/value/func/app.tsx preview %}
{% embed_file multicolumncombobox/binding/value/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncomboboxprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
