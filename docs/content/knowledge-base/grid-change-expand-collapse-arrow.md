---
title: Change the Expand/Collapse Arrow in Master-Detail Grid
description: Learn how to customize the expand/collapse arrow icons in the KendoReact Master-Detail Grid hierarchy column.
type: how-to
page_title: Customize Master-Detail Grid Expand/Collapse Icons
slug: grid-change-expand-collapse-arrow
tags: grid, master-detail, hierarchy, custom, icon, expand, collapse, arrow
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>13.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

How can I customize the expand/collapse arrow icons in the Master-Detail Grid? I want to replace the default arrows with custom icons or components when displaying master-detail grids.

## Solution

Use the cells [`hierarchy`]({% slug api_grid_gridcellssettings %}#toc-hierarchy) property to provide custom rendering for the cells in the expand column. This allows you to replace the default expand/collapse arrows with your own custom icons or components.

<demo metaUrl="knowledge-base/grid/grid-change-expand-collapse-arrow/" height="500"></demo>

## See Also

- [Master-Detail Grid]({% slug hierarchy_grid %})
