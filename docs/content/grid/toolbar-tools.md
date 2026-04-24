---
title: Toolbar Tools
description: 'Learn how to use the Toolbar Tools in the KendoReact Data Grid to enhance user interactions and streamline workflows with customizable actions.'
components: ["datagrid"]
slug: toolbar_tools_grid
position: 225
tier: premium
---

# Toolbar Tools

The KendoReact Data Grid provides toolbar tools to enhance user interactions and streamline workflows. These tools allow you to perform actions like sorting, filtering, and managing columns directly from the toolbar.

<CtaPanelOverview></CtaPanelOverview>

## Overview

To configure toolbar tools, wrap them with the [`GridToolbar`](slug:api_grid_gridtoolbarprops) component and place it inside the Grid. You can use both custom and built-in tools in the GridToolbar. The following is a list of the KendoKendoReact Data Grid Toolbar Tools that are available built-in:

-   [`GridToolbarSort`](slug:api_grid_gridtoolbarsortprops) - component for applying sorting to the Grid.
-   [`GridToolbarFilter`](slug:api_grid_gridtoolbarfilterprops) - component for applying filters to the Grid.
-   [`GridToolbarGroup`](slug:api_grid_gridtoolbargroupprops) - component for applying grouping to the Grid.
-   [`GridToolbarColumnsChooser`](slug:api_grid_gridtoolbarcolumnschooserprops) - component for controlling the visibility of the columns inside the Grid.
-   [`GridToolbarCheckboxFilter`](slug:api_grid_gridtoolbarcheckboxfilterprops) - component for filtering the Grid records using Checkboxes.

> The Grid Toolbar Tools supports [adaptive rendering](slug:grid_adaptive_rendering), use the screen resolution configurator or resize the browser to explore how the Toolbar Tools adapts to different resolutions.

## Sort

The [`GridToolbarSort`](slug:api_grid_gridtoolbarsortprops) components provides option for both single and multiple sorting. In order the tool to be rendered, you should set [`sortable`](slug:api_grid_gridprops#toc-sortable) to `true`.

By default, the sorting mode is set to single. The following example demonstrates how you can enable multilpe sorting.

{% meta height:600 %}
{% embed_file toolbar-tools/sort/app.tsx preview %}
{% embed_file toolbar-tools/sort/main.tsx %}
{% endmeta %}

## Filter

The [`GridToolbarFilter`](slug:api_grid_gridtoolbarfilterprops) component allows you to apply filtering to the Grid. It provides a user-friendly interface for defining filter criteria, enabling users to refine the displayed data based on their needs.

{% meta height:600 %}
{% embed_file toolbar-tools/filter/app.tsx preview %}
{% embed_file toolbar-tools/filter/main.tsx %}
{% endmeta %}

## Group

The [`GridToolbarGroup`](slug:api_grid_gridtoolbargroupprops) components allows you to apply grouping to the Grid. In order the tool to be rendered, you should set [`groupable`](slug:api_grid_gridprops#toc-groupable) to `true`.

{% meta height:600 %}
{% embed_file toolbar-tools/group/app.tsx preview %}
{% embed_file toolbar-tools/group/main.tsx %}
{% endmeta %}

## Columns Chooser

The [`GridToolbarColumnsChooser`](slug:api_grid_gridtoolbarcolumnschooserprops) component provides an easy way to control the visibility of the columns through the toolbar.

{% meta height:600 %}
{% embed_file toolbar-tools/column-chooser/app.tsx preview %}
{% embed_file toolbar-tools/column-chooser/main.tsx %}
{% endmeta %}

## Checkbox Filter

The [`GridToolbarCheckboxFilter`](slug:api_grid_gridtoolbarcheckboxfilterprops) component provides a checkbox list to filter the column data directly from the toolbar.

{% meta height:600 %}
{% embed_file toolbar-tools/checkbox-filter/app.tsx preview %}
{% embed_file toolbar-tools/checkbox-filter/main.tsx %}
{% endmeta %}

## Styling the Toolbar Tools Icon

The toolbar tools expose the `icon` and `svgIcon` properties, allowing you to customize the icons displayed in the toolbar tools.

The following example demonstrates how to use these properties to style the toolbar tools.

{% meta height:600 %}
{% embed_file toolbar-tools/styling/app.tsx preview %}
{% embed_file toolbar-tools/styling/main.tsx %}
{% embed_file toolbar-tools/styling/styles.css %}
{% endmeta %}

## Custom Toolbar Tools

You can integrate custom components in the toolbar and pass additional properties to them.

The following example demonstrates how to render custom editing tool inside the toolbar.

{% meta height:600 %}
{% embed_file toolbar-tools/custom-components/app.tsx preview %}
{% embed_file toolbar-tools/custom-components/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Adaptive Rendering](slug:grid_adaptive_rendering)
-   [Data Grid Sorting Overview](slug:sorting_grid)
-   [API Reference of the Grid](slug:api_grid_gridprops)
-   [API Index of the Grid](slug:api_grid)
