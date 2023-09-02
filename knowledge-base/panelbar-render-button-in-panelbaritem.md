---
title: Rendering button in PanelBarItem without triggering selection, expand nor collapse
description: An example on how to add button in PanelBarItem
type: how-to
page_title: Add Clickable Button In PanelBarItem Without Triggering Selection, Expand Or Collapse - KendoReact PanelBar
slug: panelbar-add-button-in-panelbaritem
tags: panelbar, layout, kendoreact, panelbaritem, button
ticketid: 
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
I want to add a button in PanelBarItem but without selecting the item and without triggering the expand/collapse

## Solution
Add a Button in the PanelBarItem and within the onClick event use preventDefault and stopPropagation over the event to stop the propagation to the PanelBar.

{% meta id height:760 %}
{% embed_file layout/panelbar-render-button-in-panelbaritem/main.jsx preview %}
{% endmeta %}
