---
title: Lock Custom Rendered Columns in KendoReact TreeList
description: Learn how to lock custom rendered columns in the KendoReact TreeList component to achieve a frozen column effect.
type: how-to
page_title: How to Lock Custom Rendered Columns in KendoReact TreeList
slug: treelist-locked-custom-columns
tags: kendo-react-ui, treelist, columns, freeze, locked, custom-rendering
res_type: kb
ticketid: 1647196
components: ["treelist"]
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
	    	<td>Progress® KendoReact TreeList</td>
	    </tr>
    </tbody>
</table>

## Description

In a KendoReact [TreeList](https://www.telerik.com/kendo-react-ui/components/treelist/) project, I have a custom cell rendering implemented. I need to freeze this column, but setting the column property `locked: true` does not seem to work. This KB article also answers the following questions:

-   How can I lock a column in KendoReact TreeList with custom cell rendering?
-   What properties should be added to custom rendered cells to freeze them in KendoReact TreeList?
-   How to ensure multiple custom rendered columns are frozen in KendoReact TreeList?

## Solution

To freeze a column with custom cell rendering in the KendoReact TreeList, apply specific properties to the `td` element of your custom cell. These properties are typically applied to default cells when they are locked, but must be manually added for custom rendered cells.

Refer to this example where the "Full Time" column with a custom cell rendered is locked:

{% meta height:650 %}
{% embed_file treelist/treelist-single-custom-locked-column/app.jsx preview %}
{% embed_file treelist/treelist-single-custom-locked-column/main.jsx %}
{% embed_file treelist/treelist-single-custom-locked-column/data.js %}
{% endmeta %}

To freeze multiple custom columns, adjust the `className` and `style` properties accordingly for each column. For instance, for a second custom column, you might set the `style` property's `right` value to `0px` and adjust the `left` value as needed based on your layout.

See this updated example with two custom columns, "Full Time" and "Name", both frozen:

{% meta height:650 %}
{% embed_file treelist/treelist-multiple-custom-locked-column/app.jsx preview %}
{% embed_file treelist/treelist-multiple-custom-locked-column/main.jsx %}
{% embed_file treelist/treelist-multiple-custom-locked-column/data.js %}
{% endmeta %}

Compare it to the default behavior without custom cells, where the first two columns are locked: [Default Locked Columns Example](https://www.telerik.com/kendo-react-ui/components/treelist/columns/locked/).

Inspecting the `td` element of a non-custom cell example using browser developer tools can provide insights into what classes and styles are applied by default.

## See Also

-   [KendoReact TreeList Documentation](https://www.telerik.com/kendo-react-ui/components/treelist/)
-   [Custom Cell Rendering in KendoReact TreeList](https://www.telerik.com/kendo-react-ui/components/treelist/cells/)
