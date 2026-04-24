---
title: In-Cell Editing
description: 'Get started with the KendoKendoReact Data Grid supporting in-cell editing mode that allows you to manipulate data cell by cell for additional flexibility.'
components: ["datagrid"]
slug: incellediting_grid
position: 20
tier: free
---

# In-Cell Editing in KendoReact Data Grid

To enable in-cell editing in the KendoReact Data Grid you have to:

1. Set the `editable` prop of the Grid to true and configure its [`edit`]({% slug api_grid_gridprops %}#toc-edit) property to manage the built-in edit state and track which rows are being edited.

    ```jsx-no-run
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    ```

    ```jsx
    <Grid
        edit={edit}
        editable={{ mode: 'incell' }}
    >
    ```

1. Handle the `handleItemChange` event of the Grid in order to update the bound data based on the applied edits.

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

1. Handle the [`onEditChange`]({% slug api_grid_gridprops %}#toc-oneditchange) to update the edit state of the Grid.

    ```jsx
    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };
    ```

You can see a live implementation of this approach in the sample below, where state management and related functions update the Grid’s `data` and its built-in `edit` state.

{% meta height:480 %}
{% embed_file editing-in-cell/func/app.tsx preview %}
{% embed_file editing-in-cell/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
