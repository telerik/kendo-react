---
title: Custom Hierarchy Cells
description: 'Get started with the KendoKendoReact Data Grid and learn how to describe and customize the Hierarchy Cells of the Grid in React projects.'
components: ["datagrid"]
slug: hierarchy_cells_grid
position: 40
subject: Cells customization feature of the Grid
---

# Customizing the Hierarchy Cells

The cells [`hierarchy`]({% slug api_grid_gridcellssettings %}#toc-hierarchy) property provides the option to customize group header, group footer, and data cells of the detail component.

<CtaPanelOverview></CtaPanelOverview>

In the following example, custom cells are rendered for both standard groupings and hierarchical data within the Grid. The group header and group footer use `MyHeaderCustomCell` and `MyFooterCustomCell`, respectively, for grouped columns. Additionally, hierarchical data utilizes `HierarchyMyHeaderCustomCell` for group header, `HierarchyMyDataCustomCell` for data, and `HierarchyMyFooterCustomCell` for group footer.

{% meta height:580 %}
{% embed_file grid-custom-cell/hierarchy/func/app.tsx preview %}
{% embed_file grid-custom-cell/hierarchy/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Custom Cells APIs

-   [Grid Cells Prop]({% slug api_grid_gridprops %}#toc-cells)
-   [GridColumn Cells Prop]({% slug api_grid_gridcolumnprops %}#toc-cells)
-   [API Reference of the GridCellsSettings]({% slug api_grid_gridcellssettings %})

## Suggested Links

-   [Custom Cells Overview](slug:cells_grid)
