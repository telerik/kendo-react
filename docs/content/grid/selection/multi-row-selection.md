---
title: Multi-row Selection
description: 'Get started with the KendoReact Data Grid by KendoReact supporting selection of a single row or multiple rows.'
components: ["datagrid"]
slug: multi_row_selection_grid
position: 40
tier: premium
subject: Multi-row Selection feature of the Grid
---

# Multi-row Selection

Multiple row selection can be enabled by setting [`enabled`](slug:api_grid_gridselectablesettings#enabled) prop of the [`GridSelectableSettings`](slug:api_grid_gridselectablesettings) to `true` and its [`mode`](slug:api_grid_gridselectablesettings#mode) prop to `multiple`.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates multiple-row selection with enabled drag selection where the `select` state is handled internally by the Grid.

{% meta height:520 %}
{% embed_file selection/multi-row-selection/built-in/func/app.tsx preview %}
{% embed_file selection/multi-row-selection/built-in/func/main.tsx %}
{% endmeta %}

## Multiple Checkbox Selection

The checkbox selection enables selection upon a checkbox click and implements a master checkbox in the header that selects and deselects all items.

1. Configure the [`GridSelectableSettings`](slug:api_grid_gridselectablesettings) as follows:

    ```jsx
    selectable={{
        enabled: true,
        drag: false,
        cell: false,
        mode: 'multiple'
    }}
    ```

1. Handle the [`GridSelectionChangeEvent`]({% slug api_grid_gridselectionchangeevent %}) and the [`onHeaderSelectionChange`]({% slug api_grid_gridheaderselectionchangeevent %}) events which will be fired once the user clicks a checkbox.
1. Update the built-in `select` in the events handled above.

The following example demonstrates how to implement multiple selection both on row click and with checkboxes.

{% meta height:470 %}
{% embed_file selection/multiple-checkboxes/func/app.tsx preview %}
{% embed_file selection/multiple-checkboxes/func/main.tsx %}
{% endmeta %}

## Combining Selection with Data Operations (filtering, sorting, paging, etc.)

The following example demonstrates how to integrate checkbox selection with enabled grouping, filtering, sorting and paging. The main idea is to apply the selected state to the dataItems before or after processing the filter, group, and sort expressions.

{% meta height:550 %}
{% embed_file selection/data-operations/func/app.tsx preview %}
{% embed_file selection/data-operations/func/main.tsx %}
{% embed_file selection/data-operations/func/columnMenu.tsx %}
{% endmeta %}

## Persisting Multiple Rows Selection

To persist the selection state and restore it later, follow these steps:

1. Set the [`selectable`](slug:api_grid_gridprops#selectable) option.
2. Store the selection object in `localStorage`.

{% meta height:530 %}
{% embed_file selection/multi-row-selection/persisting-selection/app.tsx preview %}
{% embed_file selection/multi-row-selection/persisting-selection/main.tsx %}
{% endmeta %}

## Multi-row Reordering

The KendoKendoReact Data Grid comes with a built-in row-reordering feature that could be easily enhanced to allow the reordering of all selected rows.

The following example demonstrates how the row reordering functionality can be combined with multi-row selection.

<!-- Needs to be updated -->

{% meta height:480 %}
{% embed_file row-reordering/multi-select/func/app.tsx preview %}
{% embed_file row-reordering/multi-select/func/main.tsx %}
{% embed_file row-reordering/multi-select/func/draggable-row.tsx %}
{% embed_file row-reordering/multi-select/func/selection-cell.tsx %}
{% embed_file row-reordering/multi-select/func/drag-hint.tsx %}
{% endmeta %}

## Suggested Links

-   [Reordering of Rows](slug:rowreordering_grid)
-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
