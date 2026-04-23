---
title: Detail Rows
description: 'Get started with the detail rows feature of the KendoReact Data Grid by KendoReact and see how to provide additional details about rows by expanding and collapsing content.'
components: ["datagrid"]
slug: detailrow_grid
position: 30
tier: premium
subject: Grid Detail Rows feature
---

# Detail Rows

The detail rows of the Grid enable you to provide additional details about a particular row of table data through expanding or collapsing its content.

<CtaPanelOverview></CtaPanelOverview>

To define the detail rows, set the [`detail`]({% slug api_grid_gridprops %}#toc-detail) property of the Grid to a custom function that returns a [`GridDetailRow`]({% slug api_grid_griddetailrow %}) component. The [`detailExpand`](slug:api_grid_gridprops#detailexpand) prop is responsible for the expand state of the rows and expects an object of type `DetailExpandDescriptor` if you prefer to use the expand state in controlled mode.

{% meta height:480 %}
{% embed_file detail/func/app.tsx preview %}
{% embed_file detail/func/main.tsx %}
{% endmeta %}

## Detail Rows Reordering

You can also combine the combine the Detail rows feature of the Grid with its [built-in reordering functionality](slug:rowreordering_grid).

Below is a demo showcasing this functionality in action.

{% meta height:480 %}
{% embed_file row-reordering/detail-row/func/app.tsx preview %}
{% embed_file row-reordering/detail-row/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Row Reordering](slug:rowreordering_grid)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridDetailRow]({% slug api_grid_griddetailrow %})
-   [API Index of the Grid]({% slug api_grid %})
