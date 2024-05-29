---
title: Disable list items in the MultiSelect component.
description: An example on how to disable list items in the KendoReact MultiSelect.
type: how-to
page_title: Disable items - KendoReact MultiSelect
slug: multiselect-disable-items
tags: disable, list, multiselect
ticketid: 1620902
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.17.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description  

I want disable specific items based on a certain condition? For example, I want to disable the items which their text starts with the letter A, disable a specific item based on its whole text value, or disabled an item based on its id value. 

## Solution

> This is an alternative solution for the approach used in the [documentation](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/disabled-item/). The following implementation also shows how to keep the Popup open when the disabled item is clicked.

You can achieve this using the `itemRender` property where you can set the CSS styles `pointer-events: none` and `opacity: 0.7` for certain items.
In addition, when clicking on a disabled item, the click event will happen on the <ul> element ( `k-list-ul` ) and this would close the Popup by default. Therefore, it is required to handle the component in controlled mode such that the `onClose` event does not close the component when the item returned in the SyntheticEvent is `k-list-ul`.

This is an example demonstrating this implementation where the `Albania` item is disabled:

{% meta id:index height:760 %}
{% embed_file multiselect/multiselect-disable-items/main.jsx preview %}
{% embed_file shared/shared-countries.js %}
{% endmeta %}
