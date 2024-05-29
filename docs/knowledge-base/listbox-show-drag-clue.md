---
title: Show clue indicator when dragging an item in the ListBox
description: An example on how to show clue indicator when an item is dragged in the ListBox
type: how-to
page_title: Show indicator for the drop position of an item while dragging - KendoReact ListBox
slug: listbox-show-drag-clue
tags: listbox, grouping, customization, appearance
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
I want to show an indicator for the drop position of an item in the ListBox while dragging.

## Solution
For displaying a clue indicator for the drop position the onDragOver event should be used for adding a class name to the item where the dragged item will be dropped. Based on the position on the target item and the target ListBox, a top or a bottom border can be displayed to show the correct position where the item will be inserted. 

Within the onDrop and on each onDragOver we are clearing the class name that was previously added.
 
{% meta height:500 %} 
{% embed_file listbox/show-drag-clue/app.jsx preview %} 
{% embed_file listbox/show-drag-clue/main.jsx %} 
{% embed_file listbox/show-drag-clue/products.json  %} 
{% embed_file listbox/show-drag-clue/styles.css  %} 
{% endmeta %}
