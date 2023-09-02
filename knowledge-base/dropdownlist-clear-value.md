---
title: Clear value in a DropDownList
description: An example of how to clear the value in a DropDownList
type: how-to
page_title: Clear value in a DropDownList - KendoReact DropDownList
slug: dropdownlist-clear-value
tags: dropdownlist, clear, value
ticketid: 1548198
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.13.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How to clear the value of a DropDownList?

## Solution

A custom clear button can be added by inserting children elements and passing them to the [`valueRender`]({% slug api_dropdowns_dropdownlistprops %}#toc-valuerender) prop.


{% meta id height:460 %}
{% embed_file dropdownlist/dropdownlist-clear-value/main.tsx preview %}
{% endmeta %}
