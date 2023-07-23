---
title: Add custom content with icon in Scheduler group header cell
description: An example on how to add icon in KendoReact Scheduler group header.
type: how-to
page_title: Adding Custom Content In Group Header Cell - KendoReact Scheduler
slug: scheduler-icon-in-group-header
tags: scheduler, kendoreact, group, header, cell, custom
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

How can I add an icon in the group header cell of specific resource?

## Solution

The items in the resources data array have "text" property which accepts string and "React.Node". For placing an icon for a particular header cell you can wrap the content in DIV or SPAN element and add the custom elements.

This is an example demonstrating the implementation:

{% meta id:index height:760 %}
{% embed_file scheduler/icon-in-group-header/main.jsx preview %}
{% embed_file scheduler/icon-in-group-header/data.js %}
{% endmeta %}
