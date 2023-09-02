---
title: Show details info from data item in Popover on button click
description: An example on how to show Popover with details on button click
type: how-to
page_title: Add command button to show additional information for the row - KendoReact Grid
slug: grid-show-details-in-popover
position:
tags: grid, command, details
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
I want to add command button for each row to show additional information from the data item.

## Solution
For achieving the desired result, the dataItem for which the button is clicked must be passed to a state variable, so it can then be accessible within the Popover template. React Context is used for passing reference to the function showing the Popover to the command button. 

This is an example showcasing this approach:

{% meta id:index height:480 %}
{% embed_file grid/grid-show-details-in-popover/main.jsx preview %}
{% embed_file grid/grid-show-details-in-popover/myCommandCell.jsx %}
{% endmeta %}