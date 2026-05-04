---
title: Overview
page_title: 'React Data Grid Overview - KendoReact Docs & Demos'
description: 'The React Data Grid provides everything from paging, sorting and filtering to editing, grouping and more.'
components: ['datagrid']
slug: overview_grid
position: 0
tier: mixed
hideCta: true
---

# React Data Grid Overview

The KendoReact Data Grid is a powerful component for creating responsive, accessible, and customizable applications that require the displaying and management of large datasets.

> tip **Jumpstart Your Grid** <br/><br/> With the Agentic UI Generator, you can build components and layouts using natural language prompts — directly inside AI-powered IDEs like VS Code and Cursor. Get intelligent assistance with component implementation, styling, layout design, and iconography powered by our documentation and APIs. <br/><br/>[Try the Agentic UI Generator](slug:agentic_ui_generator_getting_started)

<!-- <CtaPanelOverview title="Use This React @Subject for Free" message="You can use the @TestLink of the @Subject in production—no sign-up or license required. It’s part of KendoReact, an enterprise-grade UI library with 120+ @FreemiumShortLink and premium components. To test-drive premium @Subject functionality, such as inline editing, chart integration and React Server Components mode, @StartTrialLink.">
<span token="TestLink">

[free feature set](slug://getting_started_free_vs_premium#data-grid)

</span>
</CtaPanelOverview> -->

The following example demonstrates the React Data Grid component and its key features in action.

{% meta height:730 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file overview/func/custom-cells.tsx %}
{% embed_file overview/func/style.css %}
{% endmeta %}

## Overview

The KendoReact Data Grid is a native React component built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-grid](https://www.npmjs.com/package/@progress/kendo-react-grid)

The KendoReact Data Grid lets you build business applications that **manage and display large sets of data efficiently**. With it, you can structure and present your data in rows and columns, paired with a user-friendly interface for editing and analysis.

The built-in paging, sorting, and filtering enable you to meet your business requirements for **data navigation and analysis**. For more advanced data analysis, the KendoReact Data Grid component offers grouping and aggregation to categorize and summarize data.

The grid’s editing capabilities support in-cell and inline editing, allowing your end users to **modify data directly within the data table**. The options to export to PDF or Excel help with **reporting and data sharing**.

With the row and column virtualization, you can render only the visible data. This lets you **optimize performance and boost efficiency and responsiveness**.

## RSC Mode

KendoReact Data Grid supports React Server Components (RSC), providing a modern approach to rendering and handling data operations on the server-side. The RSC mode of the Grid leverages server-side execution to improve performance, reduce client-side JavaScript, and enhance application scalability.

The RSC mode of the Grid is implemented on top of the [React Server Components (or RSC)](https://react.dev/reference/rsc/server-components) architecture and enables server-side and hybrid rendering and operations. Unlike traditional client-side grids, the KendoKendoReact Data Grid in RSC mode minimizes bundle size by executing data operations on the server while keeping interactivity seamless on the client.

[Read mode about the KendoReact Data Grid Server Capabilities here...](slug:overview_rsc_grid)

## Key Features

The KendoReact Data Grid provides the following key features. Note that this is not an exhaustive list.

-   Data binding
    -   [Streaming data]({% slug bindingtostreamingdata_grid %})
    -   [Remote data]({% slug bindingtoremotedata_grid %})
-   Data analysis and review
    -   [Filtering]({% slug filtering_grid %})
    -   [Sorting]({% slug sorting_grid %})
    -   [Grouping]({% slug groupingbasics_grid %})
-   Data exporting
    -   [Exporting to PDF]({% slug overview_pdfexport_grid %})
    -   [Exporting to Excel]({% slug overview_excel-export_grid %})
-   Data visualization
    -   [Scrolling]({% slug scrollmodes_grid %})
    -   [Paging]({% slug paging_grid %})
-   Data editing
    -   [Inline]({% slug editing_inline_grid %}) and [in-cell]({% slug incellediting_grid %}) editing
    -   [Validation]({% slug editing_validation_grid %})
-   [Prompt-Controlled DataGrid](slug:smart_grid)
-   [Custom cells]({% slug cells_grid %})
-   Columns and rows
    -   [Locking](slug:locked_columns_grid)
    -   [Resizing]({% slug resizing_columns_grid %})
    -   Spanning [columns](slug:spanned_columns_grid) and [rows](slug:rowspan_grid)
    -   Reordering [columns](slug:reordering_columns_grid) and [rows](slug:rowreordering_grid)
    -   [Virtualization](slug:virtual_columns_grid)
    -   [Master-detail layout](slug:hierarchy_grid)
-   User interactivity
    -   [Selection]({% slug selection_grid %})
    -   [Context]({% slug context_menu_grid %}) and [column]({% slug column_menu_grid %}) menus
    -   [Clipboard]({% slug clipboard_grid %})
    -   [Keyboard navigation]({% slug keyboard_navigation_grid %})
-   Styling
    -   [Customizations and default themes]({% slug styling_grid %})
-   Additional features

    -   [Accessibility]({% slug overview_accessibility_grid %})
    -   [Globalization]({% slug globalization_grid %})

## Implementation

> Using the KendoReact Data Grid requires either a commercial license key or an active trial license key. Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to activate your license.

The KendoReact Data Grid is built natively for React, with no dependencies. It leverages key React concepts such as a component-based architecture, props and state management, and conditional rendering.

Every React DataGrid is defined as a set of `<GridColumn>`s. You have complete control over your React grid and you can extend or override its default behaviors and appearance via props, templates, and event handlers.

### Choosing Between the Native React Data Grid and its RSC mode

Choosing between the regular client-side KendoReact Data Grid and the server-side RSC Data Grid depends largely on the requirements and goals of your application.

You might find **the Native mode of KendoReact Data Grid** helpful for:

-   Highly interactive applications where most of the user interactions happen after the initial load.
-   Applications where the initial load can be optimized by code splitting and lazy loading.
-   Scenarios where SEO is less critical or handled through other means (for example, pre-rendering).

You might find the [**RSC mode of the Grid**](slug:overview_rsc_grid) helpful for:

-   Content-heavy applications where initial content needs to be quickly visible to the user.
-   Improving performance on slower devices and networks by offloading initial rendering to the server.
-   Applications where SEO is crucial since the content is available in the initial HTML.
-   Applications where privacy and security need to be handled on the server.
-   Applications that need bundle size optimization.

You can also consider a hybrid approach where you use server-side rendering for critical or sensitive content and logic, and client-side rendering for user interactions.

### React Data Grid with Other KendoReact Components

Combine multiple KendoReact components with the React grid in the same application to extend its data management and visualization capabilities:

-   Add custom filtering and editing with KendoReact [Inputs]({% slug overview_inputs %}), [Dropdowns]({% slug overview_dropdowns %}), and [Date Inputs]({% slug overview_dateinputs %}).
-   Create buttons within your grid header or grid rows using KendoReact [Buttons]({% slug overview_buttons %}).
-   Prompt users for confirmation or show additional information with KendoReact [Dialogs]({% slug overview_dialogs %}).
-   Show success and error messages with KendoReact [Notification]({% slug overview_notification %}).
-   Add custom forms with KendoReact [Form]({% slug overview_form %}).
-   Extend the Data Grid with appointment scheduling and timeline views using the KendoReact [Scheduler]({% slug overview_scheduler %}).
-   Represent hierarchical data with the KendoReact [TreeView]({% slug overview_treeview %}).
-   Visualize data trends next to your data with KendoReact [Charts]({% slug overview_charts %}).

## Frequently Asked Questions

### Is the KendoKendoReact Data Grid Free to Use

The KendoReact Data Grid component provides both free and premium features which require a commercial license key or an active trial license key.

You can start using the free feature of the Grid without any license or registration with Progress or Telerik.

### How to Upgrade to the Premium Grid

If you want to use any of the premium Grid features, you need a valid commercial license or an active trial license. A [free trial](https://www.telerik.com/try/kendo-react-ui) is available, if you want to try out the premium features before purchase.

## Suggested Links

-   [Getting Started with the KendoKendoReact Data Grid]({% slug getstarted_grid %})
-   [Getting Started with the RSC mode of KendoKendoReact Data Grid](slug:overview_rsc_grid)
-   [API Reference of the KendoReact Data Grid (Table)]({% slug api_grid_gridprops %})
-   [Control the Grid with natural language prompts](slug:smart_grid)
