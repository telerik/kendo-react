---
title: Aggregates for Grouped Data
description: 'Get started with the KendoKendoReact Data Grid enabling you to visualize aggregates for grouped data in the respective column group footer of the component.'
components: ["datagrid"]
slug: groupingaggregates_grid
position: 20
subject: Grouping feature of the Grid
---

# Aggregates

The KendoReact Data Grid enables you to visualize the aggregates for the grouped data in the respective column group footer of the component.

<CtaPanelOverview></CtaPanelOverview>

To group the table data of the Grid, use its [`group`]({% slug api_grid_gridprops %}#toc-group) and [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) options.

To integrate the available aggregates in the Grid:

1. Select the desired [`GridGroupableSettings`]({% slug api_grid_gridgroupablesettings %}) so that the Grid renders footers.
1. In the custom [`groupFooter`](slug:api_grid_gridcellssettings#groupFooter) cell of the Grid, specify the way of displaying the aggregates.

Refer to this article on the [process helpers for bulk data operations](slug:bulkoperations_dataquery#aggregates) for additional information regarding the aggregates.

{% meta height:580 %}
{% embed_file grouping-aggregates/func/app.tsx preview %}
{% embed_file grouping-aggregates/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Overview of Grouping]({% slug groupingbasics_grid %})
-   [Custom Header/Footer Cells](slug:header_footer_filter_cells_grid)
-   [Overview of Data Query]({% slug overview_dataquery %})
-   [API Reference of the Grid Component]({% slug api_grid_gridprops %})
