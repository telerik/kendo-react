---
title: Getting Started
description: 'Get started with the KendoReact Sortable package and learn how to use the Sortable component in React projects.'
components: ['sortable']
slug: get_started_sortable
position: 1
---

# Getting Started with the KendoReact Sortable

This guide provides essential information about using the KendoReact Sortable package&mdash;you will learn how to install the Sortable package, add a Sortable component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:300 %}
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
npm i @progress/kendo-react-sortable
```

## Importing the Component

After installing the package, import the Sortable component in the React App.

In the `src/App.js` file of your React project, import the `Sortable` component from the Sortable package.

```jsx-no-run
// ES2015 module syntax
import { Sortable } from "@progress/kendo-react-sortable";
```

```jsx-no-run
// CommonJS format
const { Sortable } = require('@progress/kendo-react-sortable');
```

## Using the Component

1. Create a state variable for the sortable items.

    ```jsx
    const [data, setData] = React.useState([
        {
            id: 1,
            text: 'item1'
        },
        {
            id: 2,
            text: 'item2'
        },
        {
            id: 3,
            text: 'item3'
        }
    ]);
    ```

1. Create a component that you will use for each of the items in the Sortable.

    ```jsx
    const SortableItemUI = (props) => {
        const { attributes, dataItem, forwardRef, isActive, style } = props;

        return (
            <div ref={forwardRef} {...attributes} style={{ ...getBaseItemStyle(isActive), ...style }}>
                {dataItem.text}
            </div>
        );
    };
    ```

1. Add styles for the item based on its `isActive` status.

    ```jsx
    const getBaseItemStyle = (isActive) => ({
        height: 70,
        lineHeight: '68px',
        fontSize: '16px',
        textAlign: 'center',
        outline: 'none',
        border: '1px solid',
        cursor: 'move',
        display: 'block',
        width: 200,
        background: isActive ? '#27aceb' : '#bfe7f9',
        color: isActive ? '#fff' : '#1494d0',
        borderColor: isActive ? '#27aceb' : '#fff'
    });
    ```

1. Handle the [onDragOver]({% slug api_sortable_sortableondragoverevent %})) event of the Sortable. Use that event to get the new order of the item after sorting.

    ```jsx
    const onDragOver = (event) => {
        setData(event.newState);
    };
    ```

1. To style the Sortable, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    5.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    5.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Sortable component on the page.

## Activating Your License Key

**Important**: The KendoReact Sortable is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Sortable package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |

## Suggested Links

-   [Items]({% slug items_sortable %})
-   [Nesting item elements]({% slug nesting_sortable %})
-   [Globalization]({% slug globalization_sortable %})
-   [Keyboard navigation]({% slug keyboard_navigation_sortable %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
