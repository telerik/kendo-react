---
title: Alternate the KendoReact Data Grid row colors
description: An example on how to alternate the row colors of the KendoReact Data Grid.
type: how-to
page_title: Alternate row colors - KendoReact Grid
slug: grid-alternate-row-colors
tags: grid, locked, row color, row, locked column color
ticketid: 1622261
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>7.3.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

I want to alternate the Grid row colors. In addition, I also want to apply this color to the rows that belong to [locked]({% slug api_grid-gridcolumnprops %}#toc-locked) columns.

## Solution

For changing the row, you can use the `.k-grid .k-table-row` class, and `.k-grid .k-table-row.k-table-alt-row` for the alt rows. As for the rows that are in locked columns, use the `.k-grid .k-table .k-grid-content-sticky` and `.k-master-row.k-table-alt-row .k-grid-content-sticky` classes.

As an example, the following will set the background of the alt rows to `red` and the normal rows to `lightblue`. This will also be applied to the rows of the `ProductID` column that is locked because .

```jsx
<div>
  <Grid
    style={{
      height: "400px",
    }}
    data={products}
  >
    <GridColumn field="ProductID" title="ID" width="40px" locked={true} />
    <GridColumn field="ProductName" title="Name" width="250px" />
    <GridColumn field="Category.CategoryName" title="CategoryName" />
    <GridColumn field="UnitPrice" title="Price" />
    <GridColumn field="UnitsInStock" title="In stock" />
  </Grid>
  <style>
    {`
    .k-grid .k-table-row {
        background: lightblue;
    }
    .k-grid .k-table-row.k-table-alt-row {
        background: red;
    }
    .k-grid .k-table .k-grid-content-sticky {
        background: lightblue;
    }
    .k-master-row.k-table-alt-row .k-grid-content-sticky {
        background: red;
    }
    `}
  </style>
</div>
```

You can also set the background color to specific rows using the [nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) pseudo class.

```css
.k-grid .k-table-row:nth-child(2) {
  background: lightblue;
}
```
