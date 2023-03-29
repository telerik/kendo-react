---
title: Add grouping functionality for the ListView
description: An example on how to render grouped items in ListView
type: how-to
page_title: Grouping functionality - KendoReact ListView
slug: listview-grouping
tags: listview, grouping, customization, appearance
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.12.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want to have grouping functionality in KendoReact ListView

## Solution
The ListView is a template component and it allows complex rendering of the items. 

The first step for achieving the desired result will be to group the items by using the groupBy helper method. This will create an array where the parent items will be group items holding the group value and an items collection with the data items of that group. 

The second step will be to create a template that will take advantage of the new data structure and render the parent items (group items) as the main containers and the child items (the data items for each group) within that container. 

This is an example showcasing how to limit the value:
 
{% meta height:760 %}
{% embed_file listview/listview-grouping/main.jsx preview %} 
{% embed_file listview/listview-grouping/products.json preview %} 
{% endmeta %}
