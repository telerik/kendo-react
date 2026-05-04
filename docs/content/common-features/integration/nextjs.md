---
title: Next.js
page_title: React Third-Party Libraries & Next.js - KendoReact
description: 'Use the KendoReact components inside Next.js projects.'
components: ['general']
slug: nextjs_integration
---

# Next.js

KendoReact enables you to add KendoReact components to Next.js projects and utilize server-side rendering.

## Installation

The following steps demonstrate how to add the KendoReact components to a Next.js project. For a complete step by step tutorial on how to start a project with KendoReact, including Next.js setup options and license activation guidance (no license needed if using KendoReact Free), refer to the [Getting Started with KendoReact](slug:getting_started) article.

1. Install and import the desired KendoReact components by using NPM or YARN.

    ```sh
    npm i @progress/kendo-react-grid @progress/kendo-data-query @progress/kendo-react-inputs @progress/kendo-react-intl @progress/kendo-react-dropdowns @progress/kendo-react-dateinputs
    ```

1. Install and import any of the following KendoReact themes that are available:

    - [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/)
    - [Material theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/material/)
    - [Bootstrap theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/bootstrap/)
    - [Fluent theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/fluent/)

    ```jsx
        npm i @progress/kendo-theme-default
    ```

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

If you are using the `app` directory for routing, you can import the theme in the main `layout.js` file.

## Sample Project

For a complete sample project with Next.js, refer to [this example in our GitHub repository](https://github.com/telerik/kendo-react/tree/master/examples/coffee-warehouse-nextjs).

## Known Issues and Troubleshooting

> With [version 7.0.0](https://www.telerik.com/kendo-react-ui/components/changelogs/ui-for-react/) of the KendoReact suite, all components available in the suite are compatible with Next.js, and can be easily integrated into your projects. The issues listed below can be replicated when using the KendoReact components with a components' version released before v.7.0.0.

### Turbopack (Default Bundler)

Starting with Next.js 15, [Turbopack](https://turbo.build/pack) is the default bundler for development and production builds, replacing Webpack. KendoReact components are fully compatible with Turbopack and no additional bundler configuration is required.

> If you are migrating an existing Next.js project that previously used a custom `webpack` callback in `next.config.js` (for example, to add `node-loader`), you can safely remove that configuration. Turbopack does not support custom webpack callbacks, and they are no longer needed for KendoReact components.

### Legacy Issues (Fixed in v7.0.0)

The following issues can be replicated when using KendoReact components in a Next.js application if the version of the components is one released prior to v.7.0.0. The following errors are `NOT replicable` with KendoReact v7.0.0 or newer:

-   When running some components in development mode, they show warnings due to hydration errors for the following properties[Fixed in version 7.0.0]:
    -   id
    -   aria-owns
    -   aria-controls
    -   style

When not setting these properties to the KendoReact component, the internal `guid` function sets a random unique id for the id, aria-owns, and aria-controls properties when they are present for the component. However, the `guid` is currently setting different ids in the client and the server causing a hydration error. As a solution, you can set them as component props:

```jsx
<AppBar
  id="appBarID"
>
```

Another workaround would be to lazy load the component using [dynamic with the SSR option set to false](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr). This will dynamically load the package on the client side. Here is an example for the Grid:

```jsx
import { GridColumn, GridDetailRowProps, GridDataStateChangeEvent, GridExpandChangeEvent } from '@progress/kendo-react-grid';

const MyGrid: any = dynamic(
  () =>
    import("@progress/kendo-react-grid").then(
      (module) => module.Grid
    ) as any,
  { ssr: false }
);
```

-   The PivotGrid shows a `forwardRef render functions accepts only two parameters` warning[Fixed in version 7.0.0].

-   Some components are showing a `support for defaultProps will be removed` warning. We are currently in the process of removing the use of `defaultProps` from all our functional components[Fixed in version 7.0.0].

-   If you are still seeing the license activation console warning and watermark after activating the license, delete the `.next` file that is generated when running `npm run dev`. This is because it stores the page cache and does not update the license information after the license is activated. After you delete it and run `npm run dev` again, the file will be regenerated with the new licensing information.

## Suggested Links

-   [Next.js](https://nextjs.org/)
-   [Sample Project with Next.js Integration](https://github.com/telerik/kendo-react/tree/master/examples/coffee-warehouse-nextjs)
-   [Getting Started with KendoReact](slug:getting_started)
