---
title: Display the Editor toolbar at the bottom
description: Learn how to display the Editor toolbar at the bottom
type: how-to
page_title: Display the Editor toolbar at the bottom - KendoReact Editor
slug: editor-display-toolbar-at-bottom
tags: editor, kendoreact, toolbar, bottom
res_type: kb
category: knowledge-base
components: ["editor"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>10.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Editor</td>
		</tr>
	</tbody>
</table>

## Description

How can I display the Editor's toolbar at the bottom?

## Solution

To achieve this, add the following CSS that will change the order of the toolbar and the content of the Editor:

```jsx
<style>
.k-editor .k-toolbar {
 order:2;
}
</style>
```
This example demonstrates the approach above:

{% meta height:460 %}
{% embed_file editor/editor-display-toolbar-at-bottom/app.tsx preview %}
{% embed_file editor/editor-display-toolbar-at-bottom/main.tsx %}
{% embed_file editor/editor-display-toolbar-at-bottom/shared-ed-content-overview.ts %}
{% embed_file editor/editor-display-toolbar-at-bottom/style.css %}
{% endmeta %}
