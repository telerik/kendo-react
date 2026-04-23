---
title: Adding a Mass Expand Header in a Master-Detail Grid
description: Learn how to implement a header cell for mass expanding or collapsing all detail rows in a KendoReact Grid.
type: how-to
page_title: How to Add a Mass Expand Header in a Master-Detail Grid with KendoReact
slug: grid-expand-all-headers
tags: kendo-react-ui, grid, master-detail, expand, header-cell
res_type: kb
ticketid: 1663304
components: ["grid"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.2.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Grid</td>
	    </tr>
    </tbody>
</table>

## Description

In a master-detail grid setup, there might be a need to add a header cell that allows users to expand or collapse all detail rows at once. This feature enhances user interaction by providing a quick way to view or hide detailed information related to each master row.

This KB article also answers the following questions:

-   How do you add a header for mass expanding in a master-detail grid?
-   What is the method to collapse all details in a KendoReact Grid?
-   Can you toggle expansion of all detail rows from a single header in a React data grid?

## Solution

To add a header cell with mass expand/collapse functionality in a [KendoReact Grid](https://www.telerik.com/kendo-react-ui/components/grid/), utilize the `cells` and its `headerCell` prop. This prop allows for custom content rendering in header cells. By identifying the expand column using its `field` value, you can implement a control to expand or collapse all detail rows.

Implement a state variable to keep track of the expansion state. Use this variable to toggle the expansion of all detail rows dynamically:

1. Initialize a state variable to track the mass expansion state.

```javascript
 const [detailExpand, setDetailExpand] = React.useState({});
```

2. Create a function to toggle the expansion state of all detail rows.

```javascript
 <Grid
        style={{
            height: '550px'
        }}
        data={categories}
        dataItemKey="CategoryID"
        detail={DetailComponent}
        detailExpand={detailExpand}
        onDetailExpandChange={expand}
        cells={{ headerCell: headerCellRender }}
    >
```

3. In the `cells` and its `headerCell` prop, add the custom content for the expand column and use the `expand` function to control the expansion state.

Below is a demonstration of implementing the expand header cell in a master-detail grid setup:

{% meta height:600 %}
{% embed_file grid/grid-expand-all-headers/app.jsx preview %}
{% embed_file grid/grid-expand-all-headers/main.jsx %}
{% endmeta %}

This approach allows users to easily expand or collapse all detail rows in the grid, improving the interaction and data visibility within the application.

## See Also

-   [KendoReact Grid Hierarchy Documentation](https://www.telerik.com/kendo-react-ui/components/grid/hierarchy/)
-   [Grid API - headerCellRender](https://www.telerik.com/kendo-react-ui/components/grid/api/GridProps/#toc-headercellrender)
