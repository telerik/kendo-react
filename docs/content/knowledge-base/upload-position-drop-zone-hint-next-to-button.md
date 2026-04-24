---
title: Position Drop Zone Hint Next to Select Files Button in Upload
description: Learn how to move the "Drop files here to upload" text next to the Select Files button in the KendoReact Upload component.
type: how-to
page_title: Position Drop Zone Hint Next to Select Files Button - KendoReact Upload
slug: upload-position-drop-zone-hint-next-to-button
tags: upload, dropzone, hint, css, styling, layout
ticketid: 1708027
res_type: kb
category: knowledge-base
components: ["upload"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>14.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Upload</td>
		</tr>
	</tbody>
</table>

## Description

By default, the Upload component displays the "Drop files here to upload" hint text centered below the Select Files button. I want to position this text next to the button on the same line for a more compact layout.

This KB article also answers the following questions:

-   How do I customize the Upload drop zone layout?
-   Can I move the drop zone hint text horizontally?
-   How to align the Upload hint text with the select button?

## Solution

To position the drop zone hint next to the Select Files button, use CSS to change the drop zone layout from vertical to horizontal alignment. Apply flexbox styling to the drop zone container and adjust the hint positioning to display inline with the button.

Add the following CSS to your application:

```css
.k-upload .k-upload-dropzone.k-dropzone {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.k-upload .k-upload-dropzone .k-dropzone-hint {
  margin-left: 12px;
  flex: 0 0 auto;
  position: static;
}
```

The following example demonstrates the customized Upload layout:

<demo metaUrl="upload/position-drop-zone-hint-next-to-button/" height="400"></demo>

## See Also

-   [KendoReact Upload Overview](https://www.telerik.com/kendo-react-ui/components/upload/)
-   [KendoReact Upload API](https://www.telerik.com/kendo-react-ui/components/upload/api/Upload/)
-   [KendoReact Upload Styling](https://www.telerik.com/kendo-react-ui/components/upload/styling/)
