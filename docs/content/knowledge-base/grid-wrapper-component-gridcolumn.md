---
title: Creating a Wrapper Component for GridColumn in KendoReact
description: Learn how to centralize and reuse logic for GridColumn in KendoReact without losing functionality.
type: how-to
page_title: Implementing Wrapper Component for KendoReact GridColumn
slug: grid-wrapper-component-gridcolumn
tags: grid, kendoreact, gridcolumn, wrapper, custom-logic, react
ticketid: 1700995
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

I want to create a wrapper function for the KendoReact GridColumn to centralize column logic across my application. However, the Grid does not render columns when wrapped in a custom React component. I need to migrate from the old `cell` prop structure to the new `cells` prop structure while maintaining backward compatibility with existing code.

This knowledge base article also answers the following questions:

-   How to centralize logic for KendoReact GridColumn?
-   How to map the old `cell` prop to the new `cells` prop structure?
-   Why does the KendoReact Grid not render wrapped GridColumn components?
-   How to create reusable column functions with custom cell renderers?

## Solution

The KendoReact Grid requires its direct children to be of type [`GridColumn`](slug:api_grid_gridcolumnprops). Wrapping `GridColumn` inside a custom React component prevents the Grid from recognizing it, which leads to rendering issues. To centralize the logic while maintaining compatibility, use a function instead of a React component.

Follow these steps:

1. Create a wrapper function that returns a `GridColumn` element.
2. Inside the function, destructure the old `cell` prop and map it to the new [`cells`](slug:api_grid_gridcolumnprops#toc-cells) object structure with `cells={{ data: cell }}`.
3. Pass through all other props using the spread operator.
4. Use this function directly within the Grid by calling it with the required props.

The example below demonstrates a wrapper function that maps custom cell renderers (for centered text, right-aligned numbers, and status indicators) from the old `cell` prop to the current `cells` prop structure.

{% meta height:340 %}
{% embed_file grid/wrapper-component-gridcolumn/app.tsx preview %}
{% embed_file grid/wrapper-component-gridcolumn/main.tsx %}
{% endmeta %}

## See Also

-   [Custom Cell Rendering](slug:cells_grid)
-   [Grid API Reference](slug:api_grid_gridprops)
