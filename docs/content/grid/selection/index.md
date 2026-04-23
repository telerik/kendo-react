---
title: Overview
description: 'Get started with the KendoReact Data Grid by KendoReact supporting selection of a single row or multiple rows.'
components: ["datagrid"]
slug: selection_grid
position: 0
tier: mixed
---

# Selection

The Grid enables the user to select single or multiple cells and rows by [utilizing the built-in selection logic](#using-the-built-in-state-management-for-selection) or [using the selection in controlled mode](#using-selection-in-controlled-mode). It also provides default selection implementation from the `getSelectedState` utility function.

As a result, the Grid allows you to:

-   Select [single cell](slug:cell_selection_grid) or [single row](slug:row_selection_grid)
-   Select [multiple cells](slug:cell_range_selection_grid) or [multiple rows](slug:multi_row_selection_grid)
-   Select [range of cells](slug:cell_range_selection_grid) or [range of rows](slug:multi_row_selection_grid) by dragging

{% meta height:700 %}
{% embed_file selection/all-options/func/app.tsx preview %}
{% embed_file selection/all-options/func/main.tsx %}
{% endmeta %}

## Using the Built-in State Management for Selection

To enable selection in the Grid using the built-in state management mechanism, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.
1. Set the [`selectable`](slug:api_grid_gridprops#selectable) option.
1. Optionally configure the [`defaultSelect`](slug:api_grid_gridprops#defaultSelect) value of the Grid to apply initial selection.

The following example demonstrates how to enable selection using the built-in state management of the KendoKendoReact Data Grid.

{% meta height:470 %}
{% embed_file selection/row-selection/func/app.tsx preview %}
{% embed_file selection/row-selection/func/main.tsx %}
{% endmeta %}

## Using Selection in Controlled Mode

To enable the selection in KendoKendoReact Data Grid and use it in controlled mode, follow these steps:

1. Set the [`selectable`](slug:api_grid_gridprops#selectable) option.
1. Optionally configure the [`select`](slug:api_grid_gridprops#select) value of the Grid to have control over the select state.

The following example demonstrates how to use selection in controlled mode.

{% meta height:520 %}
{% embed_file selection/multi-row-selection/controlled/func/app.tsx preview %}
{% embed_file selection/multi-row-selection/controlled/func/main.tsx %}
{% endmeta %}

## Single/Multiple Checkbox Selection

The Grid provides both checkbox and row-click selection options which can be applied to single or multiple records:

-   [Single row checkbox selection](slug:row_selection_grid#checkbox-selection)
-   [Multiple rows checkbox selection](slug:multi_row_selection_grid#multiple-checkbox-selection)

## Selection Aggregates

The Grid enables you to select single or multiple cells or rows and calculate different metrics based on the selected data. You can find more details about this functionality and how to use it in [this help article](slug:aggregates_selection_grid).

## Suggested Links

-   [Cell Selection](slug:cell_selection_grid)
-   [Cell Range Selection](slug:cell_range_selection_grid)
-   [Row Selection](slug:row_selection_grid)
-   [Single Row Checkbox Selection](slug:row_selection_grid#checkbox-selection)
-   [Multiple Rows Checkbox Selection](slug:multi_row_selection_grid#multiple-checkbox-selection)
-   [Selection Aggregates](slug:aggregates_selection_grid)
-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
