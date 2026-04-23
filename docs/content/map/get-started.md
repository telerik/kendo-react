---
title: Getting Started
description: 'Get started with the React Map package by KendoReact and learn more about how to use the Map components in React projects.'
components: ['map']
slug: getstarted_map
position: 1
---

# Getting Started with the KendoReact Map

This guide provides information about using the KendoReact Map&mdash;you will learn how to install the package, add a Map component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:660 %}
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
npm i @progress/kendo-react-map
```

## Importing the Components

After installing the Map package, import the desired components in the React App. In this guide, you will add a [tile layer]({% slug tile_layers_map %}) to the Map, and this requires you to import the [`MapLayers`]({% slug api_map_maplayers %}) collection and the [`MapTileLayer`]({% slug api_map_maptilelayer %}) configuration component.

In the App component file of your React project (for example, `src/App.js`), add the following code:

```jsx-no-run
// ES2015 module syntax
import { Map, MapLayers, MapTileLayer } from '@progress/kendo-react-map';
```

```jsx-no-run
// CommonJS format
const { Map, MapLayers, MapTileLayer } = require('@progress/kendo-react-map');
```

## Using the Components

1. After installing the Map package and importing the components, add the Map tags to the App component file of your React project (for example, `src/App.js`).

    ```js
    // Set up an OpenStreetMap tile map
    const tileUrl = (e) => `https://tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
    const attribution = '© OpenStreetMap contributors';

    const MapContainer = () => (
        <Map>
            <MapLayers>
                <MapTileLayer urlTemplate={tileUrl} attribution={attribution} />
            </MapLayers>
        </Map>
    );
    ```

1. To style the Map, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

1. Navigate to <http://localhost:3000> to see the KendoReact Map component on the page.

## Activating Your License Key

**Important**: The KendoReact Map is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Map package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name              | Description                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| react 18.0.0\*            | Contains the functionality necessary to define React components.          |
| react-dom                 | Contains the React renderer for the web.                                  |
| @progress/kendo-licensing | Contains the internal infrastructure related to licensing.                |
| @progress/kendo-drawing   | Contains the Drawing library, which provides interactive vector graphics. |

The following dependencies are automatically installed:

| Package Name                 | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| @progress/kendo-react-common | Contains common utilities that enhance the performance and functionalities of the KendoReact UI components. |
| prop-types                   | One of the common scripts used by the KendoReact components.                                                |

## Suggested Links

-   [Map Overview]({% slug overview_map %})
-   [Layer Types of the Map]({% slug overview_layers_map %})
-   [API Reference of the Map]({% slug api_map %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
