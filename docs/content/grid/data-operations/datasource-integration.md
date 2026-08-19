---
title: DataSource Integration
description: 'Learn how to integrate and manage data changes using KendoReact DataSource with the KendoReact Grid.'
components: ['grid']
slug: datasource_integration_grid
position: 35
tier: premium
---

# Integration of KendoReact Grid and DataSource

The [KendoReact DataSource](slug://overview_datasource) simplifies data management in React applications by providing built-in support for change tracking, CRUD operations, and server synchronization. When integrated with the KendoReact Grid, it enables seamless communication between the UI and the backend, making it easier to build robust and scalable data-driven applications.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates how to bind the Grid to a `useDataSource` hook with initial sorting and filtering, enabling automatic data processing through the DataSource.

{% meta height:470 %}
{% embed_file datasource/basic/app.tsx preview %}
{% embed_file datasource/basic/main.tsx %}
{% endmeta %}

## Setting Up the DataSource

To integrate the DataSource with the KendoReact Grid, start by selecting and configuring the appropriate DataSource hook based on your application's requirements. The available hooks include:

-   [`useDataSource`](slug://api_data-tools_usedatasource)&mdash;A basic hook for managing in-memory data with [built-in support for sorting, filtering, grouping, and paging](slug://state_management_datasource).
-   [`useRemoteDataSource`](slug://api_data-tools_useremotedatasource)&mdash;An advanced hook designed for [server-side data operations](slug://remote_data_datasource), enabling seamless integration with remote data services.
-   [`useODataDataSource`](slug://api_data-tools_useodatadatasource)&mdash;A specialized hook tailored for OData services, offering [automatic handling of OData protocol specifics](slug://remote_data_datasource#using-useODataDataSource).
-   `update`, `create` and `delete`&mdash;Dedicated utilities for [tracking and managing data changes](slug://change_tracking_datasource) such as additions, updates, and deletions within your application.

Below you can see how to configure the DataSource via the `useDataSource` hook.

```jsx
const dataState = {
    skip: 0,
    take: 10,
    sort: [{ field: 'ProductName', dir: 'asc' }],
    filter: {
        logic: 'and',
        filters: [{ field: 'UnitPrice', operator: 'gt', value: 20 }]
    }
};

const result = useDataSource({
    data: products,
    dataState
});
```

## Binding the DataSource to the Grid

Once the DataSource is configured, it can be bound to the KendoReact Grid. The Grid will use the DataSource to fetch and display data, as well as to handle [user interactions such as sorting, filtering, and paging](slug://data_operations_datasource).

The following example demonstrates how to bind a Grid to a `useDataSource` hook and enable sorting, filtering, grouping, and paging through the DataSource's built-in data state management.

{% meta height:700 %}
{% embed_file datasource/data-operations/app.tsx preview %}
{% embed_file datasource/data-operations/main.tsx %}
{% endmeta %}

## Binding the Grid to Remote Data

You can use the [`useRemoteDataSource`](slug:api_data-tools_useremotedatasource) and [`useODataDataSource`](slug:api_data-tools_useodatadatasource) hooks for working with remote data services like explained in details in the [Remote Data Operations](slug://remote_data_datasource) article of the datasource.

Here is a complete example showing how to integrate a Grid with `useRemoteDataSource` to perform CRUD operations against a remote API:

{% meta height:460 %}
{% embed_file datasource/remote/app.tsx preview %}
{% embed_file datasource/remote/main.tsx %}
{% endmeta %}

## Change Tracking

The KendoReact DataSource automatically [tracks changes](slug://change_tracking_datasource) to the dataset, including additions, updates, and deletions. This ensures that all modifications are captured and can be synchronized with the server.

### Tracking Changes

You can access the changes tracked by the DataSource using the following properties:

-   `dataSource.creates` for new items.
-   `dataSource.updates` for modified items.
-   `dataSource.deletes` for removed items.

```jsx
const newItems = dataSource.creates;
const modifiedItems = dataSource.updates;
const removedItems = dataSource.deletes;
```

## CRUD Operations

When integrating the Grid with the DataSource you can perform CRUD operations programmatically. These methods allow you to create, update, or delete items in the dataset.

### Creating a New Item

To add a new item to the dataset, use the `create` method of the DataSource:

```jsx
dataSource.create({
    data: { name: 'New Product', price: 99.99 }
});
```

### Updating an Item

To update an existing item in the dataset, use the `update` method of the DataSource:

```jsx
dataSource.update({
    data: { id: 1, name: 'Updated Product' },
    field: 'name'
});
```

### Deleting an Item

To remove an item from the dataset, use the `delete` method of the DataSource:

```jsx
dataSource.delete({
    data: { id: 1, name: 'Product to Delete' }
});
```

## Syncing Changes

When changes are made locally, they need to be sent to the server to ensure data consistency and availability across all users or systems. This process involves detecting local changes, preparing them for transmission, and sending them to the server via an API or other communication protocol, all of which are handled by the DataSource.

```jsx
// Sync all pending changes
await dataSource.sync();

// Discard all pending changes
dataSource.discard();
```

## Error Handling

When performing change operations, errors may occur due to network issues, server-side validation failures, or other unexpected conditions. The DataSource provides mechanisms to handle such errors by using the onError callback.

```jsx
const dataSource = useRemoteDataSource({
    transport: {
        update: {
            url: 'https://api.example.com/products',
            onError: (error) => {
                console.error('An error occurred during the update operation:', error);
                // Implement custom error handling logic here
            }
        }
    }
});
```

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [State Management]({% slug state_management_datasource %})
-   [Bulk Operations]({% slug bulk_operations_datasource %})
-   [API Reference of the DataSource]({% slug api_data-tools_usedatasource %})
