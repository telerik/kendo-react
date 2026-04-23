---
title: Getting Started
page_title: 'Get Started with React Scheduler | KendoReact Docs & Demos'
description: 'Get started with the KendoReact Scheduler component and learn how to use it by following the steps in this step-by-step tutorial.'
components: ['scheduler']
slug: getstarted_scheduler
position: 10
---

# Getting Started with the KendoReact Scheduler

This guide provides essential information about using the KendoReact Scheduler. You will learn how to install the package, add a Scheduler component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:770 %}
{% embed_file overview/basic/func/app.tsx preview %}
{% embed_file overview/basic/func/main.tsx %}
{% endmeta %}

## Before You Begin

```sh
npm create vite@latest my-app -- --template react
```

This guide requires that you have **basic knowledge of React and TypeScript**, and that you have already created [**a blank React project**](slug://getting_started).

> tip You can speed up the development of your KendoReact application with the [Kendo UI Template Wizard for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard).

## Install the Component

```sh
npm i @progress/kendo-react-scheduler
```

## Importing the Component

Once you install the npm package, import the Scheduler and the components that are necessary to display the day, month, and week view.

```jsx
// ES2015 module syntax
import { Scheduler, AgendaView, TimelineView, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
```

```jsx
// CommonJS format
const {
    Scheduler,
    AgendaView,
    TimelineView,
    DayView,
    WeekView,
    MonthView
} = require('@progress/kendo-react-scheduler');
```

## Using the Component

1. Create an `events-utc.js` file that will contain the data and a predefined display date, and then import them.

    ```jsx
    import { sampleData, displayDate } from './events-utc';
    ```

2. Add the Scheduler component together with the `AgendaView`, `TimelineView`, `DayView`, `WeekView`, and `MonthView`. Pass the `sampleData` and `displayDate` that are obtained from the `events-utc.js` file.

    ```jsx
    return (
        <Scheduler data={sampleData} defaultDate={displayDate}>
            <AgendaView />
            <TimelineView />
            <DayView />
            <WeekView />
            <MonthView />
        </Scheduler>
    );
    ```

3. To style the Scheduler, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    3.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    3.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

4. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

5. Navigate to <http://localhost:3000> to see the KendoReact Scheduler component on the page.

## Activating Your License Key

**Important**: The KendoReact Scheduler is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Scheduler package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                     | Description                                                                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                   | Contains the functionality necessary to define React components.                                                                                                           |
| react-dom                        | Contains the React renderer for the web.                                                                                                                                   |
| @progress/kendo-licensing        | Contains the internal infrastructure related to licensing.                                                                                                                 |
| @progress/kendo-react-intl       | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers |
| @progress/kendo-react-popup      | Contains the KendoReact Popup components.                                                                                                                                  |
| @progress/kendo-react-dialogs    | Contains the KendoReact Dialogs components.                                                                                                                                |
| @progress/kendo-react-dateinputs | Contains the KendoReact Date Input components.                                                                                                                             |
| @progress/kendo-react-dropdowns  | Contains the KendoReact Dropdown components.                                                                                                                               |
| @progress/kendo-react-inputs     | Contains the KendoReact Input components.                                                                                                                                  |
| @progress/kendo-react-buttons    | Contains the KendoReact Button components.                                                                                                                                 |
| @progress/kendo-date-math        | Contains the KendoReact typescript package exporting functions for Date manipulations.                                                                                     |
| @progress/kendo-svg-icons        | Contains the KendoReact SVG icons.                                                                                                                                         |

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler %})
-   [Editing]({% slug editing_scheduler %})
-   [Grouping]({% slug grouping_scheduler %})
-   [Timezones]({% slug timezones_scheduler %})
-   [Keyboard Navigation]({% slug keyboard_navigation_scheduler %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
