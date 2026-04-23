---
title: Getting Started
description: 'Get started with the React Progress Bars package by KendoReact and learn how to use the free React components.'
slug: get_started_progressbars
position: 1
---

# Getting Started with the KendoReact Progress Bars

This guide provides essential information about using the KendoReact Progress Bars package&mdash;you will learn how to install the package and add a free React Progress Bars component to your project. The steps demonstrated in this guide are applicable to all KendoReact Progress Bars (free and premium).

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:130 %}
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
npm i @progress/kendo-react-progressbars
```

Run these commands in the root of your React project to install the KendoReact Progress Bars package.

## Import the Components

```tsx
import { Progressbar } from '@progress/kendo-react-progressbars';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Progress Bars components are identical.

## Use the Components

> Using the free KendoReact [ProgressBar](slug://overview_progressbar) component does not require a license, even in production. To work with the premium [ChunkProgressBar](slug://overview_chunkprogressbar) component, you need a [commercial license key or an active trial license key](slug://my_license).

1. After installing the Progress Bars package and importing the components, add the `<ProgressBar>` tag to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    <ProgressBar value={50} />
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact ProgressBar component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Progress Bars package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the Progress Bars components are identical for all components in the package.

The Progress Bars package provides the following components:

-   [ProgressBar](slug://overview_progressbar)
-   [ChunkProgressBar](slug://overview_chunkprogressbar) (premium)

## KendoReact Progress Bars APIs

[Progress Bars API](slug://api_progressbars)

## KendoReact Progress Bars Dependencies

The Progress Bars package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                    | Description                                                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                  | Contains the functionality necessary to define React components.                                            |
| react-dom                       | Contains the React renderer for the web.                                                                    |
| @progress/kendo-licensing       | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-react-animation | Enables the animations in the KendoReact components.                                                        |
| @progress/kendo-react-common    | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |

## Activating Your License Key

**Important**: The KendoReact Progress Bars have both free and premium features that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the premium features will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
