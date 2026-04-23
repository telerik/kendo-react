---
title: Filtering DateTime Fields in React Data Grid
description: Learn how to filter DateTime fields in the Kendo React Data Grid using custom filter components.
type: how-to
page_title: Filtering Date and Time in Kendo React Data Grid
slug: grid-columnmenufilter-by-date-and-time
tags: react, datagrid, datetime, filter, customization
res_type: kb
ticketid: 1689479
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>11.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

I am using the Kendo React Data Grid and have filters on my columns. These filters work fine except when attempting to use a date filter on a DateTime field. I want to filter by both date and time or by date only.

This knowledge base article also answers the following questions:

-   How can I filter DateTime fields in the Kendo React Data Grid?
-   Is it possible to filter by both date and time in the React Data Grid?
-   How to customize the filter component for DateTime fields in React Data Grid?

## Solution

To filter DateTime fields in the Kendo React Data Grid, use a custom `ColumnMenu` component to replace the default `DatePicker` with a `DateTimePicker`. Both components work with JavaScript `Date` objects, enabling filtering by date and time.

### Filtering with Custom Column Menu

1. Create a custom column menu that includes a `DateTimePicker`.
2. Attach the custom column menu to the `columnMenu` property of the specific column.

{% meta height:460 %}
{% embed_file grid/grid-columnmenufilter-by-date-and-time/app.tsx preview %}
{% embed_file grid/grid-columnmenufilter-by-date-and-time/main.tsx %}
{% embed_file grid/grid-columnmenufilter-by-date-and-time/products.ts %}
{% endmeta %}

## See Also

-   [React Data Grid Documentation](https://www.telerik.com/kendo-react-ui/components/grid/)
-   [React DateTimePicker Documentation](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/)
-   [React DatePicker Documentation](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/)
-   [React Data Grid Filtering Documentation](https://www.telerik.com/kendo-react-ui/components/grid/filtering/)
