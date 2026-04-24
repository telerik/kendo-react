---
title: Getting Started
description: 'Learn how to use the React OrgChart component by following a short tutorial - install the OrgChart package, import the component, add it to your app, and apply beautiful styles.'
components: ['orgchart']
slug: getstarted_orgchart
position: 1
---

# Getting Started with the KendoReact OrgChart

This guide provides essential information about using the KendoReact OrgChart package. You will learn how to install the OrgChart package, add an OrgChart component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:680 %}
{% embed_file getting-started/app.tsx preview %}
{% embed_file getting-started/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-orgchart
```

## Importing the Component

After installing the package, import the OrgChart component in the React App.

In the `src/App.js` file of your React project, import the `OrgChart` component from the OrgChart package.

```jsx-no-run
// ES2015 module syntax
import { OrgChart } from '@progress/kendo-react-orgchart';
```

```jsx-no-run
// CommonJS format
const { OrgChart } = require('@progress/kendo-react-orgchart');
```

## Using the Component

1. After installing the OrgChart package and importing the components, add the OrgChart tag to the App component file of your React project (for example, `src/App.js`).

2. Set the data to its [`data`]({% slug api_orgchart_orgchartprops %}#toc-data) property and set the title field using the [`titleField`]({% slug api_orgchart_orgchartprops %}#toc-titleField) prop.

    ```jsx-no-run
     const App = () => {
       return (
         <OrgChart
         data={data}
         titleField="text"
        />
       );
     }

    export default App;
    ```

3. To style the OrgChart, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for KendoReact.

    3.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    3.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

4. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

5. Navigate to <http://localhost:3000> to see the KendoReact OrgChart component on the page.

## Activating Your License Key

Using any of the UI components in the KendoReact library requires either a commercial license key or an active trial license key.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a KendoReact license file.

## Activating Your License Key

**Important**: The KendoReact OrgChart is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The PDF Viewer package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name               | Description                                                          |
| -------------------------- | -------------------------------------------------------------------- |
| react 18.0.0\*             | Contains the functionality necessary to define React components.     |
| react-dom                  | Contains the React renderer for the web.                             |
| @progress/kendo-data-query | Applies sorting, filtering, grouping, and aggregate data operations. |
| @progress/kendo-licensing  | Contains the internal infrastructure related to licensing.           |
| @progress/kendo-svg-icons  | Contains the KendoReact SVG icons.                                   |

## Suggested Links

-   [API Reference of the OrgChart]({% slug api_orgchart %})
-   [Data Binding]({% slug data_binding_orgchart %})
-   [Expanding and Collapsing]({% slug expand_collapse_orgchart %})
-   [Grouping]({% slug grouping_orgchart %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the GitHub Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
