---
title: Getting Started
description: 'Get started with the KendoReact Ripple package and learn how to use the Ripple component in React projects.'
components: ['ripple']
slug: get_started_ripple
position: 1
---

# Getting Started with the KendoReact Ripple

This guide provides essential information about using the KendoReact Ripple package&mdash;you will learn how to install the Ripple package, add a Ripple component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:150 %}
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
npm i @progress/kendo-react-ripple
```

## Importing the Component

After installing the package, import the Ripple component in the React App.

In the `src/App.js` file of your React project, import the `Ripple` component from the Ripple package.

```jsx-no-run
// ES2015 module syntax
import { Ripple } from "@progress/kendo-ripple";
```

```jsx-no-run
// CommonJS format
const { Ripple } = require('@progress/kendo-react-ripple');
```

## Using the Component

1. Add a button element on the page. You will add a ripple effect over it.

    ```jsx
    import { Button } from '@progress/kendo-react-buttons';
    ```

    ```jsx
    <Button className="mt-3 mb-1">Click Me</Button>
    ```

1. Wrap the button element with the `Ripple` component. That will add the effect on click.

    ```jsx
    <Ripple>
        <Button className="mt-3 mb-1">Click Me</Button>
    </Ripple>
    ```

1. To style the Ripple, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

1. Navigate to <http://localhost:3000> to see the KendoReact Ripple component on the page.

## Activating Your License Key

**Important**: The KendoReact Ripple is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Ripple package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |

## Suggested Links

-   [API Reference of the Ripple]({% slug api_ripple_rippleprops %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
