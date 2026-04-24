---
title: Getting Started
description: 'Get started with the React Gauges package by KendoReact and learn how to use the components in a React project.'
slug: get_started_gauges
position: 1
---

# Getting Started with the KendoReact Gauges

This guide provides essential information about using the KendoReact Gauges package&mdash;you will learn how to install the package, add Gauges to your project, style the components, and activate your license. The steps demonstrated in this guide are applicable to all KendoReact Gauges.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:450 %}
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
npm i @progress/kendo-react-gauges
```

## Importing the Components

After installing the Gauges package, import the desired components in the React App. This guide shows how to add the [`ArcGauge`]({% slug overview_gauges %}).

In the App component file of your React project (for example, `src/App.js`), add the following code:

```jsx-no-run
// ES2015 module syntax
import { ArcGauge } from '@progress/kendo-react-gauges';
```

```jsx-no-run
// CommonJS format
const { ArcGauge } = require('@progress/kendo-react-gauges');
```

If your project requires more Gauges, you can import them too. The Gauges package provides the following components:

-   ArcGauge
-   CircularGauge
-   LinearGauge
-   RadialGauge

## Using the Components

1. After installing the Gauges package and importing the components, add the ArcGauge's tags to the App component file of your React project (for example, `src/App.js`).

    ```js
    const ArcGaugeComponent = () => {
        return <ArcGauge value={30} />;
    };
    ```

1. To style the ArcGauge, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

1. Navigate to <http://localhost:3000> to see the KendoReact ArcGauge component on the page.

Now try to add another component from the Gauges package yourself. The procedures for [installing](#toc-installing-the-components), [importing](#importing-the-components), and [using](#toc-using-the-components) the Gauges components are identical for all components in the package.

## Activating Your License Key

**Important**: The KendoReact Gauges are premium components that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the components will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Gauges package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name               | Description                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*             | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                  | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-react-intl | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-drawing    | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-licensing  | Contains the internal infrastructure related to licensing.                                                                                                                  |

## Suggested Links

-   [ArcGauge Overview]({% slug overview_arcgauge_gauges %})
-   [CircularGauge Overview]({% slug overview_circulargauge_gauges %})
-   [LinearGauge Overview]({% slug overview_lineargauge_gauges %})
-   [RadialGauge Overview]({% slug overview_radialgauge_gauges %})
-   [API Reference of the Gauges]({% slug api_gauges %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
