---
title: Locking Custom Action Command Column in KendoReact Grid
description: 'Learn how to lock a custom Action Command column in the KendoReact Grid by ensuring proper implementation of custom cell properties.'
type: how-to
page_title: Locking Custom Action Command Column in KendoReact Grid
slug: grid-lock-custom-action-command-column
tags: kendoreact, grid, action-command, locked-column, custom-cell
res_type: kb
ticketid: 1709029
category: knowledge-base
components: ['grid']
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact Grid</td>
        </tr>
        <tr>
            <td>Product Version</td>
            <td>Current</td>
        </tr>
    </tbody>
</table>

## Description

You want to lock a custom Action Command column in the KendoReact Grid. While locking standard columns works as expected, the custom Action Command column may not lock properly due to the custom cell implementation.

This knowledge base article also answers the following questions:

- How do you lock custom cells in KendoReact Grid?
- How do you lock an Action Command column in KendoReact Grid?
- How do you apply locked properties to a custom column in KendoReact Grid?

## Solution

To lock a custom Action Command column in the KendoReact Grid, ensure the custom cell implementation applies the correct properties for locked columns. Follow these steps:

1. Add `locked: true` to the `GridColumn` definition for the Action Command column.
2. In your custom cell component, spread `props.tdProps` onto the `<td>` element. This ensures the Grid applies the required styles and classes for locked columns.
3. Move any padding applied to the `<td>` element into nested elements to maintain consistent styling.

> The `tdProps` property contains all the required attributes and classes for locked column behavior. Always spread them directly onto the `<td>` element.

<demo metaUrl="knowledge-base/grid/grid-lock-custom-action-command-column/" height="400"></demo>

## See Also

- [KendoReact Grid Overview](https://www.telerik.com/kendo-react-ui/components/grid/)
- [KendoReact Grid Columns Documentation](https://www.telerik.com/kendo-react-ui/components/grid/columns/)
- [Locked Columns in KendoReact Grid](https://www.telerik.com/kendo-react-ui/components/grid/columns/locked-columns/)
