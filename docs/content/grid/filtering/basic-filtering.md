---
title: Basic Filtering
description: 'Learn how to apply global filtering in the KendoReact Data Grid to display only relevant records.'
components: ["datagrid"]
slug: basic-filtering_grid
position: 10
tier: free
---

# KendoReact Data Grid Basic Filtering

The KendoReact Data Grid provides a free global filtering feature that allows you to display only those Grid records which meet specified criteria.

## Enabling Basic Filtering

You can enable the global filtering of the Grid by following these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.
1. Set the [`filterable`]({% slug api_grid_gridprops %}#toc-filterable) prop of the Grid to render a filter row under the column headers.
1. (Optional) Set the [`defaultFilter`](slug:api_grid_gridprops#defaultFilter) prop to set initial filtering for the Grid.

The following example demonstrates how to implement filtering using the built-in state management of the KendoKendoReact Data Grid.

{% meta height:440 %}
{% embed_file filtering/built-in/func/app.tsx preview %}
{% embed_file filtering/built-in/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Filtering APIs

-   [FilterDescriptors]({% slug api_kendo-data-query_filterdescriptor %})
-   [onDataStateChange]({% slug api_grid_gridprops %}#toc-ondatastatechange)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})

## Suggested Links

-   [React Data Grid](slug://overview_grid)
-   [KendoReact Data Grid Advanced Filtering](slug:advanced_filtering_grid)
