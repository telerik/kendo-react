---
title: Locked
description: 'Get started with the KendoReact TreeList supporting locked columns that are visible at all times while the user scrolls the TreeList horizontally.'
components: ["treelist"]
slug: locked_columns_treelist
position: 2
---

# Locked columns

Locked (frozen or sticky) columns are the columns that are visible at all times while the user scrolls the TreeList horizontally.

In order for the locked columns to work properly, configure the following options:

-   (Required) Set [`width`]({% slug api_treelist_treelistcolumnprops %}#toc-width) of each column.
-   (Required) Set [`locked`]({% slug api_treelist_treelistcolumnprops %}#toc-locked) property of the column.
-   (Required) Set `overflow: auto` and `width` in pixels through the [`style`]({% slug api_treelist_treelistprops %}#toc-style) property of the TreeList.

> By default, the columns of the TreeList are not locked.

{% meta height:580 %}
{% embed_file locked/func/app.tsx preview %}
{% embed_file locked/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
