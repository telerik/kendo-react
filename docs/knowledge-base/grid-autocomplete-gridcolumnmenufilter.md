---
title: Use AutoComplete in the ColumnMenuFilter of the Grid
description: An example on how to use the AutoComplete component in the ColumnMenuFilter of KendoReact Grid.
type: how-to
page_title: Use AutoComplete in the ColumnMenuFilter of the Grid - KendoReact Grid
slug: grid-autocomplete-gridcolumnmenufilter
tags: grid, kendoreact, filter, columnmenu, autocomplete, columnmenufilter
ticketid: 1516740
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.5.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I use the AutoComplete components instead of the default input field in the ColumnMenuFilter of the Grid?

## Solution

This can be achieved using the [`filterUI`]({% slug api_grid_gridcolumnmenufilterprops %}#toc-filterui) property of the Grid ColumnMenuFilter to customize the interface of the ColumnMenuFilter.

The three DropDownLists which contain the logic and filters that will be applied to the Grid should be rendered and the logic and filter operators are available in the props passed to the filterUI handler. The input fields should be replaced with AutoComplete components.

The values of the DropDownLists that contain the filter operators should be kept in the state, because those values need to be passed to the corresponding onChange events from the props (onFirstFilterChange - part of [`firstFilterProps`]({% slug api_grid_gridcolumnmenufilteruiprops %}#toc-firstfilterprops), onSecondFilterChange - part of [`secondFilterProps`]({% slug api_grid_gridcolumnmenufilteruiprops %}#toc-secondfilterprops)). The DropDownList that contains the logic operator ("And" or "Or") should call the [`onLogicChange`]({% slug api_grid_gridcolumnmenufilteruiprops %}#toc-onlogicchange) event from the props. The onChange events from the props will filter the content in the Grid accordingly. 

The onChange event handlers of the AutoComplete components will be the ones that call the firstFilterProps.onChange and secondFilterProps.onChange events and will pass the operators from the state and the value from the event.


{% meta id height:520 %}
{% embed_file grid/columnmenufilter-with-autocomplete/main.jsx preview %}
{% embed_file grid/columnmenufilter-with-autocomplete/customFilterUI.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
