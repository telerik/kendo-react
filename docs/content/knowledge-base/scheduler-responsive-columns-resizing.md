---
title: How to achieve responsive column resizing in the TimelineView
description: An example of how to achieve responsive column resizing for the TimelineView in the KendoReact Scheduler.
type: how-to
page_title: Resizing responsively the TimelineView columns - KendoReact Scheduler
slug: scheduler-responsive-columns-resizing
ticketid: 1666228
res_type: kb
category: knowledge-base
components: ["scheduler"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.5.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Scheduler</td>
	    </tr>
    </tbody>
</table>

## Description

How can I achieve a more responsive resizing for the `TimelineView` columns?

## Solution

This can be achieved by dynamically calculating the `columnWidth` based on the container's width:

{% meta height:500 %}
{% embed_file scheduler/scheduler-responsive-columns-resizing/app.tsx preview %}
{% embed_file scheduler/scheduler-responsive-columns-resizing/main.tsx %}
{% embed_file scheduler/scheduler-responsive-columns-resizing/kb-events-utc.js %}
{% endmeta %}
