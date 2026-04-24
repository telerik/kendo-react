---
title: Filtering Data in MultiColumnComboBox Using a Different Column
description: Learn how to filter data in KendoReact MultiColumnComboBox using a column other than the one specified in the textField property.
type: how-to
page_title: Filter MultiColumnComboBox Data by a Different Column in KendoReact
meta_title: Filter MultiColumnComboBox Data by a Different Column in KendoReact
slug: multicolumncombobox-filter-data-through-different-column
tags: kendoreact,multicolumncombobox,filter,field,textfield
res_type: kb
ticketid: 1694741
components: ["multicolumncombobox"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>11.3.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact MultiColumnComboBox</td>
		</tr>
	</tbody>
</table>

## Description

I want to filter data in a [MultiColumnComboBox](slug:overview_multicolumncombobox) using a column that differs from the one specified in the `textField` property.

This knowledge base article also answers the following questions:

-   Is it possible to set MultiColumnComboBox filtering to a custom field?
-   How to customize filtering for specific columns in KendoReact MultiColumnComboBox?

## Solution

To filter data in the MultiColumnComboBox based on a column other than the `textField` property, handle the `onFilterChange` event and explicitly set the `field` property of the filter.

Follow these steps:

1. Implement the `onFilterChange` handler.
2. Override the `field` property of the filter object with the desired column.

{% meta height:320 %}
{% embed_file multicolumncombobox/filter-data-through-different-column/app.tsx preview %}
{% embed_file multicolumncombobox/filter-data-through-different-column/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact MultiColumnComboBox Documentation](slug:overview_multicolumncombobox)
-   [Filtering in KendoReact MultiColumnComboBox](slug:filtering_multicolumncombobox)
-   [API Reference for KendoReact MultiColumnComboBox](slug:api_dropdowns_multicolumncombobox)
