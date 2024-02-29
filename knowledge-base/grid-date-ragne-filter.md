---
title: Create a Date-Range Filter in the Grid
description: An example on how to create a date-range filter in the KendoReact Grid.
type: how-to
page_title: Make a Date-Range Filter in the KendoReact Grid - KendoReact Grid
slug: grid-date-range-filter
tags: grid, kendoreact, dates, filter
ticketid: 1402875
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

How can I filter date ranges in the Grid.

Also, how to make Grid custom range filter working with Odata and show default value and a different format?

## Solution

This requires using the [filterCell]({% slug api_grid_gridcolumnprops %}#toc-filterCell) property of the Grid column to add two DatePickers/DateInputs that will allow the user to select a start and an end date. The format can be changed by configuring the [format]({% slug api_dateinputs_datepickerprops %}#toc-format). Use the [defaultValue]({% slug api_dateinputs_datepickerprops %}#toc-defaultValue) to pass a default value for the custom DatePicker component.

{% meta height:450 %}
{% embed_file grid/date-range-filter/main.jsx preview %}
{% embed_file shared/sample-products.js preview %}
{% endmeta %}