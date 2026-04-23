---
title: Reducing Data Grid Column Header Height in KendoReact
description: Learn how to reduce the column header height in KendoReact Data Grid using custom CSS.
type: how-to
page_title: Adjusting Header Height in KendoReact Data Grid
slug: grid-reduce-header-height
tags: grid, kendoreact, header, css, styling
ticketid: 1701215
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

I want to reduce the height of column headers in the KendoReact Data Grid to better fit my design requirements.

This knowledge base article also answers the following questions:

-   How to change KendoReact Data Grid header height?
-   How to apply custom styling to KendoReact Data Grid headers?
-   How to reduce padding in KendoReact Data Grid headers?

## Solution

To reduce the column header height in KendoReact Data Grid, apply custom CSS targeting the relevant header elements. The header uses the `.k-grid-header` and `.k-header` classes, which can be styled directly.

Follow these steps:

1. Create a CSS file or add styles to your existing stylesheet.
2. Target the grid header elements with the `.k-grid-header th.k-header` selector.
3. Adjust the `height`, `padding-top`, `padding-bottom`, and `line-height` properties to match your design needs.

{% meta height:310 %}
{% embed_file grid/reduce-header-height/app.tsx preview %}
{% embed_file grid/reduce-header-height/main.tsx %}
{% embed_file grid/reduce-header-height/styles.css %}
{% endmeta %}

## See Also

-   [Grid Styling](slug:styling_grid)
-   [Grid Overview](slug:overview_grid)
