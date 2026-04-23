---
title: Custom Renderings
description: 'Enable the rendering customization of the KendoReact ComboBox in React projects.'
components: ["combobox"]
slug: customrendering_combobox
position: 7
---

# Custom Rendering

The ComboBox provides options for customizing the way it renders its elements.

The ComboBox utilizes custom renderers which enable you to moderate the content of its:

-   [Suggestion list items](#toc-items)
-   [Header and footer elements](#toc-headers-and-footers)
-   [Suggestion list when no data is available](#toc-no-data)

## Items

To customize the content of each suggestion list item, use the [`itemRender`]({% slug api_dropdowns_comboboxprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `itemRender` prop of the ComboBox and customize the list elements.

{% meta height:340 %}
{% embed_file combobox/item-render/func/app.tsx preview %}
{% embed_file combobox/item-render/func/main.tsx %}
{% endmeta %}

## Values

To customize the element content that holds the selected text, use the [`valueRender`]({% slug api_dropdowns_comboboxprops %}#toc-valuerender) prop.

{% meta height:310 %}
{% embed_file combobox/value-render/func/app.tsx preview %}
{% embed_file combobox/value-render/func/main.tsx %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the items popup of the ComboBox, use the [`header`]({% slug api_dropdowns_comboboxprops %}#toc-header) and [`footer`]({% slug api_dropdowns_comboboxprops %}#toc-footer) props.

{% meta height:330 %}
{% embed_file combobox/header-footer/func/app.tsx preview %}
{% embed_file combobox/header-footer/func/main.tsx %}
{% endmeta %}

## No Data

To customize the content of the suggestion list when no data is present, use the [`listNoDataRender`]({% slug api_dropdowns_comboboxprops %}#toc-listnodatarender) prop.

{% meta height:230 %}
{% embed_file combobox/nodata-render/func/app.tsx preview %}
{% embed_file combobox/nodata-render/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
