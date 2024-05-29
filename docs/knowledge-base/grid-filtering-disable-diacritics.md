---
title: Ignore diacritics in the Grid filtering
description: An example on how to ignore diacritics when filtering the KendoReact Grid.
type: how-to
page_title: Ignore diacritics - KendoReact Grid
slug: grid-ignore-diacritics
tags: diacritics, grid, ignore
ticketid: 1617433
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.16.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description  

How can I ignore the diacritics in the Grid filtering?

## Solution

You can achieve this by rendering a custom filter cell and normalizing the passed value. First, pass a custom filter cell to the `filterCell` prop of a GridColumn. In the custom filter cell, render the needed component which will apply the filtering, and in `props.onChange` which controls the input value, remove the diacritics from `event.target.value` using [normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize).

This is an example demonstrating this implementation:

{% meta id:index height:560 %}
{% embed_file grid/ignore-diacritics/main.jsx preview %}
{% embed_file grid/ignore-diacritics/inputFilterCell.jsx %}
{% embed_file shared/shared-sample-products.js %}
{% endmeta %}
