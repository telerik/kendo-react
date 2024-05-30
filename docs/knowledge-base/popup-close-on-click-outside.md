---
title: Close the Popup by Clicking Outside
description: An example on how to close the KendoReact Popup by clicking outside.
type: how-to
page_title: Close the Popup by Clicking Outside - KendoReact Popup
slug: popup-close-on-click-outside
tags: popup, close, outside
ticketid: 1559361
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How can I close the Popup by clicking outside?

## Solution

Attach a global click handler that checks if the clicked element is the Popup and then  close it programmatically:

{% meta id:index height:300 %}
{% embed_file popup/close-on-click-outside/app.jsx preview %}
{% embed_file popup/close-on-click-outside/main.jsx %}
{% endmeta %}
