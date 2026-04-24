---
title: Master-Detail Grid
description: 'Get started with the KendoKendoReact Data Grid enabling you to apply hierarchical order to desired records using the detail property of the master Grid.'
components: ["datagrid"]
slug: hierarchy_grid
subject: Hierarchy Grid
position: 230
tier: premium
---

# Master-Detail Grids

The KendoReact Data Grid provides options for visualizing the relations between its parent and child records by displaying the table data in a hierarchical order.

<CtaPanelOverview></CtaPanelOverview>

## Master-Detail

To apply a hierarchical order to the desired records, use the [`detail`]({% slug api_grid_gridprops %}#toc-detail) property of the master Grid. The feature allows you to load the detail component which contains the corresponding child Grid records that are filtered by the parent key field value.

{% meta height:615 %}
{% embed_file hierarchy/func/app.tsx preview %}
{% embed_file hierarchy/func/main.tsx %}
{% endmeta %}

## Editable Master-Detail Grid

The KendoReact Data Grid enables you to update and delete data records inline for the detail Grid. The following example demonstrates how to implement [inline editing]({% slug editing_inline_grid %}) for the detail component:

<!-- Needs to be updated -->

{% meta height:615 %}
{% embed_file hierarchy-edit/func/app.tsx preview %}
{% embed_file hierarchy-edit/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
