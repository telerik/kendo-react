---
title: Getting Started
description: 'Get started with the KendoReact Upload package and learn how to use the Upload component in React projects.'
components: ['upload']
slug: get_started_upload
position: 1
---

# Getting Started with the KendoReact Upload

This guide provides essential information about using the KendoReact Upload package&mdash;you will learn how to install the Upload package, add a Upload component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:150 %}
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
npm i @progress/kendo-react-upload
```

## Importing the Component

After installing the package, import the Upload component in the React App.

In the `src/App.js` file of your React project, import the `Upload` component from the Upload package.

```jsx-no-run
// ES2015 module syntax
import { Upload } from "@progress/kendo-react-upload";
```

```jsx-no-run
// CommonJS format
const { Upload } = require('@progress/kendo-react-upload');
```

## Using the Component

1. Define the `URLs` that you will use to save and remove files.

    ```jsx
    const saveUrl = 'https://demos.telerik.com/service/v2/odata/upload/save';
    const removeUrl = 'https://demos.telerik.com/service/v2/odata/upload/remove';
    ```

1. Add the component's markup to the `src/App.js` file in your project, and add the initial collection of files, if any.

    ```jsx
    return <Upload defaultFiles={[]} withCredentials={false} saveUrl={saveUrl} removeUrl={removeUrl} />;
    ```

1. To style the Upload, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

1. Navigate to <http://localhost:3000> to see the KendoReact Upload component on the page.

## Activating Your License Key

Using any of the UI components in the KendoReact library requires either a commercial license key or an active trial license key.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Upload package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components. |
| react-dom                 | Contains the React renderer for the web.                         |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.       |
| @progress/kendo-svg-icons | Contains the KendoReact SVG icons.                               |

## Suggested Links

-   [Disabled Upload]({% slug disabledstate_upload %})
-   [Modes of operation]({% slug controleduncontroled_upload %})
-   [Credentials and additional data]({% slug credentials_upload %})
-   [File processing]({% slug fileprocessing_upload %})
-   [File restrictions]({% slug filerestrictions_upload %})
-   [Dragging and dropping]({% slug drag_and_drop %})
-   [Action Buttons]({% slug actionbuttons_upload %})
-   [Custom rendering]({% slug rendering_upload %})
-   [External Drop Zone]({% slug external_drop_zone %})
-   [Globalization]({% slug globalization_upload %})
-   [Keyboard navigation]({% slug keyboard_navigation_upload %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
