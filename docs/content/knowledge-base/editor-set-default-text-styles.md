---
title: Setting Default Text Styles in Kendo React Editor Based on Page Settings
description: Learn how to apply default page settings for text styles in the Kendo React Editor and ensure user style changes take precedence.
type: how-to
page_title: How to Set Default Text Styles in Kendo React Editor
slug: editor-set-default-text-styles
tags: kendo, react, editor, text, styles, default, page settings
res_type: kb
ticketid: 1679945
components: ["editor"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>10.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Editor</td>
		</tr>
	</tbody>
</table>

## Description

To apply default page settings for text styles like font color, font family, and font size in the Editor. These settings should be the initial styles when a user starts typing. However, if a user manually changes these styles within the Editor, their customizations should take priority over the default page settings. This knowledge base article also answers the following questions:

-   How can I apply page settings as default styles in the Kendo React Editor?
-   How to dynamically set text styles inside an iframe for the Kendo React Editor?

## Solution

To achieve the desired behavior, follow these steps:

1. **Insert a Style Element in the Iframe Document**: Begin by setting the default styles of the content. Insert a style element into the iframe document of the Editor. For detailed instructions and examples, refer to the official documentation on [styling the content in iframe edit mode](slug:styling_editor#styling-the-content-in-iframe-edit-mode).

2. **Configure the Default Values of Toolbar Tools**: Next, set the `defaultValue` for custom tools in the toolbar, specifically for font-size, font-family, and fore-color. This step ensures that the Editor initiates with your default page settings, but allows user modifications to override these defaults. For implementation details, see this example:

{% meta height:500 %}
{% embed_file editor/set-default-text-styles/app.tsx preview %}
{% embed_file editor/set-default-text-styles/main.tsx %}
{% embed_file editor/set-default-text-styles/tools.tsx %}
{% embed_file editor/set-default-text-styles/styles.css %}
{% endmeta %}

By following these steps, the Kendo React Editor will start with the default text styles based on your page settings. Moreover, any style changes made by the user within the Editor will override these defaults, ensuring a flexible and user-friendly editing experience.

## See Also

-   [Styling the Content in Iframe Edit Mode](slug:styling_editor#styling-the-content-in-iframe-edit-mode)
-   [React Editor](slug:overview_editor)
-   [API Reference of the Editor](slug:api_editor_editor)
