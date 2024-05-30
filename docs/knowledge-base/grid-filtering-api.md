---
title: Filter KendoReact Grid with data from an API
description: An example on how to filter the Grid data that is passed from an API
type: how-to
page_title: Filtering the Grid with data from an API - KendoReact Grid
slug: grid-filtering-api
tags: grid, filtering, api
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

How do I filter the Grid using `useEffect` with dummy API endpoint using JSON place holder?

## Solution

This can be achieved by fetching the data inside the `useEffect` hook and then filtering it using the `filterBy` helper function and passing the filtered collection to the [`data`]({% slug api_grid_gridprops %}#toc-data) prop.

{% meta id:index height:700 %}
{% embed_file grid-filtering-api/app.tsx preview %}
{% embed_file grid-filtering-api/main.tsx %}
{% endmeta %}