---
title: Implementing a Custom Multiselect Filter in KendoReact TreeList
description: Learn how to create and implement a custom Multiselect filter for KendoReact TreeList.
type: how-to
page_title: Creating a Custom Multiselect Filter for KendoReact TreeList
meta_title: Custom Multiselect Filter for KendoReact TreeList
slug: treelist-multiselect-filter
tags: treelist, multiselect, filter, kendo-react
res_type: kb
ticketid: 1706239
category: knowledge-base
components: ['treelist']
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
	    	<td>Progress® KendoReact TreeList</td>
	    </tr>
    </tbody>
</table>

## Description

I want to implement a custom Multiselect filter for the [KendoReact TreeList](https://www.telerik.com/kendo-react-ui/components/treelist/overview). The filter must allow users to select multiple values and display only TreeList items containing all selected values. The TreeList does not expose the `onChange` event for custom filter cells, only the `onFilterChange` event is available. Attempts to use `onFilterChange` resulted in runtime errors due to mismatched filter object structures.

This knowledge base article also answers the following questions:

-   How to apply a Multiselect filter in KendoReact TreeList?
-   Can you use `onFilterChange` for custom filters in KendoReact TreeList?
-   How to filter items containing multiple values in KendoReact TreeList?

## Solution

To implement a custom Multiselect filter for KendoReact TreeList, follow these steps:

1. Define the filter cell logic using the `onFilterChange` event.
2. Use the `MultiSelect` component for filtering values.
3. Customize the filter logic to ensure the TreeList displays rows containing all selected values.

The key is to create a custom filter cell component that:

-   Accepts the current filter state and data
-   Renders a `MultiSelect` component with the available values
-   Handles the filter change by creating a custom operator function that checks if the cell value is included in the selected values array
-   Provides a clear button to reset the filter

<demo metaUrl="knowledge-base/treelist/treelist-multiselect-filter/" height="580"></demo>

## See Also

-   [KendoReact TreeList Filtering](https://www.telerik.com/kendo-react-ui/components/treelist/filtering#custom-filter-cells)
-   [KendoReact MultiSelect Documentation](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/overview)
-   [KendoReact TreeList API Reference](https://www.telerik.com/kendo-react-ui/components/treelist/api/)
