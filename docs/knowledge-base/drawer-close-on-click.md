---
title: Change the expanded state of the Drawer when clicking outside of it
description: An example on how to hide the Drawer when clicking outside of it
type: how-to
page_title: Setting the expanded state to "false" when clicking outside of the Drawer - KendoReact Drawer
slug: drawer-close-on-click
tags: drawer, layout, kendoreact
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.13.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to hide the Drawer when I click outside of it
 
## Solution
To handle the click event, add event listener to the document for the "mousedown" event. Within the event handler check if the clicked target is within the Drawer wrapping container element and if not, change the "expanded" state variable.

The following example demonstrates this approach:

{% meta id height:460 %}
{% embed_file layout/drawer-close-on-click/main.jsx preview%}
{% embed_file layout/drawer-close-on-click/styles.css %}
{% endmeta %}
