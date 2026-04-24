---
title: Column Menu
description: 'Get started with the KendoReact TreeList allowing you to add a column menu to its columns.'
components: ["treelist"]
slug: column_menu_treelist
position: 6
---

# Column Menu

The KendoReact TreeList enables you to show a menu with quick actions for its columns.

The column menu provides flexible options for high-level customization. For example, the regular sorting and filtering features are represented by individual components which allows you to implement complex scenarios and meet the specific requirements of your project.

## Basic Usage

To configure the column menu, use the [`columnMenu`]({% slug api_treelist_treelistcolumnprops %}#toc-columnmenu) option of the columns and pass the corresponding ColumnMenu component base on the column data type.

{% meta height:600 %}
{% embed_file column-menu/func/app.tsx preview %}
{% embed_file column-menu/func/main.tsx %}
{% endmeta %}

## Customizing the Column Menu

The built-in Column Menu components can be customized using their [props]({% slug api_data-tools_columnmenuprops %}), which includes show and hide of the sort buttons, and customizing filtering components.

The following example demonstrates how to customize the column menus:

-   Text ColumnMenu
    -   change filter operators
    -   disable the logic DropDownList
    -   change the initial filter, which changes the default values of the filter components
-   Numeric ColumnMenu
    -   setting a single filter in the `filterContent` prop
    -   change the `initialFilter`, which is required since we use a single filter
-   Date ColumnMenu
    -   remove sorting
-   Boolean ColumnMenu
    -   implement a custom filter editor

{% meta height:600 %}
{% embed_file column-menu-custom/func/app.tsx preview %}
{% embed_file column-menu-custom/func/main.tsx %}
{% embed_file column-menu-custom/func/textColumnMenu.tsx %}
{% embed_file column-menu-custom/func/numericColumnMenu.tsx %}
{% embed_file column-menu-custom/func/dateColumnMenu.tsx %}
{% embed_file column-menu-custom/func/booleanColumnMenu.tsx %}
{% endmeta %}

## Adding Custom Items to the Column Menu

The Column Menu items can be changed using the ColumnMenu [itemsRender]({% slug api_data-tools_columnmenuprops %}#toc-itemsrender) prop. The following example demonstrates how to remove the filtering item, add Lock Column and Toggle Columns items:

{% meta height:430 %}
{% embed_file column-menu-custom-items/func/app.tsx preview %}
{% embed_file column-menu-custom-items/func/main.tsx %}
{% embed_file column-menu-custom-items/func/ColumnChooser.tsx %}
{% embed_file column-menu-custom-items/func/ColumnLock.tsx %}
{% embed_file column-menu-custom-items/func/ColumnMenuContext.tsx %}
{% embed_file column-menu-custom-items/func/columns.tsx %}
{% embed_file column-menu-custom-items/func/employees.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
