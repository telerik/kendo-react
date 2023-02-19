---
title: Integrate ProseMirror Mentions Plugin inside the Editor
description: An example on how to use the ProseMirror Mentions plugin inside the KendoReact Editor.
type: how-to
page_title: Integrate ProseMirror Mentions Plugin inside the Editor - KendoReact Editor
slug: editor-prosemirror-mentions
tags: editor, kendoreact, plugin, prosemirror, mention, hashtag
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I use @mentions and #hashtags inside the KendoReact Editor?

## Solution

You can use the [`proseMirror-mentions`](https://github.com/joelewis/prosemirror-mentions) plugin to provide a `@mentions` and `#hashtags` functionality for the KendoReact Editor.

{% meta id:index height:330 %}
{% embed_file editor/prose-mirror-mentions/main.jsx preview %}
{% embed_file editor/prose-mirror-mentions/style.css preview %}
{% endmeta %}
