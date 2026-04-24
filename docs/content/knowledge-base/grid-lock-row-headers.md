---
title: Dynamically Lock Row Section Headers
description: An example on how to dynamically lock row based on a data group in the KendoReact Grid.
type: how-to
page_title: Dynamically Lock Row Section Headers - KendoReact Grid
slug: grid-lock-row-headers
tags: grid, kendoreact, dates, format
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
			<td>4.10.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

How can I add a locked section header that changes when I scroll through the data similar to the ComboBox grouping headers.

## Solution

This will required the following:

1. The section/header rows have to be part of the data.
1. We can add a field in those data items and lock the rows based on that. The locked row of the current section/group will be locked at the top.

> This approach is working with flat data and grouping on only one level. As the section/group data is part of the flat data we have to filter it based on that section value in order to collapse/expand the sections.

The following example showcase this in action:

{% meta height:760 %}
{% embed_file grid/lock-row-headers/app.jsx preview %}
{% embed_file grid/lock-row-headers/main.jsx %}
{% endmeta %}
