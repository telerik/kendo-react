---
title: Column Menu
description: 'Get started with the KendoKendoReact Data Grid allowing you to add a column menu to its columns.'
components: ["datagrid"]
slug: column_menu_grid
position: 60
tier: premium
subject: Grid Column Menu feature
---

# Column Menu

The KendoReact Data Grid enables you to show a menu with quick actions for its columns.

<CtaPanelOverview></CtaPanelOverview>

The column menu provides flexible options for high-level customization. For example, the regular sorting and filtering features are represented by individual components which allows you to implement complex scenarios and meet the specific requirements of your project.

> The Grid Column Menu supports [adaptive rendering](slug:grid_adaptive_rendering). Use the screen resolution configurator or resize the browser to explore how the Column Menu adapts to different resolutions.

## Basic Usage

To configure the Column Menu, use the [`columnMenu`]({% slug api_grid_gridcolumnprops %}#toc-columnmenu) property of the Column sub-component.

The following example demonstrates how to use the following built-in components to customize the column menu:

-   GridColumnMenuFilter - component for applying filtering to the column
-   GridColumnMenuSort - component for applying sorting to the column
-   GridColumnMenuGroup - component for applying grouping to the column

{% meta height:590 %}
{% embed_file column-menu/func/app.tsx preview %}
{% embed_file column-menu/func/main.tsx %}
{% embed_file column-menu/func/columnMenu.tsx %}
{% endmeta %}

## Tabbed Column Menu

The KendoReact Data Grid allows you to render a column menu with a tabbed interface.

The below example achieves this implementation by creating a tabbed column menu and wrapping the Grid component with it. In `main.jsx`, the Grid is wrapped with a `ColumnMenuContext.Provider` where its `value` property accepts the following four arguments:

-   `onColumnsChange` - handles which columns are displayed
-   `onAutoSize` - automatically sizes a column
-   `columnState` - accepts a state variable that is initially set to the column array of objects
-   `columns` - the initial array of objects of the column values

{% meta height:580 %}
{% embed_file column-menu-tabbed-interface/func/app.tsx preview %}
{% embed_file column-menu-tabbed-interface/func/main.tsx %}
{% embed_file column-menu-tabbed-interface/func/ColumnMenu.tsx %}
{% embed_file column-menu-tabbed-interface/func/ColumnMenuContext.tsx %}
{% embed_file column-menu-tabbed-interface/func/TabStripTabTitle.tsx %}
{% endmeta %}

## Column Chooser

The ColumnMenu provides the [GridColumnMenuColumnsChooser]({% slug api_grid_gridcolumnmenucolumnschooser %}) component, which provides an easy way to control the visibility of the columns through the column menu.

{% meta height:470 %}
{% embed_file column-menu-chooser/func/app.tsx preview %}
{% embed_file column-menu-chooser/func/main.tsx %}
{% embed_file column-menu-chooser/func/columnMenu.tsx %}
{% endmeta %}

## Checkbox Filter

The [GridColumnMenuCheckboxFilter]({% slug api_grid_gridcolumnmenucheckboxfilterprops %}) can be set as a sub-component of the ColumnMenu component; this provides an interface for users to filter the column data via a checkbox list. The following example demonstrates setup for this option:

{% meta height:590 %}
{% embed_file column-menu-checkbox-filter/func/app.tsx preview %}
{% embed_file column-menu-checkbox-filter/func/main.tsx %}
{% embed_file column-menu-checkbox-filter/func/columnMenu.tsx %}
{% endmeta %}

## Custom Components

You can integrate custom components in the column menu and pass additional properties to them.

The following example demonstrates how to:

-   Render the columns inside the column menu based on an array of the column names and on the column `show` property.
-   Hide columns from the column menu and enable the Grid to update the column menu accordingly.

To access all demo files, refer to the tree pane of the file.

{% meta height:520 %}
{% embed_file column-menu-custom-components/func/app.tsx preview %}
{% embed_file column-menu-custom-components/func/main.tsx %}
{% embed_file column-menu-custom-components/func/columns.ts %}
{% embed_file column-menu-custom-components/func/customColumnMenu.tsx %}
{% endmeta %}

## Customizing the Filter Component

The filter component of the column menu enables you to customize its user interface (UI) by passing a custom component to the [`filterUI`]({% slug api_grid_gridcolumnmenufilterprops %}#toc-filterui) property.

The following example demonstrates how to customize the UI of the Column Menu filter component. To access all demo files, refer to the tree pane of the file.

{% meta height:510 %}
{% embed_file column-menu-filter-customization/func/app.tsx preview %}
{% embed_file column-menu-filter-customization/func/main.tsx %}
{% embed_file column-menu-filter-customization/func/customFilterUI.tsx %}
{% endmeta %}

## Styling the Column Menu Icon

Both the `GridColumnMenuFilter` and `GridColumnMenuSort` components expose the `active` static method which checks if filtering and sorting are applied to a specific field. You can use these methods for applying custom CSS classes to the column menu and mark it as active.

The following example demonstrates how to style the Column Menu icon when sorting and filtering are applied.

{% meta height:400 %}
{% embed_file column-menu-styling/func/app.tsx preview %}
{% embed_file column-menu-styling/func/main.tsx %}
{% embed_file column-menu-styling/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Adaptive Rendering](slug://grid_adaptive_rendering)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
