---
title: Getting Started
description: 'Get started with the Layout package by KendoReact and learn how to use the Layout components in React projects.'
slug: getstarted_layout
position: 1
---

# Getting Started with the KendoReact Layout

This guide provides essential information about using the KendoReact Layout package&mdash;you will learn how to install the package, add a PanelBar component to your project, style the component, and activate your license. The steps demonstrated in this guide are applicable to all KendoReact Layout components.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:380 %}
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

Navigate to the root folder of your React project and run the following command:

```sh
npm i @progress/kendo-react-layout
```

Run these commands in the root of your React project to install the KendoReact Layout package and its [dependencies](#kendoreact-layout-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Component

After installing the Layout package, import the desired components in the React App.

In the `src/App.js` file of your React project, import the PanelBar component from the Layout package. To use [items]({% slug items_panelbar %}) in the PanelBar, add the [PanelBarItem]({% slug api_layout_panelbaritemprops %}) component as well.

```tsx
// ES2015 module syntax
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
```

```tsx
// CommonJS format
const { PanelBar, PanelBarItem } = require('@progress/kendo-react-layout');
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project.

## Use the Component

1. After installing the Layout package and importing the components, add the tags of the desired components to the `src/App.tsx` file in your project.

    ```tsx
    const App = () => {
        return (
            <PanelBar>
                <PanelBarItem title={'Teams'}>
                    <PanelBarItem title={'Team 1'} />
                    <PanelBarItem title={'Team 2'} />
                </PanelBarItem>
                <PanelBarItem title="Releases">
                    <PanelBarItem title="Q1 2021" />
                    <PanelBarItem title="Q2 2021" />
                </PanelBarItem>
            </PanelBar>
        );
    };

    export default App;
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact PanelBar component on the page.

## Style the Component

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components, start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Layouts package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the layout components are identical for all components in the package.

The Layout package provides the following components:

-   [AppBar](slug://overview_appbar)
-   [Avatar](slug://overview_avatar)
-   [BottomNavigation](slug://overview_bottomnavigation)
-   [BreadCrumb](slug://overview_breadcrumb)
-   [Card](slug://overview_card)
-   [ContextMenu](slug://overview_contextmenu)
-   [Drawer](slug://overview_drawer)
-   [ExpansionPanel](slug://overview_expansionpanel)
-   [GridLayout](slug://items_gridlayout)
-   [Menu](slug://overview_menu)
-   [PanelBar](slug://overview_panelbar)
-   [Splitter](slug://overview_splitter) (premium)
-   [StackLayout](slug://overview_stacklayout)
-   [Stepper](slug://overview_stepper)
-   [Tabstrip](slug://overview_tabstrip)
-   [TileLayout](slug://overview_tilelayout)
-   [Timeline](slug://overview_timeline) (premium)

## KendoReact Layout APIs

[Layout API](slug://api_layout)

## KendoReact Layout Dependencies

The Layout package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                       | Description                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                     | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                          | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing          | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-progressbars | Contains the KendoReact ProgressBar component.                                                                                                                              |
| @progress/kendo-react-intl         | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-svg-icons          | Contains the KendoReact SVG icons.                                                                                                                                          |
| @progress/kendo-react-animation    | Enables the animations in the KendoReact components.                                                                                                                        |
| @progress/kendo-react-buttons      | Contains the KendoReact Button components.                                                                                                                                  |
| @progress/kendo-react-common       | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components.                                                                 |
| @progress/kendo-react-popup        | Contains positioning logic for the Popup component.                                                                                                                         |
| @progress/kendo-react-progressbars | Contains the KendoReact ProgressBar component.                                                                                                                              |

## Activating Your License Key

**Important**: The KendoReact Layout components have both free and premium features that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the premium features will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
