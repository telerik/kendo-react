---
title: Spanned Rows
description: 'Get started with the KendoReact Grid supporting the spanning of rows'
components: ['grid']
slug: rowspan_grid
position: 10
---

# Spanning of Rows

The Grid provides a built-in row-spanning feature, which can be enabled by setting the [rowSpannable]({% slug api_grid_gridprops %}#toc-rowspannable)

The following example demonstrates basic row spanning using `rowSpannable`, where adjacent rows with equal field values are automatically merged into a single spanned cell.

{% meta height:680 %}
{% embed_file rowspan/func/app.tsx preview %}
{% embed_file rowspan/func/main.tsx %}
{% endmeta %}

## Advanced Row Spanning

The Grid supports advanced row-spanning configuration, allowing you to provide a custom identifier to prevent unwanted row-spanning between different data items.

The following examples demonstrates how to generate unique identifier based on the `CustomerID` which prevents row-spanning of other columns between different customers.

{% meta height:700 %}
{% embed_file rowspan/advanced/app.tsx preview %}
{% embed_file rowspan/advanced/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
