---
title: Custom Values
description: 'Use custom values with the KendoReact ComboBox component in React projects.'
components: ["combobox"]
slug: custom_values_combobox
position: 3
---

# Custom Values

The ComboBox supports the implementation of custom values.

By default, the ComboBox dismisses values that do not appear in the supplied list of items when the user presses `Enter` or when the component loses focus. To configure the ComboBox to accept custom values, set the [`allowCustom`]({% slug api_dropdowns_comboboxprops %}#toc-allowcustom) property to `true`.

## Primitive Values

If the component is bound to primitive values, set the [`allowCustom`]({% slug api_dropdowns_comboboxprops %}#toc-allowcustom) property to `true`.

The following example demonstrates how to allow custom primitive values.

{% meta height:280 %}
{% embed_file combobox/allow-custom-primitive-data/func/app.tsx preview %}
{% embed_file combobox/allow-custom-primitive-data/func/main.tsx %}
{% endmeta %}

## Object Values

The following example demonstrates how to allow custom object values.

{% meta height:280 %}
{% embed_file combobox/allow-custom-object-data/func/app.tsx preview %}
{% embed_file combobox/allow-custom-object-data/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
