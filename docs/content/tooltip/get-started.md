---
title: Getting Started
description: 'Get started with the Tooltips package by KendoReact and learn how to use the Tooltips components in React projects.'
slug: getstarted_tooltips
position: 1
---

# Getting Started with the KendoReact Tooltips

This guide provides essential information about using the KendoReact Tooltips package&mdash;you will learn how to install the package and add a free Tooltip to your project, style the components, and activate your license. The steps demonstrated in this guide are applicable to all KendoReact Tooltips.

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
npm i @progress/kendo-react-tooltip @progress/kendo-theme-default
```

Run these commands in the root of your React project to install the KendoReact Tooltip package and its [dependencies](#kendoreact-tooltip-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Component

After installing the Tooltips npm package, import the desired components in the React App. This guide shows how to add the Tooltip.

In the App component file of your React project (for example, `src/App.tsx`), add the following code:

```tsx
// ES2015 module syntax
import { Tooltip } from '@progress/kendo-react-tooltip';
```

```tsx
// CommonJS format
const { Tooltip } = require('@progress/kendo-react-tooltip');
```

## Use the Component

1. After installing the Tooltips package and importing the components, add a Button and the Tooltip tags to the App component file of your React project (for example, `src/App.js`).

    ```tsx
    <Tooltip anchorElement="target" position="bottom">
        <Button title="Saves the current document">Save</Button>
    </Tooltip>
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Tooltip component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Tooltips package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the tooltip components are identical for all components in the package.

The Tooltips package provides the following free React components:

-   [Tooltip](slug://overview_filter)
-   [Popover](slug://overview_popover)

# KendoReact Tooltip APIs

[Tooltip API](slug://api_tooltip)

## KendoReact Tooltip Dependencies

The Tooltips package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*               | Contains the functionality necessary to define React components.                                            |
| react-dom                    | Contains the React renderer for the web.                                                                    |
| @progress/kendo-react-popup  | Contains positioning logic for the Popover component                                                        |
| @progress/kendo-licensing    | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-svg-icons    | Contains the KendoReact SVG icons.                                                                          |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
