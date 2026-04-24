---
title: Getting Started
description: 'Get started with the React Dialogs package by KendoReact and learn how to use the components in a React project.'
slug: get_started_dialogs
position: 1
---

# Getting Started with the KendoReact Dialogs

This guide provides essential information about using the KendoReact Dialogs package&mdash;you will learn how to install the package and add a free Dialog to your project. The steps demonstrated in this guide are applicable to all KendoReact Dialogs.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will have a free React [Dialog](slug://overview_dialog) up and running.

{% meta height:450 %}
{% embed_file dialog/overview/func/app.tsx preview %}
{% embed_file dialog/overview/func/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Components

```sh
npm i @progress/kendo-react-dialogs
```

Run these commands in the root of your React project to install the KendoReact Dialogs package and its [dependencies](#kendoreact-dialogs-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Components

```tsx
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Dialogs components are identical.

## Usе the Components

1.  After installing the Dialogs package and importing the components, add the Dialog's tags to the App component file of your React project (for example, `src/App.js`).

    ```tsx
    {
        visible && (
            <Dialog title={'Please confirm'} onClose={toggleDialog}>
                <p style={{ margin: '25px', textAlign: 'center' }}>Are you sure you want to continue?</p>
                <DialogActionsBar>
                    <Button onClick={toggleDialog}>No</Button>
                    <Button onClick={toggleDialog}>Yes</Button>
                </DialogActionsBar>
            </Dialog>
        );
    }
    ```

1.  Create a state variable to control when the Dialog is open or closed.

    ```tsx
    const [visible, setVisible] = React.useState < boolean > true;
    ```

1.  Add a button that will open the Dialog.

    ```tsx
    <Button type="button" onClick={toggleDialog} id="open-dialog">
        Open Dialog
    </Button>
    ```

1.  Create a function that will toggle the Dialog visibility.

    ```tsx
    const toggleDialog = () => {
        setVisible(!visible);
    };
    ```

1.  Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1.  Navigate to <http://localhost:3000> to see the KendoReact Dialog component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Next Steps

Now try to add another component from the Dialogs package yourself. The procedures for [installing](#install-the-components), [importing](#import-the-components), and [using](#usе-the-components) the Dialogs components are identical for all components in the package.

The Dialogs package provides the following components:

-   [Dialog](slug://overview_dialog)
-   [Window](slug://overview_window)

## KendoReact Dialogs APIs

[Dialogs API](slug://api_dialogs)

## KendoReact Dialogs Dependencies

The Dialogs package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                  | Description                                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                | Contains the functionality necessary to define React components.                                            |
| react-dom                     | Contains the React renderer for the web.                                                                    |
| @progress/kendo-licensing     | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-react-buttons | Contains the KendoReact Buttons components.                                                                 |
| @progress/kendo-react-common  | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |
| @progress/kendo-svg-icons     | Contains the KendoReact SVG icons.                                                                          |

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
