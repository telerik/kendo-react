---
title: Add button in the Grid's toolbar for clearing all filters
description: An example on how to add button in the toolbar of the Grid for clearing all filters.
type: how-to
page_title: Add button for clearing all filters in the Grid - KendoReact Grid
slug: grid-add-clear-filters-button
tags: grid, filter, filtering
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
I want to add button in the Grid's toolbar for clearing all filters

## Solution
For achieving the desired result a Button component can be placed within the GridToolbar and within its click event the filter object of the DataState stored in the state can be set to null

This is an example showcasing how to limit the value:

{% meta height:360 %}
{% embed_file grid/grid-add-clear-filters-button/app.jsx preview %}
{% embed_file grid/grid-add-clear-filters-button/main.jsx %}
{% endmeta %}
