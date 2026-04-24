---
title: Using with Scripts
description: 'Add KendoReact components to a React project using scripts files.'
components: ["general"]
slug: scripts_installation
position: 70
category: getting-started
level: 0
hidden: true
---

# Using with Scripts

You can use KendoReact components in React applications by loading them directly from script files.

1. Follow the steps from the [described approach in the official React documentation](https://reactjs.org/docs/add-react-to-a-website.html).
1. Load the common scripts that are used by the KendoReact components including prop-types, kendo-drawing, and kendo-licensing.

    ```html
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.min.js"></script>
    <script src="https://unpkg.com/@progress/kendo-drawing/dist/cdn/js/kendo-drawing.js"></script>
    <script src="https://unpkg.com/@progress/kendo-licensing/dist/index.js"></script>
    ```

1. If using KendoReact premium components, add your Script License key (for versions 4.8.0 and newer). If working with [free KendoReact components and features](slug://free_components_introduction), you can skip this step.

    To download a license key for KendoReact, you must have either a commercial license or a trial license. If you are new to KendoReact, [sign up for a free trial](https://www.telerik.com/try/kendo-react-ui) first and then follow the steps below.

    1. Go to the [License Keys](https://www.telerik.com/account/your-licenses/license-keys) page in your Telerik account.

    1. On the Progress® KendoReact row, click the **Download key** link in the **LICENSE KEY** column.

> All KendoReact components before version 4.0.0 and all KendoReact Free components **DO NOT** require script license key.

1. Load the KendoReact script files.

    ```html
    <script src="https://unpkg.com/@progress/kendo-react-all/dist/cdn/js/kendo-react-all.js"></script>
    ```

1. Load one of the KendoReact themes.

    ```html
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material/dist/all.css"></link>
    ```

1. Retrieve the desired component from the `window` object.

    ```html
    const Calendar = window.KendoReactAll.Calendar
    ```

1. Render the component on the page.

    ```html
    <Calendar />
    ```

The following example demonstrates the implementation of the described approach with JSX.

<iframe src="https://runner.telerik.io/fullscreen/ujhcSFSS/3" frameBorder="0" width="100%" height="800"></iframe>

The following example demonstrates the implementation of the described approach when using the `React.CreateElement`.

<iframe src="https://runner.telerik.io/fullscreen/IcEFapEM/2" frameBorder="0" width="100%" height="800"></iframe>

## Suggested Links
-   [Free KendoReact Components and Features](https://www.telerik.com/kendo-react-ui/components/free)
-   [Get Started with KendoReact Free](slug://free_components_introduction)
