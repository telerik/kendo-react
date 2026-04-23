---
title: Multi-column Sorting
description: 'Get started with the sorting functionality of the KendoReact Data Grid and learn how to sort multiple data-bound columns.'
components: ["datagrid"]
slug: multi_column_sorting_grid
position: 30
tier: premium
subject: Multi-column Sorting feature of the Grid
---

# KendoReact Data Grid Multi-column Sorting

The KendoReact Data Grid supports sorting by multiple data-bound columns.

<CtaPanelOverview></CtaPanelOverview>

## Enabling Multi-column Sorting

To enable sorting by multiple columns, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle the updated state automatically.
1. Set the [`sortable`]({% slug api_grid_gridprops %}#toc-sortable) option of the Grid and set its `mode` prop to `multiple`.
1. (Optional) Set the [`defaultSort`](slug:api_grid_gridprops#defaultsort) prop to define the initial sorting.

The following example demonstrates the minimum required configuration for sorting multiple Grid records.

{% meta height:370 %}
{% embed_file sorting-multiple/app.tsx preview %}
{% embed_file sorting-multiple/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Sorting APIs

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})

## Suggested Links

-   [Data Query Overview](slug:overview_dataquery)
