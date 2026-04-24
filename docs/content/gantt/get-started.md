---
title: Getting Started
description: 'Get started with the KendoReact Gantt package and learn how to use the Gantt component in React projects.'
components: ['gantt']
slug: get_started_gantt
position: 1
---

# Getting Started with the KendoReact Gantt

This guide provides essential information about using the KendoReact Gantt package&mdash;you will learn how to install the Gantt package, add a Gantt component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:580 %}
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
npm i @progress/kendo-react-gantt
```

## Importing the Component

After installing the package, import the Gantt component in the React App. To use the Gantt views, also import the GanttDayView, GanttWeekView, and GanttMonthView components. To add some sample data to the Gantt, import the `simpleTasks` array from the example above.

In the App component file of your React project (for example, src/App.js), add the imports.

````jsx-no-run
    // ES2015 module syntax
    import {
    Gantt,
    GanttWeekView,
    GanttMonthView,
    GanttDayView,
    GanttTextFilter,
    GanttTaskModelFields,
    GanttDependencyModelFields
    } from '@progress/kendo-react-gantt';
    import { simpleDependencies, simpleTasks } from './simpleData';
    ```

```jsx-no-run
    // ES2015 module syntax
    const {
    Gantt,
    GanttWeekView,
    GanttMonthView,
    GanttDayView,
    GanttTextFilter,
    GanttTaskModelFields,
    GanttDependencyModelFields
    } = require('@progress/kendo-react-gantt');
    const { simpleDependencies, simpleTasks } = require('./simpleData');
````

## Using the Component

1. After installing the Gantt package and importing the component, add the Gantt tags to the App component file of your React project (for example, src/App.js). Then add the Gantt views.

    ```jsx-no-run
        <Gantt
        style={ganttStyle}
        taskData={taskData}
        taskModelFields={taskModelFields}
        dependencyData={dependencyData}
        dependencyModelFields={dependencyModelFields}
        columns={columns}
        >
            <GanttDayView />
            <GanttWeekView />
            <GanttMonthView />
        </Gantt>
    ```

1. Add the columns that correspond to the sampleData array.

    ```jsx-no-run
        const columns = [
            {
                field: taskModelFields.id,
                title: 'id',
                width: 70
            },
            {
                field: taskModelFields.title,
                title: 'Title',
                width: 200,
                expandable: true,
                filter: GanttTextFilter
            },
            {
                field: taskModelFields.start,
                title: 'Start',
                width: 120,
                format: '{0:MM/dd/yyyy}'
            },
            {
                field: taskModelFields.end,
                title: 'End',
                width: 120,
                format: '{0:MM/dd/yyyy}'
            }
        ];
    ```

1. Map the task model fields based on the data inside the `sampleData` array.

    ```jsx
    const taskModelFields = {
        id: 'id',
        start: 'start',
        end: 'end',
        title: 'title',
        percentComplete: 'percentComplete',
        isRollup: 'isRollup',
        isExpanded: 'isExpanded',
        isInEdit: 'isInEdit',
        children: 'subtasks'
    };
    ```

1. To style the Gantt, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

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

1. Navigate to <http://localhost:3000> to see the KendoReact Gantt component on the page.

## Activating Your License Key

**Important**: The KendoReact Gantt is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The Gantt package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                     | Description                                                                                                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                   | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                        | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing        | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-drawing          | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-data-query       | Applies sorting, filtering, grouping, and aggregate data operations.                                                                                                        |
| @progress/kendo-react-animation  | Enables the animations in the KendoReact components.                                                                                                                        |
| @progress/kendo-react-data-tools | Delivers components required to manage and control the data in the application.                                                                                             |
| @progress/kendo-react-dateinputs | Contains the KendoReact Date Inputs components that are used to select the date and time for an appointment.                                                                |
| @progress/kendo-react-dropdowns  | Contains the KendoReact Dropdowns, which allows users to choose from a predefined list of options.                                                                          |
| @progress/kendo-react-inputs     | Contains the KendoReact Inputs, which the input of data, based on a specific and predefined format.                                                                         |
| @progress/kendo-react-intl       | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-react-buttons    | Contains the KendoReact Buttons library, which provides buttons.                                                                                                            |
| @progress/kendo-react-treelist   | Contains the KendoReact TreeList, which renders the left side of the component that contains the columns.                                                                   |
| @progress/kendo-svg-icons        | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   [Sorting]({% slug sorting_gantt %})
-   [Filtering]({% slug filtering_gantt %})
-   [Task types]({% slug task_types_gantt %})
-   [Dependency types]({% slug dependency_types_gantt %})
-   [Row resize]({% slug row_size_gantt %})
-   [Flat Data]({% slug flat_data_gantt %})
-   [Slots customization]({% slug slots_gantt %})
-   [Timezones]({% slug timezones_gantt %})
-   [Globalization]({% slug globalization_gantt %})

## Learning Resources

-   [React Gantt](slug://overview_gantt)
-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
