---
title: How to prevent Enter key from toggling the ExpansionPanel
description: An example on how to prevent the Enter key from expanding or collapsing the ExpansionPanel
type: how-to
page_title: Prevent Enter key from toggling ExpansionPanel - KendoReact ExpansionPanel
slug: expansion-panel-prevent-enter
tags: expansionpanel, kendoreact, keyboard, enter, prevent, layout
ticketid: 1702177
res_type: kb
category: knowledge-base
components: ["expansionpanel"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact ExpansionPanel</td>
		</tr>
	</tbody>
</table>

## Description

I want to prevent the Enter key from toggling the ExpansionPanel. By default, when the ExpansionPanel is focused and the user presses Enter, it expands or collapses. I want to disable this behavior.

## Solution

The ExpansionPanel triggers the [onAction]({% slug api_layout_expansionpanelprops %}#toc-onaction) event when the panel is toggled. By accessing the `syntheticEvent` within the event handler, you can check if the Enter key was pressed and prevent the default behavior.

This is an example showcasing this in action:

{% meta height:600 %}
{% embed_file layout/expansion-panel-prevent-enter/app.tsx preview %}
{% embed_file layout/expansion-panel-prevent-enter/main.tsx %}
{% embed_file layout/expansion-panel-prevent-enter/data.ts %}
{% embed_file layout/expansion-panel-prevent-enter/style.css %}
{% endmeta %}

## See Also

-   [ExpansionPanel Overview](slug:overview_expansionpanel)
-   [ExpansionPanel API](slug:api_layout_expansionpanelprops)
