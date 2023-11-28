---
title: Scroll KendoReact Conversational UI to the bottom automatically
description: An example on how to make the Conversational UI scroll to the bottom automatically
type: how-to
page_title: Scroll to the bottom of each message automatically - KendoReact Conversational UI
slug: conversational-ui-scroll-to-bottom-automatically
tags: conversational-ui, scroll, scroll to bottom, automatically, scroll automatically
ticketid: 1615928
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>6.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

When the user sends the first message, the Conversational UI scrolls to the bottom automatically, however in the next messages it does not.

## Solution

This can be achieved by adjusting the scrollTop of the `.k-message-list` container on the [onMessageSend](https://www.telerik.com/kendo-react-ui/components/conversationalui/api/ChatProps/#toc-onmessagesend) event:

{% meta id:index height:900 %}
{% embed_file conversational-ui/conversational-ui-scroll-to-bottom/main.jsx preview %}
{% endmeta %}
