---
title: Virtual Scrolling
description: 'Get started with the KendoReact Grid by KendoReact and provide an alternative to paging by setting its virtual scrolling mode.'
components: ['grid']
slug: virtualscrolling_grid
position: 20
tier: premium
subject: Grid Virtual Scrolling feature
---

# Virtual Scrolling

Virtual scrolling is an alternative to paging for large data sets. It uses DOM virtualization to render only the visible rows, which keeps scrolling smooth and improves performance without displaying all records in the DOM at once.

<CtaPanelOverview></CtaPanelOverview>

As of KendoReact 11.0.0, the Grid's default [`scrollable`](slug:api_grid_gridprops#scrollable) mode is set to `virtual` for licensed users. To explicitly enable virtual scrolling, set the Grid `scrollable` option to `virtual` and specify the Grid height through the [`style`](slug:api_grid_gridprops#style) prop. When you also provide values such as `skip` and `pageSize`, the Grid uses them to determine which records should be rendered in the current virtual range.

The following example demonstrates how to implement virtual scrolling in the Grid, where only the visible rows are rendered as the user scrolls through the data.

{% meta height:700 %}
{% embed_file virtual-scrolling-overview/func/app.tsx preview %}
{% embed_file virtual-scrolling-overview/func/main.tsx %}
{% endmeta %}

## Configuration Options

After you enable virtual scrolling, configure the following props based on your data source and layout requirements.

-   [`skip`](slug:api_grid_gridprops#skip) &mdash; Sets how many records are skipped before the current virtual page. This is useful when you control the current virtual range through state.
-   [`take`](slug:api_grid_gridprops#take) &mdash; Defines how many records are rendered in the current view.
-   [`total`](slug:api_grid_gridprops#total) &mdash; Sets the full number of records so the scrollbar can represent the complete range.
-   [`pageSize`](slug:api_grid_gridprops#pagesize) &mdash; Sets how many records are requested for each virtual page.
-   [`rowHeight`](slug:api_grid_gridprops#rowheight) &mdash; Sets the height of each row. Use a fixed row height so the Grid can calculate the virtual layout correctly.
-   [`detailRowHeight`](slug:api_grid_gridprops#detailrowheight) &mdash; Sets the height of each detail row when [detail rows](slug:detailrow_grid) are enabled.
-   [`showLoader`](slug:api_grid_gridprops#showloader) &mdash; Displays the built-in loading overlay while remote data is being fetched.
-   [`loader`](slug:api_grid_gridprops#loader) &mdash; Replaces the default loading overlay with a custom loader component.

Depending on your scenario, use the following sections:

| Section                                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [Virtualization with Local Data](#virtualization-with-local-data)                             | Use this setup when all data is already available in memory and virtualization is mainly used to reduce DOM rendering work.         |
| [Virtualization with Remote Data](#virtualization-with-remote-data)                           | Bind the Grid to the currently loaded page, handle `onPageChange`, and show loading feedback while the next range is being fetched. |
| [Using Virtualization with Grouping](#using-virtualization-with-grouping)                     | Combine virtual scrolling with grouped data and process the grouped result locally or on the server.                                |
| [Using Virtualization with Detail Rows](#using-virtualization-with-detail-rows)               | Keep detail rows compatible with virtualization by configuring the expand state and detail row height.                              |
| [Using Virtualization with Responsive Columns](#using-virtualization-with-responsive-columns) | Preserve virtual scrolling while adapting cell templates to different column widths.                                                |
| [Debouncing PageChange Events](#debouncing-pagechange-events)                                 | Reduce unnecessary remote requests when users scroll quickly through large result sets.                                             |

Each section below includes configuration guidance and a live example for that virtualization scenario.

## Virtualization with Local Data

Use this setup when the full data set is already available in memory and virtualization is needed mainly to reduce DOM rendering work. Bind the Grid `data` property to the local collection, then use the virtual paging settings such as `skip`, `pageSize`, and `total` together with the [`onPageChange`]({% slug api_grid_gridprops %}#toc-onpagechange) handler to control which part of the collection is currently visible. In this mode, scrolling updates the visible slice of the already loaded data, so the Grid can stay responsive without requesting additional records.

The following example demonstrates basic virtual scrolling with locally loaded data, where only the visible rows are rendered as the user scrolls.

{% meta height:620 %}
{% embed_file virtual-scrolling-local/func/app.tsx preview %}
{% embed_file virtual-scrolling-local/func/main.tsx %}
{% endmeta %}

This setup works best when the full data set is already available in memory and the main bottleneck is DOM rendering rather than data retrieval.

## Virtualization with Remote Data

When the data comes from a remote service, bind the Grid `data` property to the currently loaded page and keep the virtual paging state in your application. Then implement the [`onPageChange`]({% slug api_grid_gridprops %}#toc-onpagechange) handler so it requests the records needed for the next visible range as the user scrolls. This allows the Grid to fetch and display only the required data while preserving the continuous virtual scrolling experience.

The following example demonstrates virtual scrolling with remotely loaded data and skeleton cells as loading placeholders.

{% meta height:620 %}
{% embed_file virtual-scrolling-remote/func/app.tsx preview %}
{% embed_file virtual-scrolling-remote/func/main.tsx %}
{% endmeta %}

While the request is in progress, the Grid can render skeleton cells for rows whose data has not yet arrived. Alternatively, set `showLoader={true}` to show a loading overlay, use the `loader` prop to supply a custom component, or omit it to use the built-in one. For more details, see the [Loading Indicator](slug:loading_grid) article.

```tsx
<Grid showLoader={true} loader={<div>Loading...</div>} />
```

If the remote endpoint is slower or users scroll aggressively, see [Debouncing PageChange Events](#debouncing-pagechange-events) to limit unnecessary requests.

## Using Virtualization with Grouping

You can use virtual scrolling in combination with grouped data.

1. Set the [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) and [`group`]({% slug api_grid_gridprops %}#toc-group) options of the Grid.
1. Set the [`scrollable`]({% slug api_grid_gridprops %}#toc-scrollable) option to `virtual`.
1. Handle the emitted [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event. The `onDataStateChange` event fires upon user interaction with the scrolling or changing the groups, and then processes the data and returns the data to the Grid.

To programmatically implement the processing of the data, either:

-   Send a request to the server to execute the grouping on the server side, or
-   Use the `process` method of the [`DataQuery`]({% slug overview_dataquery %}) library which automatically processes the data.

The Grid expects the grouped data to be a collection of [`GroupResults`]({% slug api_kendo-data-query_groupresult %}).

The following example demonstrates virtual scrolling combined with data grouping, where the visible grouped rows are rendered on demand as the user scrolls.

{% meta height:700 %}
{% embed_file grouping-virtual/func/app.tsx preview %}
{% embed_file grouping-virtual/func/main.tsx %}
{% endmeta %}

## Using Virtualization with Detail Rows

You can also use [DOM virtualization](#virtual-scrolling) in combination with [detail rows]({% slug detailrow_grid %}).

1. Set the [`detail`]({% slug api_grid_gridprops %}#toc-detail) to the detail component.
1. Set the [`detailExpand`](slug:api_grid_gridprops#detailexpand) prop to handle the expand state of the Grid internally.
1. Handle [`onDetailExpandChange`]({% slug api_grid_gridprops %}#toc-ondetailexpandchange) and set [`detailRowHeight`]({% slug api_grid_gridprops %}#toc-detailrowheight) so the virtual layout can account for the expanded content.

The following example demonstrates virtual scrolling with expandable detail rows, where the detail content is revealed inline without breaking the scroll position.

{% meta height:470 %}
{% embed_file detail-rows-virtualization/func/app.tsx preview %}
{% embed_file detail-rows-virtualization/func/main.tsx %}
{% endmeta %}

## Using Virtualization with Responsive Columns

The virtual scrolling functionality requires that all Grid rows have an equal, predefined height. However, you can still keep virtual scrolling and use responsive columns which have different cell templates based on the column width.

The following example demonstrates virtual scrolling with responsive column templates that adapt their content based on the column width.

{% meta height:470 %}
{% embed_file responsive-design/column-virtualization/app.tsx preview %}
{% embed_file responsive-design/column-virtualization/main.tsx %}
{% endmeta %}

## Debouncing PageChange Events

When configured for virtualization, the Grid fires the [`onPageChange`]({% slug api_grid_gridprops %}#toc-onpagechange) event as often as possible. This behavior allows for a smoother scrolling experience when the data is available in memory.

If the data is requested from a remote service, debounce or otherwise limit the page changes so rapid scrolling does not trigger unnecessary requests. This is especially useful when the backend is slower or when you want to reduce traffic while users scroll through large result sets.

The following example demonstrates remote virtual scrolling with a debounced `onPageChange` handler.

{% meta height:620 %}
{% embed_file virtual-scrolling-remote-debounce/func/app.tsx preview %}
{% embed_file virtual-scrolling-remote-debounce/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
