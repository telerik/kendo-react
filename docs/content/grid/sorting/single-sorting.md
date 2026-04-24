---
title: Single-column Sorting
description: 'Get started with the sorting functionality of the KendoReact Data Grid and learn how to sort single data-bound columns.'
components: ["datagrid"]
slug: single_column_sorting_grid
position: 10
tier: free
---

# KendoReact Data Grid Single-column Sorting

The KendoReact Data Grid enables you to sort single data-bound columns.

To enable sorting in the KendoReact Data Grid and utilize its built-in state management, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle the updated state automatically.
1. Set the [`sortable`](slug:api_grid_gridprops#sortable) prop of the Grid to enable sorting.
1. (Optional) Set the [`defaultSort`](slug:api_grid_gridprops#defaultsort) prop to define the initial sorting.

The following example demonstrates how to use sorting handled by the built-in state management of the KendoReact Data Grid.

{% meta height:370 %}
{% embed_file sorting-basic/built-in/func/app.tsx preview %}
{% embed_file sorting-basic/built-in/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Sorting APIs

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})

## Suggested Links

-   [Data Query Overview](slug:overview_dataquery)
