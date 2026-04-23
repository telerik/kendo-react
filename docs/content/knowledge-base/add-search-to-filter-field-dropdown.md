---
title: Add search functionality to the Filter field dropdown
description: An example on how to add search functionality to the DropDownList used for field names in the Filter component.
type: how-to
page_title: Add Search to Filter Field Dropdown - KendoReact Filter
slug: add-search-to-filter-field-dropdown
tags: filter, kendoreact, dropdown, search, filterable, dropdownlist
res_type: kb
category: knowledge-base
components: ["filter"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>13.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Filter</td>
		</tr>
	</tbody>
</table>

## Description

I am using the Filter component and I have many fields. I want to add a search option within the DropDownList that displays field names, so that users can easily find the field they want to create a filter expression for.

## Solution

Although there is no direct option for changing the rendering of the DropDownList used for the field names, using the [DropDownListPropsContext](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/DropDownListPropsContext/) allows you to change the default properties of the component.

Since there will be multiple DropDownList components within each row in the Filter, you can use the `ariaLabel` property to identify the DropDownList for the field names within the [DropDownListPropsContext](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/DropDownListPropsContext/). When the callback is called for the field names DropDownList, add an [onFilterChange](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/DropDownListProps/#toc-onfilterchange) event handler and set the [filterable](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/DropDownListProps/#toc-filterable) property to `true`.

Following is an example demonstrating this approach:

<demo metaUrl="knowledge-base/filter/add-search-to-filter-field-dropdown/" height="600"></demo>
