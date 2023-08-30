---
title: Disable list items in the MultiSelect component.
description: An example on how to disable list items in the KendoReact MultiSelect.
type: how-to
page_title: Disable items - KendoReact Grid
slug: multiselect-disable-items
tags: disable, list, multiselect
ticketid: 1620902
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.17.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description  

How can I disable specific items based on a certain condition?

## Solution

You can achieve this using the itemRender property where you can add set the CSS styles `pointer-event: none` and `opacity: 0.7` for certain items.
In addition, when clicking a disabled item, the click event will happen on the <ul> list ( `k-list-ul` ) and this would close the Popup by default. Therefore, it is required to handle the component in controlled mode in this case such that in the onClose event.

This is an example demonstrating this implementation where the `Albania` item is disabled:

{% meta id:index height:760 %}
{% embed_file multiselect/multiselect-disable-items/main.jsx preview %}
{% embed_file shared/countries.js %}
{% endmeta %}
