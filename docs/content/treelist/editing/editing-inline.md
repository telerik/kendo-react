---
title: Inline
description: 'Get started with the KendoReact TreeList enabling you to create, edit, and delete data records inline.'
components: ["treelist"]
slug: editing_inline_treelist
position: 2
---

# Inline

The KendoReact TreeList enables you to create, update, and delete data records inline.

## Basic Concepts

The edit mode of the TreeList rows is based on the value of the [`editField`]({% slug api_treelist_treelistprops %}#toc-editField) property.

{% meta height:580 %}
{% embed_file editing-inline/func/app.tsx preview %}
{% embed_file editing-inline/func/main.tsx %}
{% embed_file editing-inline/func/my-command-cell.tsx %}
{% endmeta %}

## Setup

1. Set the field which will indicate the editable data items by using the [`editField`]({% slug api_treelist_treelistprops %}#toc-editfield) property. This field is part of the temporary data items which are used during editing.

    ```tsx-no-run
        <TreeList
            editField="inEdit"
    ```

1. Configure the command column by defining the command buttons inside the [TreeListCell]({% slug api_treelist_treelistcell %}) component. To render the command cell, use a factory function which returns a functional component that has access to all handler functions and the value of the TreeList `editField` property.

    ```tsx-no-run
        const CommandCell = MyCommandCell(enterEdit, remove, save, cancel, addChild, editField);
    ```

    ```tsx-no-run
        const MyCommandCell = (
            enterEdit: (dataItem: any) => void,
            remove: (dataItem: any) => void,
            save: (dataItem: any) => void,
            cancel: (dataItem: any) => void,
            addChild: (dataItem: any) => void,
            editField: string
        ) => {
            return (props: TreeListCellProps) => {
                const { dataItem } = props;
                return dataItem[editField] ? (
                    <td>
                        <Button type="button" onClick={() => save(dataItem)}>
                            {dataItem.isNew ? 'Add' : 'Update'}
                        </Button>
                        <Button type="button" onClick={() => cancel(dataItem)}>
                            {dataItem.isNew ? 'Discard' : 'Cancel'}
                        </Button>
                    </td>
                ) : (
                    <td>
                        <Button type="button" onClick={() => addChild(dataItem)}>
                            Add Employee
                        </Button>
                        <Button type="button" onClick={() => enterEdit(dataItem)}>
                            Edit
                        </Button>
                        <Button type="button" onClick={() => remove(dataItem)}>
                            Remove
                        </Button>
                    </td>
                );
            };
        };
    ```

1. Set the [`editCell`]({% slug api_treelist_treelistcolumnprops %}#toc-editcell) and [`cell`]({% slug api_treelist_treelistcolumnprops %}#toc-cell) properties per column.

    ```tsx-no-run
        const columns: Array<TreeListColumnProps | {}> = [
            { editCell: TreeListTextEditor, ... },
            { editCell: TreeListTextEditor, ... },
            { editCell: TreeListBooleanEditor, ... },
            { cell: CommandCell, ... }
        ];
    ```

1. Define a function for the [`onItemChange`]({% slug api_treelist_treelistprops %}#toc-onitemchange) event which will handle any input changes during editing. Inside the event, all relevant data, such as the edited data item, the newly entered value, or the edited field will be available as [`onItemChange`]({% slug api_treelist_treelistitemchangeevent %}) parameters.

    ```tsx-no-run
         <TreeList onItemChange={onItemChange}>
    ```

    ```tsx-no-run
        const onItemChange = (event: TreeListItemChangeEvent) => {
            const field: any = event.field;
            setState({
                ...state,
                data: mapTree(state.data, subItemsField, (item) =>
                    item.id === event.dataItem.id ? extendDataItem(item, subItemsField, { [field]: event.value }) : item
                )
            });
        };
    ```

1. Define the functions which will set the item in edit mode and create a new item in edit mode. You can call these functions from the command buttons in the command cell.

    ```tsx-no-run
        const enterEdit = (dataItem: any) => {
            setState({
                ...state,
                inEdit: [...state.inEdit, extendDataItem(dataItem, subItemsField)]
            });
        };
    ```

    ```tsx-no-run
        const addRecord = () => {
            const newRecord: { id: number; isNew: boolean } = createNewItem();
            setState({
                ...state,
                data: [newRecord, ...state.data],
                inEdit: [...state.inEdit, { ...newRecord }]
            });
        };
    ```

1. Define the functions which will handle the `save`, `cancel`, `remove`, and `addChild` actions. You can call these functions from the command buttons, the toolbar template, or a button which is outside of the TreeList.

    ```tsx-no-run
        const save = (dataItem: any) => {
            const { isNew, inEdit, ...itemToSave } = dataItem;
            setState({
                ...state,
                data: mapTree(state.data, subItemsField, (item) => (item.id === itemToSave.id ? itemToSave : item)),
                inEdit: state.inEdit.filter((i) => i.id !== itemToSave.id)
            });
        };
    ```

    ```tsx-no-run
        const cancel = (editedItem: any) => {
            const { inEdit, data } = state;
            if (editedItem.isNew) {
                return remove(editedItem);
            }

            setState({
                ...state,
                data: mapTree(data, subItemsField, (item) =>
                    item.id === editedItem.id ? inEdit.find((i) => i.id === item.id) : item
                ),
                inEdit: inEdit.filter((i) => i.id !== editedItem.id)
            });
        };
    ```

    ```tsx-no-run
        const remove = (dataItem: any) => {
            setState({
                ...state,
                data: removeItems(state.data, subItemsField, (i) => i.id === dataItem.id),
                inEdit: state.inEdit.filter((i) => i.id !== dataItem.id)
            });
        };
    ```

    ```tsx-no-run
        const addChild = (dataItem: any) => {
            const newRecord: { id: number; isNew: boolean } = createNewItem();

            setState({
                ...state,
                inEdit: [...state.inEdit, newRecord],
                expanded: [...state.expanded, dataItem.id],
                data: modifySubItems(
                    state.data,
                    subItemsField,
                    (item) => item.id === dataItem.id,
                    (subItems) => [newRecord, ...subItems]
                )
            });
        };
    ```

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Reference of the TreeListToolbar]({% slug api_treelist_treelisttoolbar %})
-   [API Index of the TreeList]({% slug api_treelist %})
