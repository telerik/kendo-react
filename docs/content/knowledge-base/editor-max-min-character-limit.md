---
title: Applying Max and Min Character Limits in KendoReact Editor
description: Learn how to restrict the character count in KendoReact Editor to a specific maximum or minimum limit.
type: how-to
page_title: How to Set Max and Min Character Limits in React Editor
meta_title: How to Set Max and Min Character Limits in React Editor
slug: editor-max-min-character-limit
tags: editor, kendo react, max character limit, min character limit, controlled value, change event
res_type: kb
ticketid: 1706595
category: knowledge-base
components: ['editor']
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>13.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Editor</td>
		</tr>
	</tbody>
</table>

## Description

I want to restrict the KendoReact [Editor](https://www.telerik.com/kendo-react-ui/components/editor/overview/) to a specific number of characters. For example, I want to set a maximum character limit of 100 so that users cannot add more than 100 characters to the Editor. The change event should handle this restriction.

This knowledge base article also answers the following questions:

-   How to limit the character count in KendoReact Editor?
-   How to set a maximum character limit in KendoReact Editor?
-   How to enforce minimum and maximum character limits in React Editor?

## Solution

To restrict the KendoReact Editor to a maximum character limit, handle the `onChange` event and control the value based on its length. Use the `textContent` property to get the plain text length without HTML markup.

<demo metaUrl="knowledge-base/editor/editor-max-min-character-limit/" height="300"></demo>

## See Also

-   [Editor Overview](https://www.telerik.com/kendo-react-ui/components/editor/overview/)
-   [Editor Controlled Value](https://www.telerik.com/kendo-react-ui/components/editor/controlled/)
-   [Editor API Reference](https://www.telerik.com/kendo-react-ui/components/editor/api/)
