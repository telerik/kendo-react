---
title: Reordering
description: 'Get started with the KendoReact TreeList which supports the reordering of columns by dragging the header cells.'
components: ["treelist"]
slug: reordering_columns_treelist
position: 5
---

# Reordering

The KendoReact TreeList enables you to reorder its columns by dragging the header cells.

To enable column reordering, set the [`reorderable`]({% slug api_treelist_treelistprops %}#toc-reorderable) property to `true` and update the TreeList [`columns`]({% slug api_treelist_treelistprops %}#toc-columns) collection using [`onColumnReorder`]({% slug api_treelist_treelistprops %}#toc-oncolumnreorder) event.

{% meta height:580 %}
{% embed_file reordering/func/app.tsx preview %}
{% embed_file reordering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList Column]({% slug api_treelist_treelistcolumnprops %})
-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
