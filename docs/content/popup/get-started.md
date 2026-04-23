---
title: Getting Started
description: 'Get started with the KendoReact Popup package and learn how to use the Popup component in React projects.'
components: ['popup']
slug: get_started_popup
position: 1
---

# Getting Started with the KendoReact Popup

This guide provides essential information about using the KendoReact Popup package&mdash;you will learn how to install the Popup package, add a Popup component to your project, style the component, and activate your license.

<CtaPanelOverview></CtaPanelOverview>

After completing this guide, you will be able to reproduce the following example.

{% meta height:220 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file overview/func/styles.css %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-popup @progress/kendo-theme-default
```

Run these commands in the root of your React project to install the KendoReact Popup package and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

Note that `kendo-react-buttons` is not a direct dependency for the Popup component. The workflow of this guide requires that you also install and use a Button component to trigger the Popup.

## Import the Component

After installing the Popup npm package, import the Popup and Button components. While the Button is not required for the Popup, it is needed for this tutorial.

In the App component file of your React project (for example, `src/App.tsx`), add the following code:

```tsx
// ES2015 module syntax
import { Popup } from '@progress/kendo-react-popup';
import { Button } from '@progress/kendo-react-buttons';
```

```tsx
// CommonJS format
const { Popup } = require('@progress/kendo-react-popup');
const { Button } = require('@progress/kendo-react-buttons');
```

## Use the Component

1. After installing the Popup package add a button to the App component of your React project (for example, `src/App.tsx`) that will be used as an `anchor` of the Popup. You will also use the button to open and close the Popup on click.

    ```tsx
    <Button type="button" onClick={onClick} ref={anchor}>
        {show ? 'Hide' : 'Show'}
    </Button>
    ```

1. Create a reference to the button element.

    ```tsx
    const anchor = React.useRef(null);
    ```

1. Handle the button `onClick` event to toggle the Popup.

    ```tsx
    const onClick = () => {
        setShow(!show);
    };
    ```

1. Create a state variable to control when the Popup opens.

    ```tsx
    const [show, setShow] = React.useState(false);
    ```

1. Add the Popup markup to the `App` component.

    ```tsx
    <Button type="button" onClick={onClick} ref={anchor}>
        {show ? 'Hide' : 'Show'}
    </Button>
    <Popup
      anchor={anchor.current && anchor.current.element}
      show={show}
      popupClass={'popup-content'}
    >
        Popup content.
    </Popup>
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Popup component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

# KendoReact Popup APIs

[Popup API](slug://api_popup)

## KendoReact Popup Dependencies

The Popup package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*               | Contains the functionality necessary to define React components.                                            |
| react-dom                    | Contains the React renderer for the web.                                                                    |
| @progress/kendo-licensing    | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-popup-common | Contains shared Popup logic.                                                                                |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
