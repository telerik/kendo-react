---
title: Overview
description: 'Get started with the React DataSource hooks by KendoReact and learn how to manage data operations and state in your React applications.'
components: ["filter", "pager"]
slug: overview_datasource
position: 10
---

# KendoReact DataSource Overview

The KendoReact DataSource hooks provide powerful data management capabilities for your React applications. They handle common data operations like sorting, filtering, grouping, and paging while maintaining the data state.

The KendoReact DataSource hooks are distributed through the [kendo-react-data-tools NPM package](https://www.npmjs.com/package/@progress/kendo-react-data-tools).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the DataSource hooks in action.

{% meta height:470 %}
{% embed_file datasource/basic/func/app.tsx preview %}
{% embed_file datasource/basic/func/main.tsx %}
{% endmeta %}

> The DataSource is part of the [KendoReact DataTools]({% slug overview_datatools %}) component library. The procedures for installing, importing, and using the the DataSource are identical for all components in the package. To learn how to use the DataSource and the rest of the DataTools, see the [Getting Started with the KendoReact DataTools]({% slug get_started_datatools %}) guide.

## What are the KendoReact DataSource Hooks?

The available DataSource Hooks are:

-   [**useDataSource**](slug:api_data-tools_usedatasource)&mdash;A basic hook for managing in-memory data with built-in support for sorting, filtering, grouping, and paging.
-   [**useRemoteDataSource**](slug:api_data-tools_useremotedatasource)&mdash;Extends the base functionality to work with remote data sources, handling server-side data operations.
-   [**useODataDataSource**](slug:api_data-tools_useodatadatasource)&mdash;A specialized version for working with OData services that automatically handles OData protocol specifics.

## Key Features

-   [Data Operations]({% slug data_operations_datasource %})&mdash;Built-in sorting, filtering, grouping, and paging capabilities.
-   [State Management]({% slug state_management_datasource %})&mdash;Comprehensive state management for all data operations.
-   [Change Tracking]({% slug change_tracking_datasource %})&mdash;Monitor and manage data modifications.
-   [Bulk Operations]({% slug bulk_operations_datasource %})&mdash;Accumulate and submit multiple changes at once.

## Suggested Links

-   [Getting Started with DataSource]({% slug get_started_datasource %})
-   [API Reference of the DataTools]({% slug api_data-tools %})
-   [Remote Data Operations]({% slug remote_data_datasource %})
-   [OData Integration]({% slug remote_data_datasource %})
