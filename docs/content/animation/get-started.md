---
title: Getting Started
description: 'Get started with the KendoReact Animation package and learn how to use the free React animation.'
components: ['animation']
slug: get_started_animation
position: 1
---

# Getting Started with the KendoReact Animation

This guide provides essential information about using the KendoReact Animation package&mdash;you will learn how to install the Animation package and add a free React Animation component to your project.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will have a free React [Animation](slug://overview_animation).

{% meta height:250 %}
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
npm i @progress/kendo-react-animation @progress/kendo-theme-default
```

Run these commands in the root of your React project to install the KendoReact Animation package and its [dependencies](#kendoreact-animation-dependencies), and the Kendo UI [Default theme](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/).

## Import the Component

```tsx
import { Reveal } from '@progress/kendo-react-animation';
import '@progress/kendo-theme-default/dist/all.css';
```

Place the `import` statements in the App component file (for example: `src/App.tsx`) for your project. Note that the steps for installing and importing all Animation components are identical.

## Use the Component

1. After installing the Animation package and importing the components, add the `<Reveal>` tag to the App component file of your React project (for example, `src/App.tsx`). Note that you need to wrap the animation **around** the animated component or element.

    ```tsx
    <Reveal>
        <div className="content" key={index}>
            {index}
        </div>
    </Reveal>
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm run dev
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Reveal component on the page.

## Style the Components

> tip Are you looking for guidance around how to create visually appealing and consistent user interfaces with Telerik UI components? Check out the [Progress Design System](https://www.telerik.com/design-system/docs/).

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## KendoReact Animation APIs

[Animation API](slug://api_animation)

## KendoReact Animation Dependencies

The Animation package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*               | Contains the functionality necessary to define React components.                                            |
| react-dom                    | Contains the React renderer for the web.                                                                    |
| react-transition-group       | Contains components for managing component states over time, specifically designed with animation in mind.  |
| @progress/kendo-licensing    | Contains the internal infrastructure related to licensing.                                                  |
| @progress/kendo-svg-icons    | Contains the KendoReact SVG icons.                                                                          |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |

## Suggested Links

-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
