---
title: Setting maxwidth for the Editor
description: An example on how to set maxwidth for the Editor
type: how-to
page_title: Set maxwidth for the Editor - KendoReact Editor
slug: editor-set-maxwidth
position:
tags: editor, maxwidth, margins
ticketid: 1624033
res_type: kb
category: knowledge-base
---


## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>7.0.2</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description
I want to set margins/max width inside of the Kendo text editor.

## Solution

This can be achieved by adding a `style` element to the iframe content element.

{% meta id:index height:500 %}
{% embed_file editor/set-maxwidth/апп.jsx preview %}
{% embed_file editor/set-maxwidth/main.jsx %}
{% embed_file editor/set-maxwidth/content.js %}
{% endmeta %}