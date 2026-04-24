---
title: Getting Started
description: 'Get started with the React Data Tools package by KendoReact and learn how to use the components in a React project.'
slug: get_started_datatools
position: 1
---

# Getting Started with the KendoReact Data Tools

This guide provides essential information about using the KendoReact Data Tools package&mdash;you will learn how to install the package, add Data Tools to your project, style the components, and activate your license (required for the premium-only Filter).

<CtaPanelOverview></CtaPanelOverview>

After completing this guide, you will have a free React [Pager](slug://overview_pager) up and running.

{% meta height:140 %}
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
npm i @progress/kendo-react-data-tools
```

## Import the Component

After installing the Data Tools package, import the desired components in the React App. This guide shows how to add the [Pager]({% slug overview_pager %}).

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all data tools are identical.

```tsx
// ES2015 module syntax
import { Pager } from '@@progress/kendo-react-data-tools';
```

```tsx
// CommonJS format
const { Pager } = require('@progress/kendo-react-data-tools');
```

## Use the Component

> Using the free KendoReact Pager does not require a license, even in production. To work with the premium Filter component the package, you need a [commercial license key or an active trial license key](slug://my_license).

1. After installing the Data Tools package and importing the components, add the Pager's tags to the App component file of your React project (for example, `src/App.js`).

    ```tsx
    return <Pager skip={skip} take={take} total={50} previousNext={true} onPageChange={handlePageChange} />;
    ```

1. To control the current page, create two state variables for [skip]({% slug api_data-tools_pagerprops %}#toc-skip) and [take]({% slug api_data-tools_pagerprops %}#toc-take).

    ```tsx
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(10);
    ```

1. Handle the [onPageChange event]({% slug api_data-tools_pagerprops %}#toc-onpagechange) to update the page based on the user selection.

    ```tsx
    const handlePageChange = (event: PageChangeEvent) => {
        setSkip(event.skip);
        setTake(event.take);
    };
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Pager component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Data tools package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the data tools components are identical for all components in the package.

The Data Tools package provides the following components:

-   [Filter](slug://overview_filter) (premium)
-   [Pager](slug://overview_pager)

# KendoReact Inputs APIs

[Data Tools API](slug://api_data-tools)

## Activating Your License Key

**Important**: The KendoReact Data Query is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## KendoReact Data Tools Dependencies

The Data Tools package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                     | Description                                                                                                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                   | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                        | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing        | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-intl       | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-data-tools | Delivers components required to manage and control the data in the application.                                                                                             |
| @progress/kendo-react-dateinputs | Contains the KendoReact Date Inputs components that are used to select the date and time for an appointment.                                                                |
| @progress/kendo-react-dropdowns  | Contains the KendoReact Dropdowns, which allows users to choose from a predefined list of options.                                                                          |
| @progress/kendo-react-inputs     | Contains the KendoReact Inputs, which the input of data, based on a specific and predefined format.                                                                         |
| @progress/kendo-drawing          | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-react-buttons    | Contains the KendoReact Buttons library, which provides buttons.                                                                                                            |
| @progress/kendo-svg-icons        | Contains the KendoReact SVG icons.                                                                                                                                          |
| @progress/kendo-data-query       | Applies sorting, filtering, grouping, and aggregate data operations.                                                                                                        |
| @progress/kendo-react-animation  | Enables the animations in the KendoReact components.                                                                                                                        |
| @progress/kendo-react-common     | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components.                                                                 |
| @progress/kendo-react-popup      | Contains positioning logic for the Popup component.                                                                                                                         |

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
