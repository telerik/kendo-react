---
title: Overview
description: 'Learn how to apply filtering in the KendoReact Data Grid to display only relevant records.'
components: ["datagrid"]
slug: filtering_grid
position: 0
tier: mixed
---

# KendoReact Data Grid Filtering Overview

The KendoReact Data Grid enables you to display only those Grid records which meet specified criteria.

When filtering is enabled, the Grid renders a filter row in its header. Depending on the data type of each column, the filter row displays filtering components where the user can filter string, numeric, boolean, or date data types. Each consecutive filter is added to the previous ones and reduces the subset of data.

<CtaPanelOverview></CtaPanelOverview>

## Enabling Filtering

The KendoKendoReact Data Grid supports filtering in two modes:

-   [Built-in State Management](#using-the-built-in-state-management-for-filtering): The Grid manages its own filtering state internally.

-   [Controlled Mode](#using-the-filtering-in-controlled-mode): The filtering state is externally managed by handling events and updating the state accordingly.

## Using the Built-in State Management for Filtering

To enable filtering using the built-in state management mechanism, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.
1. Set the [`filterable`]({% slug api_grid_gridprops %}#toc-filterable) prop of the Grid to render a filter row under the column headers.
1. Set the [`defaultFilter`](slug:api_grid_gridprops#defaultFilter) prop to set initial filtering for the Grid.

The following example demonstrates how to implement filtering using the built-in state management of the KendoKendoReact Data Grid.

{% meta height:440 %}
{% embed_file filtering/built-in/func/app.tsx preview %}
{% embed_file filtering/built-in/func/main.tsx %}
{% endmeta %}

## Using the Filtering in Controlled Mode

To enable numeric paging in the KendoKendoReact Data Grid and use it in controlled mode, follow these steps:

1. Set the [`filterable`]({% slug api_grid_gridprops %}#toc-filterable) prop of the Grid to render a filter row under the column headers.
1. Set the [`filter`]({% slug api_grid_gridprops %}#toc-filter) option of the Grid. Filtering conditions are declared as [`FilterDescriptors`]({% slug api_kendo-data-query_filterdescriptor %}) or [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}).
1. Handle the [`onFilterChange`]({% slug api_grid_gridprops %}#toc-onfilterchange) or [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event of the Grid.
1. Filter the data on the client using built-in methods like [filterBy]({% slug api_kendo-data-query_filterby %}) or [`process`]({% slug api_kendo-data-query_process %}). The data can also be filtered on the server using event parameters.

> The [`filterBy`]({% slug api_kendo-data-query_filterby %}) method is recommended for `onFilterChange` event. The [`process`]({% slug api_kendo-data-query_process %}) method is recommended when using the `onDataStateChange` event.

## Customizing the Filter Operators

The Grid allows you also to customize the operators for the `numeric`, `text`, and `date` filter types by using the [`filterOperators`]({% slug api_grid_gridfilteroperators %}) property. The Grid uses the first operator from each type as its default operator. The Boolean filter types always use the `equal` operator.

{% meta height:480 %}
{% embed_file filtering/operators/func/app.tsx preview %}
{% embed_file filtering/operators/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Filtering APIs

-   [FilterDescriptors]({% slug api_kendo-data-query_filterdescriptor %})
-   [onDataStateChange]({% slug api_grid_gridprops %}#toc-ondatastatechange)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
