---
title: Add delayed value for the Input component that will change after a period of time of no typing
description: An example on how to have delayed value after a period of no typing
type: how-to
page_title: Adding an option for a delayed value that will change only after a period of time without typing - KendoReact Input
slug: inputs-delayed-value-change
tags: input, inputs, pickers
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
I want the value of the Input to change only after the user stops typing for some time.

## Solution
Having a delayed value is possible by introducing a second state variable and tracking the time for the last change. Such implementation might be suitable for filtering, where triggering the filtering can be initiated only when the user stops typing.

This is an example showcasing how to limit the value:

{% meta height:300 %}
{% embed_file inputs/inputs-delayed-value-change/app.jsx preview %} 
{% embed_file inputs/inputs-delayed-value-change/main.jsx %} 
{% endmeta %}
