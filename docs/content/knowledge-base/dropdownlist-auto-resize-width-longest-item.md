---
title: Auto-Resizing KendoReact DropdownList to Fit Longest List Item
description: Learn how to make the KendoReact DropdownList automatically adjust its width to fit the longest item in its list.
type: how-to
page_title: Adjusting KendoReact DropdownList Width Based on Longest Item
meta_title: Adjusting KendoReact DropdownList Width Based on Longest Item
slug: dropdownlist-auto-resize-width-longest-item
tags: kendo-react, dropdownlist, auto-resize, longest-item, width
res_type: kb
ticketid: 1693185
components: ["dropdownlist"]
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
	    	<td>Progress® KendoReact DropDownList</td>
	    </tr>
    </tbody>
</table>

## Description

When using the [KendoReact DropDownList](slug:overview_dropdownlist), the width does not automatically adjust to fit the longest item in the list unless explicitly set. By default, the component renders with a fixed width based on its container or the initially selected value. This can result in long items being cut off before any selection is made.

This knowledge base article also answers the following questions:

-   How can I make KendoReact DropDownList auto-resize to fit the longest item?
-   What is the workaround for clipping long items in KendoReact DropDownList?
-   How to programmatically set the width of KendoReact DropDownList?

## Solution

To ensure the KendoReact DropDownList adjusts its width to fit the longest item from the start, calculate the width of the longest item in the list programmatically and set the `style.width` property of the component.

{% meta height:460 %}
{% embed_file dropdownlist/auto-resize-width-longest-item/app.tsx preview %}
{% embed_file dropdownlist/auto-resize-width-longest-item/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact DropDownList Documentation](slug:overview_dropdownlist)
-   [KendoReact Dropdowns Overview](slug:overview_dropdowns)
