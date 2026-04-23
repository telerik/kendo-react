---
title: Getting Started
description: 'Get started with the React Indicators package by KendoReact and learn how to use the free React components.'
slug: get_started_indicators
position: 1
---

# Getting Started with the KendoReact Indicators

This guide provides essential information about using the KendoReact Indicators package&mdash;you will learn how to install the package and add a free Indicator component to your project. The steps demonstrated in this guide are applicable to all KendoReact Indicators.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will have a free React [Loader](slug://overview_loader) up and running.

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

## Install the Components

```sh
npm i @progress/kendo-react-indicators
```

Run these commands in the root of your React project to install the KendoReact Indicators package and its [dependencies](#kendoreact-indicators-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Components

```tsx
import { Loader } from '@progress/kendo-react-indicators';
import '@progress/kendo-theme-default/dist/all.css';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Indicators components are identical.

## Use the Components

1. After installing the Indicators package and importing the components, add the Loader tag to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    <Loader />
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Loader component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

Additionally, the Indicators provide built-in appearance properties which let you control the size of the component. Try to play around with the [appearance](slug://appearance_loader) of your Loader.

```tsx
<Loader size="large" />
```

## Next Steps

Now try to add another component from the Indicators package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the Indicators components are identical for all components in the package.

The Indicators package provides the following components:

-   [Badge](slug://overview_badge)
-   [Loader](slug://overview_loader)
-   [Skeleton](slug://overview_skeleton)

## KendoReact Indicators APIs

[Indicators API](slug://api_indicators)

## KendoReact Indicators Dependencies

The Indicators package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*               | Contains the functionality necessary to define React components.                                            |
| react-dom                    | Contains the React renderer for the web.                                                                    |
| @progress/kendo-licensing    | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |

## Suggested Links

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
