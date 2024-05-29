---
title: Add Custom Tools to the Editor and Customize Built-in Tools
description: Examples on how to add a custom tool to the KendoReact Editor and customize built-in ones.
type: how-to
page_title: Add Custom Tools to the Editor and Customize Built-in Tools - KendoReact Editor
slug: add-custom-tools-to-the-editor-and-customize-built-in-tools
position:
tags: editor, tools, custom tools, customization tools
ticketid: 1416868
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

# Customization

The following article contains examples for different customizations of the KendoReact Editor. It includes creating different custom tools and customizing existing ones.

## Insert Span With a ClassName

How to make a tool that will insert a span element with a specific class and content.

### Solution

We need to create a tool, that will insert text content and add the built-in style [mark](https://prosemirror.net/docs/ref/#model.Mark) to it. The class attribute will be added when the mark object is created.

This is an example showcasing how to achieve this:

{% meta height:420 %}
{% embed_file editor/add-span-with-class/app.jsx preview %}
{% embed_file editor/add-span-with-class/main.jsx %}
{% endmeta %}

## Insert Non Editable Node

How to insert non editable predefined node in the Editor?

### Solution

This can be achieved by creating a tool that will insert a non editable [Node](https://prosemirror.net/docs/ref/#model.Node). This Node will function as a single element and will be removed with a single key press.

{% meta height:420 %}
{% embed_file editor/add-non-editable-element/app.jsx preview %}
{% embed_file editor/add-non-editable-element/main.jsx %}
{% embed_file editor/add-non-editable-element/InsertShortcodeTool.jsx %}
{% endmeta %}

## Apply Custom FontSize

How to make a tool that will apply custom font size to the selected content.

### Solution

This can be achieved with a custom [DropDownList tool]({% slug api_editor_EditorTools_createstyledropdownlist %}) that will apply the custom font-size based on array of font-size values.

{% meta height:420 %}
{% embed_file editor/custom-font-size-tool/app.jsx preview %}
{% embed_file editor/custom-font-size-tool/main.jsx %}
{% embed_file editor/custom-font-size-tool/customFontSize.jsx %}
{% endmeta %}

## Background Color Tool

How to create a tool that sets a background color?

## Font Color Tool

How to create a tool that sets a color?

## Clear Format Tool

How to create a tool that clears the inline formatting?

### Solution

This example show how to add the background color, font color and clear format tools:

{% meta height:420 %}
{% embed_file editor/custom-tools/app.jsx preview %}
{% embed_file editor/custom-tools/main.jsx %}
{% embed_file editor/custom-tools/backgroundColorTool.jsx %}
{% embed_file editor/custom-tools/clearAll.jsx %}
{% embed_file editor/custom-tools/myColorTool.jsx %}
{% endmeta %}
