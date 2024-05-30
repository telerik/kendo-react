---
title: Show maxLength and number of typed characters in the KendoReact Chat
description: An example on how to make the Chat show number of typed characters and maxLength of input
type: how-to
page_title: Show maxLength and number of typed characters- KendoReact Chat
slug: chat-maxlength-char-count
tags: chat, maxlength, count chars, count
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>7.3.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How to show the number of characters as the user types and set a maxLength for the Chat component?

## Solution

To set a `maxLength` render a custom [`Input`]({% slug overview_textbox %}) component and set the value for the [`maxLength`]({% slug api_inputs_input %}#toc-maxLength) prop to the preferred value. To see the character count as the user types, display the [`value`]({% slug api_inputs_input %}#toc-value) variable in the custom component markup. For more information on how to customize the Chat component refer to the [`customization`]({% slug custom-rendering_chat %})

{% meta id:index height:900 %}
{% embed_file conversational-ui/chat-maxlength-char-count/app.tsx preview %}
{% embed_file conversational-ui/chat-maxlength-char-count/main.tsx %}
{% endmeta %}
