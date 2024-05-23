---
title: Drag and Drop an Item between Two KendoReact TreeLists
description: An example on how to drag and drop an item between two KendoReact TreeList components.
type: how-to
page_title: Drag and Drop Items between TreeLists - KendoReact TreeList
slug: treelist-drag-and-drop
tags: treelist, kendoreact, drag, drop
ticketid: 1520227
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>4.7.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How can I drag and drop item between two TreeList components?

## Solution

This requires the following:

1. Use the [rowRender]({% slug api_treelist_treelistprops %}#toc-rowrender) property of the TreeList to add the drag and drop events to the rows.
1. Save the dragged item in the state during the [onDragStart](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event) event.
1. During the [onDrop](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop) event update the data in both TreeList components.

This can be seen in action in the following example:

{% meta id height:500 %}
{% embed_file treelist/drag-and-drop/main.jsx preview %}
{% endmeta %}
