---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact MultiSelectTree in React projects.'
components: ["multiselecttree"]
slug: customrendering_multiselecttree
position: 3
---

# Custom Rendering

The MultiSelectTree provides options for customizing the way it renders its elements.

## Items and Value element

To customize the content of each option list item, use the [`item`]({% slug api_dropdowns_multiselecttreeprops %}#toc-item) prop. To customize the tag elements, use the [`tag`]({% slug api_dropdowns_multiselecttreeprops %}#toc-tag) prop.

The following example demonstrates how to customize the list and tag elements.

{% meta height:300 %}
{% embed_file multiselecttree/custom-rendering/func/app.tsx preview %}
{% embed_file multiselecttree/custom-rendering/func/main.tsx %}
{% embed_file multiselecttree/custom-rendering/func/custom-rendering.tsx %}
{% embed_file multiselecttree/custom-rendering/func/data.ts %}
{% endmeta %}

## No Data

To customize the content of the option list when no data is present, use the [`listNoData`]({% slug api_dropdowns_multiselecttreeprops %}#toc-listnodata) prop.

{% meta height:250 %}
{% embed_file multiselecttree/no-data/func/listNoData.tsx %}
{% embed_file multiselecttree/no-data/func/app.tsx preview %}
{% embed_file multiselecttree/no-data/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
