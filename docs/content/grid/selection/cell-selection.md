---
title: Cell Selection
description: 'Learn how to enable single-cell selection in the KendoReact Grid and how to use controlled mode to programmatically manage the selected cell.'
components: ['grid']
slug: cell_selection_grid
position: 10
tier: free
---

# Single Cell Selection

Cell selection lets users highlight individual cells rather than entire rows. Enable it by setting `enabled: true`, `cell: true`, and `mode: 'single'` in the [`selectable`](slug:api_grid_gridprops#selectable) configuration. This mode is a good fit when the Grid behaves like a spreadsheet, or when the selected cell drives a secondary action such as showing a detail panel, launching an inline editor, or updating another part of the UI.

Pair cell selection with [`navigatable`](slug:api_grid_gridprops#toc-navigatable) so that keyboard arrow keys move the active cell as users review or enter data without reaching for the mouse.

The following example demonstrates single-cell selection with keyboard navigation enabled, where the `select` state is handled internally by the Grid.

{% meta height:470 %}
{% embed_file selection/cell-selection/func/app.tsx preview %}
{% embed_file selection/cell-selection/func/main.tsx %}
{% endmeta %}

## Controlled Cell Selection

Use controlled selection when the selected cell must stay in sync with external state, for example when another component reads or sets the active cell, or when you need to restore it after a data reload. Keep the selection descriptor in the [`select`](slug:api_grid_gridprops#select) prop, update it in [`onSelectionChange`](slug:api_grid_gridprops#toc-onselectionchange), and set a stable [`dataItemKey`](slug:api_grid_gridprops#dataitemkey) so the Grid can track the correct cell across data changes.

The following example demonstrates controlled cell selection with preset buttons that programmatically set the selection and a click-to-deselect behavior implemented in `onSelectionChange`.

{% meta height:490 %}
{% embed_file selection/controlled-cell-selection/func/app.tsx preview %}
{% embed_file selection/controlled-cell-selection/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Selection Overview](slug:selection_grid)
-   [Cell Range Selection](slug:cell_range_selection_grid)
-   [Row Selection](slug:row_selection_grid)
-   [Selection Aggregates](slug:aggregates_selection_grid)
-   [API Reference of the Grid](slug:api_grid_grid)
-   [API Index of the Grid](slug:api_grid)
