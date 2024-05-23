---
title: Get ref of an editor within the Form and handle onKeyDown event
description: An example on how to get reference to a Form editor and handle editor events.
type: how-to
page_title: Get reference to a Form editor and events - KendoReact Form
slug: form-getting-editor-ref-and-keydown
tags: form, kendoreact, input, ref
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

How can I get ref of a Form editor and its events in the context of the Form component.

## Solution

Pass custom properties to the Field component and access them within the custom component set to the "component" property of the Field. Within the custom component set the "ref" and the event handler.

Following is an example demonstrating this approach:


{% meta id height:360 %}
{% embed_file form/getting-editor-ref-and-keydown/main.jsx preview %}
{% endmeta %}
