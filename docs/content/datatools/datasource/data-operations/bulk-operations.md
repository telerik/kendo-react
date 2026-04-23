---
title: Bulk Operations
description: 'Learn how to accumulate and submit multiple changes at once with KendoReact DataSource hooks.'
components: ["filter", "pager"]
slug: bulk_operations_datasource
position: 30
---

# DataSource Bulk Operations

The [`useRemoteDataSource`](slug:api_data-tools_useremotedatasource) and [`useODataDataSource`](slug:api_data-tools_useodatadatasource) hooks of the KendoReact DataSource support bulk operations, allowing you to accumulate multiple changes and submit them to the server in a single request.

## Accumulating Changes

By default, any changes made to the data are accumulated and stored locally. These changes remain pending until you explicitly submit them to the server.

```jsx
// Make multiple changes
dataSource.update({
    data: { id: 1, name: 'Updated Product 1' }
});

dataSource.update({
    data: { id: 2, price: 29.99 }
});

dataSource.create({
    data: { name: 'New Product', price: 99.99 }
});

dataSource.delete({
    data: { id: 3 }
});

// Changes are tracked but not sent to the server yet
console.log('Pending creates:', dataSource.creates.size);
console.log('Pending updates:', dataSource.updates.size);
console.log('Pending deletes:', dataSource.deletes.size);
```

## Submitting Changes

Once you are ready with the data editing, you can submit all pending changes in a single request:

```jsx
try {
    await dataSource.sync();
    console.log('Operation successful');
} catch (error) {
    console.error('Operation failed:', error);
}
```

## Handling Responses

Performing bulk operations allows you to handle the server's response appropriately. The `onSuccess` and `onError` callbacks allow you to manage the outcome of the operation:

```jsx
const dataSource = useRemoteDataSource({
    bulk: true,
    transport: {
        submit: {
            url: 'https://api.example.com/products/submit',
            onSuccess: (response) => {
                console.log('Operation successful:', response);
                // Handle successful operation
            },
            onError: (error) => {
                console.error('Operation failed:', error);
                // Handle operation failure
            }
        }
    }
});
```

## Discarding Changes

You can also discard all pending changes if needed:

```jsx
dataSource.discard();
```

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [Change Tracking]({% slug change_tracking_datasource %})
-   [Remote Data Operations]({% slug remote_data_datasource %})
-   [API Reference]({% slug api_data-tools %})
