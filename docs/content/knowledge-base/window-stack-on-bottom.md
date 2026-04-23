---
title: How to stack minimized windows at the bottom
description: Learn how to stack minimized windows at the bottom
type: how-to
page_title: How to stack minimized windows at the bottom - KendoReact Window
slug: window-stack-bottom
tags: window, stack, bottom, minimize
res_type: kb
category: knowledge-base
components: ["window"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>11.3.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Window</td>
	    </tr>
    </tbody>
</table>

## Description

I have multiple Window components and I want to stack them at the bottom when they are minimized and to maximize them on click.

## Solution

To achieve the desired result, add a wrapping element that will wrap all Window components and set the [appendTo]({% slug api_dialogs_windowprops %}#toc-appendto) property of the Window to that element. Use CSS to modify the positions of the minimized windows per your needs.

{% meta  height:460 %}
{% embed_file window/stack-on-bottom/app.tsx preview %}
{% embed_file window/stack-on-bottom/main.tsx %}
{% embed_file window/stack-on-bottom/styles.css %}
{% endmeta %}

## See Also

- [Window Overview]({% slug overview_dialogs %})
- [Window API Reference]({% slug api_dialogs_window %})
