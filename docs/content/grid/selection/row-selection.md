---
title: Row Selection
description: 'Learn how to configure row selection in the KendoReact Grid, including single selection, checkbox selection, and persisted state.'
components: ['grid']
slug: row_selection_grid
position: 20
tier: free
---

# Single Row Selection

Single row selection lets the user highlight one Grid row at a time. Enable it by setting the [`selectable`](slug:api_grid_gridprops#toc-selectable) prop with [`enabled`](slug:api_grid_gridselectablesettings#enabled) set to `true` and [`mode`](slug:api_grid_gridselectablesettings#mode) set to `single`.

This is a good fit when users should work with one active record at a time, for example when showing details in a side panel or opening an edit form for the selected item. Use [`defaultSelect`](slug:api_grid_gridprops#toc-defaultselect) to pre-select a row on first render without taking over selection state management.

The following example demonstrates single-row selection with a pre-selected row on load.

{% meta height:470 %}
{% embed_file selection/row-selection/func/app.tsx preview %}
{% embed_file selection/row-selection/func/main.tsx %}
{% endmeta %}

## Controlled Row Selection

Use controlled selection when the selected row must survive data refreshes, paging, filtering, or other external state changes. Keep the current selection in the [`select`](slug:api_grid_gridprops#select) prop, handle [`onSelectionChange`]({% slug api_grid_gridprops %}#toc-onselectionchange) to update it, and always set a stable [`dataItemKey`](slug:api_grid_gridprops#dataitemkey) so the selection descriptor tracks the correct row across data changes.

The following example demonstrates controlled row selection with preset buttons that programmatically set the selection and a click-to-deselect behavior implemented in `onSelectionChange`.

{% meta height:490 %}
{% embed_file selection/controlled-row-selection/func/app.tsx preview %}
{% embed_file selection/controlled-row-selection/func/main.tsx %}
{% endmeta %}

If you later expand the experience to multi-row selection, the same controlled pattern applies. For examples that combine controlled selection with grouping, paging, and filtering, see the [multi-row selection](slug:multi_row_selection_grid) article.

## Checkbox Selection

Use checkbox selection when row clicks are reserved for another action such as navigation, editing, or expanding a detail row. Adding a checkbox column makes the selection intent unambiguous.

To configure checkbox selection:

1. Add a [`Column`](slug:api_grid_gridcolumn) with `columnType="checkbox"` as the first column.
1. Configure [`GridSelectableSettings`](slug:api_grid_gridselectablesettings) on the Grid:

    ```jsx
    selectable={{
        enabled: true,
        drag: false,
        cell: false,
        mode: 'single'
    }}
    ```

1. Handle [`onSelectionChange`](slug:api_grid_gridprops#toc-onselectionchange) and [`onHeaderSelectionChange`](slug:api_grid_gridprops#toc-onheaderselectionchange) and update the `select` state with `event.select` in both handlers.

In `single` mode the header checkbox is not shown as a select-all control. Switch `mode` to `multiple` to enable select-all and range selection — see the [multi-row selection](slug:multi_row_selection_grid) article for those patterns.

The following example demonstrates single checkbox selection where both row clicks and the checkbox column toggle the selected row.

{% meta height:470 %}
{% embed_file selection/checkboxes/func/app.tsx preview %}
{% embed_file selection/checkboxes/func/main.tsx %}
{% endmeta %}

## Persisting Checkbox Selection State

Persisting the selection state is useful when users leave and return to the page, or when you need to preserve their working context across refreshes. Store the selection descriptor rather than the entire data item so the selection can be reapplied efficiently after the data is loaded again.

This example demonstrates how to persist and restore selection state by storing the selection object in `localStorage`.

{% meta height:640 %}
{% embed_file selection/persisting-checkbox-selection/app.tsx preview %}
{% embed_file selection/persisting-checkbox-selection/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Selection Overview](slug:selection_grid)
-   [Cell Selection](slug:cell_selection_grid)
-   [Multi-row Selection](slug:multi_row_selection_grid)
-   [Persisting Multiple Rows Selection](slug:multi_row_selection_grid#persisting-multiple-rows-selection)
-   [API Reference of the Grid](slug:api_grid_grid)
-   [API Index of the Grid](slug:api_grid)
