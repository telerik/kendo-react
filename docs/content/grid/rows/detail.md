---
title: Detail Rows
description: 'Use detail rows in the KendoReact Grid to show expandable per-row content, control expand state, and nest Grids inside detail rows.'
components: ['grid']
slug: detailrow_grid
position: 30
tier: premium
subject: Grid Detail Rows feature
---

# Detail Rows

The detail rows of the Grid let you reveal extra information about a record by expanding it inline. The primary table stays compact while the expanded area can hold any content — field summaries, nested Grids, charts, or custom components.

<CtaPanelOverview></CtaPanelOverview>

Set the [`detail`]({% slug api_grid_gridprops %}#toc-detail) prop to a component that receives [`GridDetailRowProps`]({% slug api_grid_griddetailrowprops %}) and returns the content to render in the expanded area. The `dataItem` on those props contains the data of the master row being expanded.

The following example demonstrates a basic detail row setup where expanding a product row shows its stock levels, reorder details, and category information.

{% meta height:480 %}
{% embed_file detail/func/app.tsx preview %}
{% embed_file detail/func/main.tsx %}
{% endmeta %}

## Controlled Expand State of Detail Rows

By default, the Grid manages which rows are expanded internally. Use [`defaultDetailExpand`](slug:api_grid_gridprops#defaultdetailexpand) to pre-open specific rows on first render and let the Grid handle the rest.

Switch to controlled mode when you need to drive the expand state from outside the Grid — for example, to expand rows based on a route parameter, to restore open rows after a data reload, or to let another component open or close rows programmatically. Pass the current state to [`detailExpand`](slug:api_grid_gridprops#detailexpand) and update it in [`onDetailExpandChange`](slug:api_grid_gridprops#toc-ondetailexpandchange). The value is a `DetailExpandDescriptor` object whose keys are the `dataItemKey` values of the expanded rows.

The following example demonstrates controlled expand state with **Expand All** and **Collapse All** buttons that drive the `detailExpand` prop directly from component state.

{% meta height:630 %}
{% embed_file detail-controlled/func/app.tsx preview %}
{% embed_file detail-controlled/func/main.tsx %}
{% endmeta %}

## Nested Grids in Detail Rows

When each master record owns a collection of related items, render a second Grid in the detail row. This creates a classic master-detail layout where the outer Grid shows summary rows and the inner Grid shows the associated records for the selected row.

Pass the embedded collection from `props.dataItem` directly to the nested Grid's `data` prop. When each master record holds its own sub-collection, no extra state or remote requests are needed.

The following example demonstrates a category Grid whose detail rows each contain a nested Grid listing the products in that category.

{% meta height:660 %}
{% embed_file detail-nested-grid/func/app.tsx preview %}
{% embed_file detail-nested-grid/func/main.tsx %}
{% embed_file detail-nested-grid/func/data.ts %}
{% endmeta %}

## Detail Rows and Row Reordering

You can combine detail rows with the Grid's [built-in row reordering functionality](slug:rowreordering_grid). Users can drag master rows into a new order while the detail content stays accessible by expanding each row.

To enable both features together, set `rowReorderable` and `detail` on the same Grid and add a column with `columnType="reorder"` as the drag handle.

The following example demonstrates row reordering alongside expandable detail rows, so users can reorganize the product list without losing access to the per-product details.

{% meta height:480 %}
{% embed_file row-reordering/detail-row/func/app.tsx preview %}
{% embed_file row-reordering/detail-row/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Row Reordering](slug:rowreordering_grid)
-   [API Reference of the Grid](slug:api_grid_gridprops)
-   [API Reference of the GridDetailRow](slug:api_grid_griddetailrow)
-   [API Index of the Grid](slug:api_grid)
