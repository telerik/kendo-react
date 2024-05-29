---
title: Edit one item in the Grid at a time with inline editing
description: An example on how to disable the edit/add of items while an item is edited
type: how-to
page_title: Prevent editing or adding new items while an item is opened for editing - KendoReact Grid
slug: grid-edit-one-item-at-a-time
tags: grid, editing, inline
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
I want to prevent multiple items to be opened for editing when inline edit mode is used for the Grid. The Add button should also be disabled if there is an item opened for editing.

## Solution
This could be achieved by setting the disabled property of the command buttons in the CommandCell for the inline editing. The Add button for new items can be controlled through the disabled property as well.

For tracking which item will have enabled buttons we add disableEdit property to all items that are not being edited at the time and we use that value within the CommandCell for disabling the buttons. 

This is an example showcasing how to limit the value:

{% meta height:580 %}
{% embed_file grid/grid-edit-one-item-at-a-time/app.jsx preview %}
{% embed_file grid/grid-edit-one-item-at-a-time/main.jsx %}
{% embed_file grid/grid-edit-one-item-at-a-time/myCommandCell.jsx %}
{% embed_file grid/grid-edit-one-item-at-a-time/sample-products.jsx %}
{% embed_file grid/grid-edit-one-item-at-a-time/services.js %}
{% endmeta %}
