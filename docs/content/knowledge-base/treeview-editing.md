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
components: ["treeview"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>9.0.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact TreeView</td>
        </tr>
    </tbody>
</table>

## Description

How can I edit the nodes of the KendoReact TreeView?

## Solution

Use the [`item`]({% slug api_treeview_treeviewprops %}#toc-item) to render an input that is bound to the node value on click.

{% meta  height:500 %}
{% embed_file treeview/treeview-editing/app.tsx preview %}
{% embed_file treeview/treeview-editing/main.tsx %}
{% endmeta %}
