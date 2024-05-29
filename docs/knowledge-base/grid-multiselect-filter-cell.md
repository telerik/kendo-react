---
title: Add custom filterCell with MultiSelect filter in Grid
description: An example on how to create MultiSelect filter with filterCell for a column in KendoReact Grid.
type: how-to
page_title: Add MultiSelect Filter By Customizing The FilterCell Of A Column - KendoReact Grid
slug: grid-multiselect-filter-cell
tags: custom, filtering, filtercell, kendoreact, grid
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I use MultiSelect for filtering a column?

## Solution 

Configure custom filterCell for the column where you want to use the MultiSelect. Either pass the data that will populate the MultiSelect from the main component or load it within the custom filterCell. Since there is no built-in filter operator for handling the array with multiple value that the MultiSelect will return, a custom operator must be defined.

Here is an example demonstrating this approach:

{% meta id height:650 %}
{% embed_file grid/multiselect-filter-cell/app.jsx preview %}
{% embed_file grid/multiselect-filter-cell/main.jsx %}
{% embed_file grid/multiselect-filter-cell/multiSelectFilterCell.jsx %}
{% embed_file grid/multiselect-filter-cell/products.json %}
{% endmeta %}
 
