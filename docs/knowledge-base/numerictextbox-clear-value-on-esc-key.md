---
title: Clear NumericTextBox value on pressing ESC key
description: An example on how to clear the NumericTextBox value by pressing the ESC key
type: how-to
page_title: Adding custom logic for clearing the value when the ESC key is pressed - KendoReact NumericTextBox
slug: numerictextbox-clear-value-on-esc-key
tags: input, inputs, numerictextbox, clear, esc
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.13.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want to add custom logic to the NumericTextBox for clearing the value when the ESC key is pressed.

## Solution
Within React.useEffect, after the initialization of the component, add event listener to the input element of the NumericTextBox and set the value to "null" if the keyCode is "27". 

Following is an example demonstrating this approach: 

{% meta height:300 %}
{% embed_file inputs/numerictextbox-clear-value-on-esc-key/main.jsx preview %} 
{% endmeta %}
