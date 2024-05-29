---
title: Implement Keyboard Navigation for the KendoReact ListBox
description: An example on how to achieve keyboard navigation for the KendoReact ListBox
type: how-to
page_title: KeyBoard Navigation - KendoReact ListBox
slug: listbox-keyboard-navigation
tags: listbox, keyboard, navigation, keyboard navigation, key, list
ticketid: 1608113
res_type: kb
category: knowledge-base
---

## Environment

<table>
<tbody>
<tr>
<td>Product Version</td>
<td>v5.13.1</td>
</tr>
<tr>
<td>Product</td>
<td>Progress® KendoReact</td>
</tr>
</tbody>
</table>


## Description

I want to implement keyboard navigation for the ListBox component.

## Solution

In order to implement the keyboard navigation functionality for the ListBox, wrap it with a `div` element and handle the `onKeyDown` event of the `div`. Inside the `onKeyDown` event handler, move the items and change their selection based on the pressed keys.

{% meta height:500 %}
{% embed_file listbox/listbox-keyboard-navigation/app.jsx preview %}
{% embed_file listbox/listbox-keyboard-navigation/main.jsx %}
{% endmeta %}