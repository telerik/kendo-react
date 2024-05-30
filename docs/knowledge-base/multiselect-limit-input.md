---
title: Limit the MultiSelect input to two characters
description: An example on how to restrict the user to enter only two characters
type: how-to
page_title: Limit MultiSelect to accept only two characters - KendoReact MultiSelect
slug: multi-select-limit-input
tags: multi-select, limit input, maxLength
ticketid: 1599602
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>6.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How to Limit the user to be able to enter only two characters in the MultiSelect?

## Solution

This can be achieved by limiting the input on the [onFilterChange](https://www.telerik.com/kendo-react-ui/components/dropdowns/api/MultiSelectProps/#toc-onfilterchange) event:

{% meta id:index height:900 %}
{% embed_file multiselect/multiselect-limit-input/app.jsx preview %}
{% embed_file multiselect/multiselect-limit-input/main.jsx %}
{% embed_file shared/shared-countries.js %}
{% endmeta %}
