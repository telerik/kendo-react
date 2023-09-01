---
title: Add button in a Tab without triggering selection
description: An example on how to add a button in a Tab that will not trigger onSelect.
type: how-to
page_title: Adding Clickable Button Within A TabStripTab - KendoReact TabStrip
slug: tabstrip-button-in-tabs
tags: tabstrip, layout, kendoreact, button
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
I want to add a button in one of my Tabs in the TabStrip, but without triggering onSelect when the button is clicked.

## Solution
The "title" property of the TabStripTab accepts string value and React Node and for placing a button within the TabStripTab you can set React Node with the tab title and the button. Within the onClick event of the Button, call preventDefault and stopPropagation for the event to stop the event from propagating to the TabStrip. 

Following is an example demonstrating the approach:

{% meta id height:500 %}
{% embed_file layout/tabstrip-button-in-tabs/main.jsx preview %}
{% endmeta %}
