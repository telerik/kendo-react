---
title: Pass Additional Props to Custom Grid Cells
description: An example on how to pass additional props to a custom cell in the KendoReact Grid.
type: how-to
page_title: Pass Additional Props to Custom Cells - KendoReact Grid
slug: pass-additional-props-to-custom-cell
tags: kendoreact, grid, cell, props
ticketid: 1411991
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I pass additional props to a custom cell of the KendoReact Grid so that I can to pass a custom prop to the cell that will be rendered?

## Solution

Use a function that will return the cell with the default and the custom props. For the full implementation of the suggested approach, refer to the [demo on customizing Grid cells]({% slug cells_grid %}#toc-cell-customization).
