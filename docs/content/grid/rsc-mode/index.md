---
title: Overview
page_title: 'React Data Grid RSC Mode Overview - KendoReact Docs & Demos'
description: 'Explore the capabilities and benefits of the RSC mode of the KendoKendoReact Data Grid leveraging the React Server Components (RSC) architecture.'
components: ["datagrid"]
slug: overview_rsc_grid
subject: RSC Mode of the Grid
position: 0
---

# Grid RSC Mode Overview

The RSC mode of the KendoKendoReact Data Grid is a modern, high-performance implementation built on top of the [React Server Components (or RSC)](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components) architecture allowing you to perform server and hybrid data operations.

<CtaPanelOverview></CtaPanelOverview>

The server-side mode of the Grid is part of the default `@progress/kendo-react-grid` package and is optimized for both client environments and RSC-compatible frameworks like [Next.JS](https://nextjs.org/) with [app router](https://nextjs.org/docs/app). A crucial part of the RSC Grid usage is avoiding the usage of `"use client"` directive on top of the page where the component is defined:

```jsx
import { Grid as ServerGrid } from '@progress/kendo-react-grid';
```

{% meta height:650 %}
{% embed_file server-components/overview/app.tsx preview %}
{% endmeta %}

## Hybrid Data Operations

To use enable the RSC mode of the Grid and utilize its hybrid data operations, you need to simply add it to a page inside a Next.js app (or in another RSC-compatible frameworks) and **skip** the `"use client"` directive on top. You should also use `'use server';` added in the beginning of each callback to instruct the Grid that it should perform on the server.

```jsx
import { Grid } from '@progress/kendo-react-grid';

const onDataStateChange = async (event: ServerEvent<GridDataStateChangeEvent>) => {
    'use server';

    saveState(event.dataState);
};

return <Grid data={dataResult} onDataStateChange={onDataStateChange} />;
```

## Bundle size

Unlike regular React components that execute on both server and client (hydration), the server mode of the Grid operates exclusively on the server. You can [optimize the performance](slug:performance_rsc_grid) of the RSC Mode Grid even more by specifying the loading of the modules that are actually used which his results in a significant reduction in the total bundle size of your application.

By using the RSC mode of the KendoKendoReact Data Grid only the essential JavaScript is shipped to the client, which is only the code needed to hydrate the component and add interactivity. The architecture retains most of the virtual DOM on the client side, allowing you to execute expensive operations solely on the server, without the need to ship your code to the client.

## Key Features

The KendoReact Server Data Grid offers an extensive and continuously expanding set of built-in features that isn't limited by the list in this section. What makes the `Grid` truly exceptional is its flexibility&mdash;it allows you to seamlessly blend both server-side and client-side operations, adapting to your application's unique requirements.

### Data Operations

Delve into the intricacies of executing basic data operations, including server-side `filtering`, `sorting`, `paging`, etc. Understand how these operations can be performed either on the client or the server.

[Read more about React Data Grid RSC Mode data operations...](slug:data_operations_rsc_grid)

### Server Actions

Explore how to handle various Grid events on the server, enabling seamless interaction tracking, user input handling, and custom logic execution.

[Read more about React Data Grid RSC Mode server actions...](slug:server_actions_rsc_grid)

### Server Templates

Learn the art of customization by providing unique views to the Grid. Explore the creation of custom `cells` and `rows` templates to your application's specific needs.

[Read more about React Data Grid RSC Mode templates...](slug:templates_rsc_grid)

### Selection

Learn how to implement row and cell selection in the Grid, allowing users to interact with data efficiently through multiple selection modes.

[Read more about React Data Grid RSC Mode selection...](slug:selection_rsc_grid)

### Filtering

Discover how to enable powerful filtering options in the Grid, allowing users to refine displayed data with intuitive filter controls.

[Read more about React Data Grid RSC Mode filtering...](slug:filtering_rsc_grid)

### Sorting

Learn how to enable dynamic sorting in the Grid, giving users the ability to organize data by columns in ascending or descending order.

[Read more about React Data Grid RSC Mode sorting...](slug:sorting_rsc_grid)

### Grouping

Learn how to enable data grouping in the Grid, allowing users to organize and visualize data more effectively by grouping rows based on specific columns.

[Read more about React Data Grid RSC Mode grouping...](slug:grouping_rsc_grid)

### Paging

Understand how to implement paging in the Grid to efficiently handle large datasets by loading and displaying data in manageable chunks.

[Read more about React Data Grid RSC Mode paging...](slug:paging_rsc_grid)

### Globalization

Configure internationalization and localization features in the RSC mode of the Grid to adapt it to different languages and cultures.

[Read more about React Data Grid RSC Mode globalization...](slug:globalization_rsc_grid)

## Next Steps

-   [Getting Started with KendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)

## Suggested Links

-   [Getting Started with КendoReact Data Grid RSC Mode](slug:getstarted_rsc_grid)
