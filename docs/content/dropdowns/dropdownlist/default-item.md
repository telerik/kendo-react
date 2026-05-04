---
title: Default Item
description: 'Configure the default item of the KendoReact DropDownList in React projects.'
components: ['dropdownlist']
slug: defaultitem_dropdownlist
position: 3
---

# Default Item

The DropDownList enables you to configure its default item.

> The [`defaultItem`]({% slug api_dropdowns_dropdownlistprops %}#toc-defaultitem) property type has to match the data type. For example, if the [`data`]({% slug api_dropdowns_dropdownlistprops %}#toc-data) property contains a list of objects, the `defaultItem` has to be defined as an object with the same [`textField`]({% slug api_dropdowns_dropdownlistprops %}#toc-textfield) as the data items.

The following example demonstrates how to define a `defaultItem` as a primitive value.

{% meta height:310 %}
{% embed_file dropdownlist/default-item-primitive-values/func/app.tsx preview %}
{% embed_file dropdownlist/default-item-primitive-values/func/main.tsx %}
{% endmeta %}

The following example demonstrates how to define a `defaultItem` as an object value.

{% meta height:310 %}
{% embed_file dropdownlist/default-item-object-values/func/app.tsx preview %}
{% embed_file dropdownlist/default-item-object-values/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
