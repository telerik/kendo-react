---
title: Multi-Column Headers
description: 'Get started with the KendoKendoReact Data Grid and learn how to implement multi-column headers.'
components: ["datagrid"]
slug: multicolumnheaders_columns_grid
position: 70
subject: Grid Multi-Column Headers feature
tier: premium
---

# Multi-Column Headers

The KendoReact Data Grid supports multi-column headers.

<CtaPanelOverview></CtaPanelOverview>

To implement multi-column headers, either:

-   Nest columns in the columns definition, or
-   Define an array of column props as children of the particular column.

{% meta height:480 %}
{% embed_file multi-column-headers/func/app.tsx preview %}
{% embed_file multi-column-headers/func/main.tsx %}
{% endmeta %}

# Expand/Collapse Multi-Column Headers

Expanding and collapsing column headers can be achieved by using a custom header cell that dynamically renders its children based on a state variable. In the example below, the [`cells`]({% slug api_grid_gridcolumnprops %}#toc-cells) prop of the Column is used to pass a custom [`headerCell`]({% slug api_grid_gridcellssettings %}#toc-headercell) that manages the state of the header column. The child columns are dynamically expanding and collapsing based on the state of the header cell.

{% meta height:480 %}
{% embed_file expand-collapse-multi-column-headers/func/app.tsx preview %}
{% embed_file expand-collapse-multi-column-headers/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
