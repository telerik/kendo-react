---
title: Replace the Filter Cell of a Grid Column With a Save Order Button
description: 'Learn how to render a custom Save button inside a KendoReact Grid filter cell that persists the row order to a database or localStorage.'
type: how-to
page_title: Render a Save Order Button in a Filter Cell - KendoReact Grid
slug: grid-save-button-in-filter-cell
tags: kendoreact, grid, filter cell, custom filter, row reorder, persist order, localstorage
res_type: kb
ticketid: 1713644
category: knowledge-base
components: ['grid']
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>14.4.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact Grid</td>
        </tr>
    </tbody>
</table>

## Description

I have a KendoReact Grid that supports row reordering through drag and drop and shows the current row position in an `Order` column. I want to replace the default filter input with a custom `Save Order` button that persists the current row order to a database or to `localStorage`.

## Solution

Pass both a custom `data` cell and a custom `filterCell` to the [`cells`](slug:api_grid_gridcolumnprops#toc-cells) prop of the `GridColumn`. The [`filterCell`](slug:api_grid_gridcellssettings#toc-filtercell) component completely replaces the default filter UI, so you can render a Kendo `Button` that triggers your save logic. The [`data`](slug:api_grid_gridcellssettings#toc-data) cell renders the current row position as a plain number.

<demo metaUrl="knowledge-base/grid/grid-save-button-in-filter-cell/" height="600"></demo>

## See Also

-   [Grid Custom Cells](slug:cells_grid)
-   [Grid Filter Cells](slug:header_footer_filter_cells_grid)
-   [Grid Row Reordering](slug:rowreordering_grid)
-   [GridColumnProps API](slug:api_grid_gridcolumnprops)
-   [GridCellsSettings API](slug:api_grid_gridcellssettings)
