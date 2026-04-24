---
title: Customizing Expand/Collapse Icons for Detail Rows in KendoReact Data Grid
description: Learn how to customize the expand/collapse icons for Detail Rows in KendoReact Data Grid by using custom icons.
type: how-to
page_title: How to Customize Expand/Collapse Icons in KendoReact Data Grid
meta_title: How to Customize Expand/Collapse Icons in KendoReact Data Grid
slug: grid-custom-expand-icons
tags: kendoreact, datagrid, expand-collapse, hierarchycell, detail-expand, customization
res_type: kb
ticketid: 1694742
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>11.3.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

I want to customize the expand/collapse icons for the Detail Rows in the [KendoReact Data Grid](slug:overview_grid). I want to replace the default icons with custom ones.

## Solution

To achieve the desired behavior you can use the `IconsContext.Provider` to provide custom icons for the plusIcon and the minusIcon.

> As an alternative approach, you can use the [cells.hierarchy](slug:hierarchy_cells_grid) property to render Custom Hierarchy Cells. This approach gives you full control over the rendering of the cells.

{% meta height:480 %}
{% embed_file grid/custom-expand-icons/app.tsx preview %}
{% embed_file grid/custom-expand-icons/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Data Grid Overview](slug:overview_grid)
-   [Hierarchy Cells Documentation](slug:hierarchy_cells_grid)
-   [Grid Properties API Reference](slug:api_grid_gridprops)
