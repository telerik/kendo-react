---
title: Getting Started
description: 'Get started with the React Charts package by KendoReact and learn more about how to use the Charts components in React projects.'
slug: getstarted_charts
position: 1
---

# Getting Started with the KendoReact Charts

This guide provides information about using the KendoReact Charts&mdash;you will learn how to install the package, add a Chart component to your project, style the component, and activate your license. The steps in this guide are applicable to all components in the Charts package.

<CtaPanelOverview></CtaPanelOverview>

After completing this guide, you will be able to reproduce the following example.

{% meta height:465 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% endmeta %}

## Install the Component

```sh
npm i @progress/kendo-react-charts
```

## Importing the Components

After installing the Charts package, import the desired components in the React App. In this guide, you will add [data series]({% slug series_chart_charts %}) to the [Chart]({% slug overview_chart_charts %}), and this requires you to import the [`ChartSeries`]({% slug api_charts_chartseries %}) collection and the [`ChartSeriesItem`]({% slug api_charts_chartseriesitem %}) configuration component.

In the App component file of your React project (for example, `src/App.js`), add the following code:

```jsx-no-run
// ES2015 module syntax
import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
```

If your project requires additional components from the Charts package, you can import them too. The Charts package exports the following components:

-   Chart
-   Sparkline
-   StockChart

## Using the Components

1. After installing the Charts package and importing the components, add the Chart tags to the App component file of your React project (for example, `src/App.js`).

    ```js
    // Provide some sample data for the Chart
    const data = [1, 2, 3, 5, 8, 13];

    const App = () => (
        <Chart>
            <ChartSeries>
                <ChartSeriesItem data={data} name="Fibonacci" />
            </ChartSeries>
        </Chart>
    );

    export default App;
    ```

1. To style the Chart, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [themes]({% slug themesandstyles %}) for KendoReact.

    2.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    2.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

Now try to add another component from the Charts package yourself. The procedures for [installing](#install-the-component), [importing](#importing-the-components), and [using](#using-the-components) the Charts are identical for all components in the package.

## Activating Your License Key

KendoReact is an enterprise-grade UI library with 120+ free and premium components. You can use the [50+ free components and features of KendoReact]({% slug free_components_introduction %}), even in production, no license required.

**Important**: The KendoReact Charts are premium components that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the components will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Charts package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                                          | Description                                                                                                                                                                 |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                                        | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                                             | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-charts                                |
| @progress/kendo-licensing                             | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-intl                            | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-layout                          | Contains the KendoReact Layout components.                                                                                                                                  |
| @progress/kendo-react-progressbars                    | Contains the KendoReact Progressbars components.                                                                                                                            |
| @progress/kendo-drawing                               | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-svg-icons                             | Contains the KendoReact SVG icons.                                                                                                                                          |
| An open-source library required for the Chart events. |

The following dependencies are automatically installed:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| @progress/kendo-react-popup  | Contains the KendoReact Popup component.                                                                    |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |
| prop-types                   | One of the common scripts used by the KendoReact components.                                                |

## Implementing React Charts: Video Tutorial

With this 10-minute video tutorial, you’ll learn how to implement a good-looking chart that is customized with animations, custom axes, tooltips, a title and chart legend with just a few lines of code. You’ll also see how to connect your React charts to a data set.

-   [React Charts Tutorial with the KendoReact Chart Library](https://www.telerik.com/videos/react-charts-tutorial-with-the-kendoreact-chart-library)

## Suggested Links

-   [API Reference of the Charts]({% slug api_charts %})
-   [Glossary]({% slug glossary_charts %})
