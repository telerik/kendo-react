---
title: Getting Started
description: 'Get started with the Inputs package by KendoReact and learn how to use the free React components.'
slug: getstarted_inputs
position: 1
---

# Getting Started with the KendoReact Inputs

This guide provides essential information about using the KendoReact Inputs package&mdash;you will learn how to install the package and add a free React Inputs component to your project. The steps demonstrated in this guide are applicable to all KendoReact Inputs (free and premium).

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will have a free React [Input](slug://overview_inputs) up and running.

{% meta height:400 %}
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
npm i @progress/kendo-react-inputs
```

## Importing the Components

```tsx
import { Input } from '@progress/kendo-react-inputs';
import '@progress/kendo-theme-default/dist/all.css';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Inputs components are identical.

## Use the Components

> Using the free KendoReact Inputs components does not require a license, even in production. To work with any of the premium components in the package, you need a [commercial license key or an active trial license key](slug://my_license).

1. After installing the Inputs package and importing the components, add the Input tags to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    <Input />
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Input component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Inputs package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the Inputs components are identical for all components in the package.

The Inputs package provides the following components:

-   [CheckBox](slug://overview_checkbox)
-   [ColorPallete](slug://overview_colorpalette)
-   [TextBox](slug://overview_textbox)
-   [MaskedTextBox](slug://overview_maskedtextbox)
-   [NumericTextBox](slug://overview_numerictextbox)
-   [RadioButton](slug://overview_radiobutton)
-   [Slider](slug://overview_slider)
-   [Rating](slug://overview_rating)
-   [Switch](slug://overview_switch)
-   [TextArea](slug://overview_textarea)
-   [Input](slug://overview_input)
-   [ColorGradient](slug://overview_colorgradient) (premium)
-   [ColorPicker](slug://overview_colorpicker) (premium)
-   [FlatColorPicker](slug://overview_flatcolorpicker) (premium)
-   [Signature](slug://overview_signature) (premium)
-   [RangeSlider](slug://overview_rangeslider) (premium)

# KendoReact Inputs APIs

[Inputs API](slug://api_inputs)

## KendoReact Inputs Dependencies

The Inputs package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name               | Description                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*             | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                  | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing  | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-intl | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-drawing    | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-svg-icons  | Contains the KendoReact SVG icons.                                                                                                                                          |

## Activating Your License Key

**Important**: The KendoReact Inputs have both free and premium features that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the premium features will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
