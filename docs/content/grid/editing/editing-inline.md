---
title: Inline Editing
description: 'Get started with the KendoKendoReact Data Grid enabling you to create, edit, and delete data records inline.'
components: ["datagrid"]
slug: editing_inline_grid
position: 40
tier: premium
subject: Inline Editing feature of the Grid
---

# Inline Editing in KendoReact Data Grid

The KendoReact Data Grid enables you to create, update, and delete data records inline.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates how to implement the inline editing.

{% meta height:480 %}
{% embed_file editing-multiline/func/app.tsx preview %}
{% embed_file editing-multiline/func/main.tsx %}
{% endmeta %}

## Setup

1.  Set the `editable` prop of the Grid to true and configure its [`edit`]({% slug api_grid_gridprops %}#toc-edit) property to manage the built-in edit state and track which rows are being edited.

    ```jsx-no-run
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    ```

    ```jsx
    <Grid
        edit={edit}
        editable={true}
    >
    ```

1.  Configure the command column by defining the command buttons inside the [GridCellProps]({% slug api_grid_gridcellprops %}) component. In the example below, we use a function which receives all functions that will be executed from the command buttons and passes them to the command cell component.

    ```jsx
    const CommandCell = (props) => {
        const { edit, enterEdit, remove, add, discard, update, cancel } = props;
        return (
            <MyCommandCell
                {...props}
                edit={edit}
                enterEdit={enterEdit}
                remove={remove}
                add={add}
                discard={discard}
                update={update}
                cancel={cancel}
            />
        );
    };
    ```

    ```jsx
    export const MyCommandCell = (props) => {
        const { dataItem, edit, remove, add, update, enterEdit, discard, cancel } = props;

        const [visible, setVisible] = React.useState(false);

        const inEdit = edit[dataItem.ProductID];
        const isNewItem = dataItem.new === true;

        const onDeleteData = () => {
            remove(dataItem);
            setVisible(!visible);
        };

        const toggleDialog = () => {
            setVisible(!visible);
        };

        let commandLabel = 'Edit';
        if (inEdit) {
            commandLabel = isNewItem ? 'Add' : 'Update';
        }

        // Extract the nested ternary operation into a variable
        let secondaryCommandLabel = 'Remove';
        if (inEdit) {
            secondaryCommandLabel = isNewItem ? 'Discard' : 'Cancel';
        }

        return (
            <td className="k-command-cell">
                <Button
                    themeColor={'primary'}
                    onClick={() => {
                        if (inEdit) {
                            if (isNewItem) {
                                add(dataItem);
                            } else {
                                update(dataItem);
                            }
                        } else {
                            enterEdit(dataItem);
                        }
                    }}
                >
                    {commandLabel}
                </Button>
                <Button
                    themeColor={'primary'}
                    onClick={() => {
                        if (inEdit) {
                            if (isNewItem) {
                                discard(dataItem);
                            } else {
                                cancel(dataItem);
                            }
                        } else {
                            toggleDialog();
                        }
                    }}
                >
                    {secondaryCommandLabel}
                </Button>
                {visible && (
                    <Dialog title={'Delete Data'} onClose={toggleDialog} width={350}>
                        <div>Are you sure you want to delete item with ID {dataItem.ProductID}?</div>
                        <DialogActionsBar>
                            <Button onClick={onDeleteData}>Delete</Button>
                            <Button onClick={toggleDialog}>Cancel</Button>
                        </DialogActionsBar>
                    </Dialog>
                )}
            </td>
        );
    };
    ```

1.  Define the `enterEdit`, `remove`, `add`, `update`, `discard` and `cancel` functions needed by the command cell.

    ```jsx
    const enterEdit = (dataItem: Product) => {
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: true }));
    };
    ```

    ```jsx
    const remove = (dataItem: Product) => {
        deleteItem(dataItem);
        setData((prevData) => prevData.filter((item) => item.ProductID !== dataItem.ProductID));
    };
    ```

    ```jsx
    const add = (dataItem: Product) => {
        dataItem.new = false;
        insertItem(dataItem);
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: false }));
    };
    ```

    ```jsx
    const discard = (dataItem: Product) => {
        const newData = [...data.filter((item) => item.ProductID !== dataItem.ProductID)];
        setData(newData);
    };
    ```

    ```jsx
    const update = (dataItem: Product) => {
        updateItem(dataItem);
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: false }));
    };
    ```

    ```jsx
    const cancel = (dataItem: Product) => {
        const originalItem = getItems().find((p) => p.ProductID === dataItem.ProductID);

        if (originalItem) {
            const newData = data.map((item) => (item.ProductID === originalItem.ProductID ? originalItem : item));
            setData(newData);
            setEdit((edit) => ({ ...edit, [dataItem.ProductID]: false }));
        }
    };
    ```

1.  Define a function for the [`onItemChange`]({% slug api_grid_gridprops %}#toc-onitemchange) event which will handle the data changes during editing. The event provides the edited data item, the field being changed, and the new value available as [`onItemChange`]({% slug api_grid_griditemchangeevent %}) parameters.

    ```jsx
    <Grid onItemChange={itemChange}>
    ```

    ```jsx
    const itemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID
                ? {
                      ...item,
                      [event.field || '']: event.value
                  }
                : item
        );
        setData(newData);
    };
    ```

1.  Per column, set the options that are related to row editing:

-   [`editable`]({% slug api_grid_gridcolumnprops %}#toc-editable) &mdash; Determines if the column is editable.
-   [`editor`]({% slug api_grid_gridcolumnprops %}#toc-editor) &mdash; Specifies the data type of the column and, based on that, sets the appropriate editor.

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
