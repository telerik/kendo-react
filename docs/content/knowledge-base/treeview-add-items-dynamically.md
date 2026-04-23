---
title: Dynamically Add Nodes
description: An example on how to add nodes to the KendoReact TreeView.
type: how-to
page_title: Add Nodes - KendoReact TreeView
slug: treeview-add-nodes
tags: treeview, kendoreact, add, nodes
ticketid: 1601209
res_type: kb
category: knowledge-base
components: ["treeview"]
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
            <td>Progress® KendoReact TreeView</td>
        </tr>
    </tbody>
</table>

## Description

I want to dynamically add child Nodes to the KendoReact TreeView.

## Solution

You can achieve this by rendering an external Button under the TreeView which opens a Window component. In the Window component, you can render an Input and update the data with the entered input value.

{% meta  height:500 %}
{% embed_file treeview/treeview-adding-nodes/app.jsx preview %}
{% embed_file treeview/treeview-adding-nodes/main.jsx %}
{% endmeta %}
