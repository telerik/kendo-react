---
title: Add hierarchical structure for the DropDownButton menu
description: An example of how to add hierarchical structure for the DropDownButton menu
type: how-to
page_title: Add hierarchical structure for the DropDownButton menu - KendoReact DropDownButton
slug: dropdownbutton-add-hierarchical-structure
tags: dropdownbutton, hierarchical, menu
res_type: kb
category: knowledge-base
components: ["dropdownbutton"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>10.2.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact DropDownButton</td>
	    </tr>
    </tbody>
</table>

## Description

I want the `DropDownButton` to display hierarchical structure where nested items can be displayed when hovering over the main items in the popup.

## Solution

The `DropDownButton` does not support hierarchy, but it is possible to use custom rendering for the items and render vertical Menu component with hierarchical structure where you need to display nested items.

{% meta height:400 %}
{% embed_file dropdownbutton/dropdownbutton-add-hierarchical-structure/app.tsx preview %}
{% embed_file dropdownbutton/dropdownbutton-add-hierarchical-structure/main.tsx %}
{% endmeta %}


