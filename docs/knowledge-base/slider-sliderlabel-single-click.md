---
title: Click on the Slider label once to change the value.
description: An example on how to change the value by clicking once on a label in the KendoReact Slider.
type: how-to
page_title: Label Single Click - KendoReact Slider
slug: slider-sliderlabel-single-click
tags: slider, sliderlabel, label
ticketid: 1616016
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

By default, I need to double click the Slider labels to change the value, but how can I achieve that by clicking on them once?

## Solution

This can achieved by handling the component in controlled mode and handling the click event of the SliderLabel to get the clicked-on label value. You can get the value from the label when clicking it using `e.target.innerText`, set it to a state variable, and pass it to the `value` property of the Slider:

This is an example demonstrating this implementation:

{% meta id:index height:760 %}
{% embed_file inputs/slider-label-single-click/app.jsx preview %}
{% embed_file inputs/slider-label-single-click/main.jsx %}
{% endmeta %}
