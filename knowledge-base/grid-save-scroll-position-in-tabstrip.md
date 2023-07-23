---
title: Save the scroll position of the Grid placed within a TabStrip
description: An example on how to store and restore the scroll position of a Grid placed inside a TabStrip
type: how-to
page_title: Save And Restore The Scroll Position - KendoReact Grid
slug: grid-save-scroll-position-in-tabstrip
position:
tags: grid, scroll, tabstrip, scrolling
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
I have a Grid placed in TabStrip, but after changing the tabs, the scroll position of the Grid is lost. How can I save and restore it?

## Solution
For saving the scroll position, handle the onScroll event of the Grid and save the scrollTop value of the scrollable container (ev.nativeEvent.target.scrollTop). Then, within React.useEffect, every time when the selected tab of the TabStrip is changed, either set the scrollTop position of the scrollable container (to restore the exact same position) or use the scrollIntoView method of the Grid's API to restore the scroll position to the same item. For the second approach, set the rowHeight of the Grid and using the scrollTop value and the rowHeight value you will be able to determine which row index must be passed to the scrollIntoView method.

This is an example showcasing this approach:

{% meta id:index height:760 %}
{% embed_file grid/rid-save-scroll-position-in-tabstrip/main.jsx preview %}
{% embed_file grid/rid-save-scroll-position-in-tabstrip/products.json %}
{% endmeta %}