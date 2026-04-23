---
title: Show a Loading Indicator in the KendoReact Grid
description: An example on how to show a loading indicator in the KendoReact Grid.
type: how-to
page_title: Show a Loading Indicator in the Grid - KendoReact Grid
slug: show-loading-indicator-in-the-kendoreact-grid
position:
tags: grid
ticketid: 1422280
res_type: kb
category: knowledge-base
components: ["grid"]
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
	    	<td>Progress® KendoReact Grid</td>
	    </tr>
    </tbody>
</table>

## Description

How to show a loading indicator when loading data from the server.

## Solution

Currently, this can be done using the loading panel element. This element can be shown and hidden conditionally.

{% meta  height:500 %}
{% embed_file grid/show-loading-indicator/app.tsx preview %}
{% embed_file grid/show-loading-indicator/main.tsx %}
{% endmeta %}
