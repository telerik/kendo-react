---
title: Changing the PanelBarItem to allow opening in new window
description: An example on how to change the PanelBarItem so it can allow opening in new window
type: how-to
page_title: Adding href within the PanelBarItem so it can allow opening in new window on right-click - KendoReact PanelBar
slug: panelbar-open-in-new-window
tags: panelbar, layout, kendoreact
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
I want to have the option to open on right-click the PanelBarItem target in new window

## Solution
The browser displays the "Open in new window" option on right-click when the element has "href", so in order to allow this for the PanelBarItem we need to add an anchor element with "href". This can be achieved by setting a custom "title" for the PanelBarItem that will render the anchor element.

{% meta id height:650 %}
{% embed_file layout/panelbar-open-in-new-window/app.jsx %}
{% embed_file layout/panelbar-open-in-new-window/main.jsx %}
{% embed_file layout/panelbar-open-in-new-window/About.jsx %} 
{% embed_file layout/panelbar-open-in-new-window/Home.jsx %} 
{% embed_file layout/panelbar-open-in-new-window/PanelBarNavContainer.jsx preview %}
{% embed_file layout/panelbar-open-in-new-window/Products.jsx %}
{% embed_file layout/panelbar-open-in-new-window/Team.jsx %}
{% endmeta %}
