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
			<td>6.0.2</td>
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
{% embed_file scheduler/dnd-from-grid/app.jsx preview %}
{% embed_file scheduler/dnd-from-grid/main.jsx %}
{% embed_file shared/shared-data.js %}
{% endmeta %}

## Enabling the drag and drop on mobile devices

This can be achieved by using the KendoReact [Drag&Drop](https://www.telerik.com/kendo-react-ui/components/utils/drag-and-drop/) utility with a custom `DragHandleCell` with touchAction set to `none`:

{% meta id:index height:900 %}
{% embed_file scheduler/dnd-from-grid-mobile/draggable/app.jsx preview %}
{% embed_file scheduler/dnd-from-grid-mobile/draggable/main.jsx %}
{% embed_file scheduler/dnd-from-grid-mobile/draggable/drag-handle-cell.jsx %}
{% embed_file scheduler/dnd-from-grid-mobile/draggable/draggable-row.jsx %}
{% embed_file shared/shared-data.js %}
{% embed_file shared/shared-products.json %}
{% endmeta %}


The native Drag & Drop API does not support touch events by default. It is possible to enable the drag and drop functionality on mobile devices by using a polyfill as well:

{% meta id:index height:900 %}
{% embed_file scheduler/dnd-from-grid-mobile/polyfill/app.jsx preview %}
{% embed_file scheduler/dnd-from-grid-mobile/polyfill/main.jsx %}
{% embed_file shared/shared-data.js %}
{% endmeta %}