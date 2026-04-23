---
title: Getting Started
description: 'Get started with the KendoReact Diagram package and learn how to use the component in your React projects.'
slug: getstarted_diagram
position: 5
---

# Getting Started with the KendoReact Diagram

This guide provides essential information about using the KendoReact Diagram package&mdash;you will learn how to install the package, add a Diagram to your project, style the component, and activate your license.

<CtaPanelOverview></CtaPanelOverview>

After completing this guide, you will have a React Diagram with shapes, connections, and a layout up and running.

<demo metaUrl="diagram/get-started/" height="500"></demo>

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug:getting_started).

> You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-diagram
```

## Import the Component

After installing the Diagram package, import the component and the required types in your App component file (for example, `src/App.tsx`).

```tsx ES2015
// ES2015 module syntax
import { Diagram } from '@progress/kendo-react-diagram';
```
```tsx CommonJS
// CommonJS format
const { Diagram } = require('@progress/kendo-react-diagram');
```

## Use the Component

1. Add the `Diagram` component to the App component file of your React project (for example, `src/App.tsx`).

    ```tsx
    return <Diagram shapes={shapes} connections={connections} layout={{ type: 'tree' }} style={{ height: 500 }} />;
    ```

1. Define the shapes to display in the diagram.

    ```tsx
    const shapes: ShapeOptions[] = [
        { id: 'shape1', content: { text: 'Start' } },
        { id: 'shape2', content: { text: 'Process' } },
        { id: 'shape3', content: { text: 'End' } }
    ];
    ```

1. Define the connections between the shapes.

    ```tsx
    const connections: ConnectionOptions[] = [
        { from: 'shape1', to: 'shape2' },
        { from: 'shape2', to: 'shape3' }
    ];
    ```

1. Navigate to <http://localhost:5173> to see the KendoReact Diagram component on the page.

## Style the Components

To use the built-in styling of the components, install a theme:

```sh
npm i @progress/kendo-theme-default
```

With the `import "@progress/kendo-theme-default/dist/all.css";` statement present in your code, you already have professionally designed styling applied to your app out-of-box. You can also try any of the other available [Kendo UI Themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/#available-themes).

## Activating Your License Key

**Important**: The KendoReact Diagram requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page](slug:my_license) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## KendoReact Diagram Dependencies

The Diagram package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                   | Description                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                 | Contains the functionality necessary to define React components                                            |
| react-dom                      | Contains the React renderer for the web                                                                    |
| @progress/kendo-licensing      | Contains the internal infrastructure related to licensing                                                  |
| @progress/kendo-react-common   | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components |
| @progress/kendo-diagram-common | Contains the common Diagram logic shared across KendoReact frameworks                                      |

## Suggested Links

-   [Diagram Overview](slug:overview_diagram)
-   [Diagram Shapes](slug:shapes_diagram)
-   [Diagram Connections](slug:connections_diagram)
-   [Diagram Layouts](slug:layouts_diagram)
-   [API Reference of the React Diagram](slug:api_diagram)
-   [Styling Overview](slug:themesandstyles)
-   [Theme Builder](slug:themebuilder)
