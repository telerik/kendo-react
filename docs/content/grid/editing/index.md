---
title: Overview
description: 'Get started with the KendoKendoReact Data Grid and see how easy creating, editing, and deleting data records can be.'
components: ["datagrid"]
slug: editing_grid
position: 10
tier: free
---

# KendoReact Data Grid Editing Overview

The KendoReact Data Grid enables you to create, update, and delete data records by providing built-in `edit` state functionality.

## Enabling Editing

The KendoKendoReact Data Grid supports editing in two modes:

-   [Built-in State Management](#using-the-built-in-state-management-for-editing): The Grid manages its own editing state internally.

-   [Controlled Mode](#using-the-editing-in-controlled-mode): The editing state is externally managed by handling events and updating the state accordingly.

## Using the Built-in State Management for Editing

To enable filtering using the built-in state management mechanism, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to allow the Grid to handle paging automatically.

1. Set the `dataItemKey` prop to a unique value field from the data bound to the Grid.

1. Configure the [`editable`]({% slug api_grid_gridprops %}#toc-editable) prop of the Grid to enable editing. For example, setting it to `{ mode: 'incell' }` will enable the incell editing.

1. Assign a function to the [`onItemChange`](slug:api_grid_gridprops#onitemchange) event of the Grid to handle the item editing.

1. (Optional) Disable editing for specific columns setting its [editable]({% slug api_grid_gridcolumnprops %}#toc-editable) property to `false`.

1. (Optional) Set the type of the editor per column using the [`editor`]({% slug api_grid_gridcolumnprops %}#toc-editor) property of the GridColumn component. The built-in editor types are `text`, `date`, `number` and `boolean`. The usage of each editor for each column depends on the type of the edited data.

The following example demonstrates how to implement editing using the built-in state management of the KendoKendoReact Data Grid.

{% meta height:490 %}
{% embed_file editing-row-click/built-in/func/app.tsx preview %}
{% embed_file editing-row-click/built-in/func/main.tsx %}
{% endmeta %}

## Using the Editing in Controlled Mode

1.  Set the `editable` prop of the Grid to true and configure its [`edit`]({% slug api_grid_gridprops %}#toc-edit) property to manage the built-in edit state and track which rows are being edited.

    ```jsx-no-run
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    ```

    ```jsx
    <Grid
        edit={edit}
        editable={{ mode: 'incell' }}
    >
    ```

1.  Handle the [`onEditChange`]({% slug api_grid_gridprops %}#toc-oneditchange) to update the edit state of the Grid internally.

    ```jsx
    <Grid
        onEditChange={handleEditChange}
    >
    ```

    ```jsx
    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };
    ```

1.  Disable editing for specific columns setting its [editable]({% slug api_grid_gridcolumnprops %}#toc-editable) property to `false`.

    ```jsx
    <Grid>
        <Column field="ProductID" title="Id" editable={false} />
    </Grid>
    ```

1.  Set the type of the editor per column using the [`editor`]({% slug api_grid_gridcolumnprops %}#toc-editor) property of the GridColumn component. The built-in editor types are `text`, `date`, `number` and `boolean`. The usage of each editor for each column depends on the type of the edited data.

    ```jsx
    <Grid>
        <Column field="ProductName" title="Name" editor="text" />
        <Column field="FirstOrderedOn" title="First Ordered" editor="date" />
        <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
        <Column field="Discontinued" title="Discontinued" editor="boolean" />
    </Grid>
    ```

1.  Define a function for the [`onItemChange`]({% slug api_grid_gridprops %}#toc-onitemchange) event which will handle the data changes during editing.
    The event provides the edited data item, the field being changed, and the new value available as [`onItemChange`]({% slug api_grid_griditemchangeevent %}) parameters.

    ```jsx
    <Grid onItemChange={onItemChange}>
    ```

    ```jsx
    const itemChange = (event: GridItemChangeEvent) => {
        if (event.field) {
            setData((data) =>
                data.map((item) =>
                    item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
                )
            );
        }
        setChanges(true);
    };
    ```

## Preventing Column Editing

To prevent a column from being editable, set the [`editable`]({% slug api_grid_gridcolumnprops %}#toc-editable) prop to `false` for the required column:

```jsx
<Column field="ProductID" title="Id" width="50px" editable={false} />
```

The following example demonstrates how to implement the editing of the Grid data. Click the **Add New** button to add a new record at the end of the Grid, and the **Cancel** one to dismiss the active editing.

{% meta height:500 %}
{% embed_file editing-row-click/controlled/func/app.tsx preview %}
{% embed_file editing-row-click/controlled/func/main.tsx %}
{% endmeta %}

## Optimizing Editing Performance for Large Datasets

When working with large datasets in editable Grids, the traditional approach of searching through arrays to update edited items can cause performance bottlenecks. Each cell edit operation requires iterating through the entire array to find the matching item for updates, which becomes noticeable with datasets containing thousands of items.

The KendoKendoReact Data Grid provides a [`dataIndex`](slug:api_grid_griditemchangeevent#dataindex) property in the [`GridItemChangeEvent`](slug:api_grid_griditemchangeevent) that eliminates this issue by providing direct access to the edited item's position in the data array.

> caption Optimized editing approach using dataIndex

```jsx
const itemChange = (event: GridItemChangeEvent) => {
    if (event.field) {
        setData((data) =>
            data.with(event.dataIndex, { ...event.dataItem, [event.field!]: event.value })
        );
    }
};
```

The following example demonstrates the editing performance difference between both approaches using 50,000 items.

{% meta height:730 %}
{% embed_file editing-performance-dataindex/func/app.tsx preview %}
{% embed_file editing-performance-dataindex/func/main.tsx %}
{% endmeta %}

> For older browser support, you can implement a polyfill for the `Array.with()` method.

## KendoReact Data Grid Editing APIs

-   [Inline editing]({% slug editing_inline_grid %})
-   [Inline editing with custom editors]({% slug customediting_grid %})
-   [In-cell editing]({% slug incellediting_grid %})
-   [In-cell editing of all cells]({% slug alledit_grid %})
-   [Editing with external popup form]({% slug external_editing_grid %})
-   [Editing with external Redux Form]({% slug editing_redux_form_grid %})

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
