---
title: Getting Started
description: 'Learn how to use the KendoReact PivotGrid in your next React project by following a detailed step-by-step tutorial.'
components: ['pivotgrid']
slug: getstarted_pivotgrid
position: 1
---

# Getting Started with the KendoReact PivotGrid

This guide provides essential information about using the KendoReact PivotGrid. You will learn how to install the package, add a PivotGrid component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:770 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% embed_file get-started/func/wide-column.tsx preview %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-pivotgrid
```

## Importing the Component

After installing the package, import the PivotGrid component in the React App.

In the `src/App.js` file of your React project, import the ` PivotGrid,` `PivotGridAxis` and `PivotGridContainer`, components from the PivotGrid package. The `PivotGridAxis` provides a single column, row, or measure Axis.

```jsx-no-run
// ES2015 module syntax
import {
  PivotGrid,
  PivotGridContainer,
  PivotGridAxis,
} from "@progress/kendo-react-pivotgrid";
```

```jsx-no-run
// CommonJS format
const { PivotGrid, PivotGridContainer, PivotGridAxis } = require('@progress/kendo-react-pivotgrid');
```

## Using the Component

1. Define the `defaultColumnAxes`, `defaultRowAxes` and the `defaultMeasureAxes`.

    ```jsx
    const defaultColumnAxes: PivotGridAxis[] = [
        { name: ['[Date].[Calendar]'], expand: true },
        { name: ['[Product].[Category]'] }
    ];
    const defaultRowAxes: PivotGridAxis[] = [{ name: ['[Geography].[City]'] }];
    const defaultMeasureAxes: PivotGridAxis[] = [{ name: ['[Measures].[Reseller Freight Cost]'] }];
    ```

1. Define the `catalog`, `cube`, and `url`.

    ```jsx
    const catalog = 'Adventure Works DW 2008R2';
    const cube = 'Adventure Works';
    const url = 'https://demos.telerik.com/service/v2/olap/msmdpump.dll';
    ```

1. Add the component's markup to the `src/App.js` file in your project and set the desired properties.

    ```jsx
    return (
        <PivotOLAPService
            catalog={catalog}
            cube={cube}
            url={url}
            defaultRowAxes={defaultRowAxes}
            defaultColumnAxes={defaultColumnAxes}
            defaultMeasureAxes={defaultMeasureAxes}
        >
            {({ pivotProps }) => (
                <PivotGridContainer>
                    <PivotGrid {...pivotProps} style={{ height: 700 }} column={WideColumn} />
                </PivotGridContainer>
            )}
        </PivotOLAPService>
    );
    ```

1. To style the PivotGrid, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    4.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    4.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact PivotGrid component on the page.

## Activating Your License Key

**Important**: The KendoReact PivotGrid is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The PivotGrid package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                     | Description                                                                                                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                   | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                        | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-data-query       | Contains the KendoReact data query helpers.                                                                                                                                 |
| @progress/kendo-react-intl       | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-buttons    | Contains the KendoReact Buttons components.                                                                                                                                 |
| @progress/kendo-react-treeview   | Contains the KendoReact Treeview components.                                                                                                                                |
| @progress/kendo-react-form       | Contains the KendoReact Form components.                                                                                                                                    |
| @progress/kendo-react-indicators | Contains the KendoReact Indicator components.                                                                                                                               |
| @progress/kendo-react-labels     | Contains the KendoReact Labels components.                                                                                                                                  |
| @progress/kendo-svg-icons        | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [API Reference of the PivotGrid]({% slug api_pivotgrid %})
-   [Configurator]({% slug configurator_pivotgrid %})
-   [Filtering]({% slug filtering_pivotgrid %})
-   [Sorting]({% slug sorting_pivotgrid %})
-   [FAQ]({% slug faq_pivotgrid %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
