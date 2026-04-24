---
title: Dialog Editing
description: 'Get started with the KendoKendoReact Data Grid supporting built-in dialog editing mode that allows you to edit in an external dialog.'
components: ["datagrid"]
slug: dialog_edit_grid
position: 55
tier: premium
---

# Dialog Editing in KendoReact Data Grid

## Setup the Built-In Dialog Editing

The KendoReact Data Grid supports external dialog editing, enabling you to edit and manipulate data in outside of the Data Grid component. Its features are as follows:


1. Set the [`editable`](slug:api_grid_gridprops#editable) prop of the grid to `editable={{ mode: 'dialog', enabled: true }}`.

2. Set the [`dataItemKey`](slug:api_grid_gridprops#dataItemKey) to indicate the key identifier for editing.

3. Configure the [`edit`](slug:api_grid_gridprops#edit) property to manage the built-in edit state. This will notify the Grid when a row is in edit and the external Dialog will pop-up.

```jsx-no-run
const dataItemKey = 'ProductID';
const [edit, setEdit] = React.useState<EditDescriptor>({});

<Grid
    edit={edit}
    dataItemKey={dataItemKey}
    editable={{ mode: 'dialog', enabled: true }}
/>
```

4. You can decide the way which the Grid will be notified when a row is in edit mode so that the edit Dialog can show.

```jsx-no-run
const rowClick = (event: GridRowClickEvent) => {
    const inEditID = event.dataItem[dataItemKey]

    setEdit({ [inEditID]: true});
};

<Grid
    edit={edit}
    editable={{ mode: 'dialog', enabled: true }}
    onRowClick={rowClick}
/>
```

5. Finally when the editing is finished, handle the new data and update the data state.

```jsx-no-run
const handleItemChange = (event: GridItemChangeEvent) => {
    const inEditID = event.dataItem.ProductID;

    const newData = data.map((item) => {
        const isRowEdited = item.ProductID === inEditID;

        return isRowEdited ? { ...item, ...event.dataItem } : item;
    });

    setData(newData);
    setEdit({});
};

<Grid
    edit={edit}
    editable={{ mode: 'dialog', enabled: true }}
    dataItemKey={dataItemKey}
    onRowClick={rowClick}
    onItemChange={handleItemChange}
/>
```

Here is an example that showcases how to utilize the external Dialog edit in the KendoKendoReact Data Grid.

{% meta height:480 %}
{% embed_file editing-dialog/app.tsx preview %}
{% embed_file editing-dialog/main.tsx %}
{% embed_file editing-dialog/gd-interfaces.ts %}
{% embed_file editing-dialog/gd-sample-products.ts %}
{% endmeta %}


## Editing Input Validation

The built-in edit Dialog has a mechanism to validate inputs by utilizing the Grid Column [`validator`](slug:api_grid_gridcolumnprops#validator) prop.

```jsx-no-run
const nameValidator = (value: string) => {
    if (value?.length < 3) {
        return 'Name must be at least 3 characters long';
    }

    return '';
};
<Grid>
    <GridColumn field="ProductName" validator={nameValidator}/>
<Grid/>
```

The following example showcases how the validation of the edit inputs work.

{% meta height:480 %}
{% embed_file editing-dialog-validation/app.tsx preview %}
{% embed_file editing-dialog-validation/main.tsx %}
{% embed_file editing-dialog-validation/gd-interfaces.ts %}
{% embed_file editing-dialog-validation/gd-sample-products.ts.ts %}
{% endmeta %}

## Custom Edit Dialog

You can also cutomize the edit dialog by passing a custom dialog component to the [`editDialog`](slug:api_grid_gridprops#editDialog) property of the Grid.

The following example showcases how to pass a custom form dialog component.

{% meta height:480 %}
{% embed_file editing-dialog-custom/app.tsx preview %}
{% embed_file editing-dialog-custom/custom-dialog.tsx preview %}
{% embed_file editing-dialog-custom/main.tsx %}
{% embed_file editing-dialog-custom/gd-interfaces.ts %}
{% embed_file editing-dialog-custom/gd-sample-products.ts.ts %}
{% endmeta %}


## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridToolbar]({% slug api_grid_gridtoolbar %})
-   [API Index of the Grid]({% slug api_grid %})
