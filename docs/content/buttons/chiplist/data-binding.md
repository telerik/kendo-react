---
title: Data Binding
description: 'Bind your data in KendoReact ChipList.'
components: ["chiplist"]
slug: databinding_chiplist
position: 4
---

# Data Binding

Allows you to bind your own data.

The KendoReact ChipList has [`textField`]({% slug api_buttons_chiplistprops %}#toc-textField) and [`valueField`]({% slug api_buttons_chiplistprops %}#toc-valueField) props which you can set. The default value of the `textField` is equal to `text` and the default value of the `valueField` is set to `value`. This values represent the keys in key-value pairs od the [`data`]({% slug api_buttons_chiplistprops %}#toc-data) or [`defaultData`]({% slug api_buttons_chiplistprops %}#toc-defaultData) object which is given to the ChipList component. You can use different key-value pairs to represent the `text` and `value` pair into your data object. The below example represents the behavior.

{% meta height:130 %}
{% embed_file chiplist/binding/data-binding/func/app.tsx preview %}
{% embed_file chiplist/binding/data-binding/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ChipList]({% slug api_buttons_chiplistprops %})
