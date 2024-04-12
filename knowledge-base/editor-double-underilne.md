---
title: Add Double Underline for the Editor content
description: An example on how to double underline the Editor content
type: how-to
page_title: Add Double Underline for the Editor content - KendoReact Editor
slug: editor-double-underilne
tags: editor, kendoreact, double, underline
ticketid: 1645788
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>7.3.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How can I add a double underline to the Editor content?

## Solution

This can be achieved by implementing a custom editor tool which applies [text-decoration](https://www.w3schools.com/cssref/css3_pr_text-decoration-style.php) inline styles to the selected text. For more information on how to use custom tools in the Editor, refer to the [Using Custom Tools](https://www.telerik.com/kendo-react-ui/components/editor/tools/#toc-customizing-built-in-tools) article.


{% meta id:index height:900 %}
{% embed_file editor-double-underilne/main.tsx preview %}
{% embed_file editor-double-underilne/doubleUnderlineTool.tsx %}
{% endmeta %}
