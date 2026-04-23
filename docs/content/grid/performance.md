---
title: Performance
description: 'Get more information on how to improve the KendoKendoReact Data Grid performance when working with large data sets.'
components: ["datagrid"]
slug: performance_grid
position: 5
tag: new
---

# Performance

## Performance Architecture

The KendoKendoReact Data Grid leverages a sophisticated performance architecture built on modern React patterns and optimized rendering strategies:

-   **Intelligent DOM Management**: Minimizes DOM operations through strategic element reuse and efficient rendering cycles
-   **Memory Optimization**: Smart data handling that prevents memory leaks and reduces garbage collection overhead
-   **Render Optimization**: Advanced reconciliation algorithms that update only changed elements
-   **Event Handling Efficiency**: Optimized event delegation and handling for maximum responsiveness

## Core Performance Features

The KendoReact Data Grid offers several powerful performance optimization features:

-   **[Virtual Scrolling (row virtualization)]({% slug virtualscrolling_grid %})**&mdash;Only renders visible rows plus a buffer, enabling the Grid to handle millions of records with consistent performance and minimal memory usage (enabled by default for licensed users as of v11.0.0).
-   **[Column Virtualization]({% slug virtual_columns_grid %})**&mdash;Renders only visible columns dynamically during horizontal scrolling, significantly reducing DOM elements for datasets with many columns.
-   **[Paging]({% slug paging_grid %})**&mdash;Renders only data for the current page, ideal for analytical interfaces and SEO-friendly scenarios. It could be combined with virtual scrolling.
-   **[autoProcessData]({% slug api_grid_gridprops %}#toc-autoprocessdata)**&mdash;Built-in data processing that handles sorting, filtering, grouping, and paging automatically, reducing boilerplate code and improving maintainability.

> When testing the performance of the KendoReact Data Grid, make sure to use a production build. React is significantly faster when using a production build, providing a more accurate representation of end-user experience.

{% meta height:880 %}
{% embed_file performance/basic/func/app.tsx preview %}
{% embed_file performance/basic/func/main.tsx %}
{% endmeta %}

### Virtual Scrolling Performance

**[Virtual Scrolling]({% slug virtualscrolling_grid %})** is the primary performance optimization technique for handling large datasets in the KendoKendoReact Data Grid. This feature renders only the visible rows plus a buffer, enabling seamless handling of millions of records with constant memory usage.

**When to Use:**

-   Datasets with 1000+ rows
-   Applications requiring real-time data updates
-   Mobile applications with memory constraints
-   Any scenario where initial loading performance is critical

**Performance Benefits:**

-   **Constant Memory Usage**: Memory consumption stays consistent regardless of data size
-   **Fast Initial Rendering**: Only renders visible content, dramatically reducing initial load time
-   **Smooth Scrolling**: Maintains 60fps performance during scroll operations
-   **Reduced DOM Size**: Keeps DOM lightweight for better browser performance

This demo below showcases virtual scrolling (row virtualization), which renders only visible rows plus a buffer. This enables the Grid to handle millions of records with consistent performance and minimal memory usage.

### Combined Virtualization (Rows + Columns)

**[Column Virtualization]({% slug virtual_columns_grid %})** optimizes horizontal scrolling performance by rendering only visible columns, making it ideal for wide datasets with many columns.

**When to Use:**

-   Datasets with 50+ columns
-   Wide tables with varied column widths
-   Dashboard applications with many data points
-   Reporting interfaces with extensive column sets

**Performance Benefits:**

-   **Horizontal Scroll Performance**: Maintains smooth horizontal navigation regardless of column count
-   **Memory Efficiency**: Reduces memory footprint for wide datasets
-   **DOM Optimization**: Keeps horizontal DOM size manageable
-   **Combined with Virtual Scrolling**: Maximum performance for both rows and columns

### Paging Performance

**[Paging]({% slug paging_grid %})** provides predictable performance by rendering only the current page of data, making it ideal for analytical interfaces and SEO-friendly applications.

**When to Use:**

-   Analytics and reporting interfaces
-   SEO-friendly applications requiring static URLs
-   Applications with user-controlled data consumption
-   Interfaces where users expect traditional page-based navigation

**Performance Benefits:**

-   **Predictable Performance**: Consistent rendering time regardless of total data size
-   **Memory Efficiency**: Only current page data is held in memory
-   **User Control**: Users can adjust page size based on their needs

{% meta height:760 %}
{% embed_file performance/virtual/func/app.tsx preview %}
{% embed_file performance/virtual/func/main.tsx %}
{% endmeta %}

## Performance Best Practices

### Development Guidelines

1. **Always Use Production Builds**: React development builds include extensive debugging overhead. Production builds can be 3-6x faster and provide accurate performance measurements.

1. **Choose the Right Strategy**:

    - Use **Virtual Scrolling** for 1000+ rows with consistent row heights
    - Use **Column Virtualization** for 50+ columns or wide datasets
    - Use **Paging** for analytical interfaces
    - Combine strategies for maximum performance with large, wide datasets

1. **Optimize Cell Renderers**: Memoize custom cell components and avoid inline functions in render methods to prevent unnecessary re-renders.

1. **Manage State Efficiently**: Use appropriate state management patterns, implement proper memoization, and avoid unnecessary re-renders.

### Data Operations

-   Prefer `autoProcessData` for built-in sorting, filtering, grouping, and paging to minimize manual logic and improve maintainability.
-   Trigger sorting and other data operations only in response to user actions, not on every render.
-   Debounce remote data requests to reduce unnecessary API calls and improve responsiveness.
-   Update Grid state after editing is complete, rather than on every cell change, to minimize re-renders.
-   Define custom components (such as cells or rows) outside the main Grid component to prevent unnecessary re-renders of child components.

## Modern Optimization Features

### AutoProcessData

The `autoProcessData` feature eliminates the need for manual data processing by handling sorting, filtering, grouping, and paging automatically within the Grid component.

```jsx
<Grid
    data={data}
    autoProcessData={{
        filter: true,
        search: true,
        sort: true,
        group: true,
        page: true
    }}
    filterable={true}
    sortable={true}
    groupable={true}
    pageable={true}
/>
```

This approach reduces boilerplate code, improves maintainability, and ensures optimal performance through built-in optimizations.

### React Server Components (RSC) Mode

For Next.js applications, the Grid's RSC mode provides significant performance benefits:

-   **Server-side data processing** - Offloads expensive operations from the client
-   **Reduced bundle size** - Ships only essential JavaScript to the client
-   **Improved initial load times** - Faster time-to-interactive and first contentful paint
-   **Better scalability** - More efficient handling of large datasets

Learn more about [Grid RSC Mode]({% slug overview_rsc_grid %}) and [RSC Performance Optimization]({% slug performance_rsc_grid %}).

## Performance Testing & Monitoring

**Testing Strategy:**

-   Start with small datasets (100 rows, 5 columns) to establish baseline
-   Gradually increase dataset size to identify performance thresholds
-   Test different optimization strategies (virtual scrolling vs paging)
-   Compare development vs production build performance
-   Test on target devices and browsers

**Key Performance Metrics:**

-   **Initial Render Time**: Time from mount to first paint
-   **Scroll Responsiveness**: Maintain 60fps during scroll operations
-   **Memory Consumption**: Monitor memory usage patterns and leaks
-   **Interaction Latency**: Response time for user interactions (sorting, filtering)
-   **Bundle Size Impact**: Measure JavaScript bundle size impact

**Performance Testing Tools:**

-   **React Profiler**: Built-in React [performance profiling](https://react.dev/reference/react/Profiler) with React 18+ concurrent features
-   **Chrome DevTools**: Comprehensive browser performance analysis
-   **Lighthouse**: Core Web Vitals and performance scoring
-   **Web Vitals Extension**: Real-time performance monitoring
-   **React DevTools Profiler**: Component-level performance insights

<!-- Performance is a story best told in numbers. That is why we have made a sample application that uses [React.Profiler](https://react.dev/reference/react/Profiler) to test the actual performance numbers of the KendoReact Data Grid. This sample application allows you to see how different features impact the performance.

You can download [the sample application from GitHub](https://github.com/telerik/kendo-react-grid-performance). -->

> We advise testing with a production build as well. That shows the real power of the KendoKendoReact Data Grid with up to 6 times improved performance compared to when testing with a development build.

<!-- To play with the demo and see how we built it, you may want to run it locally:

1. Clone or download the source code from GitHub.
1. Install the required dependencies using `npm install --save`.
1. Run the application using `npm start`.
1. To build it for production with the profiler active using the command `npm run build -- --profile`.
1. Then serve the create production build with `serve -s build`.
1. Observe the real performance results from the production build.
   };

``` -->

## Suggested Links

-   [Grid RSC Mode]({% slug overview_rsc_grid %})
-   [RSC Performance Optimization]({% slug performance_rsc_grid %})
-   [Virtual Scrolling]({% slug virtualscrolling_grid %})
-   [Column Virtualization]({% slug virtual_columns_grid %})
-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridToolbar]({% slug api_grid_gridtoolbar %})
-   [API Index of the Grid]({% slug api_grid %})
