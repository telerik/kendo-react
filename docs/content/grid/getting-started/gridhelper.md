---
title: GridHelper
description: 'Get automatic data operations and features for the KendoReact Data Grid with the GridHelper component'
components: ["datagrid"]
slug: gridhelper_grid
position: 20
---

# GridHelper

The GridHelper is a component that wraps the KendoReact Grid, enhancing its functionality by providing built-in features for data operations, commonly requested functions, and a user-friendly interface that gives end users different ways to customize the Data Grid (such as hiding columns, exporting to PDF, and more).

> Some of the features showcased in the GridHelper are part of the [Premium offering](slug:free_components_introduction) of the Grid.

## Getting Started

To use the GridHelper:

1. Copy the GridHelper file content from the example below and import it where the KendoReact Data Grid will be used
1. Wrap the KendoReact Data Grid within the GridHelper

The following example demonstrates all the features that are currently available for the GridHelper:

{% meta height:590 %}
{% embed_file gridhelper/func/app.tsx preview %}
{% embed_file gridhelper/func/main.tsx %}
{% embed_file gridhelper/func/GridHelper.tsx  %}
{% endmeta %}

## Features

The GridHelper provides the following enhancements to the KendoReact Data Grid:

-   Built-in data operations for paging, sorting, filtering, grouping.
-   Configuration button for enabling Grid's feature (paging, sorting, grouping, selection, filtering).
-   Configuration button for show/hide columns.
-   Global filter in the toolbar
-   Highlights for within the cells for the matching filter expression from the toolbar filter.
-   Built-in option for selection (requires dataItemKey to be set).
-   PDFExport
-   ExcelExport
-   Button for expand/collapse all groups
-   Event for getting an array with the selected dataItems

## Properties

Most of the GridHelper features render elements in the Grid's toolbar and are enabled through the GridHelper's `toolbarSettings`. Here is a list of all properties that can be set within the `toolbarSettings`:

-   `externalFilter` (boolean)&mdash;Renders an input element for global search within the visible columns. The global filter will filter the underlying values within the data items by calling their `toString` method.
-   `filterHighlights` (boolean)&mdash;If a cell contains text that matches the global filter value, that text will be wrapped in a SPAN element to visualize the match.
-   `expandCollapseAllButton` (boolean)&mdash;Renders a button for expanding and collapsing all groups.
-   `pdfExportButton` (boolean)&mdash;Renders a button for PDF Export.
-   `excelExportButton` (boolean)&mdash;Renders a button for Excel Export.
-   `showFeaturesConfigurator` (boolean)&mdash;Renders a button that opens a menu for enabling/disabling Grid features (paging, sorting, filtering, grouping, selection).
-   `showColumnsConfigurator` (boolean)&mdash;Renders a button that opens a menu for showing/hiding columns.

    ```jsx-no-run
    <GridHelper
        toolbarSettings={{
            filterHighlights: true,
            expandCollapseAllButton: true,
            pdfExportButton: true,
            excelExportButton: true,
            externalFilter: true,
            showFeaturesConfigurator: true,
            showColumnsConfigurator: true,
        }}
    ```

The data related settings for the GridHelper are set directly in the component:

-   `initialDataState` (State)&mdash;Sets the initial DataState of the Grid. Can be used for passing initial filter, sorting and group expressions and also for setting the paging properties `take` and `skip`.

    ```jsx-no-run
    initialDataState = {
        sort: [{ field: "code", dir: "asc" }],
        group: [{ field: 'Category.CategoryName', dir: 'asc' }],
        take: 10,
        skip: 0
    };
    ```

The following properties can be set in both the GridHelper and the Grid:

-   `pageable`
-   `sortable`
-   `filterable`
-   `groupable`
-   `dataItemKey`
-   `selectable`
-   `data`

When `filterHighlights` is enabled and there is a custom cell for a column, ensure that you are returning the custom cell through the `GridCellProps.render` method. The following example demonstrates the syntax for setting a custom cells through the column's `cells` property.

```jsx
const ProductNameCell = (props) => {
    const content = (
        <td {...props.tdProps}>
            <div>
                <span>{props.dataItem[props.field]}</span>
            </div>
        </td>
    );

    return props.render ? props.render.call(undefined, content, props) : content;
};
```

## Events

-   `onSelectedItemsChange`&mdash;Event that fires every time the selection in the Grid changes and provides an array with the selected dataItems.

    ```jsx-no-run
    const onSelectedItemsChange = (ev) => {
        console.log(ev.selectedItems);
    };
    ```

## Additional information

The GridHelper toolbar renders its components within the Grid's toolbar. If custom content is added manually to the Grid's toolbar (through GridToolbar), that content will be included in the GridHelper's toolbar after the external filter input and before the buttons on the right side. If the `toolbarSettings` property of the GridToolbar is not set, it will remove the toolbar or render the one from the Grid (if present).

The `externalFilter` filters the stringified values of the underlying dataItem fields from visible columns. However, the `filterHighlights` will highlight matching strings within cells, and if the dataItem value does not match the rendered value in the cell, there will be a mismatch between the filter and the highlight. In such cases, the `filterHighlights` can be disabled.

For the `showColumnsConfiguration` it is mandatory to have unique titles for the columns (or unique fields if no titles are provided).

## Suggested Links

-   [React Data Grid](slug://overview_grid)
-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
