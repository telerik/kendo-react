---
title: Grid Cell Click to Copy Value to Clipboard
description: Learn how to implement cell click functionality to copy cell values to clipboard with visual feedback in KendoReact Grid.
type: how-to
page_title: Grid Cell Click to Copy Value to Clipboard - KendoReact Grid
slug: grid-cell-click-copy-to-clipboard
tags: grid, kendoreact, clipboard, copy, cell-click
ticketid:
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

How can I make Grid cells clickable to copy their values to the clipboard and provide visual feedback when the copy operation is successful?

This knowledge base article also answers the following questions:

-   How do I add click handlers to Grid cells for copying data?
-   How do I implement clipboard copy functionality in KendoReact Grid?
-   How do I show visual feedback after copying cell values?

## Solution

To implement cell click-to-copy functionality:

1. Create a custom cell component that handles click events
2. Use the Clipboard API to copy cell values
3. Add visual feedback with notifications
4. Handle different data types appropriately

The following example demonstrates a complete implementation:

{% meta height:550 %}
{% embed_file grid/grid-cell-click-copy-to-clipboard/app.tsx preview %}
{% embed_file grid/grid-cell-click-copy-to-clipboard/main.tsx %}
{% embed_file grid/grid-cell-click-copy-to-clipboard/products.ts %}
{% endmeta %}

## See Also

-   [KendoReact Grid Overview](slug:overview_grid)
-   [Grid Custom Cells](slug:cells_grid)
