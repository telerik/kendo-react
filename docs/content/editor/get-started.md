---
title: Getting Started
description: 'Get an overview of the features the KendoReact Editor delivers and use the component in React projects.'
components: ['editor']
slug: getstarted_editor
position: 1
---

# Getting Started with the KendoReact Editor

This guide provides essential information about using the KendoReact Editor package. You will learn how to install the Editor package, add a React Editor component, part of KendoReact, to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

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

## Install the Component

```sh
npm i @progress/kendo-react-editor
```

## Importing the Component

After installing the package, import the Editor component in the React App.

In the `src/App.js` file of your React project, import the `Editor` and `EditorTools` components from the Editor package. The `EditorTools` provide different built-in user-interface tools that help users modify the content.

```jsx-no-run
// ES2015 module syntax
import { Editor, EditorTools } from '@progress/kendo-react-editor';
```

```jsx-no-run
// CommonJS format
const { Editor, EditorTools } = require('@progress/kendo-react-editor');
```

## Using the Component

1. Define the editor tools that you want to enable.

    ```jsx
    const {
        Bold,
        Italic,
        Underline,
        AlignLeft,
        AlignRight,
        AlignCenter,
        Indent,
        Outdent,
        OrderedList,
        UnorderedList,
        Undo,
        Redo,
        Link,
        Unlink
    } = EditorTools;
    ```

1. Add the component's markup to the `src/App.js` file in your project and set the tools. Optionally, configure the height of the Editor component.

    ```jsx
    return (
        <Editor
            tools={[
                [Bold, Italic, Underline],
                [Undo, Redo],
                [Link, Unlink],
                [AlignLeft, AlignCenter, AlignRight],
                [OrderedList, UnorderedList, Indent, Outdent]
            ]}
            contentStyle={{
                height: 320
            }}
            defaultContent={content}
        />
    );
    ```

1. To style the Editor, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    3.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    3.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact Editor component on the page.

## Activating Your License Key

**Important**: The KendoReact Editor is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Editor package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                       | Description                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                     | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                          | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing          | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-drawing            | Contains the KendoReact Drawing components.                                                                                                                                 |
| @progress/kendo-react-buttons      | Contains the KendoReact Buttons components.                                                                                                                                 |
| @progress/kendo-react-dialogs      | Contains the KendoReact Dialogs components.                                                                                                                                 |
| @progress/kendo-react-dropdowns    | Contains the KendoReact Dropdowns components.                                                                                                                               |
| @progress/kendo-react-inputs       | Contains the KendoReact Inputs components.                                                                                                                                  |
| @progress/kendo-react-intl         | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-layout       | Contains the KendoReact Layout components.                                                                                                                                  |
| @progress/kendo-react-pdf          | Contains the KendoReact PDF components.                                                                                                                                     |
| @progress/kendo-react-popup        | Contains the KendoReact Popup components.                                                                                                                                   |
| @progress/kendo-react-progressbars | Contains the KendoReact Progressbars components.                                                                                                                            |
| @progress/kendo-svg-icons          | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [API Reference of the Editor]({% slug api_editor %})
-   [Globalization]({% slug globalization_editor %})
-   [Tools]({% slug tools_editor %})
-   [Plugins]({% slug plugins_editor %})
-   [Schema]({% slug schema_editor %})
-   [Keyboard Navigation]({% slug keyboard_navigation_editor %})

## Learning Resources

-   [React Rich Text Editor](slug://overview_editor)
-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
