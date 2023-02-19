---
title: Stack Same-Type KendoReact Notifications and Hide Them after a Timeout
description: An example on how to stack KendoReact Notifications of the same type and hide them after a timeout.
type: how-to
page_title: Stack KendoReact Notifications of the Same Type and Hide Them after a Timeout - KendoReact Notification
slug: stack-and-hide-notifications
position:
tags: notification, stack, timeout, hide, grid
ticketid: 1507411
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.5.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
How to stack Notifications of the same type on Grid Row click and hide them automatically after a specific timeout.

## Solution
In order to have multiple notifications of the same type, they need to be initialized separately from each other. For example, each individual notification can be kept as a separate element in an array. The Notifications would then be dynamically generated using the JavaScript Array.map() method.
Hiding notifications can currently be done using the setTimeout function as shown in the example below.

{% meta id:index height:760 %}
{% embed_file notification/stack-and-hide-after/main.jsx preview %}
{% endmeta %}

Also, there is a feature request for having a property that sets the timeout of the notifications in our portal and I can suggest voting for it as it will increase its chances of being implemented as a built-in feature:

https://feedback.telerik.com/kendo-react-ui/1413293-add-hideafter-prop-to-the-notification-component
