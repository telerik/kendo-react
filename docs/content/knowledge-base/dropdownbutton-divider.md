---
title: Add a divider between items in the DropDownButton
description: An example of how to add a divider between each item in a DropDownButton
type: how-to
page_title: Add a divider for items in the DropDownButton - KendoReact DropDownButton
slug: dropdownbutton-divider
tags: divider, dropdownbutton, items
ticketid: 1662183
res_type: kb
category: knowledge-base
components: ["dropdownbutton"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.5.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact DropDownButton</td>
	    </tr>
    </tbody>
</table>

## Description

How can I add a divider between my items in the DropDownButton?

## Solution

This can be achieved by creating a custom item with an `hr` element and passing it to the [`itemRender`]({% slug api_buttons_dropdownbutton %}#toc-itemRender) prop:

{% meta height:460 %}
{% embed_file dropdownbutton/dropdownbutton-divider/app.tsx preview %}
{% embed_file dropdownbutton/dropdownbutton-divider/main.tsx %}
{% endmeta %}
