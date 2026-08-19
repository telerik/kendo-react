---
title: Resizing Columns
description: 'Get started with the KendoReact Grid which supports the resizing of columns by dragging the resize handlers of the header cells.'
components: ['grid']
slug: resizing_columns_grid
position: 2
tier: mixed
subject: Grid
---

# Resizing Columns

The KendoReact Grid enables you to resize its columns by dragging the edges (resize handles) of the header cells.

To enable column resizing, set the [`resizable`]({% slug api_grid_gridprops %}#toc-resizable) property of the Grid to `true`.

> -   By default, the column-resizing feature is disabled.
> -   If the user resizes the Grid columns so that the total width of the columns becomes less than the width of the Grid, the remaining table is filled with whitespace.

The following example demonstrates basic column resizing, where users can drag the edges of header cells to adjust column widths.

{% meta height:460 %}
{% embed_file resizing/func/app.tsx preview %}
{% embed_file resizing/func/main.tsx %}
{% endmeta %}

# Limiting the Resizing

To restrict the resizing of the column within a certain range, set its [`minWidth`]({% slug api_grid_gridcolumnprops %}#toc-minWidth) and [`maxWidth`]({% slug api_grid_gridcolumnprops %}#toc-maxWidth)

The following example demonstrates how to constrain column resizing using `minWidth` and `maxWidth`, where the "Product Name" column is limited to a range of 300–500 pixels.

{% meta height:460 %}
{% embed_file resizing/limiting-the-resizing/app.tsx preview %}
{% embed_file resizing/limiting-the-resizing/main.tsx %}
{% endmeta %}

# Auto-Resizing

The KendoReact Grid enables you to auto-resize columns to fit their content by double-clicking on the resize handle. To enable column auto-resizing, set the [`resizable`]({% slug api_grid_gridprops %}#toc-resizable) property of the Grid to `true`.

## Suggested Links

-   [Column Component]({% slug api_grid_gridcolumnprops %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
