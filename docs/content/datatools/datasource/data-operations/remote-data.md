---
title: Remote Operations
description: 'Learn how to use KendoReact DataSource hooks with remote data sources.'
components: ["filter", "pager"]
slug: remote_data_datasource
position: 20
---

# Remote Data Operations

This guide demonstrates how to use the [`useRemoteDataSource`](slug:api_data-tools_useremotedatasource) and [`useODataDataSource`](slug:api_data-tools_useodatadatasource) hooks for working with remote data services.

## Remote Data Integration Example

Here is a complete example showing how to integrate a Grid with `useRemoteDataSource` to perform CRUD operations against a remote API:

{% meta height:460 %}
{% embed_file datasource/remote/func/app.tsx preview %}
{% embed_file datasource/remote/func/main.tsx %}
{% endmeta %}

## Using useRemoteDataSource

The `useRemoteDataSource` hook is designed for custom remote data services. It provides flexibility in configuring how data operations are handled on the server side.

```jsx
const result = useRemoteDataSource({
    transport: {
        read: {
            url: 'https://api.example.com/products',
            method: 'GET'
        },
        update: {
            url: 'https://api.example.com/products',
            method: 'PUT'
        },
        create: {
            url: 'https://api.example.com/products',
            method: 'POST'
        },
        delete: {
            url: 'https://api.example.com/products',
            method: 'DELETE'
        }
    },
    schema: {
        model: {
            id: 'ProductID'
        }
    }
});
```

### Dynamic URL Configuration

You can dynamically generate URLs based on the data item for update and delete operations:

```jsx
const result = useRemoteDataSource({
    transport: {
        // ...existing code...
        update: {
            url: (dataItem) => `https://api.example.com/products/${dataItem.id}`,
            method: 'PUT'
        },
        delete: {
            url: (dataItem) => `https://api.example.com/products/${dataItem.id}`,
            method: 'DELETE'
        }
    }
});
```

### Server-Side Data Operations

You can also control whether data operations such as filtering, sorting, paging, and grouping are processed on the server or the client side:

```jsx
const result = useRemoteDataSource({
    serverFiltering: true, // Server handles filtering
    serverSorting: true, // Server handles sorting
    serverPaging: true, // Server handles paging
    serverGrouping: true // Server handles grouping
    // ...transport config
});
```

### Data Schema Configuration

You can define how to extract specific data fields from the server's response using the `schema` configuration. This allows you to map the response structure to the DataSource's expected format:

```jsx
const result = useRemoteDataSource({
    // ...transport config
    schema: {
        data: 'items', // Extract data array from response
        total: 'totalCount', // Extract total count from response
        errors: 'errors', // Extract errors from response
        model: {
            id: 'ProductID' // Specify ID field
        }
    }
});
```

### CRUD Operations and Synchronization

when managing the data with the KendoReact DataSource, it allows you to handle and synchronize CRUD operations with full control. This means you can customize how data is fetched, updated, or deleted from your backend or API, ensuring seamless integration with your application's requirements.

```jsx
// Create a new item
dataSource.create({ data: { name: 'New Product', price: 10.99 } });

// Update an item
dataSource.update({ data: { id: 1, name: 'Updated Product' } });

// Delete an item
dataSource.delete({ data: { id: 1 } });

// Sync all changes with the server
await dataSource.sync();

// Sync just a specific item
await dataSource.syncItem({ data: item });

// Discard all pending changes
dataSource.discard();
```

## Using useODataDataSource

For OData services, the `useODataDataSource` hook provides automatic handling of OData protocol specifics:

```jsx
const result = useODataDataSource({
    transport: {
        read: {
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Products'
        }
    },
    schema: {
        model: {
            id: 'ProductID'
        }
    }
});
```

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [Getting Started with DataSource]({% slug get_started_datasource %})
-   [API Reference]({% slug api_data-tools %})
