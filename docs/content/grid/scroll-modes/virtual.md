---
title: Virtual Scrolling
description: 'Get started with the KendoReact Data Grid by KendoReact and provide an alternative to paging by setting its virtual scrolling mode.'
components: ["datagrid"]
slug: virtualscrolling_grid
position: 20
tier: premium
subject: Grid Virtual Scrolling feature
---

# Virtual Scrolling

Virtual scrolling provides an alternative to paging.

While the user is scrolling the table, the Grid requests and displays only the visible pages.

<CtaPanelOverview></CtaPanelOverview>

As of KendoReact 11.0.0, the Grid's default `scrollable` mode is set to `virtual` for licensed users. To enable virtualization, simply set the Grid's `height` using the [`style`]({% slug api_grid_gridprops %}#toc-style) property.

Optionally, you can further refine and customize virtualization behavior in the Grid by configuring the following props:

-   [`skip`]({% slug api_grid_gridprops %}#toc-skip) &mdash; Specifies the number of records to skip.
-   [`take`]({% slug api_grid_gridprops %}#toc-take) &mdash; Defines the number of records to display.
-   [`total`]({% slug api_grid_gridprops %}#toc-total) &mdash; Sets the total number of records.
-   [`pageSize`]({% slug api_grid_gridprops %}#toc-pagesize) &mdash; Determines the number of records per page.
-   [`rowHeight`]({% slug api_grid_gridprops %}#toc-rowheight) &mdash; Sets the height of each row.
-   [`detailRowHeight`]({% slug api_grid_gridprops %}#toc-detailrowheight) &mdash; Sets the height of each detail row.

{% meta height:500 %}
{% embed_file virtual-scrolling-local/func/app.tsx preview %}
{% embed_file virtual-scrolling-local/func/main.tsx %}
{% endmeta %}

## Using Virtualization with Grouping

You can use virtual scrolling in combination with grouped data.

1. Set the [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) and [`group`]({% slug api_grid_gridprops %}#toc-group) options of the Grid.
1. Set the [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) option to `virtual`.
1. Handle the emitted [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event. The `onDataStateChange` event fires upon user interaction with the scrolling or changing the groups, and then processes the data and returns the data to the Grid.

To programmatically implement the processing of the data, either:

-   Send a request to the server to execute the grouping on the server side, or
-   Use the `process` method of the [`DataQuery`]({% slug overview_dataquery %}) library which automatically processes the data.

The Grid expects the grouped data to be a collection of [`GroupResults`]({% slug api_kendo-data-query_groupresult %}).

{% meta height:580 %}
{% embed_file grouping-virtual/func/app.tsx preview %}
{% embed_file grouping-virtual/func/main.tsx %}
{% endmeta %}

## Using Virtualization with Detail Rows

You can also use [DOM virtualization](#getting-started) in combination with [detail rows]({% slug detailrow_grid %}).

1. Set the [`detail`]({% slug api_grid_gridprops %}#toc-detail) to the detail component.
1. Set the [`detailExpand`](slug:api_grid_gridprops#detailexpand) prop to handle the expand state of the Grid internally.
1. Set the [`onDetailExpandChange`]({% slug api_grid_gridprops %}#toc-ondetailexpandchange)

You can also use [DOM virtualization]({% slug virtualscrolling_grid %}) in combination with:

{% meta height:470 %}
{% embed_file detail-rows-virtualization/func/app.tsx preview %}
{% embed_file detail-rows-virtualization/func/main.tsx %}
{% endmeta %}

## Using Virtualization with Responsive Columns

The virtual scrolling functionality requires that all Grid rows have an equal, predefined height. However, you can still keep virtual scrolling and use responsive columns which have different cell templates based on the column width.

{% meta height:470 %}
{% embed_file responsive-design/column-virtualization/app.tsx preview %}
{% embed_file responsive-design/column-virtualization/main.tsx %}
{% endmeta %}

## Debouncing pageChange Events

When configured for virtualization, the Grid fires the [`onPageChange`]({% slug api_grid_gridprops %}#toc-onpagechange) event as often as possible. This behavior allows for a smoother scrolling experience when the data is available in memory.

If the data is requested from a remote service, it is advisable to debounce or otherwise limit the page changes.

{% meta height:510 %}
{% embed_file virtual-scrolling-remote/func/app.tsx preview %}
{% embed_file virtual-scrolling-remote/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
