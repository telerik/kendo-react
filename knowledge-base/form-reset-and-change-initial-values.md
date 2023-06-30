---
title: Change the initial values and reset the Form
description: An example on how to change the initial values and reset the KendoReact Form
type: how-to
page_title: Reset The Form To Changed Initial Values - KendoReact Form
slug: form-reset-and-change-initial-values
tags: form, kendoreact, reset, initial
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.14.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I reset the Form multiple times to the initial values? Also, can I change the initial values dynamically?

## Solution

To reset the Form to the initial values the component must re-mount. This can be achieved by changing the "key" property of the Form to unique value. 

The same technique can be used for changing the initial value by first changing the variable in the state and then changing the "key" property.

Following is an example demonstrating this approach:


{% meta id height:760 %}
{% embed_file form/form-reset-and-change-initial-values/main.jsx preview %}
{% endmeta %}
