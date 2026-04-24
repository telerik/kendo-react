---
title: Locked Group Headers
description: 'Get started with the KendoKendoReact Data Grid enabling you to visualize locked columns when the grouping is enabled.'
components: ["datagrid"]
slug: groupinglockedcolumns_grid
position: 30
subject: Grouping feature of the Grid
---

# Locked Group Headers

The KendoReact Data Grid allows you to lock the headers of the grouped data and freeze the component columns at the same time when needed.

<CtaPanelOverview></CtaPanelOverview>

To lock the group headers of the Grid, use its [`lockGroups`]({% slug api_grid_gridprops %}#toc-lockgroups) prop. Setting the [`locked`]({% slug api_grid_gridcolumnprops %}#toc-locked) prop of the desired columns will allow you to freeze them as well, along with the pinned headers.

The following example shows how to lock the group headers and the first two columns of a Grid component.

{% meta height:580 %}
{% embed_file locked-group-headers/func/app.tsx preview %}
{% embed_file locked-group-headers/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Overview of Grouping]({% slug groupingbasics_grid %})
-   [Overview of Data Query]({% slug overview_dataquery %})
-   [API Reference of the Grid Component]({% slug api_grid_gridprops %})
