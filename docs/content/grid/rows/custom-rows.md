---
title: Custom Rows
description: 'Get started with the custom rows feature of the KendoReact Data Grid by KendoReact and see how to provide additional details about rows by expanding and collapsing content.'
components: ["datagrid"]
slug: custom-rows_grid
position: 25
tag: new
tier: premium
subject: Grid Custom Rows feature
---

# Custom Rows

The Data Grid provides the option to override its internal row components, allowing you to customize the row data.

<CtaPanelOverview></CtaPanelOverview>

## Getting Started

The Grid has a [`rows`]({% slug api_grid_gridprops %}#toc-rows) property that provides the option to add a template to every single row in the Grid infrastructure separately by passing a custom row template to the [`data`](slug:api_grid_gridrowssettings#data), [`groupFooter`](slug:api_grid_gridrowssettings#groupFooter) and [`groupHeader`](slug:api_grid_gridrowssettings#groupHeader) props of the rows.

The following sample demonstrates how to appearance of the rows based on the provided values in a custom [`rows.data`](slug:api_grid_gridrowssettings#data) template.

{% meta height:480 %}
{% embed_file styling-row/func/app.tsx preview %}
{% embed_file styling-row/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Row Reordering](slug:rowreordering_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridDetailRow]({% slug api_grid_griddetailrow %})
-   [API Index of the Grid]({% slug api_grid %})
