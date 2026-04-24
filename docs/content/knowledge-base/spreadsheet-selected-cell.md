---
title: Obtaining Selected Cell Row and Column Indices in Spreadsheet for React
description: Learn how to access the indices of the selected cell in the Spreadsheet component for React.
type: how-to
page_title: How to Get Selected Cell Indices in React Spreadsheet Component
slug: spreadsheet-selected-cells
tags: react, spreadsheet, cell, index, selection
res_type: kb
ticketid: 1619277
components: ["spreadsheet"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.1.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Spreadsheet</td>
	    </tr>
    </tbody>
</table>

## Description

When working with the [Spreadsheet](https://www.telerik.com/kendo-react-ui/components/spreadsheet/) component in a React application, it is common to need the row and column indices of a selected cell. For instance, if a cell at position B1 is selected, you might want to know the specific row and column indices corresponding to this selection.

This KB article also answers the following questions:

-   How can I access the indices of a selected cell in a React Spreadsheet?
-   What method can be used to get the row and column numbers of a selected cell in the Spreadsheet?

## Solution

To obtain the row and column indices of a selected cell in the Spreadsheet component, you can use the `onSelect` event. However, because the standard `Range` object may not directly provide the `_ref` property containing the row and column indices, you can create an interface that extends the `Range` object to include this property.

Here's how you can achieve this:

In the `onSelect` event handler, cast the `e.range` object to your `CustomRange` type.

```jsx
const onSelect = (e) => {
    const range_ = e.range;
    console.log('Selected cell range:', range_);
    console.log('Column index:', range_._ref.col);
    console.log('Row index:', range_._ref.row);
};
```

3. Now, when a cell is selected, the `onSelect` event handler will log the row and column indices to the console.

{% meta  height:500 %}
{% embed_file spreadsheet/selected-cell/app.tsx preview %}
{% embed_file spreadsheet/selected-cell/main.tsx %}
{% endmeta %}

## See Also

-   [Official Spreadsheet Documentation](https://www.telerik.com/kendo-react-ui/components/spreadsheet/)
-   [Spreadsheet API Reference](https://www.telerik.com/kendo-react-ui/components/spreadsheet/api/)
