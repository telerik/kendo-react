---
title: Row Selection
description: 'Get started with the KendoReact Data Grid by KendoReact supporting selection of a single row or multiple rows.'
components: ["datagrid"]
slug: row_selection_grid
position: 20
tier: free
---

# Single Row Selection

Single Row selection can be enabled by setting the [`enabled`](slug:api_grid_gridselectablesettings#enabled) prop of the [`GridSelectableSettings`](slug:api_grid_gridselectablesettings) to `true` and its [`mode`](slug:api_grid_gridselectablesettings#mode) prop to `single`.

The following example demonstrates how to enable the single-row selection of the Grid where the `select` state is handled internally by the Grid.

{% meta height:470 %}
{% embed_file selection/row-selection/func/app.tsx preview %}
{% embed_file selection/row-selection/func/main.tsx %}
{% endmeta %}

## Checkbox Selection

The Grid provides both checkbox and row-click selection options which can be applied to single or multiple records.

To configure the checkbox selection:

1. Configure the [`GridSelectableSettings`](slug:api_grid_gridselectablesettings) as follows:

    ```jsx
    selectable={{
        enabled: true,
        drag: false,
        cell: false,
        mode: 'single'
    }}
    ```

1. Handle the [`GridSelectionChangeEvent`]({% slug api_grid_gridselectionchangeevent %}) and the [`onHeaderSelectionChange`]({% slug api_grid_gridheaderselectionchangeevent %}) events which will be fired once the user clicks a checkbox.
1. Update the built-in `select` in the events handled above.

The following example demonstrates how to implement multiple selection both on row click and with checkboxes.

{% meta height:470 %}
{% embed_file selection/checkboxes/func/app.tsx preview %}
{% embed_file selection/checkboxes/func/main.tsx %}
{% endmeta %}

## Persisting Checkbox Selection

This example demonstrates how to persist and restore selection state by storing the selection object in `localStorage`.

{% meta height:530 %}
{% embed_file selection/persisting-checkbox-selection/app.tsx preview %}
{% embed_file selection/persisting-checkbox-selection/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
