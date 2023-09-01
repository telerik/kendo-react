---
title: Hide KendoReact Notifications after a Timeout
description: An example on how to hide the KendoReact Notification after a timeout.
type: how-to
page_title: Hide KendoReact Notifications after a Timeout - KendoReact Notification
slug: hide-kendoreact-notification-after-a-timeout
position:
tags: notification
ticketid: 1422282
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
How to hide the Notification component automatically after a specific timeout.

## Solution
Currently, this can be done using the setTimeout function as shown in the example below.

{% meta id:index height:300 %}
{% embed_file notification/hide-after/main.jsx preview %}
{% endmeta %}

Also, there is a feature request for this in our portal and I can suggest voting for it as it will increase its chances to be implemented as a built-in feature:

https://feedback.telerik.com/kendo-react-ui/1413293-add-hideafter-prop-to-the-notification-component
