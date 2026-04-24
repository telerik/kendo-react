---
title: Data Operations
page_title: 'Hybrid Data Operations in React Data Grid RSC Mode'
description: 'Explore the versatility of data operations with the RSC mode of KendoReact Data Grid to craft dynamic and responsive data-driven applications.'
components: ["datagrid"]
slug: data_operations_rsc_grid
position: 10
---

# RSC Mode Hybrid Data Operations Overview

One of the standout features of the RSC mode of the KendoKendoReact Data Grid is its built state management functionality. It can be used both on client and server mode of the Grid in order to keep track on the changes applied via actions like filtering, sorting, grouping, paging, etc.

{% meta height:630 %}
{% embed_file server-components/data-operations/app.tsx preview %}
{% endmeta %}

## Server-side State Management

To use enable the RSC mode of the Grid and manage the data operations in the server-side, you need to simply add the Grid to a page inside a Next.js app (or in another RSC-compatible framework) and **skip** the `"use client"` directive on top.

> In the RSC mode of the Grid, state must be managed in a controlled manner as all React Server Components (RSCs) are stateless and re-render on every request.

The most straight forward way to manage the state is to use the [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies) async function so you get access to the incoming HTTP request cookies within the RSC mode of the Grid. In this way you can manage both reading and writing of outgoing request cookies in [Server Actions](slug:server_actions_rsc_grid). If you want to process the data state and the data automatically, you can enable the `autoProcessData` property of the Grid.

```tsx
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { cookies } from 'next/headers';
import products from 'products.json';

const TAG = 'nextjs/app/grid/your-custom-grid-with-fetching-tag';

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

export default async function GridClientComponents() {
    const data = products;
    const dataState = getState();

    return (
        <Grid data={data} autoProcessData={true} onDataStateChange={handleDataStateChange} dataItemKey={'ProductID'}>
            <GridColumn field="ProductID" title="ID" />
            <GridColumn field="ProductName" title="Product Name" />
        </Grid>
    );
}
```

## Client-side State Management

Adding the `"use client"` directive on top of the page, at the other hand, will allow you to utilize the built-in state management of the Grid, use hooks, and make it function and render entirely on the client-side.

```tsx
'use client';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
```

## Next Steps

-   [Grid Server Actions](slug:server_actions_rsc_grid)

## Suggested Links

-   [КendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
