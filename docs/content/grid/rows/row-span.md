---
title: Spanned Rows
description: 'Get started with the KendoKendoReact Data Grid supporting the spanning of rows'
components: ["datagrid"]
slug: rowspan_grid
position: 10
tag: 'updated'
---

# Spanning of Rows

The Data Grid provides a built-in row-spanning feature, which can be enabled by setting the [rowSpannable]({% slug api_grid_gridprops %}#toc-rowspannable)

{% meta height:560 %}
{% embed_file rowspan/func/app.tsx preview %}
{% embed_file rowspan/func/main.tsx %}
{% endmeta %}

## Advanced Row Spanning

The Grid supports advanced row-spanning configuration, allowing you to provide a custom identifier to prevent unwanted row-spanning between different data items.

The following examples demonstrates how to generate unique identifier based on the `CustomerID` which prevents row-spanning of other columns between different customers.

{% meta height:560 %}
{% embed_file rowspan/advanced/app.tsx preview %}
{% embed_file rowspan/advanced/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
