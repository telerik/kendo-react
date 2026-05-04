---
title: Implement a Locked Custom Column in KendoReact Grid
description: 'Learn how to create a locked (frozen) column with a custom cell in the KendoReact Grid using the cells prop.'
type: how-to
page_title: Locked Custom Column - KendoReact Grid
slug: grid-locked-custom-column
tags: kendoreact, grid, locked, frozen, custom cell, cells, gridcustomcellprops, tdprops
res_type: kb
ticketid: 1708945
category: knowledge-base
components: ['grid']
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>14.2.1</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact Grid</td>
        </tr>
    </tbody>
</table>

## Description

You want to implement a locked (frozen) column with a fully custom cell in the KendoReact Grid, but the old `cell` prop on `GridColumn` and the `tdProps` property on `GridCellProps` are no longer available.

This knowledge base article also answers the following questions:

-   How to create a custom cell for a locked column in KendoReact Grid?
-   What replaced the `cell` prop on `GridColumn`?
-   How to access `tdProps` in a custom Grid cell?

## Solution

The `cell` prop was replaced by the `cells` prop, which accepts an object with a `data` key pointing to your custom cell component. For custom cells in locked columns, use `GridCustomCellProps` instead of `GridCellProps` — it includes the `tdProps` property that carries the inline styles and attributes the Grid needs to correctly position locked (sticky) columns.

> Always spread `tdProps` onto your `<td>` when using locked columns. Omitting it breaks the sticky positioning.

1. Import `GridCustomCellProps` from `@progress/kendo-react-grid`.
2. Create your custom cell component accepting `Readonly<GridCustomCellProps>`.
3. Spread `tdProps` onto the `<td>` element and merge any additional styles on top.
4. Pass the component to the `cells={{ data: MyCell }}` prop on `GridColumn`.
5. Set `locked={true}` on the column as normal.

<demo metaUrl="knowledge-base/grid/grid-locked-custom-column/" height="450"></demo>

## See Also

-   [KendoReact Grid Custom Cells Documentation](https://www.telerik.com/kendo-react-ui/components/grid/cells/)
-   [GridCustomCellProps API](https://www.telerik.com/kendo-react-ui/components/grid/api/gridcustomcellprops)
-   [GridColumn locked prop](https://www.telerik.com/kendo-react-ui/components/grid/api/gridcolumnprops/#toc-locked)
