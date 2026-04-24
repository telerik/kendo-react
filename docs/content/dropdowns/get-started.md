---
title: Getting Started
description: 'Get started with the React Dropdowns package by KendoReact and learn how to use the components in a React project.'
slug: get_started_dropdowns
position: 1
---

# Getting Started with the KendoReact Dropdowns

This guide provides essential information about using the KendoReact Dropdowns package&mdash;you will learn how to install the package, add Dropdowns to your project, style the components, and activate your license. The steps demonstrated in this guide are applicable to all KendoReact Dropdowns.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:450 %}
{% embed_file dropdownlist/basic/func/app.tsx preview %}
{% embed_file dropdownlist/basic/func/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-dropdowns
```

Run these commands in the root of your React project to install the KendoReact ListBox package and its [dependencies](#kendoreact-dropdowns-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Component

After installing the Dropdowns package, import the desired components in the React App. This guide shows how to add the [DropDownList]({% slug overview_dropdownlist %}).

```tsx
// ES2015 module syntax
import { DropDownList } from '@progress/kendo-react-dropdowns';
```

```tsx
// CommonJS format
const { DropDownList } = require('@progress/kendo-react-dropdowns');
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project.

## Use the Component

1. Get the data for the DropDownList.

    ```tsx
    const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
    ```

1. Bind the data to the DropDownList and add the DropDownList's tags to the App component file of your React project (for example, `src/App.js`).

    ```tsx
    return (
        <div>
            <div>T-shirt size:</div>
            <DropDownList style={{ width: '300px' }} data={sizes} />
        </div>
    );
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact DropDownList component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Dropdowns package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the data tools components are identical for all components in the package.

The Dropdowns package provides the following components:

-   [AutoComplete](slug://overview_autocomplete)
-   [DropDownList](slug://overview_dropdownlist)\*
-   [MultiSelect](slug://overview_multiselect)\*
-   [ComboBox](slug://overview_combobox) (premium)
-   [DropDownTree](slug://overview_dropdowntree) (premium)
-   [MultiColumnComboBox](slug://overview_multicolumncombobox) (premium)
-   [MultiSelectTree](slug://overview_multiselecttree) (premium)

\* This is a free component with premium features.

## KendoReact Dropdowns APIs

[Dropdowns API](slug://api_dropdowns_dropdownlist)

## KendoReact Dropdowns Dependencies

The Dropdowns package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                   | Description                                                                                                                                                                 |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                 | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                      | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-react-buttons  | Contains the KendoReact Buttons library, which provides buttons.                                                                                                            |
| @progress/kendo-react-treeview | Contains the KendoReact TreeView package that is used in the DropDowns.                                                                                                     |
| @progress/kendo-react-intl     | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-licensing      | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-svg-icons      | Contains the KendoReact SVG icons.                                                                                                                                          |

## Activating Your License Key

**Important**: The KendoReact Dropdowns have both free and premium features that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the premium features will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
