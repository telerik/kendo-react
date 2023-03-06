---
title: Paste an Image for Upload from the Clipboard 
description: An example on how to paste an image for upload from clipboard when working with the KendoReact Upload.
type: how-to
page_title: Paste Images for Upload from the Clipboard - KendoReact Upload
slug: upload-paste-image-from-clipboard
tags: upload, kendoreact, paste, image, clipboard
ticketid: 1468266
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>3.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

Do you have any idea how can I use Copy and Paste to automatically place pictures inside the React Upload Component?

I want to Copy a Picture using Ctrl+C from my computer, go to the browser and Paste it via Ctrl+V, if there is a React Upload Component on the page, I need it to automatically discover the Picture that I was holding on the Ctrl+C and place it inside the component for Uploading,

## Solution

This will require the following setup:

1. Add a `DIV` element that will be the paste zone.
1. Add an `onPaste` event listener to that `DIV`.
1. Handle the `onPaste` event to loop over the `clipboard data`.
1. If there are images in the clipboard data, load them into the Upload by `updating the state`.

This is an example showcasing this:

{% meta id:index height:760 %}
{% embed_file upload/paste-image/main.jsx preview %}
{% endmeta %}
