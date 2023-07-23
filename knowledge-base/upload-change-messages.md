---
title: Change the default text in the Upload component
description: An example on how to change the default messages within the KendoReact Upload
type: how-to
page_title: Change The Default Messages - KendoReact Upload
slug: upload-change-messages
tags: upload, kendoreact, messages, text
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

Can I change the default text displayed for the "Drop files here" and "Select files.." in the Upload component?

## Solution

Use the KendoReact Localization feature and its "loadMessages" and "LocalizationProvide" to replace the default messages. Full list with the messages can be found in the [`Upload Globalization`]({% slug globalization_upload %}) article.

This is an example showcasing this:

{% meta id:index height:760 %}
{% embed_file upload/upload-change-messages/main.jsx preview %}
{% endmeta %}
