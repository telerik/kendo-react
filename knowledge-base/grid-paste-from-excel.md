---
title: Paste Data From Excel
description: An example on how to paste data from Excel in the KendoReact Grid.
type: how-to
page_title: Paste Data From Excel - KendoReact Grid
slug: grid-paste-from-excel
tags: grid, kendoreact, excel, paste
ticketid: 1481168
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

I need to provide mechanism for pasting data into my KendoReact Grid, from Excel sheets.

## Solution

This will require wrapping the Grid in a div element and attaching an `onPaste` event. Then on that event:
1. Take the data.
1. Transform it into JSON based on the Grid fields. 
1. Set that JSON array as Grid data.

This can be seen in the following example:

{% meta id:index height:760 %}
{% embed_file grid/paste-from-excel/main.jsx preview %}
{% endmeta %}
