---
title: Add a Custom ColumnMenu Date Filter to the TreeList
description: An example on how to add a custom ColumnMenu date filter in the KendoReact TreeList.
type: how-to
page_title: Add a Custom ColumnMenu Date Filter to the TreeList - KendoReact TreeList
slug: treelist-custom-date-filter
tags: treelist, kendoreact, date, columnmenu
ticketid: 1511556
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.4.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

How can I create a custom date range filter as a 'From' and 'To' filter?

## Solution

A custom column menu should be created through which we set the [`filterContent`]({% slug api_datatools_columnmenuprops %}#toc-filtercontent) property to the custom filter we want to create. In the custom filter we render a DatePicker, whose onChange event calls the onColumnMenuFilterChange event, which sets the state of the filter and updates the TreeList accordingly.
We set the default operators through the [`initialFilter`]({% slug api_datatools_columnmenuprops %}#toc-initialfilter) property to match those of the filter we want to create, in this case greater than and equal to ("gte") and less than and equal to ("lte").

{% meta id height:580 %}
{% embed_file treelist/custom-columnmenu-date-filter/main.jsx preview %}
{% embed_file treelist/custom-columnmenu-date-filter/dateColumnMenu.jsx %}
{% embed_file shared/shared-treeListData.js %}
{% endmeta %}
