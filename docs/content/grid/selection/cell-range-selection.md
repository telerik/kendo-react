---
title: Cell Range Selection
description: 'Get started with the KendoReact Grid by KendoReact supporting selection of a single row or multiple rows.'
components: ['grid']
slug: cell_range_selection_grid
position: 30
tier: premium
subject: Cell Range Selection feature of the Grid
---

# Cell Range Selection

Cell selection is enabled by setting an object to the [`selectable`]({% slug api_grid_gridprops %}#toc-selectable) property with `enabled` set to `true` and `cell` set to `true`.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates multiple-cell selection with enabled drag selection where the `select` state is handled internally by the Grid.

{% meta height:640 %}
{% embed_file selection/multi-cell-selection/func/app.tsx preview %}
{% embed_file selection/multi-cell-selection/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Selection Overview](slug:selection_grid)
-   [Cell Selection](slug:cell_selection_grid)
-   [Row Selection](slug:row_selection_grid)
-   [Multi-row Selection](slug:multi_row_selection_grid)
-   [Selection Aggregates](slug:aggregates_selection_grid)
-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
