---
title: Overview
description: 'Get started with the KendoKendoReact Data Grid and learn how to describe and customize the different cell types in React projects.'
components: ["datagrid"]
slug: cells_grid
subject: Cells customization feature of the Grid
position: 10
---

# KendoReact Data Grid Custom Cells Overview

The KendoReact Data Grid provides the option to override its internal components by allowing you to customize its different types of cells.

<CtaPanelOverview></CtaPanelOverview>

> Starting with KendoReact 5.14.0, you can apply more customizations to the Grid with a new set of properties. The previously available props such as the GridColumn [`cell`]({% slug api_grid_gridcolumnprops %}#toc-cell) prop or the Grid [`cellRender`]({% slug api_grid_gridprops %}#toc-cellRender) callback are deprecated as of version 9.4.0 of KendoReact.

## Getting Started with the KendoReact Data Grid Custom Cells

The Grid has a [`cells`]({% slug api_grid_gridprops %}#toc-cells) property that provides the option to add a template to every single cell in the Grid infrastructure separately. In addition, the `cells` prop is also available for the GridColumn component, and is useful if you want to configure the cells of an individual column.

The cell types you are able to customize through the `cells` prop are:

-   [Data Cells](slug:cells_grid#add-basic-custom-data-cell)
-   [Group Header, Group Footer, Header, Footer, and Filter Cells](slug:header_footer_filter_cells_grid)
-   [Edit Cells](slug:edit_cells_grid)
-   [Hierarchy Cells](slug:hierarchy_cells_grid)
-   [Data Cells](slug:cells_grid)

## Add Basic Custom Data Cells

All the bellow customizations can be done on the GridColumn level using its [`cells`]({% slug api_grid_gridcolumnprops %}#toc-cells) property that gives you full freedom over the cell rendering.

In the following example, a custom data cell renderers are implemented for the GridColumn with the `Discontinued` field.

{% meta height:480 %}
{% embed_file basic-custom-cell/func/app.tsx preview %}
{% embed_file basic-custom-cell/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Custom Cells APIs

-   [Grid Cells Prop]({% slug api_grid_gridprops %}#toc-cells)
-   [GridColumn Cells Prop]({% slug api_grid_gridcolumnprops %}#toc-cells)
-   [API Reference of the GridCellsSettings]({% slug api_grid_gridcellssettings %})

## Suggested Links
