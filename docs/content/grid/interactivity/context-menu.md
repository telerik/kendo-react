---
title: Context Мenu
description: 'Get started with the KendoKendoReact Data Grid which supports Context menu'
components: ["datagrid"]
slug: context_menu_grid
position: 30
tier: premium
subject: Grid Context Menu feature
---

# Context Menu

The KendoReact Data Grid enables you to display a context menu by using the Context Menu component out-of-the-box. The **onContextMenu** event is fired when grid cells are rendered and the context menu is triggered on a right click.

<CtaPanelOverview></CtaPanelOverview>

The built-in context menu of the Grid allows you to control the rows selection and the column sorting. To enable it you should:

1. Set the [`contextMenu`](slug:api_grid_gridprops#contextMenu) prop of the Grid to `true` to enable the ContextMenu component.

1. Enable the [`selectable`](slug:api_grid_gridprops#selectable) prop allow rows selection.

1. (Optional) Set the [`sortable`]({% slug api_grid_gridprops %}#toc-sortable) prop to true to allow column sorting, and take care of the built-in `sort` state.

1. (Optional) Add a column with `columnType="checkbox"` to render a checkbox selection column.

```jsx
<Grid
    contextMenu={true}
    sortable={true}
    selectable={{ enabled: true }}
>
    <Column filterable={false} columnType="checkbox" width={50} />
```

You can see the default Context menu of the Grid in action in the demo below.

{% meta height:570 %}
{% embed_file context-menu-basic/func/app.tsx preview %}
{% embed_file context-menu-basic/func/main.tsx %}
{% endmeta %}

## Cell Operations

The following example demonstrates how to copy cell's content to clipboard.

<!-- Needs to be updated -->

{% meta height:630 %}
{% embed_file context-menu-copy-cell/func/app.tsx preview %}
{% embed_file context-menu-copy-cell/func/main.tsx %}
{% endmeta %}

## Row Operations

As the elements inside the Context menu are custom, they execute different actions depending on the desired functionality.

<!-- Needs to be updated -->

{% meta height:640 %}
{% embed_file context-menu-row-operations/func/app.tsx preview %}
{% embed_file context-menu-row-operations/func/main.tsx %}
{% endmeta %}

## Multi Row Selection

The KendoReact Data Grid Context menu can be used for multi row selection.

<!-- Needs to be updated -->

{% meta height:470 %}
{% embed_file context-menu-multirow-selection/func/app.tsx preview %}
{% embed_file context-menu-multirow-selection/func/main.tsx %}
{% endmeta %}

## Excel Export

The KendoReact Data Grid Context menu provides options for exporting its data to Excel.

To enable the Excel export:

1. Install `kendo-react-excel-export` package.

    ```sh-no-run
    npm i @progress/kendo-react-excel-export
    ```

1. Import the ExcelExport component in your React Application.

    ```jsx-no-run
    import { ExcelExport } from '@progress/kendo-react-excel-export';
    ```

1. Wrap the Grid in the ExcelExport component and use the ExcelExport `save` function to export the Grid and save it to excel file.

The following example demonstrates the basic implementation of the Excel export functionality of the Grid.

<!-- Needs to be updated -->

{% meta height:640 %}
{% embed_file context-menu-excel-export/func/app.tsx preview %}
{% embed_file context-menu-excel-export/func/main.tsx %}
{% endmeta %}

## Suggested Links
-   [React Data Grid Excel Export](https://www.telerik.com/kendo-react-ui/components/grid/excel-export)
-   [React Data Grid PDF Export](https://www.telerik.com/kendo-react-ui/components/grid/pdf-export)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})

<div data-component="StartKendoReactFreeSection"></div>
