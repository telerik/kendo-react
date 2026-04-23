---
title: Basics
description: 'Learn how to perform sorting, filtering, grouping, and paging operations with KendoReact DataSource hooks.'
components: ["filter", "pager"]
slug: data_operations_datasource
position: 10
---

# DataSource Data Operations

The KendoReact DataSource hooks provide built-in support for common data operations like sorting, filtering, grouping, and paging. These operations can be performed both on local and remote data.

-   Local data operations (using the [**useDataSource**](slug:api_data-tools_usedatasource) hook)
-   [Remote Data operations](slug://remote_data_datasource)
-   [Bulk Data Operations](slug://bulk_operations_datasource)

Here's a complete example demonstrating data operations:

{% meta height:690 %}
{% embed_file datasource/data-operations/app.tsx preview %}
{% embed_file datasource/data-operations/main.tsx %}
{% endmeta %}

## Sorting

Sort your data by one or multiple fields:

```jsx
const dataSource = useDataSource({
    data: products,
    sort: [
        { field: 'Category', dir: 'asc' },
        { field: 'Price', dir: 'desc' }
    ]
});
```

## Filtering

Apply simple or complex filters to your data:

```jsx
const dataSource = useDataSource({
    data: products,
    filter: {
        logic: 'and',
        filters: [
            { field: 'Category', operator: 'eq', value: 'Electronics' },
            { field: 'Price', operator: 'lte', value: 1000 }
        ]
    }
});
```

## Grouping

Group your data by one or more fields:

```jsx
const dataSource = useDataSource({
    data: products,
    group: [{ field: 'Category' }, { field: 'Supplier' }]
});
```

## Paging

Enable paging by setting the `take` property to specify the page size and `skip` to set the starting index:

```jsx
const dataSource = useDataSource({
    data: products,
    skip: 0, // Starting index
    take: 10 // Items per page
});
```

For dynamic page navigation:

```jsx
const [pageSize, setPageSize] = React.useState(10);
const [currentPage, setCurrentPage] = React.useState(1);

const dataSource = useDataSource({
    data: products,
    skip: (currentPage - 1) * pageSize,
    take: pageSize
});
```

Handle page size changes:

```jsx
const handlePageSizeChange = (newPageSize) => {
    dataSource.setDataState({
        skip: 0, // Reset to first page
        take: newPageSize
    });
};
```

## Combined Operations

You can also combine multiple operations including paging:

```jsx
const dataSource = useDataSource({
    data: products,
    skip: 0,
    take: 10,
    sort: [{ field: 'Price', dir: 'desc' }],
    filter: {
        logic: 'and',
        filters: [{ field: 'Category', operator: 'eq', value: 'Electronics' }]
    },
    group: [{ field: 'Supplier' }]
});
```

## Remote Operations

When working with remote data, specify which operations should be handled by the server:

```jsx
const dataSource = useRemoteDataSource({
    serverSorting: true,
    serverFiltering: true,
    serverGrouping: true,
    serverPaging: true,
    transport: {
        read: {
            url: 'https://api.example.com/products'
        }
    },
    skip: 0,
    take: 10
});
```

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [State Management]({% slug state_management_datasource %})
-   [Remote Data Operations]({% slug remote_data_datasource %})
-   [API Reference]({% slug api_data-tools %})
