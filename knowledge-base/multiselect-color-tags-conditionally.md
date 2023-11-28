---
title: Color the MultiSelect tags conditionally
description: An example on how to color the tags conditionally
type: how-to
page_title: Color the MultiSelect tags based on a condition - KendoReact MultiSelect
slug: multi-select-color-tags-conditionally
tags: multi-select, multi-select, color, tags,
ticketid: 1599602
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>6.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How to color all the selected tags based on a condition?

## Solution

This can be achieved by customizing the tags via the [tagRender](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/MultiSelectProps/#toc-tagrender/):

{% meta id:index height:900 %}
{% embed_file multiselect/multiselect-color-tags/main.jsx preview %}
{% endmeta %}
