---
title: Get Started
description: 'Get started with the React Timeline component, part of the KendoReact Layout package, and learn how to use the Layout components in your React projects.'
components: ['timeline']
slug: getstarted_timeline
position: 1
---

# Getting Started with the KendoReact Timeline

This guide provides essential information about using the KendoReact Timeline component. You will learn how to install the Layout package that provides the Timeline. Then, you will add a Timeline component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:780 %}
{% embed_file timeline/overview/func/app.tsx preview %}
{% embed_file timeline/overview/func/main.tsx %}
{% embed_file timeline/overview/func/events.ts %}
{% embed_file timeline/overview/func/style.css %}
{% endmeta %}

## Setting Up Your React Project

Before you install the KendoReact Layout package, which contains the Timeline component, make sure that you have a running React project. The easiest way to set up a KendoReact project is to use the [Create KendoReact App](https://www.telerik.com/kendo-react-ui/components/getting-started/#toc-1-creating-the-react-app) approach that is described in the [Get Started with KendoReact]({% slug getting_started %}) article.

## Installing the Layout Package

All KendoReact packages are distributed through npm and offer a similar installation experience. To use the Timeline component, start with the installation of the Layout npm package and its [dependencies](#toc-dependencies). Use [NodeJS LTS](https://nodejs.org/en) (or a version >= 14).

```sh
npm i @progress/kendo-react-layout
```

## Importing the Component

After installing the package, import the Timeline component in the React App.

In the `src/App.js` file of your React project, import the `Timeline` component from the Layout package.

```jsx-no-run
// ES2015 module syntax
import { Timeline } from '@progress/kendo-react-layout';
```

```jsx-no-run
// CommonJS format
const { Timeline } = require('@progress/kendo-react-layout');
```

## Using the Component

1. Import the events and pass them to the component.

    ```jsx-no-run
       <Timeline
             events={events}
          />
    ```

1. To style the Timeline, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

1. Navigate to <http://localhost:3000> to see the KendoReact Timeline component on the page.

## Activating Your License Key

Using any of the UI components in the KendoReact library requires either a commercial license key or an active trial license key.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Layout package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                       | Description                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                     | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                          | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing          | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-progressbars | Contains the KendoReact ProgressBar component.                                                                                                                              |
| @progress/kendo-react-intl         | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-svg-icons          | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [React Timeline](slug://overview_timeline)
-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the KendoReact Timeline]({% slug api_layout_timeline %})
-   [API Reference of the TimeLineProps]({% slug api_layout_timelineprops %})
