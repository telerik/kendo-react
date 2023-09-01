---
title: Add Paging, Sorting, and Filtering to a Grid with Form-Editing Features
description: An example of how to have the pagination, sorting, and filtering functionalities of a KendoReact Grid with form-editing features.
type: how-to
page_title: Have Paging, Sorting, and Filtering Functionalities in a Grid with Form-Editing Features - KendoReact Grid
slug: grid-multiple-functionalities
tags: grid, kendoreact, paging, sorting, filtering, page, sort, filter, form, edit
ticketid: 1512657
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.6.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I have paging, sorting and filtering functionality of a Grid with form editing features?

## Solution

This can be achieved by building upon [`this demo`]({% slug external_editing_grid %}) of our documentation which showcases how to achieve a Grid with form editing features. 

By following the steps in the articles in our documentation regarding how to apply [`sorting`]({% slug sorting_grid %}#toc-getting-started), [`filtering`]({% slug filtering_grid %}#toc-getting-started) and [`paging`]({% slug paging_grid %}#toc-getting-started), those functionalities are then included to result in the following scenario shown in the demo below.



{% meta id height:650 %}
{% embed_file grid/multiple-functionalities/main.jsx preview %}
{% embed_file grid/multiple-functionalities/editForm.jsx %}
{% embed_file shared/products.json %}
{% endmeta %}
