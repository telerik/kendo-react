---
title: Aggregates
description: 'Get started with the KendoReact TreeList and learn how to render aggregated data.'
components: ["treelist"]
slug: aggregates_treelist
position: 140
---

# Aggregates

The TreeList component can render aggregated data.

## Getting Started

In order to render aggregated data, it's required to calculate it and add it to the TreeList [`data`]({% slug api_treelist_treelistprops %}#toc-data) tree, along with the other data objects. Additional styling or customization of the rows showing aggregated data can be achieved using the TreeList [`rowRender`]({% slug api_treelist_treelistprops %}#toc-rowrender) property.

The following example shows how to render aggregated data.

{% meta height:500 %}
{% embed_file aggregates/func/app.tsx preview %}
{% embed_file aggregates/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
