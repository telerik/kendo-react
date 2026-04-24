---
title: OData Server Operations
description: 'Get started with the KendoReact Data Grid by KendoReact and utilize the server-side operations for sorting, filtering, or paging data by using the OData service.'
components: ["datagrid"]
slug: odataserveroperations_grid
position: 40
tier: premium
subject: OData Server Operations feature of the Grid
---

# OData Server Operations

You can bind the Grid to data and then sort, filter, or paginate it using the OData service.

<CtaPanelOverview></CtaPanelOverview>

## Using `useODataDataSource`

The [`useODataDataSource`](slug://api_data-tools_useodatadatasource) hook of the [DataSource](slug://overview_datasource) component simplifies the integration of the KendoReact Data Grid with OData services by automatically handling the specifics of the OData protocol. This includes managing query parameters for sorting, filtering, paging, and other data operations.

### Steps to Bind the Grid to OData Service Using the useODataDataSource Hook

1. Ensure you have the necessary dependencies installed:

    ```bash
    npm install @progress/kendo-react-grid @progress/kendo-data-query
    ```

2. Define the base URL of your OData service. This URL will be used to fetch data from the server.

    ```jsx
    const baseUrl = 'https://demos.telerik.com/kendo-ui/service-v4/odata';
    ```

3. Import and configure the `useODataDataSource` hook in your component. The hook requires the OData service URL and an initial `DataState` configuration.

    ```jsx
    const result = useODataDataSource({
        transport: {
            read: {
                url: baseUrl
            }
        }
    });
    ```

4. Pass the data returned by the `useODataDataSource` hook to the Grid's `data` property. Additionally, handle the `onDataStateChange` event to update the Grid's state.

The following example demonstrates how to configure and use the `useODataDataSource` hook with the KendoReact Data Grid:

{% meta height:460 %}
{% embed_file odata-datasource/func/app.tsx preview %}
{% embed_file odata-datasource/func/main.tsx %}
{% endmeta %}

## Using `toODataString`

You can also apply data operations on the server by processing the parameters by utilizing the [toODataString]({% slug api_kendo-data-query_toodatastring %}) function, which is part of the [Data Query]({% slug overview_dataquery %}) package. This function converts the Grid's state into an OData-compliant query string.

### Steps to Request and Process Data Using toODataString

1. Configure the KendoReact Data Grid to use `DataState`. The `DataState` contains information about the current page, filter and sort expressions, grouping, and aggregates.

1. Handle the [onDataStateChange]({% slug api_grid_gridprops %}#toc-ondatastatechange) event. When this event is triggered, it returns the `DataState` object, which you will use to track the current state of the Grid.

1. Use the [toODataString]({% slug api_kendo-data-query_toodatastring %}) helper method with the current `DataState` to create the OData query string. This query string will be used to request data from the server.

> Note that the `toODataString` helper method does not support grouping. To add grouping information in the query, you can use the generated query string and manually include the grouping information by using the group descriptors within the `DataState`.

The following example demonstrates how to request and process data by handling the [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event. In addition, the sample also shows how to:

-   Separate the data request and response logic from the declaration of the Grid.
-   Debounce the event to avoid multiple requests at the same time.
-   Show a loading panel over the Grid during data fetching.

{% meta height:460 %}
{% embed_file odata-server-operations/func/app.tsx preview %}
{% embed_file odata-server-operations/func/main.tsx %}
{% embed_file odata-server-operations/func/products-loader.tsx %}
{% endmeta %}

## Suggested Links

-   [React DataSource Overview](slug://overview_datasource)
-   [Remote Data Operations]({% slug remote_data_datasource %})
-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
