---
title: Add option for reordering KendoReact MultiSelect tags
description: An example on how to reorder tags in KendoReact MultiSelect.
type: how-to
page_title: Allow Reordering For MultiSelect Tags With Sortable - KendoReact MultiSelect
slug: multiselect-reorder-tags
tags: multiselect, kendoreact, reorder, sortable
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

Can I reorder the selected values/tags in the MultiSelect?

## Solution 

1. Hide the default tags by setting empty element in the MultiSelect "tags" option. 
1. Use Sortable to render custom tags over the input of the MultiSelect.

This is an example showcasing this in action:

{% meta id:index height:760 %}
{% embed_file multiselect/multiselect-reorder-tags/main.jsx preview %}
{% embed_file multiselect/multiselect-reorder-tags/styles.css %} 
{% endmeta %}