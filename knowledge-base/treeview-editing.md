---
title: Edit the TreeView Nodes
description: An example on how to edit the nodes of the KendoReact TreeView.
type: how-to
page_title: Edit the Nodes - KendoReact TreeView
slug: treeview-editing
tags: treeview, kendoreact, edit, nodes
ticketid: 1408165
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

How can I edit the nodes of the KendoReact TreeView?

## Solution

Use the [`itemRender`]({% slug api_treeview_treeviewprops %}#toc-itemrender) to render an input that is bound to the node value on click.

{% meta id:index height:760 %}
{% embed_file treeview/treeview-editing/main.jsx preview %}
{% endmeta %}
