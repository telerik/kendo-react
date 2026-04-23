---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoKendoReact Data Grid in React projects.'
components: ["datagrid"]
slug: grid_adaptive_rendering
position: 160
tag: new
---

# Adaptive Rendering

The adaptive rendering is an advanced capability that allows the Grid to adjust its layout and behavior based on the screen size by providing different rendering of the pager and the popup elements of the Grid, such as the column menu or an external editing form.

To enable adaptive rendering for the Grid, set its [`adaptive`](slug://api_grid_gridprops#toc-adaptive) property to `true`.

To set the title of the adaptive popup rendered when the Grid is opened on a smaller screen, set the [`adaptiveTitle`](slug://api_grid_gridprops#toc-adaptivetitle) property of the component.

Adaptive rendering is an advanced feature that allows the Grid to adjust its components to fit smaller screens. The adaptive components of the Grid include:

-   [**Column Menu**](slug://column_menu_grid)
-   [**Pager**](slug://adaptive_rendering_pager)
-   [**External Edit Form**](slug://external_editing_grid)
-   [**Toolbar Tools**](slug://toolbar_tools_grid)

> Note: The `alwaysExpanded` property of the [GridColumnMenuFilter](slug://api_grid_gridcolumnmenufilterprops), [GridColumnMenuCheckboxFilter](slug://api_grid_gridcolumnmenucheckboxfilterprops), and [GridColumnMenuColumnsChooser](slug://api_grid_gridcolumnmenucolumnschooser) components is not considered in adaptive mode. The column menu components are initially collapsed.

{% meta height:810 %}
{% embed_file adaptive-rendering/app.tsx preview %}
{% embed_file adaptive-rendering/columnMenu.tsx %}
{% embed_file adaptive-rendering/gd-categories.ts %}
{% embed_file adaptive-rendering/gd-interfaces.ts %}
{% embed_file adaptive-rendering/gd-products.ts %}
{% embed_file adaptive-rendering/main.tsx %}
{% endmeta %}

## Adaptive Breakpoints

The adaptive rendering for the Grid uses the following default breakpoints:

-   **Small screens (up to 500px)**: Displays components in full-screen dialogs.
-   **Medium screens (500px to 768px)**: Displays components in pinned action sheets.
-   **Large screens (above 768px)**: Displays components in their default layout.

> You can customize the breakpoints via the [AdaptiveMode React Context](slug://overview_adaptive_mode).

## Suggested Links

-   [Column Menu](slug://column_menu_grid)
-   [Pager](slug://overview_pager)
-   [Editing with External Form](slug://external_editing_grid)
-   [Toolbar Tools](slug://toolbar_tools_grid)
-   [API Reference of the Grid](slug://api_grid)
