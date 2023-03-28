---
title: Define custom editor for the TreeList
description: An example on how to define custom editor for the TreeList.
type: how-to
page_title: Defining custom editor - KendoReact TreeList
slug: treelist-custom-editor
tags: treelist, kendoreact, editing, custom
ticketid: 
res_type: kb
category: knowledge-base
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
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to change the default editor for the TreeList with one that supports maxLength

## Solution
The TreeList columns have editCell that accepts not only the default editors that are provided in the package, but also a custom component. The following example shows how to define custom editor with input element where the maxLength attribute is set for limiting the number of characters:

{% meta id height:760 %}
{% embed_file treelist/treelist-custom-editor/main.jsx preview %}
{% embed_file treelist/treelist-custom-editor/data.js preview %}
{% embed_file treelist/treelist-custom-editor/my-command-cell.jsx preview %}
{% embed_file treelist/treelist-custom-editor/MyCustomTreeListTextEditor.js preview %}
{% endmeta %}
