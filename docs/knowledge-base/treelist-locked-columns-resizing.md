---
title: Avoid unwanted change in the width of TreeList columns on resizing locked columns.
description: An example on how to have stable resizing with locked columns in KendoReact TreeList.
type: how-to
page_title: Handling Resizing With Locked Columns - KendoReact TreeList
slug: treelist-locked-columns-resizing
tags: treelist, kendoreact, resizing, locked
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
The resizing of the TreeList is not intuitive when there are locked locked. 

## Problem 
Due to the way that the locked columns are rendered, having locked columns and resizing enabled at the same time will require the width of the TABLE element of the TreeList to be manually adjusted within the onColumnResize event. 

## Solution
Set the width of the TreeList through "tableProps.style.width" and set a "ref". Within "onColumnResize" event, check the table ref and use the event's totalWidth value to set it as a new width of the TABLE element 

Following is an example demonstrating such implementation

{% meta id height:650 %} 
{% embed_file treelist/treelist-locked-columns-resizing/main.jsx preview %}
{% embed_file treelist/treelist-locked-columns-resizing/data.js %}
{% endmeta %}
