---
title: Custom Selection Cells
description: 'Get started with the KendoKendoReact Data Grid and learn how to describe and customize the Selection Cells cell of the Grid in React projects.'
components: ["datagrid"]
slug: selection_cells_grid
position: 60
subject: Cells customization feature of the Grid
---

# Customizing the Selection Cells

The cells [`select`]({% slug api_grid_gridcellssettings %}#toc-select) property provides the option to customize the group header, group footer, and data cells of each selected cell.

<CtaPanelOverview></CtaPanelOverview>

In the following example, custom selection cells are rendered for different parts of the Grid. The data selection cells use `MySelectedCustomCell`, while the selected grouped headers and footers are rendered with `MySelectedHeaderCustomCell` and `MySelectedFooterCustomCell`.

{% meta height:580 %}
{% embed_file grid-custom-cell/selection/func/app.tsx preview %}
{% embed_file grid-custom-cell/selection/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Custom Cells APIs

-   [Grid Cells Prop]({% slug api_grid_gridprops %}#toc-cells)
-   [GridColumn Cells Prop]({% slug api_grid_gridcolumnprops %}#toc-cells)
-   [API Reference of the GridCellsSettings]({% slug api_grid_gridcellssettings %})

## Suggested Links

-   [Custom Cells Overview](slug:cells_grid)
