---
title: Grid with selection that supports scrolling on mobile
description: An example on how to allow mobile scrolling for a selectable Grid
type: how-to
page_title: Grid with selection that supports mobile scrolling - KendoReact Grid
slug: grid-selectable-mobile-scrolling
tags: grid, select, checkbox, mobile scrolling, grid selectable
res_type: kb
category: knowledge-base
---
 
## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>7.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
When enabling selection for the Grid using the [selectable](https://www.telerik.com/kendo-react-ui/components/grid/api/GridProps/#toc-selectable/) prop, scrolling does not work using mobile. This is because scrolling with a finger will trigger the selection. 


## Solution
Use checkbox selection instead. You can enable checkbox selection only when the Grid is used in a mobile machine. Basically, you can detect if a mobile is used using the [react-device-detect](https://www.npmjs.com/package/react-device-detect) library or a similar one. This will allow using the built-in `selectable` property when in web view, and only checkbox selection with a mobile machine.

Here is an example with the described approach:

{% meta id height:550 %}
{% embed_file grid/grid-selection-mobile-scrolling/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}

