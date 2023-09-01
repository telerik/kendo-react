---
title: Custom cell with CheckBox for editing and view
description: An example on how to create a custom cell for boolean field with CheckBox for editing and viewing in KendoReact Grid.
type: how-to
page_title: Render Disabled CheckBox In View Mode Of A Cell - KendoReact Grid
slug: grid-checkbox-in-view-mode-for-boolean
tags: custom, editing, cell, kendoreact, grid
ticketid: 
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

How can I display a boolean value in CheckBox in view mode and editable CheckBox when the row is in edit mode.

## Solution

Add custom cell for the boolean column and render disabled CheckBox for view mode of the cell and enabled CheckBox when the dataItem is in edit mode.

Here is an example demonstrating this approach:

{% meta id height:760 %}
{% embed_file grid/checkbox-in-view-mode-for-boolean/main.jsx preview %}
{% embed_file grid/checkbox-in-view-mode-for-boolean/ExternalGridCell.jsx %}
{% embed_file grid/checkbox-in-view-mode-for-boolean/sample-products.jsx %}
{% endmeta %}
 
The example is using an extended Grid cell (ExternalGridCell) which adds all class names and attributes to the TD elements and allows changing only the content of the cell. This extended Grid cell is useful for every scenario with custom cells. 
