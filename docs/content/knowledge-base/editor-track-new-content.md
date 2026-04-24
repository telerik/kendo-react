---
title: Track New Content with a Custom Mark in KendoReact Editor
description: Learn how to highlight and track newly typed or pasted content in the KendoReact Editor using a custom ProseMirror mark and plugin.
type: how-to
page_title: How to Track New Content in React Editor - KendoReact Editor
slug: editor-track-new-content
tags: editor, kendo react, track changes, prosemirror, custom mark, plugin, highlight, paste
ticketid: 1711734
res_type: kb
category: knowledge-base
components: ['editor']
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>14.2.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Editor</td>
		</tr>
	</tbody>
</table>

## Description

I want to track and visually highlight new content that users type in the KendoReact Editor. For example, when tracking is enabled, all newly entered text should appear in a different color so that it is easy to distinguish from the original content.

## Solution

To track new content in the KendoReact Editor, use a custom [ProseMirror](https://prosemirror.net/) mark and plugin:

1. **Define a custom `trackedText` mark** in the schema via the [`onMount`](slug:api_editor_editorprops#onMount) event. This mark wraps new content in a `<span>` with a distinct style (for example, blue text).

2. **Create a ProseMirror plugin** that intercepts `handleTextInput`, `handlePaste`, and `handleKeyDown`. When tracking is enabled, the plugin applies the `trackedText` mark to all newly inserted content and preserves the tracking format when pressing Enter to create new lines.

3. **Add a toolbar button** that toggles the tracking mode on and off.

<demo metaUrl="knowledge-base/editor/editor-track-new-content/" height="400"></demo>

## See Also

-   [KendoReact Editor](slug:overview_editor)
-   [API Reference of the Editor](slug:api_editor_editor)
