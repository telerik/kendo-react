---
title: Getting Started
description: 'Get started with the KendoReact Chart Wizard and learn more about how to use the component in standalone component in React projects.'
components: ['chartwizard']
slug: getstarted_chart-wizard
position: 20
---

# Getting Started with the KendoReact Chart Wizard

This guide provides the information you need to start using the KendoReact Chart Wizard&mdash;it includes instructions about the recommended installation approach, the code for running the project, and links to additional resources.

<div data-component="StartKendoReactFreeSection"></div>

After the completion of this guide, you will be able to achieve an end result as demonstrated in the following example.

{% meta height:750 %}
{% embed_file get-started/app.tsx preview %}
{% embed_file get-started/main.tsx %}
{% endmeta %}

## Install the Component

```sh
 npm i @progress/kendo-react-chart-wizard
```

## Importing the Component

After installing the package, import the ChartWizard component in the React App.

1. In the `src/App.js` file of your React project, import the `ChartWizard` and `ChartWizardDataRow` components to enable the entire feature set of the Chart Wizard:

```jsx-no-run
// ES2015 module syntax
 import {
    ChartWizard,
    ChartWizardDataRow
    } from '@progress/kendo-react-chart-wizard';
```

## Using the Component

1. After successfully installing the Chart Wizard package and importing its component, add the following code to the App component file of your React project (for example, `src/App.tsx`).

    ```jsx
    <ChartWizard data={chartWizardData} />
    ```

1. Bind the `data` property to an object array in the `App.tsx` file:

    ```ts
    public data: ChartWizardDataRow[] = [
        [
            { field: 'Product Name', value: 'Calzone' },
            { field: 'Quantity', value: 1 },
            { field: 'Price', value: 12.39 },
            { field: 'Tax', value: 2.48 },
            { field: 'Total', value: 14.87 }
        ],
        [
            { field: 'Product Name', value: 'Margarita' },
            { field: 'Quantity', value: 2 },
            { field: 'Price', value: 8.79 },
            { field: 'Tax', value: 3.52 },
            { field: 'Total', value: 21.1 }
        ],
        [
            { field: 'Product Name', value: 'Pollo Formaggio' },
            { field: 'Quantity', value: 1 },
            { field: 'Price', value: 13.99 },
            { field: 'Tax', value: 2.8 },
            { field: 'Total', value: 16.79 }
        ]
    ];
    ```

1. To style the PDF Viewer, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [four beautiful themes]({% slug themesandstyles %}) for KendoReact.

    3.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    3.2. Import the CSS file from the package in `src/App.tsx`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

## Activating Your License Key

**Important**: The KendoReact Chart Wizard is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Chart Wizard package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                    | Description                                                                                                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                  | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                       | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-react-buttons   | Contains the KendoReact Button components.                                                                                                                                  |
| @progress/kendo-react-charts    | Contains the KendoReact Chart components.                                                                                                                                   |
| @progress/kendo-react-common    | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components.                                                                 |
| @progress/kendo-react-dialogs   | Contains the KendoReact Dialog components.                                                                                                                                  |
| @progress/kendo-react-form      | Contains the KendoReact Form components.                                                                                                                                    |
| @progress/kendo-react-dropdowns | Contains the KendoReact Dropdowns, which allows users to choose from a predefined list of options.                                                                          |
| @progress/kendo-react-grid      | Contains the KendoReact Data Grid component.                                                                                                                                |
| @progress/kendo-react-inputs    | Contains the KendoReact Inputs, which the input of data, based on a specific and predefined format.                                                                         |
| @progress/kendo-react-intl      | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-labels    | Contains the KendoReact Label components.                                                                                                                                   |
| @progress/kendo-react-layout    | Contains the KendoReact Layout components.                                                                                                                                  |
| @progress/kendo-react-popup     | Contains the KendoReact Popup components.                                                                                                                                   |
| @progress/kendo-licensing       | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-svg-icons       | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [Binding the Chart Wizard to data](slug:databinding_chart-wizard)
-   [API Reference of the Chart Wizard](slug:api_chart-wizard)
