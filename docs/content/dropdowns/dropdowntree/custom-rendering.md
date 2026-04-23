---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact DropDownTree in React projects.'
components: ["dropdowntree"]
slug: customrendering_dropdowntree
position: 3
---

# Custom Rendering

The DropDownTree provides options for customizing the way it renders its elements.

## Items and Value element

To customize the content of each option list item, use the [`item`]({% slug api_dropdowns_dropdowntreeprops %}#toc-item) prop. To customize the element content that holds the selected text, use the [`valueHolder`]({% slug api_dropdowns_dropdowntreeprops %}#toc-valueholder) prop.

The following example demonstrates how to customize the list elements and the element that holds the selected text.

{% meta height:320 %}
{% embed_file dropdowntree/custom-rendering/func/app.tsx preview %}
{% embed_file dropdowntree/custom-rendering/func/main.tsx %}
{% embed_file dropdowntree/custom-rendering/func/custom-rendering.tsx %}
{% embed_file dropdowntree/custom-rendering/func/data.ts %}
{% endmeta %}

## No Data

To customize the content of the option list when no data is present, use the [`listNoData`]({% slug api_dropdowns_dropdowntreeprops %}#toc-listnodata) prop.

{% meta height:250 %}
{% embed_file dropdowntree/no-data/func/listNoData.tsx %}
{% embed_file dropdowntree/no-data/func/app.tsx preview %}
{% embed_file dropdowntree/no-data/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
