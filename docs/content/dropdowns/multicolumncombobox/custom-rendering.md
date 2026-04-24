---
title: Custom Rendering
description: 'Display different row or item styles for the KendoReact MultiColumnComboBox in React projects.'
components: ["multicolumncombobox"]
slug: customrendering_multicolumncombobox
position: 3
---

# Custom Rendering

The MultiColumnComboBox provides options for customizing the way it renders its elements and rows.

# Custom Items

In order to customize an item, use the [`itemRender`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-itemRender) property and change the child appearance.

The following example demonstrates how to customize the MultiColumnComboBox items using the [`itemRender`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-itemRender) property and add a [`Checkbox`]({% slug api_inputs_checkbox %}) column.

{% meta height:340 %}
{% embed_file multicolumncombobox/render/elements/func/app.tsx preview %}
{% embed_file multicolumncombobox/render/elements/func/main.tsx %}
{% endmeta %}

## Values

To customize the element content that holds the selected text, use the [`valueRender`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-valueRender) prop.

{% meta height:340 %}
{% embed_file multicolumncombobox/value-render/func/app.tsx preview %}
{% embed_file multicolumncombobox/value-render/func/main.tsx %}
{% endmeta %}

# Custom Row Style

Using the [`itemRender`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-itemRender) can also customize and each row appearance.

The following example demonstrates how use the [`itemRender`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-itemRender) property of the MultiColumnComboBox in order to change the style of each rows.

{% meta height:340 %}
{% embed_file multicolumncombobox/render/rows/func/app.tsx preview %}
{% embed_file multicolumncombobox/render/rows/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncomboboxprops %})
-   [Controlled Components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
