---
title: Only allow unique grouping in the Grid
description: An example on how to only allow unique grouping for the KendoReact Grid.
type: how-to
page_title: Unique grouping - KendoReact Grid
slug: grid-unique-grouping
tags: group, grid, unique, duplicate
ticketid: 1617400
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

How can I disable duplicate grouping for the Data Grid?

## Solution

In the `onGroupChange` event handler, you can check if the newly added group exists in the `group` state variable. In addition, when the group is added, `event.nativeEvent` is undefined. Since the `onGroupChange` event is also responsible to remove groups (in that case `event.nativeEvent` is defined), therefore, set the `group` and `resultState` only when `event.nativeEvent` is defined and `groupExists` equals false.

This is an example demonstrating the implementation:

{% meta id:index height:680 %}
{% embed_file grid/unique-groups/app.jsx preview %}
{% embed_file grid/unique-groups/main.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
