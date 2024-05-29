---
title: Add New Columns to the Grid
description: An example of how to add new columns to the KendoReact Grid.
type: how-to
page_title: Add New Columns to the Grid - KendoReact Grid
slug: grid-add-new-column
tags: grid, kendoreact, column, columns, add, new
ticketid: 1516858
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

How can I dynamically add new columns to the grid?

## Solution

This can be achieved with logic similar to the one in [`this demo`]({% slug editing_grid %}#toc-getting-started) of our documentation which showcases how to dynamically add new records (rows).

The idea here is to have a button that opens up a Form, which when submitted updates the database that contains all records and adds a new element to all objects in the data. The columns should be rendered dynamically by mapping through the database, which will allow the Grid to visualize any changes made in the database.


{% meta id height:760 %}
{% embed_file grid/add-new-column/main.jsx preview %}
{% embed_file grid/add-new-column/ColumnForm.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
