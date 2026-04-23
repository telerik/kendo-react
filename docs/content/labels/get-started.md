---
title: Getting Started
description: 'Get started with the React Labels package by KendoReact and learn how to use the free React components.'
slug: get_started_labels
position: 1
---

# Getting Started with the KendoReact Labels

This guide provides essential information about using the KendoReact Labels package&mdash;you will learn how to install the package and add free React Labels components to your project. The steps demonstrated in this guide are applicable to all KendoReact Labels.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:160 %}
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

The Label is not intended to be used as a standalone component, therefore you also need to import an Input or another focusable element and link the Label to it.

```sh
npm i @progress/kendo-react-labels
```

Run these commands in the root of your React project to install the KendoReact Labels package and its [dependencies](#kendoreact-labels-dependencies), the KendoReact [Inputs](slug://overview_inputs) package and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Components

```tsx
import { Label, Hint } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Labels components are identical.

## Use the Components

1. After installing the Labels package and importing the components, add the Label, Hint and Inputs tags to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    const App = () => {
        const editorId = 'firstName';
        return (
            <div>
                <Label editorId={editorId}>First Name&nbsp;</Label>
                <Input id={editorId} />
                <Hint id={editorId}>e.g. Peter</Hint>
            </div>
        );
    };
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Labels components on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Labels package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#use-the-components) the Labels components are identical for all components in the package.

The Labels package provides the following components:

-   [Label](slug://label_labels)
-   [FloatingLabel](slug://floating_label_labels)
-   [Hint](slug://hint_labels)
-   [Error](slug://error_labels)

## KendoReact Labels APIs

[Labels API](slug://api_labels)

## KendoReact Labels Dependencies

The Labels package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                 | Description                                                                                                                                                                 |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*               | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                    | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing    | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-intl   | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components.                                                                 |

## Suggested Links

-   [Getting Started with KendoReact Inputs]({% slug getstarted_inputs %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
