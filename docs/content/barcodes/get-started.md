---
title: Getting Started
description: 'Get started with the React Barcodes package by KendoReact and learn how to use the components in a React project.'
slug: get_started_barcodes
position: 1
---

# Getting Started with the KendoReact Barcodes

This guide provides essential information about using the KendoReact Barcodes package&mdash;you will learn how to install the package, add Barcodes to your project, style the components, and activate your license. The steps demonstrated in this guide are applicable to all KendoReact Barcodes.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:350 %}
{% embed_file get-started/func/app.tsx preview %}
{% embed_file get-started/func/main.tsx %}
{% endmeta %}

## Install the Component

```sh
npm i @progress/kendo-react-barcodes
```

## Importing the Components

After installing the Barcodes package, import the desired components in the React App. This guide shows how to add the [Barcode]({% slug overview_barcode_barcodes %}).

In the App component file of your React project (for example, `src/App.js`), add the following code:

```jsx-no-run
// ES2015 module syntax
import { Barcode } from '@progress/kendo-react-barcodes';
```

```jsx-no-run
// CommonJS format
const { Barcode } = require('@progress/kendo-react-barcodes');
```

If your project requires more Barcodes, you can import them too. The Barcodes package provides the following components:

-   Barcode
-   QR Code

## Using the Components

1. After installing the Barcodes package and importing the components, add the Barcode's tags to the App component file of your React project (for example, `src/App.js`).

    ```js
    const App = () => <Barcode type="EAN13" value="123456789012" />;
    ```

1. To style the Barcode, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of [several beautiful themes]({% slug themesandstyles %}) for KendoReact.

    2.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    2.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

## Activating Your License Key

For information on activating your license, see the [Set Up Your KendoReact License Key]({% slug my_license %}) page.

## Dependencies

The Barcodes package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components.          |
| react-dom                 | Contains the React renderer for the web.                                  |
| @progress/kendo-drawing   | Contains the Drawing library, which provides interactive vector graphics. |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.                |

## Suggested Links

-   [Barcode Overview]({% slug overview_barcode_barcodes %})
-   [QR Code Overview]({% slug overview_qrcode_barcodes %})
-   [API Reference of the Barcodes]({% slug api_barcodes %})
-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
