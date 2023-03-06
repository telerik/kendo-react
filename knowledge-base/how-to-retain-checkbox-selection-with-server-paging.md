---
title: Retain Checkbox Selection with Server Paging
description: An example on how to retain checkbox selection in the KendoReact Grid with server paging.  
type: how-to
page_title: Retain Checkbox Selection with Server Paging - KendoReact Grid
slug:  how-to-retain-checkbox-selection-with-server-paging
tags: grid, checkbox, selection, sever-paging
ticketid: 1413958
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.0.0.</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I retain the selection of checkbox in the KendoReact Grid when I navigate across different pages when the data comes from API server-side paging and sorting are configured?

## Solution

Keep the selected items by their ids inside the state.

{% meta id:index height:760 %}
{% embed_file grid/checkbox-selection-server-side/main.jsx preview %}
{% embed_file grid/checkbox-selection-server-side/products-loader.jsx %}
{% endmeta %}
