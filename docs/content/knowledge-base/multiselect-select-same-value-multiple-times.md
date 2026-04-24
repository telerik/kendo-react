---
title: How to select one value from the MultiSelect multiple times
description: An example on how to select one value from the MultiSelect multiple times
type: how-to
page_title: Select one value from the MultiSelect multiple times - KendoReact MultiSelect
slug: multiselect-select-same-value-multiple-times
tags: multiselect, kendoreact, value, same
res_type: kb
category: knowledge-base
components: ["multiselect"]
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
			<td>Progress® KendoReact MultiSelect</td>
		</tr>
	</tbody>
</table>

## Description

I want to be able to select one value from the MultiSelect popup multiple times and display it in the selected values as many times as it was selected. I want to be able to remove only one instance of them at a time.

## Solution

The MultiSelect is designed to select each value only one time, but by utilizing the [onChange]({% slug api_dropdowns_multiselectprops %}#toc-onchange)  event and using the `nativeEvent` target that triggered the event could allow you to change the selection as per the requirement.

This is an example showcasing this in action:

{% meta height:350 %}
{% embed_file multiselect/multiselect-select-same-value-multiple-times/app.tsx preview %}
{% embed_file multiselect/multiselect-select-same-value-multiple-times/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact MultiSelect Overview](slug:overview_multiselect)
-   [Events](slug:events_multiselect)

