---
title: Common Scenarios
description: 'Some of the supported common scenarios provided by the KendoReact ComboBox.'
components: ["combobox"]
slug: common_scenarios_combobox
position: 100
---

# Common Scenarios

You can use the configuration options of the ComboBox to achieve the implementation of common scenarios.

-   [Implementing cascading ComboBoxes](#toc-implementing-cascading-comboboxes)
-   [Using a ComboBox data field for a value](#toc-using-data-fields-for-values)

## Implementing Cascading ComboBoxes

The cascading ComboBox is a series of two or more ComboBoxes where each ComboBox is filtered based on the selected option in the previous ComboBox.

{% meta height:280 %}
{% embed_file combobox/cascading/func/app.tsx preview %}
{% embed_file combobox/cascading/func/main.tsx %}
{% embed_file combobox/cascading/func/data.ts %}
{% endmeta %}

## Using Data Fields for Values

The following example demonstrates how to use a [React hook](https://react.dev/learn/reusing-logic-with-custom-hooks) to allow the ComboBox to work with a data field as the value.

{% meta height:300 %}
{% embed_file combobox/value-field/func/app.tsx preview %}
{% embed_file combobox/value-field/func/useValueField.ts %}
{% embed_file combobox/value-field/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
-   [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)
