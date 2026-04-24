---
title: Custom Edit Cells
description: 'Get started with the KendoKendoReact Data Grid and learn how to describe and customize the Edit cells of the Grid in React projects.'
components: ["datagrid"]
slug: edit_cells_grid
position: 30
subject: Cells customization feature of the Grid
---

# Customizing the Edit Cells

The cells [`edit`]({% slug api_grid_gridcellssettings %}#toc-edit) property provides the option to customize the numeric, boolean, text, and date edit cells.

<CtaPanelOverview></CtaPanelOverview>

In the following example, custom edit cells are rendered for different data types within the Grid. The text fields use `MyInputCustomCell`, while numeric fields are handled by `MyNumericCustomCell`. Boolean values are represented using `MyBooleanCustomCell`, and date fields utilize `MyDateCustomCell`.

{% meta height:480 %}
{% embed_file grid-custom-cell/editing/func/app.tsx preview %}
{% embed_file grid-custom-cell/editing/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Custom Cells APIs

-   [Grid Cells Prop]({% slug api_grid_gridprops %}#toc-cells)
-   [GridColumn Cells Prop]({% slug api_grid_gridcolumnprops %}#toc-cells)
-   [API Reference of the GridCellsSettings]({% slug api_grid_gridcellssettings %})

## Suggested Links

-   [Custom Cells Overview](slug:cells_grid)
