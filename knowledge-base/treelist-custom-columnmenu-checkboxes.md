---
title: Add a Custom ColumnMenu Checkboxes Filter to the TreeList
description: An example on how to add a custom ColumnMenu with checkboxes in the KendoReact TreeList.
type: how-to
page_title: Add a Custom ColumnMenu With Checkboxes for a TreeList Column- KendoReact TreeList
slug: treelist-custom-columnmenu-checkboxes
tags: treelist, kendoreact, checkboxes, columnmenu
ticketid: 1511556
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.12.1</td>
	    </tr> 
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

How can I create a custom column menu filter with checkboxes for a column in the TreeList?

## Solution

A custom column menu should be created through the [`filterContent`]({% slug api_datatools_columnmenuprops %}#toc-filtercontent) property to the custom filter we want to create. In the custom filter we can render a list with checkboxes, whose onChange event calls the onColumnMenuFilterChange event, which sets the state of the filter and updates the TreeList accordingly.

{% meta id height:580 %}
{% embed_file treelist/custom-columnmenu-checkboxes/main.jsx preview %}
{% embed_file treelist/custom-columnmenu-checkboxes/checkboxFilterColumnMenu.jsx %}
{% embed_file treelist/custom-columnmenu-checkboxes/data.js %}
{% embed_file shared/treeListData.js %}
{% endmeta %}
