---
title: Hide Columns Initially and Reflect Changes from Column Menu in KendoReact Data Grid
description: Resolve issue where hidden columns in the KendoReact Data Grid don't reflect changes made via the column menu.
type: troubleshooting
page_title: KendoReact Data Grid Columns Not Updating with Column Menu Settings
meta_title: KendoReact Data Grid Columns Not Reflecting Column Menu Changes
slug: grid-hide-columns-initially
tags: kendo-react, data-grid, gridcolumns, column-menu, hide-columns
res_type: kb
ticketid: 1702328
components: ["grid"]
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
KendoReact Data Grid
</td>
</tr>
<tr>
<td> Version </td>
<td>
Current
</td>
</tr>
</tbody>
</table>

## Description

When using the [KendoReact Data Grid](https://www.telerik.com/kendo-react-ui/components/grid/) with hidden columns on initial render, the column menu settings fail to update the visibility of the columns in the grid. Updating the column visibility using the column menu does not affect the grid display.

## Cause

The `id` property of the `GridColumn` is required for column state management and synchronization with the column menu. If the `id` property is missing, the grid cannot properly update the column visibility based on the column menu settings.

## Solution

To ensure the grid reflects the column visibility changes from the column menu, add the `id` property to each `GridColumn`, matching the `id` defined in the `columnState`.

### Steps:

1. Define the `id` property for each `GridColumn`.
2. Assign the `id` values from the `columnState` to the respective columns.

### Example

{% meta height:300 %}
{% embed_file grid/hide-columns-initially/app.tsx preview %}
{% embed_file grid/hide-columns-initially/main.tsx %}
{% endmeta %}

Here, the `id` property is added to each `GridColumn`, ensuring proper synchronization between the grid and column menu.

## See Also

-   [KendoReact Data Grid Documentation](https://www.telerik.com/kendo-react-ui/components/grid/)
-   [Column Menu Documentation](https://www.telerik.com/kendo-react-ui/components/grid/columns/column-menu/)
-   [API Reference for GridColumn](https://www.telerik.com/kendo-react-ui/components/grid/api/GridColumn/)
