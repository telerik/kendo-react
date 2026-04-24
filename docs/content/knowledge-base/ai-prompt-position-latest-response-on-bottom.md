---
title: Position the latest response on the the bottom in the AIPrompt
description: An example that showcases how to position the latest response on the bottom in the AIPrompt
type: how-to
page_title: How to position the latest response on the bottom of the UI in the AIPrompt
slug: ai-prompt-position-latest-response-on-bottom
tags: aiprompt, ai, chatgpt, response, bottom
ticketid: 1658220
res_type: kb
category: knowledge-base
components: ["aiprompt"]
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
	    	<td>Progress® KendoReact AIPrompt</td>
	    </tr>
    </tbody>
</table>

## Description

How to position the latest response on the bottom of the UI?

## Solution

To position the latest response on the bottom of the UI, append the responses at the end of the [`outputs`]({% slug api_conversational-ui_aipromptprops %}#toc-outputs) array.

This example showcases the approach above in action:

{% meta height:680 %}
{% embed_file conversational-ui/ai-prompt-position-latest-response-on-bottom/app.jsx preview %}
{% embed_file conversational-ui/ai-prompt-position-latest-response-on-bottom/main.jsx %}
{% embed_file conversational-ui/ai-prompt-position-latest-response-on-bottom/ai-data.js %}
{% endmeta %}
