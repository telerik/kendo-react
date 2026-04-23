---
title: Change Tracking
description: 'Learn how to track and manage data changes with KendoReact DataSource hooks.'
components: ["filter", "pager"]
slug: change_tracking_datasource
position: 80
---

# DataSource Change Tracking

The [`useRemoteDataSource`](slug:api_data-tools_useremotedatasource) and [`useODataDataSource`](slug:api_data-tools_useodatadatasource) hooks of the KendoReact DataSource provide built-in change tracking capabilities that help you monitor and manage modifications to your data.

## Basic Change Tracking

The DataSource automatically tracks changes to items in your dataset, ensuring that additions, updates, and deletions are accurately captured.

```jsx
const dataSource = useRemoteDataSource({
    transport: {
        read: {
            url: 'https://api.example.com/products'
        },
        update: {
            url: 'https://api.example.com/products/update'
        }
    }
});

// Check if there are any pending changes
const hasPendingChanges = dataSource.dirty.size > 0;
```

## Tracking Different Types of Changes

The DataSource tracks three types of changes:

The `DataSource` is responsible for monitoring and managing changes to data within the application. It tracks three different types of changes:

1. **Additions**: New data entries that are introduced into the system.
2. **Modifications**: Updates made to existing data entries.
3. **Deletions**: Removal of data entries from the system.

```jsx
// Track created items
const newItems = dataSource.creates;

// Track updated items
const modifiedItems = dataSource.updates;

// Track deleted items
const removedItems = dataSource.deletes;
```

## Handling Changes

You can also manage the data changes programmatically:

```jsx
// Update an item
dataSource.update({
    data: { id: 1, name: 'Updated Product' },
    field: 'name'
});

// Create a new item
dataSource.create({
    data: { name: 'New Product', price: 99.99 }
});

// Delete an item
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

When performing change operations, errors may occur due to network issues, server-side validation failures, or other unexpected conditions. The DataSource provides mechanisms to handle such errors by using the `onError` callback.

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

```jsx
const dataSource = useRemoteDataSource({
    transport: {
        update: {
            url: 'https://api.example.com/products',
            onError: (error) => {
                console.error('Update failed:', error);
                // Handle the error appropriately
            }
        }
    }
});
```

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [State Management]({% slug state_management_datasource %})
-   [Bulk Operations]({% slug bulk_operations_datasource %})
-   [API Reference]({% slug api_data-tools %})
