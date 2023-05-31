---
title: Implement expand/collapse in Grid with flat data without grouping
description: An example on how to create custom expand/collapse with flat data.
type: how-to
page_title: Implement custom expand/collapse logic for flat data - KendoReact Grid
slug: grid-expand-with-flat-data
tags: grid, expand, hierarchy
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
I have flat data and I want to add expand/collapse functionality for hiding a given set of items by some custom condition.

## Solution
Add a column with custom "cell" for rendering the expand/collapse icons. Within the Grid's rowRender the 'child' items visibility can be determined by the custom logic in which the items are 'grouped'. 

Following is an example demonstrating how to simulate hierarchy with flat data where the order of the items in the 'data' are in the correct order and the parent items have ParentID equal to 0. 

{% meta height:760 %}
{% embed_file grid/expand-with-flat-data/main.jsx preview %} 
{% endmeta %}
