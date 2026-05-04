---
title: Custom Values
description: 'Use custom values with the KendoReact MultiSelect component in React projects.'
components: ['multiselect']
slug: custom_values_multiselect
position: 3
---

# Custom Values

The MultiSelect supports the implementation of custom values.

To configure the MultiSelect to accept custom values, set the [`allowCustom`]({% slug api_dropdowns_multiselectprops %}#toc-allowcustom) property to `true`. To insert a custom value, type a random value in the MultiSelect and confirm it by pressing `Enter`.

## Primitive Values

The following example demonstrates how to allow custom values when the MultiSelect is bound to an array of primitive values.

{% meta height:400 %}
{% embed_file multiselect/allow-custom-values/func/app.tsx preview %}
{% embed_file multiselect/allow-custom-values/func/main.tsx %}
{% endmeta %}

## Object Values

The following example demonstrates how to allow custom values when the MultiSelect is bound to a dataset of objects.

{% meta height:400 %}
{% embed_file multiselect/allow-custom-object-data/func/app.tsx preview %}
{% embed_file multiselect/allow-custom-object-data/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
