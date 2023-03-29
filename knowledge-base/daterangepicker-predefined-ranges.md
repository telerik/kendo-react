---
title: Add buttons with predefined ranges in DateRangePicker's popup
description: An example on how to add custom buttons for setting predefined ranges in the DateRangePicker
type: how-to
page_title: Adding predefined ranges in the popup - KendoReact DateRangePicker
slug: daterangepicker-predefined-ranges
tags: daterangepicker, predefined, ranges, customization
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
I want to add buttons in the DateRangePicker's popup for setting predefined ranges (like today's date, this week, this month, etc.).


## Solution
For achieving the desired result a custom Popup must be defined for the DateRangePicker, where the custom buttons can be added. Since the custom Popup of the DateRangePicker provides the default children elements, they can be re-used.

This is an example showcasing how to limit the value:
 
{% meta height:760 %}
{% embed_file dateinputs/daterangepicker-predefined-ranges/main.jsx preview %}  
{% embed_file dateinputs/daterangepicker-predefined-ranges/styles.css preview %} 
{% endmeta %}
