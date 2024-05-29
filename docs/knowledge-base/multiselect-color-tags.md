---
title: Change the colors of the selected MultiSelect tags based on a condition
description: Learn how to set the colors of the selected MultiSelect tags based on a condition
type: how-to
page_title: Change the colors of the selected MultiSelect tags based on a condition - KendoReact MultiSelect
slug: multiselect-color-tags
tags: multiselect, kendoreact, tags, colors, conditionally
ticketid: 1611089
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.14.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How to color the selected tags of the MultiSelect based on a condition?

## Solution

This can be achieved by using the [`tagRender`]({% slug api_dropdowns_multiselectprops %}#toc-tagrender) property and setting the background color based on the required condition.

{% meta id:index height:320 %}
{% embed_file multiselect/multiselect-color-tags/app.jsx preview %}
{% embed_file multiselect/multiselect-color-tags/main.jsx %}
{% endmeta %}
