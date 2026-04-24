---
title: Getting Started
description: 'Get started with the KendoReact DataSource hooks and learn how to implement data management in your React applications.'
slug: get_started_datasource
position: 20
---

# Getting Started with DataSource

This guide explains how to get started with the KendoReact DataSource hooks. You will learn how to install and use them for managing data operations in your React applications.

<CtaPanelOverview></CtaPanelOverview>

After completing this guide, you will have a React Grid running with the [`useDataSource`](slug://overview_datasource) hook.

{% meta height:470 %}
{% embed_file datasource/get-started/app.tsx preview %}
{% embed_file datasource/get-started/main.tsx preview %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the package

```sh
npm i @progress/kendo-react-data-tools
```

## Import the Hooks

After installing the Data Tools package, import the desired hooks in the React App. This guide shows how to add the [DataSource]({% slug overview_datasource %}).

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all data tools are identical.

```tsx
// ES2015 module syntax
import { useDataSource } from '@@progress/kendo-react-data-tools';
```

```tsx
// CommonJS format
const { useDataSource } = require('@progress/kendo-react-data-tools');
```

## Use the Component

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

### Working with Remote Data

For remote data operations, use the `useRemoteDataSource` hook:

```jsx
import { useRemoteDataSource } from '@progress/kendo-react-data-tools';

const result = useRemoteDataSource({
    transport: {
        read: {
            url: 'https://api.example.com/products'
        }
    }
});
```

### Working with OData

For OData services, use the `useODataDataSource` hook which automatically handles OData protocol specifics:

```jsx
import { useODataDataSource } from '@progress/kendo-react-data-tools';

const result = useODataDataSource({
    transport: {
        read: {
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Products'
        }
    }
});
```

## Next Steps

Now try to add another component from the Data tools package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the data tools components are identical for all components in the package.

The Data Tools package provides the following components:

-   [Filter](slug://overview_filter) (premium)
-   [Pager](slug://overview_pager)

# KendoReact Inputs APIs

[Data Tools API](slug://api_data-tools)

## Suggested Links

-   [DataSource Overview]({% slug overview_datasource %})
-   [API Reference of the DataTools]({% slug api_data-tools %})
-   [Remote Data Operations]({% slug remote_data_datasource %})
-   [OData Integration]({% slug remote_data_datasource %})
