---
title: Getting Started
description: 'Get an overview of the features the KendoReact PDF Viewer delivers and use the component in React projects.'
components: ['pdfviewer']
slug: getstarted_pdfviewer
position: 1
---

# Getting Started with the KendoReact PDF Viewer

This guide provides essential information about using the KendoReact PDF Viewer package. You will learn how to install the PDF Viewer package, add a [React PDF Viewer](slug:overview_pdfviewer) component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:610 %}
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
npm i @progress/kendo-react-pdf-viewer
```

> When using the component with Next.js 15 or later, [Turbopack](https://turbo.build/pack) is the default bundler and no additional configuration is needed. If you are using an older version of Next.js with Webpack, you may need to install the [canvas](https://www.npmjs.com/package/canvas) dependency.

## Importing the Component

After installing the package, import the PDF Viewer component in the React App.

In the `src/App.js` file of your React project, import the `PDFViewer` component from the PDF Viewer package.

```jsx-no-run
// ES2015 module syntax
import { PDFViewer } from '@progress/kendo-react-pdf-viewer';
```

```jsx-no-run
// CommonJS format
const { PDFViewer } = require('@progress/kendo-react-pdf-viewer');
```

## Using the Component

1. After installing the PDF Viewer package and importing the components, add the PDFViewer tag to the App component file of your React project (for example, `src/App.js`).

2. Set the `url` prop to a local PDF file in order to display initial PDF content in the viewer.

    ```jsx-no-run
    function PDFViewerContainer() {
        return (
          <>
            <PDFViewer url="sample.pdf"/>
          </>
        );
    }
    ```

3. To style the PDF Viewer, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

5. Navigate to <http://localhost:3000> to see the KendoReact PDF Viewer component on the page.

## Activating Your License Key

**Important**: The KendoReact PDF Viewer is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The PDF Viewer package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                     | Description                                                                                                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                   | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                        | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-date-math        | Contains the logic for working with date objects and timezones.                                                                                                             |
| @progress/kendo-data-query       | Applies sorting, filtering, grouping, and aggregate data operations.                                                                                                        |
| @progress/kendo-drawing          | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-file-saver       | The File Saver component enables you to save files on the client machine.                                                                                                   |
| @progress/kendo-react-animation  | Enables the animations in the KendoReact components.                                                                                                                        |
| @progress/kendo-react-buttons    | Contains the KendoReact Buttons components.                                                                                                                                 |
| @progress/kendo-react-data-tools | Delivers components required to manage and control the data in the application.                                                                                             |
| @progress/kendo-react-dateinputs | Contains the KendoReact Date Inputs components that are used to select the date and time for an appointment.                                                                |
| @progress/kendo-react-dropdowns  | Contains the KendoReact Dropdowns, which allows users to choose from a predefined list of options.                                                                          |
| @progress/kendo-react-indicators | Contains the KendoReact Indicator components.                                                                                                                               |
| @progress/kendo-react-inputs     | Contains the KendoReact Inputs components.                                                                                                                                  |
| @progress/kendo-react-intl       | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-treeview   | Contains the KendoReact Treeview components.                                                                                                                                |
| @progress/kendo-react-upload     | Contains the KendoReact Upload components.                                                                                                                                  |
| @progress/kendo-licensing        | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-svg-icons        | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [React PDF Viewer](slug://overview_pdfviewer)
-   [API Reference of the PDF Viewer]({% slug api_pdf-viewer_pdfviewer %})
-   [Globalization]({% slug globalization_pdfviewer %})
-   [Toolbar]({% slug toolbar_pdfviewer %})
-   [Events]({% slug events_pdfviewer %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
