---
title: Getting Started
description: 'Get started with the KendoReact TreeList package and learn how to use the TreeList component in React projects.'
components: ['treelist']
slug: get_started_treelist
position: 10
---

# Getting Started with the KendoReact TreeList

This guide provides essential information about using the KendoReact TreeList package&mdash;you will learn how to install the TreeList package, add a TreeList component to your project, style the component, and activate your license.

<div data-component="StartKendoReactFreeSection"></div>

After completing this guide, you will be able to reproduce the following example.

{% meta height:240 %}
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
npm i @progress/kendo-react-treelist
```

## Importing the Component

After installing the package, import the TreeList component in the React App. To enable the sending of messages, also import the Message entity and the TreeListMessageSendEvent.

In the `src/App.js` file of your React project, import the `TreeList` component from the TreeList package.

```jsx-no-run
// ES2015 module syntax
import { TreeList } from "@progress/kendo-react-treelist";
```

```jsx-no-run
// CommonJS format
const { TreeList } = require('@progress/kendo-react-treelist');
```

## Using the Component

1. Get the data for the TreeList.

    ```jsx
    import data from './simple-data';
    ```

1. Create the columns for the TreeList.

    ```jsx
    const columns = [
        { field: 'name', title: 'Name', width: '250px', expandable: true },
        { field: 'title', title: 'Title' }
    ];
    ```

1. Specify the field's name, which will provide an array representation of the item subitems.

    ```jsx
    const subItemsField: string = 'employees';
    ```

1. Specify the field's name, which will provide a Boolean representation of the expanded state of each item.

    ```jsx
    const expandField = 'expanded';
    ```

1. Add the component's markup to the `src/App.js` file in your project.

    ```jsx
    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            data={data}
            columns={columns}
        />
    );
    ```

1. To style the TreeList, install and import the [Default theme](https://www.telerik.com/design-system/docs/themes/kendo-themes/default/), which is one of the [three beautiful themes]({% slug themesandstyles %}) for KendoReact.

    6.1. Install the Default theme package.

    ```sh
    npm i @progress/kendo-theme-default
    ```

    6.2. Import the CSS file from the package in `src/App.js`. Add this import before your existing `App.css` import.

    ```jsx
    import '@progress/kendo-theme-default/dist/all.css';
    ```

1. Build and run the application by typing the following command in the root folder of your project:

    ```sh
    npm start
    ```

1. Navigate to <http://localhost:3000> to see the KendoReact TreeList component on the page.

## Activating Your License Key

**Important**: The KendoReact TreeList is a premium component that requires a license key file to be installed in your project. This applies to both trial and commercial usage:

-   **Trial usage**: [Start a free trial](https://www.telerik.com/try/kendo-react-ui) and download a trial license key file
-   **Commercial usage**: [Purchase a license](https://www.telerik.com/kendo-react-ui/pricing) and download a commercial license key file

Without a valid license key file, the component will display licensing warnings and watermarks.

Follow the instructions on the KendoReact [My License page]({% slug my_license %}) to download and install your license key file. You can skip this step if your application already contains a KendoReact license file.

## Dependencies

The TreeList package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

| Package Name                     | Description                                                                                                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| react 18.0.0\*                   | Contains the functionality necessary to define React components.                                                                                                            |
| react-dom                        | Contains the React renderer for the web.                                                                                                                                    |
| @progress/kendo-licensing        | Contains the internal infrastructure related to licensing.                                                                                                                  |
| @progress/kendo-react-intl       | Contains the KendoReact Internationalization package that applies the desired cultures by providing services and pipes for the parsing and formatting of dates and numbers. |
| @progress/kendo-data-query       | Applies sorting, filtering, grouping, and aggregate data operations.                                                                                                        |
| @progress/kendo-react-animation  | Enables the animations in the KendoReact components.                                                                                                                        |
| @progress/kendo-react-data-tools | Delivers components required to manage and control the data in the application.                                                                                             |
| @progress/kendo-react-dateinputs | Contains the KendoReact Date Inputs components that are used to select the date and time for an appointment.                                                                |
| @progress/kendo-react-dropdowns  | Contains the KendoReact Dropdowns, which allows users to choose from a predefined list of options.                                                                          |
| @progress/kendo-react-inputs     | Contains the KendoReact Inputs, which the input of data, based on a specific and predefined format.                                                                         |
| @progress/kendo-drawing          | Contains the Drawing library, which provides interactive vector graphics.                                                                                                   |
| @progress/kendo-react-buttons    | Contains the KendoReact Buttons library, which provides buttons.                                                                                                            |
| @progress/kendo-date-math        | Contains the logic for working with date objects and timezones.                                                                                                             |
| @progress/kendo-svg-icons        | Contains the KendoReact SVG icons.                                                                                                                                          |

## Suggested Links

-   Data operations
    -   [Editing]({% slug editing_treelist %})
    -   [Filtering]({% slug filtering_treelist %})
    -   [Paging]({% slug paging_treelist %})
    -   [Sorting]({% slug sorting_treelist %})
-   Export options
    -   [Excel export]({% slug overview_excelexport_treelist %})
    -   [PDF export]({% slug overview_pdfexport_treelist %})
-   Advanced implementations
    -   [Aggregates]({% slug aggregates_treelist %})
-   More settings
    -   [Column features]({% slug width_treelist %})
    -   [Cell features]({% slug cells_treelist %})
    -   [Virtual Scrolling]({% slug virtualscrolling_treelist %})
    -   [Rows Drag and Drop]({% slug dragdrop_treelist %})
    -   [Selection]({% slug selection_treelist %})
    -   [Flat data]({% slug flat_data_treelist %})
    -   [Globalization]({% slug globalization_treelist %})

## Learning Resources

-   [Getting Started with KendoReact]({% slug getting_started %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [Explore the Finance Portfolio Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/finance-application/)
-   [Explore the Coffee Warehouse Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/react-coffee-warehouse-dashboard/)
-   [Explore the Github Issues Grid Sample Application](https://www.telerik.com/kendo-react-ui/components/sample-applications/issues-grid/)
