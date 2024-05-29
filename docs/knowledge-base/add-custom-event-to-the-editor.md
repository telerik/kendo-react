---
title: Add Custom Events to the Editor
description: An example on how to add a custom event to the KendoReact Editor.
type: how-to
page_title: Add Custom Events to the Editor - KendoReact Editor
slug: add-custom-event-to-the-editor
position:
tags: editor, event
ticketid: 1416867
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
How to attach a DOM event like onBlur or onColumnMenu to the EditorView.

## Solution
The desired DOM events can be attached to the EditorView object using the [onMount]({% slug api_editor_editorprops %}#toc-onmount) event of the Editor.

This is an example showcasing how to attach the onColumnMenu, onBlur and onClick events:

{% meta height:340 %}
{% embed_file editor/attach-events/app.jsx preview %}
{% embed_file editor/attach-events/main.jsx %}
{% endmeta %}
