---
title: Set Default Target Blank for All Links inside the Editor
description: An example on how to set by default target blank for all links in the KendoReact Editor.
type: how-to
page_title: Set Default Target Blank for All Links inside the Editor - KendoReact Editor
slug: editor-set-default-target-blank
ticketid: 1646724,
tags: editor, kendoreact, target, blank
ticketid: 1646724
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

How to set by default `target='_blank'` for all the urls present in editor?

## Solution

This can be achieved by changing the default `target` value in the link mark implementation of the [Editor schema](https://www.telerik.com/kendo-react-ui/components/editor/schema/) and applying the new one:

{% meta id height:480 %}
{% embed_file editor/editor-set-default-target-blank/main.tsx preview %}
{% embed_file editor/editor-set-default-target-blank/content.ts %}
{% embed_file editor/editor-set-default-target-blank/schema-utils.ts %}
{% embed_file editor/editor-set-default-target-blank/schema.ts %}
{% endmeta %}
