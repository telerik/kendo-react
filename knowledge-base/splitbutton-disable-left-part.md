---
title: Disable the left part of a SplitButton
description: An example on how to disable the left part of a SplitButton
type: how-to
page_title: Disable the left part of a SplitButton - KendoReact SplitButton
slug: splitbutton-disable-left-part
position:
tags: splitbutton, disable, button
ticketid: 1635912
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
I want to disable only the left part of the SplitButton.

## Solution
You can achieve this by setting `pointer-events` to `none:

```
.k-button-group > .k-button:first-child:not(:only-child) {
    pointer-events: none;
 }
 ```

{% meta id:index height:500 %}
{% embed_file splitbutton/disable-left-part/main.jsx preview %}
{% embed_file splitbutton/disable-left-part/styles.css  %}
{% endmeta %}