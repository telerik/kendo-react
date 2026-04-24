---
title: Custom Header/Footer Cells
description: 'Get started with the KendoKendoReact Data Grid and learn how to describe and customize the Group Header, Group Footer, Header, Footer, Filter, and Data Cells of the Grid in React projects.'
components: ["datagrid"]
slug: header_footer_filter_cells_grid
position: 20
subject: Cells customization feature of the Grid
---

# Customizing the Group Header, Group Footer, Header, Footer, Filter, and Data Cells

The following properties allow you to customize the group header and footer as well as the header, footer, filter, and data cells:

-   [`groupHeader`]({% slug api_grid_gridcellssettings %}#toc-groupHeader)
-   [`groupFooter`]({% slug api_grid_gridcellssettings %}#toc-groupFooter)
-   [`headerCell`]({% slug api_grid_gridcellssettings %}#toc-headerCell)
-   [`footerCell`]({% slug api_grid_gridcellssettings %}#toc-footerCell)
-   [`filterCell`]({% slug api_grid_gridcellssettings %}#toc-filterCell)
-   [`data`]({% slug api_grid_gridcellssettings %}#toc-data)

<CtaPanelOverview></CtaPanelOverview>

In the following example, custom cells are rendered for various GridColumn elements to provide customized styling and behavior. The header cell uses `HeaderCustomCell`, the filter cell is represented by `MyFilterCustomCell`, and footer Cell is handled by `TotalFooterCustomCell`. Additionally, grouped columns utilize `MyHeaderCustomCell` for group header and `MyFooterCustomCell` for group footer. The data cells are customized with `MyDataCustomCell`.

{% meta height:580 %}
{% embed_file grid-custom-cell/other/func/app.tsx preview %}
{% embed_file grid-custom-cell/other/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Custom Cells APIs

-   [Grid Cells Prop]({% slug api_grid_gridprops %}#toc-cells)
-   [GridColumn Cells Prop]({% slug api_grid_gridcolumnprops %}#toc-cells)
-   [API Reference of the GridCellsSettings]({% slug api_grid_gridcellssettings %})

## Suggested Links

-   [Custom Cells Overview](slug:cells_grid)
