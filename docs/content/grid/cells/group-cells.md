---
title: Custom Group Cells
description: 'Get started with the KendoKendoReact Data Grid and learn how to describe and customize the Group cells in the Grid in React projects.'
components: ["datagrid"]
slug: group_cells_grid
position: 50
subject: Cells customization feature of the Grid
---

# Customizing the Group Cells

The cells [`group`]({% slug api_grid_gridcellssettings %}#toc-group) property provides the option to customize the group header, group footer, and data cells of each group.

<CtaPanelOverview></CtaPanelOverview>

In the following example, the group header is handled by `GroupMyHeaderCustomCell`, the data cells within the group use `GroupMyDataCustomCell`, and the group footer is represented by `GroupMyFooterCustomCell`.

{% meta height:580 %}
{% embed_file grid-custom-cell/grouping/func/app.tsx preview %}
{% embed_file grid-custom-cell/grouping/func/main.tsx %}
{% endmeta %}

## Locked Groups and Columns

When having locked groups (using the [`lockGroups`]({% slug api_grid_gridprops %}#toc-lockGroups) prop) or locked columns (using the [`locked`]({% slug api_grid_gridcolumnprops %}#toc-locked) prop), additional styles will be added to the td element that lock it into position. However, if you are setting additional styles to the td element, these styles will be overridden. Therefore, these should be passed to the rendered td element.

In addition, when having locked groups and columns, it is also required to render an additional td element `td2` which is required in this scenario like demonstrated in the example below.

{% meta height:580 %}
{% embed_file grid-custom-cell/grouping/locked-groups/func/app.tsx preview %}
{% embed_file grid-custom-cell/grouping/locked-groups/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Custom Cells APIs

-   [Grid Cells Prop]({% slug api_grid_gridprops %}#toc-cells)
-   [GridColumn Cells Prop]({% slug api_grid_gridcolumnprops %}#toc-cells)
-   [API Reference of the GridCellsSettings]({% slug api_grid_gridcellssettings %})

## Suggested Links

-   [Custom Cells Overview](slug:cells_grid)
