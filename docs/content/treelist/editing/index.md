---
title: Basics
description: 'Get started with the KendoReact TreeList and see how easy creating, editing, and deleting data records can be.'
components: ["treelist"]
slug: editing_treelist
position: 1
---

# Editing Basics

You can create, update, and delete the data records of the TreeList.

## Getting Started

1. Set the [`editField`]({% slug api_treelist_treelistprops %}#toc-editfield) property of the TreeList&mdash;`editField` will indicate the editable data items and is part of the temporary data items that are used during editing. For the data items in the edit mode, set the edit state in their `editField`. In the following example, the id of the edited item is stored in the application state.

    ```jsx-no-run
        <TreeList
            editField="inEdit"
    ```

    ```jsx-no-run
        dataItem.inEdit = true;
    ```

1. Create a new data tree which has the edit state of each data item by using the [`mapTree`]({% slug api_treelist_maptree %}) function.

    ```jsx-no-run
        <TreeList
            editField="inEdit"
            data={
                mapTree(data, subItemsField, item =>
                    extendDataItem(item, subItemsField, {
                        inEdit: item.id === this.state.editId
                    })
                )
            }
    ```

1. Set the [`editCell`]({% slug api_treelist_treelistcolumnprops %}#toc-editcell) property per column. The built-in editor components are the [`TreeListTextEditor`]({% slug api_treelist_treelisttexteditor %}), [`TreeListNumericEditor`]({% slug api_treelist_treelistnumericeditor %}), [`TreeListDateEditor`]({% slug api_treelist_treelistdateeditor %}), and [`TreeListBooleanEditor`]({% slug api_treelist_treelistbooleaneditor %}). The usage of each component for each column depends on the type of the edited data.

    ```jsx-no-run
        <TreeList
            columns={[
                { field: 'name', editCell: TreeListTextEditor, ... },
                { field: 'position', editCell: TreeListTextEditor, ... },
                { field: 'hireDate', editCell: TreeListDateEditor, ... },
                { field: 'timeInPosition', editCell: TreeListNumericEditor, ... },
                { field: 'fullTime', editCell: TreeListBooleanEditor, ... }
            ]}
    ```

1. Define a function for the [`onItemChange`]({% slug api_treelist_treelistprops %}#toc-onitemchange) event which will handle the data changes during editing. Inside the event, all relevant data, such as the edited data item, the newly entered value, or the edited field will be available as [`onItemChange`]({% slug api_treelist_treelistitemchangeevent %}) parameters.

    ```jsx-no-run
         <TreeList onItemChange={this.onItemChange}>
    ```

    ```jsx-no-run
        onItemChange = (event) => {
            this.setState({
                data: mapTree(
                    this.state.data,
                    subItemsField,
                    item => item.id === event.dataItem.id ?
                        extendDataItem(item, subItemsField, { [event.field]: event.value }) : item
                )
            });
        }
    ```

The following example demonstrates how to set the TreeList in edit mode.

{% meta height:580 %}
{% embed_file editing-row-click/func/app.tsx preview %}
{% embed_file editing-row-click/func/main.tsx %}
{% endmeta %}

## Edit Modes

-   [Inline edit mode]({% slug editing_inline_treelist %})
-   [In-cell edit mode]({% slug incellediting_treelist %})
-   [Editing with external popup form]({% slug external_editing_treelist %})

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
