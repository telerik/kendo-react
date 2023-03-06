---
title: Change Background of Editor Cell
description: An example on how to change the background color of a cell inside the Editor
type: how-to
page_title:  Change Background of Editor Cell | KendoReact Editor
slug: change-background-color-of-editor-cell
tags: editor, background, cell
ticketid: 1572583
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.5.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How can I change the background color of a cell using the Editor?

## Solution

Create a custom tool that changes the background color of the cell:

![Editor Change Cell Background Color](examples/editor/change-background-color-of-cell/editor-cell-color.gif)


{% meta id:index height:760 %}
{% embed_file editor/change-background-color-of-cell/main.tsx preview %}
{% embed_file editor/change-background-color-of-cell/CellBackColorTool.tsx preview %}
{% embed_file editor/change-background-color-of-cell/content-overview.ts preview %}
{% endmeta %}
