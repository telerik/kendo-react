---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact DropDownList in React projects.'
components: ['dropdownlist']
slug: customrendering_dropdownlist
position: 5
---

# Custom Rendering

The DropDownList provides options for customizing the way it renders its elements.

The DropDownList utilizes custom renderers which enable you to moderate the content of its:

-   [Option list items](#toc-items)
-   [Option list values](#toc-values)
-   [Header and footer elements](#toc-headers-and-footers)
-   [Option list when no data is available](#toc-no-data)

## Items

To customize the content of each option list item, use the [`itemRender`]({% slug api_dropdowns_dropdownlistprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `itemRender` prop of the DropDownList and customize the list elements.

{% meta height:340 %}
{% embed_file dropdownlist/item-render/func/app.tsx preview %}
{% embed_file dropdownlist/item-render/func/main.tsx %}
{% endmeta %}

## Values

To customize the element content that holds the selected text, use the [`valueRender`]({% slug api_dropdowns_dropdownlistprops %}#toc-valuerender) prop.

{% meta height:320 %}
{% embed_file dropdownlist/value-render/func/app.tsx preview %}
{% embed_file dropdownlist/value-render/func/main.tsx %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the DropDownList items popup, use the [`header`]({% slug api_dropdowns_dropdownlistprops %}#toc-header) and [`footer`]({% slug api_dropdowns_dropdownlistprops %}#toc-footer) props.

{% meta height:380 %}
{% embed_file dropdownlist/header-footer/func/app.tsx preview %}
{% embed_file dropdownlist/header-footer/func/main.tsx %}
{% endmeta %}

## No Data

To customize the content of the option list when no data is present, use the [`listNoDataRender`]({% slug api_dropdowns_dropdownlistprops %}#toc-listnodatarender) prop.

{% meta height:250 %}
{% embed_file dropdownlist/nodata-render/func/app.tsx preview %}
{% embed_file dropdownlist/nodata-render/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
