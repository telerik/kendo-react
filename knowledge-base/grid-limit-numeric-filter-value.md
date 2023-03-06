---
title: Limit Value in a Numeric Filter
description: An example on how to limit the value in the numeric filter of the KendoReact NumericTextBox.
type: how-to
page_title: Limit the Value in a Numeric Filter - KendoReact NumericTextBox
slug: limit-numeric-filter-value
tags: grid, NumericTextBox, filter, limit value
ticketid: 1547408
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.13.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
How to limit the value in a numeric filter cell in order to prevent negative values?

## Solution
Creating a custom component that uses NumericTextBox as a filter and setting the min prop to zero.

This is an example showcasing how to limit the value:

{% meta height:760 %}
{% embed_file grid/limit-numeric-filter-value/main.jsx preview %}
{% endmeta %}
