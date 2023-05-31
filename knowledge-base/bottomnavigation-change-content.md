---
title: Changing content on BottomNavigation selection 
description: An example on how to change content on BottomNavigation selection
type: how-to
page_title: Changing content when BottomNavigation selection changes - KendoReact BottomNavigation
slug: bottomnavigation-change-content
tags: bottomnavigation, layout, kendoreact
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
I want to change the main content when the BottomNavigation selection changes

## Solution
For achieving the desired result the onSelect event of the BottomNavigation can be used for determining which item was selected. Based on that selection the main rendered content (component) can be changed

{% meta id height:760 %}
{% embed_file layout/bottomnavigation-change-content/main.jsx preview %}
{% endmeta %}
