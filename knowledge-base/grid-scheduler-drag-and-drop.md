---
title: Drag and Drop Items From the KendoReact Grid to the KendoReact Scheduler
description: An example on how to drag and drop items from the KendoReact Grid to the KendoReact Scheduler.
type: how-to
page_title: Drag and Drop Items From the KendoReact Grid to the KendoReact Scheduler - KendoReact Grid KendoReact Scheduler
slug: grid-scheduler-drag-and-drop
tags: grid, kendoreact, scheduler, drag, drop
ticketid: 1478702
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>3.15.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

Looking for a drag and drop between KendoReact Grid and KendoReact Scheduler. I want to transfer items from the Grid to the Scheduler.

## Solution

This will required the following setup:

1. Use the [rowRender](https://www.telerik.com/kendo-react-ui/components/grid/api/GridProps/#toc-rowrender) prop of the Grid to make the row draggable and to get the currently dragged item.
1. Then we need add a onDropEvent to the Scheduler container using the [component ref](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs).
1. When the user drops an item we add it to the Scheduler data updating the state.

{% meta id:index height:900 %}
{% embed_file scheduler/dnd-from-grid/main.jsx preview %}
{% embed_file shared/data.js %}
{% endmeta %}
