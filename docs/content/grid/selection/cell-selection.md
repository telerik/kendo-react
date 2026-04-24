---
title: Cell Selection
description: 'Get started with the KendoReact Data Grid by KendoReact supporting selection of a single row or multiple rows.'
components: ["datagrid"]
slug: cell_selection_grid
position: 10
tier: free
---

# Cell Selection

The single cell selection is enabled by setting an object to the [`selectable`]({% slug api_grid_gridprops %}#toc-selectable) property with `enabled` set to `true`, `mode` set to `single` and `cell` set to `true`.

The following example demonstrates single-cell selection, where the `select` state is handled internally by the Grid.

{% meta height:470 %}
{% embed_file selection/cell-selection/func/app.tsx preview %}
{% embed_file selection/cell-selection/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
