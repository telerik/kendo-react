---
title: Dynamically Show/Hide Columns in the Grid
description: An example on how to dynamically show or hide the columns in the KendoReact Grid.
type: how-to
page_title: Show/Hide Columns Dynamically in the Grid - KendoReact Grid
slug: grid-show-hide-columns
tags: grid, kendoreact, show, hide, columns, column
ticketid: 1514629
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.5.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I dynamically show or hide the columns in the grid?

## Solution

In order to achieve this, the Columns of the Grid should be rendered dynamically and the data for the Columns should be kept in the state, so that the changes in the Grid can be visualized. In the example below, each Column has a show property which determines whether that Column is shown. There are checkboxes above the Grid whose onChange event handlers cause the state change and thus cause the re-rendering of the Grid with the corresponding columns missing/added.


{% meta id height:760 %}
{% embed_file grid/show-hide-columns/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}
