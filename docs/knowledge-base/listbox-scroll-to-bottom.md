---
title: Implement Scrolling to the Bottom for the KendoReact ListBox
description: An example on how to implement scroll-to-bottom behavior for the KendoReact ListBox
type: how-to
page_title: Scroll to Bottom - KendoReact ListBox
slug: listbox-scroll-to-bottom
tags: listbox, scroll, scroll to bottom
ticketid: 1662799
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

I want to implement a scroll-to-bottom behavior for the ListBox when an item is dragged and dropped or when an item is transferred between ListBoxes.

## Solution

To implement the scroll-to-bottom behavior, first, obtain a reference to the ListBox component. In the [onToolClick]({% slug api_listbox_listboxtoolbarprops %}#toc-ontoolbarclick) event of the `ListBoxToolbar` and the [onDrop]({% slug api_listbox_listboxprops %}#toc-ondrop) event of the ListBox, use the `scrollIntoView` method to scroll to the bottom whenever an item is dropped or transferred using the arrows.


{% meta height:500 %}
{% embed_file listbox/listbox-scroll-to-bottom/app.jsx preview %}
{% embed_file listbox/listbox-scroll-to-bottom/main.jsx %}
{% embed_file listbox/listbox-scroll-to-bottom/products.json %}
{% endmeta %}