---
title: Set the white-space and text-overflow CSS properties of the KendoReact Grid cells
description: An example on how to set the white-space and text-overflow CSS properties of the Grid cells
type: how-to
page_title: Grid cell white-space and text-overflow - KendoReact Data Grid
slug: grid-cell-white-space-text-overflow
tags: grid, data grid, white-space, text-overflow, nowrap, break line, ellipsis
res_type: kb
category: knowledge-base
---

## Environment

<table>
<tbody>
<tr>
<td>Product Version</td>
<td>v5.13.1</td>
</tr>
<tr>
<td>Product</td>
<td>Progress® KendoReact</td>
</tr>
</tbody>
</table>


## Description

By default, the Grid cells have their CSS property `white-space` unset therefore defaulting to `normal`, while the `text-overflow` property is set to `ellipsis`. You can change the the white-space property to `nowrap` to keep the data on the same line, and text-overflow to `clip` to remove the ellipsis.

## Solution

You can achieve this by using either the Grid `cellRender` prop, or the GridCell `cell` prop, or using CSS.

# Using CSS

{% meta id:index height:400 %}

{% endmeta %}

# Using cell

{% meta id:index height:400 %}

{% endmeta %}

# Using cellRender

{% meta id:index height:400 %}

{% endmeta %}