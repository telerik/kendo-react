---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact AutoComplete in React projects.'
components: ["autocomplete"]
slug: customrendering_autocomplete
position: 5
---

# Custom Rendering

The AutoComplete provides options for customizing the way it renders its elements.

The AutoComplete utilizes custom renderers which enable you to moderate the content of its:

-   [Suggestion list items](#toc-items)
-   [Header and footer elements](#toc-headers-and-footers)
-   [Suggestion list when no data is available](#toc-no-data)

## Items

To customize the content of each suggestion list item, use the [`itemRender`]({% slug api_dropdowns_autocompleteprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `itemRender` prop of the AutoComplete and customize the list elements.

{% meta height:320 %}
{% embed_file autocomplete/item-render/func/app.tsx preview %}
{% embed_file autocomplete/item-render/func/main.tsx %}
{% endmeta %}

## Values

To customize the element content that holds the selected text, use the [`valueRender`]({% slug api_dropdowns_autocompleteprops %}#toc-valuerender) prop.

{% meta height:300 %}
{% embed_file autocomplete/value-render/func/app.tsx preview %}
{% embed_file autocomplete/value-render/func/main.tsx %}
{% embed_file autocomplete/value-render/func/products.ts %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the items popup of the AutoComplete, use the [`header`]({% slug api_dropdowns_autocompleteprops %}#toc-header) and [`footer`]({% slug api_dropdowns_autocompleteprops %}#toc-footer) props.

{% meta height:360 %}
{% embed_file autocomplete/header-footer/func/app.tsx preview %}
{% embed_file autocomplete/header-footer/func/main.tsx %}
{% endmeta %}

## No Data

To customize the content of the suggestion list when no data is present, use the [`listNoDataRender`]({% slug api_dropdowns_autocompleteprops %}#toc-listnodatarender) prop.

{% meta height:250 %}
{% embed_file autocomplete/nodata-render/func/app.tsx preview %}
{% embed_file autocomplete/nodata-render/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
