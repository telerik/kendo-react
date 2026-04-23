---
title: Set custom styles to the TileLayoutItem hint element
description: An example that showcases how to style the TileLayoutItem hint element
type: how-to
page_title: Learn how to set styles to the TileLayoutItem hint element
slug: tilelayout-set-custom-styles-to-hint
tags: tilelayout, tile, hint, hintStyle, layout, styles, custom
res_type: kb
category: knowledge-base
components: ["tilelayout"]
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
	    	<td>Progress® KendoReact TileLayout</td>
	    </tr>
    </tbody>
</table>

## Description

How can I add custom styles to the `TileLayoutItem` hint element?

## Solution

You can achieve this by passing the required styles to the [hintStyle]({% slug api_layout_tilelayoutitem %}#toc-hintstyle) prop.

This example showcases how to change the `background-color` of the hint:

{% meta height:500 %}
{% embed_file layout/tilelayout-set-custom-styles-to-hint/app.jsx preview %}
{% embed_file layout/tilelayout-set-custom-styles-to-hint/main.jsx %}
{% endmeta %}
