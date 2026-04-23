---
title: Displaying Uploaded Images in UI with React Upload Component
description: Learn how to show preview images in the UI after uploading them using the React Upload component.
type: how-to
page_title: How to Preview Images in UI Using React Upload Component
slug: upload-and-display-images
tags: react, upload, image, preview, onadd, createobjecturl
res_type: kb
ticketid: 1649350
components: ["upload"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>9.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Upload</td>
		</tr>
	</tbody>
</table>

## Description

I need to upload an image file and display the uploaded file in the UI.

This KB article also answers the following questions:

-   How can I show a preview of the uploaded image in the UI?
-   How do I use the React Upload component to display images after uploading?
-   What method allows previewing files with the React Upload component?

## Solution

To display an image in the UI after uploading it, use the [Upload](https://www.telerik.com/kendo-react-ui/components/upload/) component's `onAdd` method. This method is triggered when a file is added to the Upload component. Within this method, access the raw file and convert it to a URL for displaying as an image preview.

Here is a step-by-step guide:

1. Use the `onAdd` event to access the uploaded file.
2. Convert the file to a URL using the `URL.createObjectURL` method.
3. Set this URL to an image's `src` attribute to display the preview.

{% meta  height:500 %}
{% embed_file upload/upload-and-display-image/app.tsx preview %}
{% embed_file upload/upload-and-display-image/main.tsx %}
{% endmeta %}

For additional details on the Upload component's controlled mode, refer to the documentation here: [Controlled Mode](https://www.telerik.com/kendo-react-ui/components/upload/modes/#toc-controlled-mode).

This approach works for various image extensions such as PNG and JPG. If you encounter issues with specific file types, confirm the file extension and adjust the handling accordingly.

## See Also

-   [Official Documentation for the React Upload Component](https://www.telerik.com/kendo-react-ui/components/upload/)
-   [Using the `createObjectURL` Method](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)
