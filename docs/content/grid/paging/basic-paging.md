---
title: Basic Pagination
description: 'Learn how to implement numeric paging in the KendoReact Data Grid and navigate large datasets effectively.'
components: ["datagrid"]
slug: basic_paging_grid
position: 10
tier: free
---

# KendoReact Data Grid Numeric Pagination

Numeric paging in the KendoReact Data Grid allows users to navigate through pages using numbered buttons and a dropdown component allowing you to control the items per page.

## Enabling Numeric Paging

To enable numeric paging in Grid, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.
1. Set the [`pageable`](slug:api_grid_gridprops#pageable) prop of the Grid to enable pagination.
1. (Optional) Set the [`defaultTake`](slug:api_grid_gridprops#defaulttake) prop to define the number of items rendered initially.
1. (Optional) Use the [`defaultSkip`](slug:api_grid_gridprops#defaultskip) prop to specify the number of items to be skipped initially, determining the starting page.

The following example demonstrates how to implement numeric paging using the built-in state management of the KendoKendoReact Data Grid.

{% meta height:470 %}
{% embed_file paging-basic/built-in/func/app.tsx preview %}
{% embed_file paging-basic/built-in/func/main.tsx %}
{% endmeta %}

## Responsive Pager

The responsive Pager is enabled by default. To disable the responsive functionality, set the [`responsive`]({% slug api_grid_gridpagersettings %}#toc-responsive) property of the GridPagerSettings object to `false`

The following example demonstrates the responsive Pager in action.

{% meta height:500 %}
{% embed_file responsive-pager/func/app.tsx preview %}
{% embed_file responsive-pager/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Paging APIs

-   [Grid Pageable Prop]({% slug api_grid_gridprops %}#toc-pageable)
-   [Grid Pager Prop]({% slug api_grid_gridprops %}#toc-pager)
-   [API Reference of the PagerSettings]({% slug api_grid_gridpagersettings %})
