---
title: Getting Started
description: 'Get started with the KendoReact ListBox package and learn how to use the ListBox component in React projects.'
components: ['listbox']
slug: get_started_listbox
position: 10
---

# Getting Started with the KendoReact ListBox

This guide provides essential information about using the KendoReact ListBox package&mdash;you will learn how to install the ListBox package and add a free React ListBox component to your project.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will have a free React [ListBox](slug://overview_listbox) up and running.

{% meta height:540 %}
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
npm i @progress/kendo-react-listbox
```

Run these commands in the root of your React project to install the KendoReact ListBox package and its [dependencies](#kendoreact-listbox-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Component

```tsx
import {
    ListBox,
    ListBoxToolbar,
    processListBoxData,
    ListBoxToolbarClickEvent,
    ListBoxItemClickEvent
} from '@progress/kendo-react-listbox';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project.

## Use the Component

1. Import the data for the ListBox.

    ```tsx
    import { data } from './data';
    ```

1. Create a state variable to hold the data for the two ListBox components.

    ```tsx
    const [state, setState] = React.useState({
        employees: data,
        developers: []
    });
    ```

1. Set the [selectedField]({% slug api_listbox_listboxprops %}#toc-selectedfield) value. That value will determine which items are selected.

    ```tsx
    const SELECTED_FIELD = 'selected';
    ```

1. Handle the [onItemClick]({% slug api_listbox_listboxprops %}#toc-onitemclick) event of the ListBox to select or deselect items.

    ```tsx
    const handleItemClick = (event, data, connectedData) => {
        setState({
            ...state,
            [data]: state[data].map((item) => {
                if (item.name === event.dataItem.name) {
                    item[SELECTED_FIELD] = !item[SELECTED_FIELD];
                } else if (!event.nativeEvent.ctrlKey) {
                    item[SELECTED_FIELD] = false;
                }
                return item;
            }),
            [connectedData]: state[connectedData].map((item) => {
                item[SELECTED_FIELD] = false;
                return item;
            })
        });
    };
    ```

1. Handle the [onToolClick]({% slug api_listbox_listboxtoolbarprops %}#toc-ontoolclick) event of the ListBoxToolbar to update the lists.

    ```tsx
    const handleToolBarClick = (e: ListBoxToolbarClickEvent) => {
        let toolName: string = e.toolName || '';
        let result: any = processListBoxData(state.employees, state.developers, toolName, SELECTED_FIELD);
        setState({
            ...state,
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    };
    ```

1. Add the markup of the two components to the `src/App.js` file in your project.

    ```tsx
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col k-pr-2">
                    <h6>Employees</h6>
                    <ListBox
                        style={{ height: 400, width: '100%' }}
                        data={state.employees}
                        textField="name"
                        selectedField={SELECTED_FIELD}
                        onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'employees', 'developers')}
                        toolbar={() => {
                            return (
                                <ListBoxToolbar
                                    tools={[
                                        'moveUp',
                                        'moveDown',
                                        'transferTo',
                                        'transferFrom',
                                        'transferAllTo',
                                        'transferAllFrom',
                                        'remove'
                                    ]}
                                    data={state.employees}
                                    dataConnected={state.developers}
                                    onToolClick={handleToolBarClick}
                                />
                            );
                        }}
                    />
                </div>
                <div className="col k-pl-0">
                    <h6>Developers</h6>
                    <ListBox
                        style={{ height: 400, width: '100%' }}
                        data={state.developers}
                        textField="name"
                        selectedField={SELECTED_FIELD}
                        onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e, 'developers', 'employees')}
                    />
                </div>
            </div>
        </div>
    );
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact ListBox component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components, start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## KendoReact ListBox APIs

[ListBox API](slug://api_listbox)

## KendoReact ListBox Dependencies

The ListBox package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                  | Description                                                                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                     | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing     | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-intl    | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-svg-icons     | Contains the KendoReact SVG icons.                                                                                                                                          |
| @progress/kendo-react-buttons | Contains the KendoReact Buttons components.                                                                                                                                 |
| @progress/kendo-react-common  | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components.                                                                 |

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
