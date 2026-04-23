---
title: Disable an Item in the KendoReact Drawer
description: An example on how to disable an item in the KendoReact Drawer
type: how-to
page_title: Disable an item in the KendoReact Drawer - KendoReact Drawer
slug: drawer-disable-item
tags: drawer, disable item,
ticketid: 1647380
res_type: kb
category: knowledge-base
components: ["drawer"]
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
	    	<td>Progress® KendoReact Drawer</td>
	    </tr>
    </tbody>
</table>

## Description

How can I disable an item in the Drawer?

## Solution

This can be achieved by setting the [disabled]({% slug api_layout_draweritemprops %}#toc-disabled) prop to true for the required item.

{% meta height:460 %}
{% embed_file layout/drawer-disable-item/app.jsx preview %}
{% embed_file layout/drawer-disable-item/Attachments.jsx  %}
{% embed_file layout/drawer-disable-item/Calendar.jsx  %}
{% embed_file layout/drawer-disable-item/DrawerRouterContainer.jsx  %}
{% embed_file layout/drawer-disable-item/Favorites.jsx  %}
{% embed_file layout/drawer-disable-item/Inbox.jsx  %}
{% embed_file layout/drawer-disable-item/main.jsx  %}
{% embed_file layout/drawer-disable-item/Notifications.jsx  %}
{% endmeta %}
