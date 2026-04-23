---
title: Virtual Scrolling
description: 'Get started with the KendoReact TreeList and provide an alternative to paging by setting its virtual scrolling mode.'
components: ["treelist"]
slug: virtualscrolling_treelist
position: 130
---

# Virtual Scrolling

Virtual scrolling provides an alternative to paging.

While the user is scrolling the table, the TreeList is only rendering a part of the data based on the scroll position.

## Getting Started

TreeList virtual scrolling requires you to set the following configuration:

-   Set the [`scrollable`]({% slug api_treelist_treelistprops %}#toc-scrollable) prop to `virtual`.
-   Set the TreeList height in pixels through its [`style`]({% slug api_treelist_treelistprops %}#toc-style) prop.
-   Set the [`rowHeight`]({% slug api_treelist_treelistprops %}#toc-rowheight) prop.

{% meta height:500 %}
{% embed_file virtual-scroll/func/app.tsx preview %}
{% embed_file virtual-scroll/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
