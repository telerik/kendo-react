---
title: Prevent opening a new tab when dropping the file outside the drop area.
description: An example on how to prevent the opening of a new tab when a file is dropped outside the drop area
type: how-to
page_title: Learn how to prevent the opening of a new tab when a file is dropped outside the drop area
slug: upload-prevent-opening-in-new-tab
tags: upload, tab, outside, drop, area
ticketid: 1658234
res_type: kb
category: knowledge-base
components: ["upload"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.1.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Upload</td>
	    </tr>
    </tbody>
</table>

## Description

When I drop a file outside the drop area the file is opened in a new tab. How can I prevent this?

## Solution

To prevent a file from opening in a new tab when dropped outside the drop area, call `event.preventDefault()` in the `dragover` and `drop` event handlers attached to the window object.

This example showcases this approach here:

{% meta  height:650 %}
{% embed_file upload/upload-prevent-opening-in-new-tab/app.jsx preview %}
{% embed_file upload/upload-prevent-opening-in-new-tab/main.jsx %}
{% endmeta %}
