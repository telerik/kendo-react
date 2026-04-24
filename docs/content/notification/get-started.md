---
title: Getting Started
description: 'Get started with the KendoReact Notification package and learn how to use the Notification component in React projects.'
components: ['notification']
slug: get_started_notification
position: 1
---

# Getting Started with the KendoReact Notification

This guide provides essential information about using the KendoReact Notification package&mdash;you will learn how to install the package, add Notifications to your project, style the components, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will have a free React [Notification](slug://overview_notification) up and running.

{% meta height:220 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% embed_file get-started/func/styles.css %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-notification
```

Run these commands in the root of your React project to install the KendoReact Notification package and its [dependencies](#kendoreact-notification-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Component

After installing the Notification npm package, import the Notification and NotificationGroup components in the React App.

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project.

```tsx
// ES2015 module syntax
import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
```

```tsx
// CommonJS format
const { Notification, NotificationGroup } = require('@progress/kendo-react-notification');
```

## Using the Component

1. Set a state variable that will determine if the Notification will be visible.

    ```tsx
    const [success, setSuccess] = React.useState(false);
    ```

1. Set a function that will show the Notification on a button click.

    ```tsx
    const onToggle = () => setSuccess(true);
    ```

1. Add animation to the component by importing the `Fade` animation.

    ```tsx
    import { Fade } from '@progress/kendo-react-animation';
    ```

1. Add the component's markup to the `src/App.js` file in your project. You will render the Notification component based on the `success` value. You wrap the entire Notification component inside the `Fade` component to animate it.

    ```tsx
    <NotificationGroup
        style={{
            right: 0,
            bottom: 0,
            alignItems: 'flex-start',
            flexWrap: 'wrap-reverse'
        }}
    >
        <Fade>
            {success && (
                <Notification type={{ style: 'success', icon: true }} closable={true} onClose={() => setSuccess(false)}>
                    <span>Your data has been saved.</span>
                </Notification>
            )}
        </Fade>
    </NotificationGroup>
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Notification component on the page.

## Style the Component

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

To use the built-in styling of the components, start by installing a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

# KendoReact Notification APIs

[Notification API](slug://api_notification)

## KendoReact Notification Dependencies

The Notification package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*               | Contains the functionality necessary to define React components.                                            |
| react-dom                    | Contains the React renderer for the web.                                                                    |
| @progress/kendo-licensing    | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-svg-icons    | Contains the KendoReact SVG                                                                                 |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
