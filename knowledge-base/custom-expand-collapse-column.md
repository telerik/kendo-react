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

1. Remove the onExpandChange event handler from the Grid
1. Create a custom column that is bound to a custom expand field (different from the expandField set to the Grid).
1. Show the icons conditionally within the custom cell.
1. On click of the icons, trigger the onChange from the cell props, which will trigger the onItemChange event of the Grid
1. Within the onItemChange of the Grid, when the field is the custom expand field, change the expanded field state


Following is an example demonstrating this approach:

{% meta id height:540 %}
{% embed_file grid/custom-expand-collapse-column/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}
