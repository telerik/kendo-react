---
title: Transfer Items From One ListBox to Another on DoubleClick
description: An example on how to transfer items from one ListBox to another on doubleclick
type: how-to
page_title: Transfer Items From One ListBox to Another on DoubleClick - KendoReact ListBox
slug: listbox-transfer-item-on-double-click
tags: listbox, doubleclick, transfer, items
res_type: kb
category: knowledge-base
components: ["listbox"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>9.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact ListBox</td>
	    </tr>
    </tbody>
</table>

## Description

I want to transfer items from one ListBox to another on double click without using the toolbar?

## Solution

To achieve this, render a custom [item]({% slug api_listbox_listboxprops %}#item), attach a double-click event to it, and implement the transfer logic.

{% meta height:500 %}
{% embed_file listbox/listbox-transfer-item-on-double-click/app.tsx preview %}
{% embed_file listbox/listbox-transfer-item-on-double-click/main.tsx %}
{% embed_file listbox/listbox-transfer-item-on-double-click/shared-lb-products.ts %}
{% embed_file listbox/listbox-transfer-item-on-double-click/shared-lb-interfaces.ts %}
{% endmeta %}
