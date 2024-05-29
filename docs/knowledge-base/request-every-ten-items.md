---
title: Make an API request on every ten scrolled items in the DropDownList
description: An example of how to make an API request after ten items are scrolled
type: how-to
page_title: Make an API request on every ten scrolled items in the DropDownList - KendoReact DropDownList
slug: request-every-ten-items
tags: dropdownlist, scrolling, api, request
ticketid: 1544377
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

How to make an API call only once ten items have been scrolled in the DropDownList?

## Solution

This can be achieved by creating a shouldRequestData function that checks if the skip is divisible by ten


{% meta id height:480 %}
{% embed_file dropdownlist/request-every-ten-items/app.tsx preview %}
{% embed_file dropdownlist/request-every-ten-items/main.tsx %}
{% endmeta %}
