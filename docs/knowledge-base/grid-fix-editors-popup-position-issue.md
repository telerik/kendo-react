---
title: Fix Grid editors Popup position issue on scrolling
description: An example on how to fix the Popup position issue on scrolling in Grid editors
type: how-to
page_title: Fix Editors Popup Position Issue On Scrolling - KendoReact Grid
slug: grid-fix-editors-popup-position-issue
position:
tags: grid, editors, scrolling, issue
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
Opening a popup of any editor in the Grid and scrolling it causes the popup to be shown outside of the scrollable container.

## Solution
The issue in question is caused by the fact that all Popup components are rendered in the "body" element, which causes them to be displayed outside of the scrollable container of the Grid on scrolling. To avoid this, wrap the Grid in PopupPropsContext and change the "appendTo" property to all Popup components within the data container of the Grid to the scrollable container.

This is an example showcasing this approach:

{% meta id:index height:760 %} 
{% embed_file grid/fix-editors-popup-position-issue/app.jsx preview %}
{% embed_file grid/fix-editors-popup-position-issue/main.jsx %}
{% embed_file grid/fix-editors-popup-position-issue/myCommandCell.jsx %}
{% embed_file grid/fix-editors-popup-position-issue/myDropDownCell.jsx %}
{% embed_file grid/fix-editors-popup-position-issue/services.js %}
{% embed_file shared/shared-sample-products.js %} 
{% endmeta %}