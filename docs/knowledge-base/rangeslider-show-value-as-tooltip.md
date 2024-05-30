---
title: Show current range in the RangeSlider tooltip 
description: An example on how to show the range values in the RangeSlider tooltip
type: how-to
page_title: Displaying tooltip with the range values - KendoReact RangeSlider
slug: rangeslider-show-value-as-tooltip
tags: input, inputs, rangeslider
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.12.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want the tooltip of the RangeSlider to show the values

## Solution
By default, the RangeSlider start and end points will show a tooltip with "Drag" text. In order to change the default behavior the "title" property of the elements must be changed with the current value. 

This is an example showcasing how to limit the value:

{% meta height:760 %}
{% embed_file inputs/rangeslider-show-value-as-tooltip/app.jsx preview %} 
{% embed_file inputs/rangeslider-show-value-as-tooltip/main.jsx %} 
{% endmeta %}
