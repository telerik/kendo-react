---
title: Overview
page_title: 'React Server Components Overview'
description: 'Explore the capabilities and benefits of KendoReact Server Components, a modern UI library leveraging the React Server Components (RSC) architecture.'
components: ["general"]
slug: overview_server-components
position: 0
---

# Overview

KendoReact Server Components represent a cutting-edge implementation of a UI Library which utilizes the [React Server Components (or RSC)](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components) application architecture.

They are designed to be used in RSC-compatible environments such as [Next.JS](https://nextjs.org/) with [app router](https://nextjs.org/docs/app) and are currently in an experimental phase.

The KendoReact Server Components are distributed through npm packages, and are available as [@progress/kendo-react-server-components](https://www.npmjs.com/package/@progress/kendo-react-server-components).

<blockquote type="warning">

The experimental KendoReact server components originally launched in early 2024 have been discontinued. Based on what we learned from this early experiment, we've decided to revise our approach. We're now working on adding server capabilities to our [React Data Grid](https://www.telerik.com/kendo-react-ui/components/grid) and can't wait to share it with you with the first Telerik and Kendo UI release of 2025. Visit the [KendoReact roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) to learn more.

</blockquote>

## Data Fetching

One of the standout features of the KendoReact Server Components is their robust data-fetching capabilities. These components allow the initiation of data-fetching before rendering, dynamically updating the DOM upon data availability, and seamlessly transitioning to a predefined loading state by utilizing [`React.Suspense`](https://react.dev/reference/react/Fallback).

The server-side execution enables you to fetch the data from various sources, including databases, REST APIs, or a GraphQL endpoint.

```jsx
import { Grid } from '@progress/kendo-react-server-components';

return (
    <Grid
        // ...
        data={sql`SELECT * FROM products ORDER BY product_id`}
    />
);
```

## Bundle size

Unlike regular React components that execute on both server and client (hydration), server components operate exclusively on the server. This results in a significant reduction in the total bundle size of your application.

By using the KendoReact Server Components only the essential JavaScript is shipped to the client, which is only the code needed to hydrate the component and add interactivity. The architecture retains most of the virtual DOM on the client side, allowing you to execute expensive operations solely on the server, without the need to ship your code to the client.

## Server Actions

RSC introduce [`server actions`](https://react.dev/reference/react/use-server), and KendoReact Server Components seamlessly integrate with them. Server-actions compatibility allows passing actions to the component's callbacks, such as `onStateChange` or `onDataChange`, empowering you to execute custom logic on the server.

In other words, `'use server'` marks server-side functions that can be called from client-side:

```jsx
import { Grid } from '@progress/kendo-react-server-components';

const handleDataChange = async (data, action) => {
    'use server';
    // ...
    await sql`UPDATE products SET product_name = 'New Name' WHERE product_id = ${action.data.product_id}`;
};

return (
    <Grid
        // ...
        data={sql`SELECT * FROM products ORDER BY product_id`.then((res) => res.rows)}
        onDataChange={handleDataChange}
    />
);
```
