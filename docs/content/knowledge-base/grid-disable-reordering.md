---
title: Disable reordering of a specific column of the KendoReact Grid
description: An example on how to disable the reordering of a column of the KendoReact Grid.
type: how-to
page_title: Grid disable reordering - KendoReact DateRangePicker
slug: grid-disable-reordering
tags: grid, reodering, column, disable, reorder
ticketid: 1588131
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>10.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Grid</td>
	    </tr>
    </tbody>
</table>

## Description

I want to disable the reordering of one or more columns of the KendoReact Grid.

## Solution

The approach to disable column reordering depends on the version of the KendoReact Grid you are using.

### For version 10.0.0 and later

Starting with version 10.0.0, the Grid underwent a major revamp with a new state handling mechanism. To disable column reordering for specific columns, you need to handle the `onColumnReorder` event and manually control which columns can be reordered. This approach allows you to lock specific columns at the beginning while allowing others to be reordered freely.

> Starting with version 10.0.0, the [orderIndex]({% slug api_grid_gridcolumnprops %}#toc-orderIndex) prop can no longer be used to prevent column reordering.

The following example demonstrates this approach:

{% meta height:560 %}
{% embed_file grid/grid-disable-reordering/v10/app.tsx preview %}
{% embed_file grid/grid-disable-reordering/v10/main.tsx %}
{% embed_file grid/grid-disable-reordering/v10/interfaces.ts %}
{% embed_file grid/grid-disable-reordering/v10/shared-kb-products.ts %}
{% endmeta %}

### For versions before 10.0.0

The `orderIndex` property to the GridColumn component allows you to restrict the column position at a specific place. For example, if you set the `orderIndex` prop of the first column to `0`, it will not be possible to neither drag it to another position, or drag another column to it.

> The following example works in versions before 10.0.0.

{% meta height:560 %}
{% embed_file grid/grid-disable-reordering/v9/app.tsx preview %}
{% embed_file grid/grid-disable-reordering/v9/main.tsx %}
{% embed_file grid/grid-disable-reordering/v9/interfaces.ts %}
{% embed_file grid/grid-disable-reordering/v9/shared-kb-products.ts %}
{% endmeta %}
