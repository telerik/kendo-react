---
title: Determine which scrollbar have triggered the onPageChange event with virtual scrolling in the Grid 
description: An example on how to determine which scrollbar was moved to fire onPageChange - KendoReact Grid.
type: how-to
page_title: Find which scrollbar have trigged the onPageChange event when virtual scrolling is enabled - KendoReact Grid
slug: grid-virtual-scrolling-pagechange-event
tags: grid, kendoreact, virtualization, scrolling
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.9.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

When virtual scrolling is enabled for the Grid, the onPageChange event fires even if the horizontal scrollbar is moved. How can I determine if the onPageChange is triggered from the vertical scrollbar?

## Solution

The onPageChange event contains the nativeEvent and storing its target scrollTop and scrollLeft values can be used for determining which scrollbar have triggered the event.

Following is an example demonstrating this approach:


{% meta id height:500 %}
{% embed_file grid/virtual-scrolling-pagechange-event/main.jsx preview %}
{% endmeta %}
