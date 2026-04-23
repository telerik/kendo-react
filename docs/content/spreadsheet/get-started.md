---
title: Getting Started
description: 'Learn how to use the React Spreadsheet component by following a short tutorial - install the Spreadsheet package, import the component, add it to your app, and apply beautiful styles.'
components: ['spreadsheet']
slug: getstarted_spreadsheet
position: 10
---

# Getting Started with the KendoReact Spreadsheet

This guide provides essential information about using the KendoReact Spreadsheet package. You will learn how to install the Spreadsheet package, add a Spreadsheet component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:740 %}
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
npm i @progress/kendo-react-spreadsheet
```

## Importing the Component

After installing the package, import the Spreadsheet component in the React App.

In the `src/App.js` file of your React project, import the `Spreadsheet` component from the Spreadsheet package.

```jsx-no-run
// ES2015 module syntax
import { Spreadsheet } from '@progress/kendo-react-spreadsheet';
```

```jsx-no-run
// CommonJS format
const { Spreadsheet } = require('@progress/kendo-react-spreadsheet');
```

## Using the Component

1. After installing the Spreadsheet package and importing the components, add the Spreadsheet tag to the App component file of your React project (for example, `src/App.js`).

2. Load the JSON sheets data in the `defaultProps` of the Spreadsheet in order to display initial Excel document in the component.

    ```jsx-no-run
     function SpreadsheetContainer() {
       return (
          <Spreadsheet
             style={{
                width: '100%',
                height: 700
             }}
             defaultProps={{
                sheets: data
             }}
          />
       );
     }
    ```

3. To style the Spreadsheet, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

5. Navigate to <http://localhost:3000> to see the KendoReact Spreadsheet component on the page.

## Activating Your License Key

**Important**: The KendoReact Spreadsheet is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Spreadsheet package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                       | Description                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                     | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                          | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-drawing            | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-licensing          | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-animation    | Enables the animations in the KendoReact components.                                                                                                                        |
| @progress/kendo-react-buttons      | Contains the KendoReact Buttons components.                                                                                                                                 |
| @progress/kendo-react-dropdowns    | Contains the KendoReact Dropdowns, which allows users to choose from a predefined list of options.                                                                          |
| @progress/kendo-react-form         | Contains the KendoReact Form components.                                                                                                                                    |
| @progress/kendo-react-inputs       | Contains the KendoReact Inputs components.                                                                                                                                  |
| @progress/kendo-react-intl         | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-layout       | Contains the KendoReact Layout components.                                                                                                                                  |
| @progress/kendo-react-popup        | Contains the KendoReact Popup component.                                                                                                                                    |
| @progress/kendo-react-progressbars | Contains the KendoReact ProgressBar component.                                                                                                                              |
| @progress/kendo-react-sortable     | Contains the KendoReact Sortable component.                                                                                                                                 |
| @progress/kendo-react-spreadsheet  | Contains the KendoReact Spreadsheet component.                                                                                                                              |
| @progress/kendo-react-treeview     | Contains the KendoReact Treeview components.                                                                                                                                |
| @progress/kendo-react-upload       | Contains the KendoReact Upload components.                                                                                                                                  |
| @progress/kendo-svg-icons          | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [API Reference of the Spreadsheet]({% slug api_spreadsheet %})
-   [Globalization]({% slug globalization_spreadsheet %})
-   [Toolbar]({% slug toolbar_spreadsheet %})
-   [Events]({% slug events_spreadsheet %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the GitHub Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
