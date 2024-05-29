---
title: DateRangePicker validate the entered dates of the DateRangePicker
description: An example on how to validate the entered dates in the KendoReact DateRangePicker
type: how-to
page_title: Validate the DateRangePicker date values - KendoReact DateRangePicker
slug: daterangepicker-validation
tags: daterangepicker, validation, daterange
ticketid: 1627626
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>6.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want validate the dates that are added to the DateRangePicker through its input element using either the keyboard or arrow keys.


## Solution
You can achieve this by custom rendering the date inputs which allows you to get their values in the `onChange` event handler. The value can be compared to the `min` or `max` date value that is passed through props to check if the entered date is valid or not. When the date is invalid, you can show the [Error](https://www.telerik.com/kendo-react-ui/components/labels/error/) component or [Popup](https://www.telerik.com/kendo-react-ui/components/popup/) component to display an error message:

Here is an example demonstrating this approach:

{% meta id height:480 %}
{% embed_file dropdowns/daterangepicker-validation/app.jsx preview %}
{% embed_file dropdowns/daterangepicker-validation/main.jsx %}
{% embed_file dropdowns/daterangepicker-validation/customStartDateInput.jsx %}
{% embed_file dropdowns/daterangepicker-validation/customEndDateInput.jsx %}
{% endmeta %}
