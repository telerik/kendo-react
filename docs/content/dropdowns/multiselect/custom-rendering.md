---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact MultiSelect in React projects.'
components: ['multiselect']
slug: customrendering_multiselect
position: 6
---

# Custom Rendering

The MultiSelect provides options for customizing the way it renders its elements.

The MultiSelect utilizes custom renderers which enable you to moderate the content of its:

-   [Option list items](#toc-items)
-   [Tags](#toc-tags)
-   [Header and footer elements](#toc-headers-and-footers)
-   [Option list when no data is available](#toc-no-data)

## Items

To customize the content of each suggestion list item, use the [`itemRender`]({% slug api_dropdowns_multiselectprops %}#toc-itemrender) prop.

The following example demonstrates how to set the `itemRender` prop of the MultiSelect and customize the list elements.

{% meta height:320 %}
{% embed_file multiselect/item-render/func/app.tsx preview %}
{% embed_file multiselect/item-render/func/main.tsx %}
{% endmeta %}

## Tags

To customize the content of each tag, use the [`tagRender`]({% slug api_dropdowns_multiselectprops %}#toc-tagrender) prop.

The following example demonstrates how to set the `tagRender` prop of the MultiSelect and customize the tags elements.

{% meta height:300 %}
{% embed_file multiselect/tags/func/app.tsx preview %}
{% embed_file multiselect/tags/func/main.tsx %}
{% embed_file multiselect/tags/func/styles.css %}
{% endmeta %}

## Headers and Footers

To set a `header` or a `footer` element in the items popup of the MultiSelect, use the [`header`]({% slug api_dropdowns_multiselectprops %}#toc-header) and [`footer`]({% slug api_dropdowns_multiselectprops %}#toc-footer) props.

{% meta height:360 %}
{% embed_file multiselect/header-footer/func/app.tsx preview %}
{% embed_file multiselect/header-footer/func/main.tsx %}
{% endmeta %}

## No Data

To customize the content of the suggestion list when no data is present, use the [`listNoDataRender`]({% slug api_dropdowns_multiselectprops %}#toc-listnodatarender) prop.

{% meta height:260 %}
{% embed_file multiselect/nodata-render/func/app.tsx preview %}
{% embed_file multiselect/nodata-render/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
