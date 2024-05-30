---
title: Drag and Drop an Item from KendoReact TreeLists to DIV
description: An example on how to drag and drop an item from KendoReact TreeList to HTML element.
type: how-to
page_title: Drag and Drop Item from TreeList - KendoReact TreeList
slug: treelist-drag-drop-to-element
tags: treelist, kendoreact, drag, drop
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.12.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How can I drag and drop item from TreeList to a DIV element?

## Solution

This requires the following: 

1. Use the [rowRender]({% slug api_treelist_treelistprops %}#toc-rowrender) property of the TreeList to add the dragStart event to the rows.
1. Save the dragged item in the state during the [onDragStart](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event) event.
1. During the [onDrop](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop) event of the DIV element update the dropped item.

Following is an example with the described approach:

{% meta id height:700 %}
{% embed_file treelist/drag-drop-to-element/app.jsx preview %}
{% embed_file treelist/drag-drop-to-element/main.jsx %}
{% embed_file treelist/drag-drop-to-element/data.js  %}
{% endmeta %}
