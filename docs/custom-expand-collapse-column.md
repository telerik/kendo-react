---
title: Implement Custom Expand/Collapse Columns
description: An example on how to create a custom expand/collapse column in the KendoReact Grid.
type: how-to
page_title: Change or Hide Columns by Implementing an Expand/Collapse Column - KendoReact Grid
slug: howto_custom_expand_collapse_column
tags: expand, collapse, column, kendoreact, grid
ticketid: 1410508
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I have control over the expand/collapse column of the KendoReact Grid and be able to change or hide the Grid columns?

## Solution

To modify the expand/collapse column of the Grid:

1. Create a custom column that is bound to the expanded field.
1. Show the icons conditionally.

For more information, refer to the following props:
* [`cell`]({% slug api_grid_gridcolumnprops %}#toc-cell)
* [`headerCell`]({% slug api_grid_gridcolumnprops %}#toc-headercell)

For the full implementation of the suggested approach, refer to the [demo on creating a custom expand/collapse column in the KendoReact Grid](https://stackblitz.com/edit/react-abh1id-pwtfuf?file=app/main.jsx).
