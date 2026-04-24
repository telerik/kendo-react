---
title: Getting Started
description: 'Get an overview of the features the KendoReact PDF Generator delivers and use the component in React projects.'
components: ['pdfprocessing']
slug: getstarted_pdf
position: 1
---

# Getting Started with the KendoReact PDF Generator

This guide provides essential information about using the KendoReact PDF Generator package. You will learn how to install the PDF Generator package, add a PDF Generator component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:510 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% embed_file get-started/func/products.json %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-pdf
```

## Importing the Component

After installing the package, import the PDF Generator component in the React App.

In the `src/App.js` file of your React project, import the `PDFExport` and `savePDF` components from the PDF package. The `PDFExport` and `savePDF` provide the export and save functionality.

```jsx-no-run
 // ES2015 module syntax
 import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
```

```jsx-no-run
// CommonJS format
const { PDFExport, savePDF } = require('@progress/kendo-react-pdf');
```

## Using the Component

1. Create a ref to the component that will later be used for the export

    ```jsx
    const pdfExportComponent = React.useRef(null);
    ```

2. Create two functions that will handle the export, the first one will export with a method, and the second one will handle the component export.

    ```jsx
    const exportPDFWithMethod = () => {
        let element = document.querySelector('.k-grid') || document.body;
        savePDF(element, {
            paperSize: 'A4'
        });
    };
    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };
    ```

3. Wrap the PDFExport component around the component that you wish to export.

    ```jsx
    <PDFExport ref={pdfExportComponent} paperSize="A4">
        <Grid
            style={{
                maxHeight: '400px'
            }}
            data={products}
        >
            <Column field="ProductID" title="ID" width="40px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" width="80px" />
            <Column field="UnitsInStock" title="In stock" width="80px" />
        </Grid>
    </PDFExport>
    ```

4. To style the PDF Export, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    4.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    4.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

5. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

6. Navigate to <http://localhost:3000> to see the KendoReact PDF Generator component on the page.

## Activating Your License Key

**Important**: The KendoReact PDF Processing is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The PDF Generator package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |
| @progress/kendo-drawing   | Contains the KendoReact Drawing components.                      |

## Suggested Links

-   [API Reference of the PDF Generator]({% slug api_pdf %})
-   [Image Resolution]({% slug embeddedimages_pdf %})
-   [Hyperlinks]({% slug hyperlinks_pdf %})
-   [Hidden Content]({% slug hiddencontent_pdf %})
-   [Base64 Strings]({% slug base64_pdf %})
-   [Repeated Table Headers]({% slug recurrenttableheaders_pdf %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
