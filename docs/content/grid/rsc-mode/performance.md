---
title: Performance
page_title: 'Optimal performance of React Data Grid RSC Mode'
description: 'Configure the IOptimal performance of the RSC mode of KendoReact Data Grid'
components: ["datagrid"]
slug: performance_rsc_grid
subject: RSC Mode of the Grid
position: 75
---

# Optimizing KendoKendoReact Data Grid Performance in RSC Mode

KendoKendoReact Data Grid is a powerful component for building data-driven applications in React. However, as applications grow in complexity, optimizing performance becomes crucial—especially when using the Grid in React Server Components (RSC) mode with Next.js.

<CtaPanelOverview></CtaPanelOverview>

Next.js provides an experimental feature called [`optimizePackageImports`](https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports), which significantly enhances performance by loading only the necessary modules from large packages like KendoReact. This article explores how to configure this feature for optimal performance in your Next.js app.

## Understanding `optimizePackageImports`

When a package is added to optimizePackageImports, Next.js automatically tree-shakes unused imports, while still allowing you to import modules using named exports. This results in:

-   Faster development build times.
-   Smaller client-side JavaScript bundles.
-   Improved server-side rendering (SSR) and React Server Components (RSC) performance.

## Configuring KendoKendoReact Data Grid for Optimal Performance

To take advantage of `optimizePackageImports`, modify your Next.js configuration file (_next.config.js_) by adding all KendoReact packages (or at least the Grid dependencies):

```js
module.exports = {
    experimental: {
        optimizePackageImports: [
            '@progress/kendo-react-grid',
            '@progress/kendo-react-animation',
            '@progress/kendo-react-barcodes',
            '@progress/kendo-react-buttons',
            '@progress/kendo-react-chart-wizard',
            '@progress/kendo-react-charts',
            '@progress/kendo-react-common',
            '@progress/kendo-react-conversational-ui',
            '@progress/kendo-react-data-tools',
            '@progress/kendo-react-dateinputs',
            '@progress/kendo-react-dialogs',
            '@progress/kendo-react-dropdowns',
            '@progress/kendo-react-editor',
            '@progress/kendo-react-excel-export',
            '@progress/kendo-react-form',
            '@progress/kendo-react-gantt',
            '@progress/kendo-react-gauges',
            '@progress/kendo-react-grid',
            '@progress/kendo-react-indicators',
            '@progress/kendo-react-inputs',
            '@progress/kendo-react-intl',
            '@progress/kendo-react-labels',
            '@progress/kendo-react-layout',
            '@progress/kendo-react-listbox',
            '@progress/kendo-react-listview',
            '@progress/kendo-react-map',
            '@progress/kendo-react-notification',
            '@progress/kendo-react-orgchart',
            '@progress/kendo-react-pdf',
            '@progress/kendo-react-pdf-viewer',
            '@progress/kendo-react-pivotgrid',
            '@progress/kendo-react-popup',
            '@progress/kendo-react-progressbars',
            '@progress/kendo-react-ripple',
            '@progress/kendo-react-scheduler',
            '@progress/kendo-react-scrollview',
            '@progress/kendo-react-sortable',
            '@progress/kendo-react-spreadsheet',
            '@progress/kendo-react-taskboard',
            '@progress/kendo-react-tooltip',
            '@progress/kendo-react-treelist',
            '@progress/kendo-react-treeview',
            '@progress/kendo-react-upload'
        ]
    }
};
```

## Suggested Links

-   [KendoKendoReact Data Grid RSC Mode Overview](slug:overview_rsc_grid)
