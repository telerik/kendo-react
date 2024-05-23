---
title: Show invalid state for DateRangePicker if start date is after end date
description: An example on how to validate the DateRangePicker based on the start and end dates
type: how-to
page_title: Set Invalid State If Start Date Is After End Date - KendoReact DateRangePicker
slug: daterangepicker-validate-range
tags: daterangepicker, validation, range, invalid
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>5.14.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want to set the DateRangePicker to invalid state or show error message if the start date is after the end date.


## Solution
Set the "valid" property of the DateRangePicker to a state variable that can be changed to "true" or "false" within the onChange event of the DateRangePicker based on the "start" and "end" values.

This is an example showcasing the approach:

{% meta id height:560 %}
{% embed_file dateinputs/daterangepicker-validate-range/main.jsx preview %}
{% endmeta %}
