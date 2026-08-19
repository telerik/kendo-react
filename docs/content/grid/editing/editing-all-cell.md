---
title: In-Cell Editing of All Cells
description: 'Learn how to place all cells in the KendoReact Grid in in-cell edit mode and manage updates from a single editing surface.'
components: ['grid']
slug: alledit_grid
position: 30
tier: free
---

# In-Cell Editing of All Cells

The KendoReact Grid allows you to set the in-cell edit mode to all its cells at the same time.

This setup is useful when users need a spreadsheet-like editing experience and should be able to move directly from cell to cell without entering edit mode one row at a time.

The following example demonstrates in-cell editing with all cells placed in edit mode simultaneously by pre-populating the built-in `edit` state with all rows and columns on initial render.

{% meta height:700 %}
{% embed_file editing-all/func/app.tsx preview %}
{% embed_file editing-all/func/main.tsx %}
{% endmeta %}

## Setting All Cells in Edit Mode

To place all cells in edit mode on the initial render, follow these steps:

1. Store the Grid data and the edit descriptor in React state.

    ```tsx
    const allInEdit = () => {
        let result = {};
        const editedColumns = Object.keys(sampleProducts[0]); //the column names
        sampleProducts.forEach((product) => {
            result[product.ProductID] = editedColumns;
        });

        return result;
    };

    const [data, setData] = React.useState<Array<Product>>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>(allInEdit);
    ```

    Store the current Grid data and the edit descriptor in the component so the Grid can render the latest values and keep all required cells in edit mode from the start. The `data` collection holds the current rows, while the `edit` descriptor defines which fields should open as editors on the initial render.

2. Configure the Grid to use the edit descriptor on the initial render.

    ```tsx
    <Grid
        data={data}
        autoProcessData={true}
        dataItemKey="ProductID"
        editable={true}
        defaultEdit={edit}
        onItemChange={handleItemChange}
    >
    ```

    Pass the edit descriptor through [`defaultEdit`](slug:api_grid_gridprops#defaultedit), set [`dataItemKey`](slug:api_grid_gridprops#dataitemkey), and enable [`editable`](slug:api_grid_gridprops#editable). This allows the Grid to match each editor to the correct row and field on the initial render. Unlike standard in-cell editing, the editors are available immediately, so users can move through the Grid and update values without activating each cell first.

3. Configure the columns and update the edited data when values change.

    ```tsx
    <Column field="ProductID" title="Id" width="50px" editable={false} />
    <Column field="ProductName" />
    <Column field="FirstOrderedOn" width="150px" editor="date" format="{0:d}" />
    <Column field="UnitsInStock" width="150px" editor="numeric" />
    <Column field="Discontinued" width="120px" editor="boolean" />

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };
    ```

    Keep fields such as identifiers or computed values read-only by setting the column [`editable`](slug:api_grid_gridcolumnprops#editable) option to `false`. Use column editors that match the field type so the Grid renders the proper input for each value, such as date, numeric, or boolean editors. The Grid emits [`onItemChange`](slug:api_grid_gridprops#onitemchange) for each edited value, and the handler writes the new value back to the data state so the Grid re-renders with the latest data.

Use this pattern when you want fast bulk editing in memory. If your application saves changes row by row or relies on a custom review step, combine edit-all mode with toolbar actions such as save, cancel, or validation commands.

## Suggested Links

-   [Data Query Overview](slug:overview_dataquery)
-   [API Reference of the Grid](slug:api_grid_gridprops)
-   [API Reference of the GridToolbar](slug:api_grid_gridtoolbar)
-   [API Index of the Grid](slug:api_grid)
