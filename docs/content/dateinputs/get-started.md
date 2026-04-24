---
title: Getting Started
description: 'Get started with the React Date Inputs package by KendoReact and learn how to use the free React components.'
slug: get_started_dateinputs
position: 1
---

# Getting Started with the KendoReact Date Inputs

This guide provides essential information about using the KendoReact Date Inputs package&mdash;you will learn how to install the package, add a free React Date Inputs component to your project. The steps demonstrated in this guide are applicable to all KendoReact Date Inputs (free and premium).

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will have a free React [Date Picker](slug://overview_datepicker) up and running.

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

## Install the Components

```sh
npm i @progress/kendo-react-dateinputs
```

Run these commands in the root of your React project to install the KendoReact Date Inputs package and its [dependencies](#kendoreact-date-inputs-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Components

```tsx
import { DatePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Date Inputs components are identical.

## Use the Components

> Using the free KendoReact Date Inputs components does not require a license, even in production. To work with any of the premium components in the package, you need a [commercial license key or an active trial license key](slug://my_license).

1. After installing the Date Inputs package and importing the components, add the DatePicker tags to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    <DatePicker />
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact DatePicker component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

Additionally, the Date Inputs provide built-in appearance properties which let you control the size, roundness, and fill mode of the component. Try to play around with the [appearance](slug://appearance_datepicker) of your Date Picker.

```tsx
<DatePicker size="large" fillMode="outline" />
```

## Next Steps

Now try to add another component from the Date Inputs package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the Date Inputs components are identical for all components in the package.

The Date Inputs package provides the following components:

-   [Calendar](slug://overview_calendar)
-   [DateInput](slug://overview_dateinput)
-   [DatePicker](slug://overview_datepicker)
-   [DateTimePicker](slug://overview_datetimepicker)
-   [DateRangePicker](slug://overview_daterangepicker) (premium)
-   [MultiViewCalendar](slug://overview_multiviewcalendar) (premium)
-   [TimePicker](slug://overview_timepicker) (premium)

## KendoReact Date Inputs APIs

[Date Inputs API](slug://api_dateinputs)

## KendoReact Date Inputs Dependencies

The Date Inputs package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                       | Description                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                     | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                          | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing          | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-svg-icons          | Contains the KendoReact SVG icons.                                                                                                                                          |
| @progress/kendo-date-math          | Contains the logic for working with date objects and timezones.                                                                                                             |
| @progress/kendo-dateinputs-common  | Contains shared Date Inputs logic and utilities for the KendoReact, Kendo UI for Vue, and Kendo UI for Angular libraries.                                                   |
| @progress/kendo-popup-common       | Contains shared Popup logic and utilities for the KendoReact, Kendo UI for Vue, and Kendo UI for Angular libraries.                                                         |
| @progress/kendo-react-animation    | Enables the animations in the KendoReact components.                                                                                                                        |
| @progress/kendo-react-buttons      | Contains the KendoReact Buttons components.                                                                                                                                 |
| @progress/kendo-react-common       | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components.                                                                 |
| @progress/kendo-react-intl         | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-labels       | Contains the KendoReact Labels components.                                                                                                                                  |
| @progress/kendo-react-layout       | Contains the KendoReact Layout components.                                                                                                                                  |
| @progress/kendo-react-popup        | Contains positioning logic for the Popover component.                                                                                                                       |
| @progress/kendo-react-progressbars | Contains positioning logic for the Progress Bars component.                                                                                                                 |

## Activating Your License Key

**Important**: The KendoReact Date Inputs have both free and premium features that require a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the premium features will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
-   [React Date Inputs](slug:overview_dateinputs)
