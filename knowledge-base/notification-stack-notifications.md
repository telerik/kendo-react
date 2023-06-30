---
title: Stack multiple Notification 
description: An example on how to stack KendoReact Notification.
type: how-to
page_title: Stack KendoReact Notifications - KendoReact Notification
slug: stack-notifications
position:
tags: notification, stack, messages
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
How to stack multiple Notifications?

## Solution
Use an array state variable where the data for the notifications will be added and within the render use a "map" function to initialize multiple Notification components.

Here is an example with the above approach:

{% meta id:index height:760 %}
{% embed_file notification/stack-notifications/main.jsx preview %}
{% embed_file notification/stack-notifications/styles.css %}
{% endmeta %}
