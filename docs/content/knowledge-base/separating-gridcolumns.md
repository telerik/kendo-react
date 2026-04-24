---
title: Separating GridColumns into a Separate Component in KendoReact Data Grid
description: Learn how to store GridColumns separately and use them in KendoReact Grid using arrays instead of separate components.
type: how-to
page_title: Using Separate Components for GridColumns in KendoReact Grid
slug: separating-gridcolumns
tags: kendoreact, grid, gridcolumn, react, reusable-components, column-configuration
ticketid: 1681576
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

How can I make the implementation of the KendoReact Grid more generic by moving `GridColumn` components into a separate reusable component? When I attempt this, the `GridColumn` elements are ignored by the Grid.

This knowledge base article also answers the following questions:

-   How do I reuse GridColumns in KendoReact Data Grid?
-   How do I create a separate component for GridColumns in KendoReact Grid?
-   Why are GridColumns not rendering when moved into a separate component?

## Solution

To achieve reusable column configurations, store the `GridColumn` elements in arrays instead of separate components. The Grid component requires `GridColumn` elements to be direct children, so wrapper components don't work.

The following example demonstrates the correct implementation:

{% meta height:400 %}
{% embed_file grid/separating-gridcolumns/app.tsx preview %}
{% embed_file grid/separating-gridcolumns/main.tsx %}
{% embed_file grid/separating-gridcolumns/products.ts %}
{% endmeta %}

## See Also

-   [KendoReact Grid Overview](slug:overview_grid)
