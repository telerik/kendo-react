---
title: Hiding Repeating Cell Values in KendoReact Data Grid
description: Learn how to hide repeating cell values in consecutive rows of a React Data Grid to enhance data readability.
type: how-to
page_title: How to Hide Repeating Values in React Data Grid Cells
slug: grid-show-unique-cell-values
tags: react, data grid, cell rendering, custom cell, hide repeating values
res_type: kb
ticketid: 1664708
components: ["grid"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>9.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Grid</td>
	    </tr>
    </tbody>
</table>

## Description

In a React Data Grid, I have rows where certain cell values repeat in consecutive rows (e.g., Product and UnitSize). I want to hide these repeating values in the subsequent rows to make the grid cleaner and easier to read. How can I achieve this without altering the data source?

This KB article also answers the following questions:

-   How to implement custom cell rendering in React Data Grid?
-   How to conditionally display cell content based on the previous row's data?
-   How to enhance data readability by hiding duplicate cell values?

## Solution

To hide repeating cell values in a React Data Grid, you can utilize a [custom cell rendering template](https://www.telerik.com/kendo-react-ui/components/grid/cells/#toc-add-basic-custom-data-cell). This approach involves rendering the cell content conditionally, based on whether the current cell value differs from the corresponding value in the previous row.

```jsx
const CustomCell = (props) => {
    const currentIndex = props.dataIndex;

    const shouldRenderProduct =
        currentIndex != 0
            ? sampleProducts[currentIndex - 1].Product == sampleProducts[currentIndex].Product
                ? false
                : true
            : true;

    return (
        <td {...props.tdProps} colSpan={1}>
            {shouldRenderProduct ? props.children : null}
        </td>
    );
};
```

You can test this approach here:

{% meta height:660 %}
{% embed_file grid/grid-show-unique-cell-values/app.jsx preview %}
{% embed_file grid/grid-show-unique-cell-values/main.jsx %}
{% endmeta %}

## See Also

-   [Custom Data Cell in Grid](https://www.telerik.com/kendo-react-ui/components/grid/cells/#toc-add-basic-custom-data-cell)
-   [Grid Component Overview](https://www.telerik.com/kendo-react-ui/components/grid/)
-   [React Data Grid - Cell Rendering Example](https://stackblitz.com/edit/react-2goi3m?file=app%2Fapp.tsx)
