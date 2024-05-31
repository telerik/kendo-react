---
title: Add different bullet styles to multilevel lists for the Editor
description: Learn how to add different bullet styles to multilevel lists for the Editor
type: how-to
page_title: Add different bullet styles to multilevel lists  - KendoReact Editor
slug: editor-multilevel-list-styles
tags: editor, kendoreact, bullet, multilevel, styles
ticketid: 1649134
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>7.4.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How can I apply different bullet styles to different indentation levels in the KendoReact Editor? 

## Solution

You can achieve this by adding a [style element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) to the iframe document that contains the required [list-style-type](https://www.w3schools.com/cssref/pr_list-style-type.php)

{% meta id:index height:330 %}
{% embed_file editor/editor-multilevel-list-styles/app.jsx preview %}
{% embed_file editor/editor-multilevel-list-styles/main.jsx %}
{% endmeta %}
