---
title: State Management
description: 'Learn how to use state management capabilities in KendoReact DataSource hooks.'
components: ["filter", "pager"]
slug: state_management_datasource
position: 40
---

# DataSource State Management

The KendoReact DataSource hooks provide comprehensive state management capabilities for handling data operations in your React applications. This includes managing states for sorting, filtering, grouping, and paging operations.

## Built-in State Management

The DataSource hooks come with built-in state management that automatically handles:

-   Data operation states (sorting, filtering, grouping, paging)
-   Change tracking for data modifications
-   State synchronization between the data source and UI components

```jsx
const dataSource = useDataSource({
    data: products,
    sort: [{ field: 'ProductName', dir: 'asc' }],
    filter: {
        logic: 'and',
        filters: [{ field: 'UnitPrice', operator: 'gt', value: 20 }]
    },
    skip: 0,
    take: 10
});
```

Here's a complete example demonstrating built-in state management with persistence:

{% meta height:520 %}
{% embed_file datasource/state-management/built-in/app.tsx preview %}
{% endmeta %}

## Controlled State Management

For more fine-grained control, you can manage the state externally:

```jsx
const [sort, setSort] = React.useState([{ field: 'ProductName', dir: 'asc' }]);
const [filter, setFilter] = React.useState({
    logic: 'and',
    filters: [{ field: 'UnitPrice', operator: 'gt', value: 20 }]
});

const dataSource = useDataSource({
    data: products,
    sort,
    filter
});
```

Here's a complete example demonstrating controlled state management:

{% meta height:470 %}
{% embed_file datasource/state-management/controlled/app.tsx preview %}
{% endmeta %}

## State Persistence

The DataSource state can be persisted and restored:

```jsx
// Save state
localStorage.setItem('dataSourceState', JSON.stringify(dataSource.dataState));

// Restore state
const savedState = JSON.parse(localStorage.getItem('dataSourceState'));
dataSource.setDataState(savedState);
```

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [Data Operations]({% slug data_operations_datasource %})
-   [Remote Data Operations]({% slug remote_data_datasource %})
-   [API Reference]({% slug api_data-tools %})
