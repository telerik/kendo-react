---
title: Deleting TreeView Nodes
description: An example on how delete TreeView Nodes - KendoReact TreeView.
type: how-to
page_title: Delete TreeView Nodes - KendoReact TreeView
slug: treeview-deleting
tags: treeview, kendoreact, delete, deleting, nodes
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
Can I delete TreeView Nodes?

## Solution
Create custom item rendering through TreeView's "item" property. Define the custom item outside of the main component.

Since the delete function will be within the main component where the TreeView is rendered, use React Context for passing reference to the function to the nodes. Within the custom item add a delete icon/button and on its onClick event, return the props (where the item info is accessible).

Following is an example demonstrating the approach:

{% meta id:index height:480 %}
{% embed_file treeview/treeview-deleting/app.jsx preview %}
{% embed_file treeview/treeview-deleting/main.jsx %}
{% endmeta %} 
