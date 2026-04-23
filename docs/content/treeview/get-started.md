---
title: Getting Started
description: 'Get started with the KendoReact TreeView package and learn how to use the TreeView component in React projects.'
components: ['treeview']
slug: get_started_treeview
position: 1
---

# Getting Started with the KendoReact TreeView

This guide provides essential information about using the KendoReact TreeView package&mdash;you will learn how to install the TreeView package, add a TreeView component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:320 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-treeview
```

## Importing the Component

After installing the package, import the TreeView component in the React App.

In the `src/App.js` file of your React project, import the `TreeView` component from the TreeView package.

```jsx-no-run
// ES2015 module syntax
import { TreeView } from "@progress/kendo-react-treeview";
```

```jsx-no-run
// CommonJS format
const { TreeView } = require('@progress/kendo-react-treeview');
```

## Using the Component

1. Add the hierarchical data that you will display in the TreeView.

    ```jsx
    const tree = [
        {
            text: 'Furniture',
            expanded: true,
            items: [
                {
                    text: 'Tables & Chairs'
                },
                {
                    text: 'Sofas'
                },
                {
                    text: 'Occasional Furniture'
                }
            ]
        },
        {
            text: 'Decor',
            expanded: true,
            items: [
                {
                    text: 'Bed Linen'
                },
                {
                    text: 'Curtains & Blinds'
                },
                {
                    text: 'Carpets'
                }
            ]
        }
    ];
    ```

1. Render the TreeView with the defined data.

    ```jsx
    return <TreeView data={tree} />;
    ```

1. To style the TreeView, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    3.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    3.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact TreeView component on the page.

## Activating Your License Key

**Important**: The KendoReact TreeView is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The TreeView package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |
| @progress/kendo-svg-icons | Contains the KendoReact SVG icons.                               |

## Suggested Links

-   [Data binding]({% slug databinding_treeview %})
-   [Persisting the focus on data reload]({% slug datareload_treeview %})
-   [Expanding items]({% slug expansion_treeview %})
-   [Selection]({% slug selection_treeview %})
-   [Checkboxes]({% slug checkboxes_treeview %})
-   [Dragging and dropping]({% slug dragdrop_treeview %})
-   [Custom rendering of items]({% slug rendering_treeview %})
-   [Keyboard navigation]({% slug keyboard_navigation_treeview %})
-   [Accessibility]({% slug accessibility_treeview %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
