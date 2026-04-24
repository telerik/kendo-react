---
title: Overview
description: 'Get started with the paging functionality of the KendoKendoReact Data Grid and learn how to split content into pages.'
components: ["datagrid"]
slug: paging_grid
position: 0
tier: mixed
---

# KendoReact Data Grid Paging Overview

The KendoReact Data Grid provides a flexible paging mechanism that enables users to navigate large datasets efficiently. The built-in pager allows for numeric and input-based navigation, as well as customizable paging components.

## Getting Started with the KendoReact Data Grid Paging

Pagination is enabled in the Grid by setting the `pageable` property. This adds navigation controls to the bottom of the Grid, allowing users to move between pages.

## Enabling Paging

The KendoKendoReact Data Grid supports paging in two modes:

-   [Built-in State Management](#using-the-built-in-state-management-for-paging): The Grid manages its own paging state internally.

-   [Controlled Mode](#using-the-paging-in-controlled-mode): The paging state is externally managed by handling events and updating the state accordingly.

## Using the Built-in State Management for Paging

To enable basic numeric paging using the built-in state management mechanism, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.
1. Set the [`pageable`](slug:api_grid_gridprops#pageable) prop of the Grid to enable pagination.
1. Set the [`defaultTake`](slug:api_grid_gridprops#defaulttake) prop to define the number of items rendered initially.
1. Use the [`defaultSkip`](slug:api_grid_gridprops#defaultskip) prop to specify the number of items to be skipped initially, determining the starting page.

The following example demonstrates how to implement numeric paging using the built-in state management of the KendoKendoReact Data Grid.

{% meta height:470 %}
{% embed_file paging-basic/built-in/func/app.tsx preview %}
{% embed_file paging-basic/built-in/func/main.tsx %}
{% endmeta %}

## Using the Paging in Controlled Mode

To enable numeric paging in the KendoKendoReact Data Grid and use it in controlled mode, follow these steps:

1. Set the [`pageable`]({% slug api_grid_gridprops %}#toc-pageable) prop of the Grid to enable paging.
1. Use the [`skip`]({% slug api_grid_gridprops %}#toc-skip) prop used to track the current page.
1. Set the [`pageSize`]({% slug api_grid_gridprops %}#toc-pagesize) or the [`take`]({% slug api_grid_gridprops %}#toc-take) options of the Grid to specify how many items will be rendered on the page.
1. Use the [`total`]({% slug api_grid_gridprops %}#toc-total) prop to notify the Grid how many records are in total, which is needed to calculate the correct total pages.
1. Handle the [`onPageChange`]({% slug api_grid_gridprops %}#toc-onpagechange) or the [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event of the Gridfor managing the paging [`state`]({% slug api_kendo-data-query_state %}).
1. Use the [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method or the built-in [`process`]({% slug api_kendo-data-query_process %}) method to manage paging logic.

The following example demonstrates how to implement basic numeric paging in controlled mode.

{% meta height:470 %}
{% embed_file paging-basic/controlled/func/app.tsx preview %}
{% embed_file paging-basic/controlled/func/main.tsx %}
{% endmeta %}

## Pager Types

The Grid supports different pager types:

-   [Numeric](slug:basic_paging_grid)&mdash;Renders buttons with numbers.
-   [Input (responsive)](slug:basic_paging_grid#responsive-pager)&mdash;Renders an input field for typing the page number.
-   [Custom Pager](slug:custom_paging_grid)&mdash;Allows you to change entirely the Pager rendering.

The `PagerSettings` object has the following fields:

-   [`buttonCount`]({% slug api_grid_gridprops %}#toc-pageable)&mdash;Sets the maximum numeric buttons count before the buttons are collapsed.
-   [`info`]({% slug api_grid_gridprops %}#toc-pageable)&mdash;Toggles the information about the current page and the total number of records.
-   [`type`]({% slug api_grid_gridprops %}#toc-pageable)&mdash;Accepts the `numeric` (buttons with numbers) and `input` (input for typing the page number) values.
-   [`pageSizes`]({% slug api_grid_gridprops %}#toc-pageable)&mdash;Shows a menu for selecting the page size.
-   [`previousNext`]({% slug api_grid_gridprops %}#toc-pageable)&mdash;Toggles the **Previous** and **Next** buttons.

To set the pager types, pass the [`PagerSettings`]({% slug api_grid_gridpagersettings %}) object to the [`pageable`]({% slug api_grid_gridprops %}#toc-pageable) option of the Grid.

{% meta height:550 %}
{% embed_file paging/func/app.tsx preview %}
{% embed_file paging/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Numeric Paging](slug:basic_paging_grid)
-   [Custom Paging](slug:custom_paging_grid)
