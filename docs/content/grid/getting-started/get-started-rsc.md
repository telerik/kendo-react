---
title: Getting Started with RSC Mode
description: 'Get Started with React Data Grid Server Component'
components: ["datagrid"]
slug: getstarted_rsc_grid
position: 40
tier: premium
subject: RSC Mode of the Grid
---

# Get Started with KendoKendoReact Data Grid RSC Mode

The Server Mode of the KendoKendoReact Data Grid is distributed as part of the regular KendoKendoReact Data Grid package.

<CtaPanelOverview></CtaPanelOverview>

By the end of this tutorial, you will have gained a solid understanding of the fundamental concepts and configuration of the RSC Grid. Additionally, you will have built the following sample app:

{% meta height:550 %}
{% embed_file server-components/getting-started/app.tsx preview %}
{% endmeta %}

## Requirements

-   [NodeJS LTS](https://nodejs.org/en) (or a version >= 14). Use the `node -v` command to check your node versions.
-   [Next.js](https://nextjs.org/) version `14.0.0 or later`, with [app router](https://nextjs.org/docs/app).
-   [React 19](https://react.dev/blog/2024/12/05/react-19)

## Create a Next.js Project

For the purposes of this tutorial, start by creating an empty `Next.js` project, ensuring that the routing is enabled (you can use any other RSC-compatible environment, when available):

```bash
npx create-next-app my-test-rsc-grid-app --ts --app --no-src-dir
```

## Installation

Next, navigate to the root of your app and install the KendoKendoReact Data Grid package, along with its dependencies and the default Kendo theme packages:

```shell
npm i @progress/kendo-react-grid @progress/kendo-theme-default
```

## Import the Server Grid

To start using the KendoKendoReact Data Grid RSC mode, simply import the `Grid` component from the `@progress/kendo-react-grid` package in your Next.js application. Add the `import` in the existing `page.tsx` file:

```tsx
// page.tsx

import { Grid, GridColumn } from '@progress/kendo-react-grid';
```

## Import the Theme & Icons

To enhance the visual appearance of the Grid, make sure to import the Kendo [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/) and font icons in your layout file:

```tsx
// layout.tsx

import '@progress/kendo-theme-default/dist/all.css';
```

The Default theme is just one option in the [collection of four stunning Telerik and Kendo UI themes](slug:themesandstyles). Feel free to explore and experiment with any of these themes to find the perfect visual style for your project.

### Load and Show Data

```tsx
import products from './gd-products';

const App = () => {
    return <Grid data={products}></Grid>;
};

export default App;
```

1. Use the dataset from the demo source files at the top of the guide to create a `gd-products.json` file locally in your project.
2. Use an `import` statement to reference the data file.
3. Add a `<Grid>` definition.
4. Use the `data` prop to load the data in your Data Grid.

You now have a simple grid that shows all the data from `gd-products.json`.

## Use the Grid on the Server

Now, you can use the KendoReact RSC Mode of the Grid **without** explicitly including a `"use client";` directive.

```tsx
// pages.tsx

<Grid data={products}>
    <GridColumn field="ProductID" title="ID" />
    <GridColumn field="ProductName" title="Name" />
    <GridColumn field="Category.CategoryName" title="Category" />
    <GridColumn field="UnitPrice" title="Price" />
    <GridColumn field="UnitsInStock" title="In stock" />
    <GridColumn field="Discontinued" title="Discontinued" />
</Grid>
```

## Handle the Data State Changes

Then the Grid is used in RSC mode, you are able to (and have to) take control over the [Data state management updates](slug:data_operations_rsc_grid#server-side-state-management). This can be done by utilizing the async [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies) function available in the `next/headers` package and using the KendoReact Data Query [`process`]() helper method.

```tsx
// pages.tsx

import { process } from '@progress/kendo-data-query';
import { cookies } from 'next/headers';

const TAG = 'add-a-custom-unique-cookie-name-here';

const getState = () => {
    return JSON.parse(cookies().get(TAG)?.value);
};
const saveState = (state: any) => {
    cookies().set(TAG, JSON.stringify(state));
};
const onDataStateChange = async (event: ServerEvent<GridDataStateChangeEvent>) => {
    'use server';
    saveState(event.dataState);
};

const data = products;
const dataState = getState();
const dataResult = process(data, dataState);

<Grid data={process(data, dataState)} onDataStateChange={handleDataStateChange}>
    ...
</Grid>;
```

To learn more about how to configure the `Grid` component, refer to the [Grid Overview](slug:overview_grid) documentation.

## Use the RSC Grid on the Client

In case you would like to use the [default mode of the Grid](slug:overview_grid) functioning entirely on the client-side, you can include a `"use client";` directive on top of the page.

```tsx
// pages.tsx

'use client';
import { Grid } from '@progress/kendo-react-grid';

<Grid
    data={data}
    columns={[
        { field: 'ProductID', title: 'ID', width: 50 },
        { field: 'ProductName', title: 'Name' },
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'In stock' }
    ]}
/>;
```

## Additional Resources

-   [КendoKendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [КendoKendoReact Data Grid Overview](slug:overview_grid)
-   [КendoReact Components Styling](slug:themesandstyles)

## Suggested Links

-   [React Data Grid](slug://overview_grid)
-   [Getting Started with KendoReact](slug:getting_started)
-   [Data Operations in the RSC Mode of the Grid](slug:data_operations_rsc_grid)
-   [API Reference of the Grid]({% slug api_grid %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the GitHub Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
