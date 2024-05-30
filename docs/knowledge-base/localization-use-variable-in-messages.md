---
title: Add support for variable in localization messages
description: An example on how to use variable with LocalizationProvider
type: how-to
page_title: Extending LocalizationProvider To Support Variables - KendoReact ListView
slug: localization-use-variable-in-messages
tags: localization, messages, variable, custom
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.14.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want to display state variable in the messages from the LocalizationProvider.

## Solution
Extend the LocalizationProvider by providing an option for executing a ${variable} syntax within the messages.

This is an example showcasing this approach:
 
{% meta height:320 %}
{% embed_file localization/use-variable-in-messages/app.jsx preview %} 
{% embed_file localization/use-variable-in-messages/main.jsx %} 
{% embed_file localization/use-variable-in-messages/Chooser.jsx %} 
{% embed_file localization/use-variable-in-messages/Message.jsx %} 
{% embed_file localization/use-variable-in-messages/messages.js %} 
{% embed_file localization/use-variable-in-messages/MyLocalizationProvider.jsx %} 
{% endmeta %}
