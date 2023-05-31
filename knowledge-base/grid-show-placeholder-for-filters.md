---
title: Show placeholder in the KendoReact Grid filter components
description: An example on how to show placeholder for the filters - KendoReact Grid.
type: how-to
page_title: Set placeholders for the filters - KendoReact Grid
slug: grid-show-placeholder-for-filters
tags: grid, kendoreact, filtering, placeholder
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

How can I add "Search" text in the Grid filters when they are empty?

## Solution

For setting a placeholder text for the built-in Grid filters a combination of using PropsContext (for the DatePicker and the NumericTextBox) for changing the "placeholder" property and pure JavaScript for setting the "placeholder" attribute for simple inputs can be used. 

Following is an example demonstrating how to set a placeholder for NumericTextBox, DatePicker and simple inputs for the filter components in the Grid: 


{% meta id height:760 %}
{% embed_file grid/grid-show-placeholder-for-filters/main.jsx preview %}
{% embed_file grid/grid-show-placeholder-for-filters/grid-with-filtering.jsx %}
{% embed_file grid/grid-show-placeholder-for-filters/sample-products.js %}
{% endmeta %}
