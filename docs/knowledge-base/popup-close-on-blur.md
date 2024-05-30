---
title: Close the Popup on Blur
description: An example on how to close the KendoReact Popup on blur.
type: how-to
page_title: Close the Popup on Blur- KendoReact Popup
slug: popup-close-on-blur
tags: popup, kendoreact, close, blur
ticketid: 1402574
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>3.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How the close the Popup when clicking outside of it?

## Solution

This can be done by:

1. Add a focusable container in the Popup (the Popup has no tabIndex by default).
1. Focus the focusable container when the Popup is opened.
1. On the `onBlur` event of that element close the Popup.

This is an example showcasing this:

{% meta id:index height:300 %}
{% embed_file popup/close-on-blur/app.jsx preview %}
{% embed_file popup/close-on-blur/main.jsx %}
{% endmeta %}

