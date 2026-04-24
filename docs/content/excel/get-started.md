---
title: Getting Started
description: 'Get started with the KendoReact Excel Export package by Kendo UI and learn more about how to use the Excel Export component in React projects.'
components: ['excelexport']
slug: getstarted_excelexport
position: 1
---

# Getting Started with the KendoReact Excel Export

This guide provides essential information about using the KendoReact Excel Export package and ExcelExport component&mdash;you will learn how to install the Excel Export package, add a ExcelExport component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:100 %}
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
npm i @progress/kendo-react-excel-export
```

## Importing the Component

After installing the package, import the ExcelExport component in the React App.

In the `src/App.js` file of your React project, import the `ExcelExport` component from the Excel Export package.

```jsx-no-run
// ES2015 module syntax
import { ExcelExport } from '@progress/kendo-react-excel-export';
```

```jsx-no-run
// CommonJS format
const { ExcelExport } = require('@progress/kendo-react-excel-export');
```

## Using the Component

1. Import the `products` data in the `src/App.js` file.

    ```jsx
    import products from './products.json';
    ```

1. Add the ExcelExport component to the page.

    ```jsx
    <ExcelExport data={products} fileName="Products.xlsx" ref={_exporter}>
        <ExcelExportColumn field="ProductID" title="Product ID" locked={true} width={200} />
        <ExcelExportColumn field="ProductName" title="Product Name" width={350} />
        <ExcelExportColumn field="UnitsOnOrder" title="Units on Order" />
        <ExcelExportColumn field="UnitsInStock" title="Units in Stock" />
    </ExcelExport>
    ```

1. Add a button in the App component that will export the data to Excel.

    ```jsx
    import { Button } form '@progress/kendo-react-buttons'
    ```

    ```jsx
    <Button onClick={exportExcel}>Export to Excel</Button>
    ```

1. Handle the button's onClick event and set it to export the data by using the ExcelExport `save` method.

    ```jsx
    const _exporter = React.createRef<ExcelExport>();

    const exportExcel = () => {
        if (_exporter.current) {
        _exporter.current.save();
        }
    };
    ```

1. To style the KendoReact components, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    2.1. Install the Default theme package.

```sh
npm i @progress/kendo-theme-default
```

2.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

```jsx
import '@progress/kendo-theme-default/dist/all.css';
```

1. Build and run the application by typing the following command in the root folder of your project:

```sh
npm start
```

1. Navigate to <http://localhost:3000> to see the KendoReact ExcelExport component on the page.

## Activating Your License Key

**Important**: The KendoReact Excel Export is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Excel Export package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |

## Suggested Links

-   [Configuration of exported columns]({% slug columns_excelexport %})
-   [Customization of exported cells]({% slug cells_excelexport %})
-   [Customization of the workbook]({% slug workbook_excelexport %})
-   [Filtering]({% slug filtering_excelexport %})
-   [Saving files on the server]({% slug filesaving_excelexport %})
-   [Right-to-left support]({% slug rtl_excelexport %})
-   [Add Loading]({% slug loading_excelexport %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
