---
title: How to scroll to a specific time in the KendoReact Scheduler
description: An example of how to scroll to a specific time in the KendoReact Scheduler.
type: how-to
page_title: How to scroll to a specific time - KendoReact Scheduler
slug: scheduler-scroll-to-specific-time
tags: scheduler, scroll
ticketid: 1677269
res_type: kb
category: knowledge-base
components: ["scheduler"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>10.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Scheduler</td>
	    </tr>
    </tbody>
</table>

## Description

How can I programmatically scroll to a specific time in the KendoReact Scheduler?

## Solution

This can be achieved by obtaining the `.k-scheduler-layout` container and programmatically scrolling to the desired hour:

{% meta height:460 %}
{% embed_file scheduler/scheduler-scroll-to-specific-time/app.tsx preview %}
{% embed_file scheduler/scheduler-scroll-to-specific-time/main.tsx %}
{% embed_file scheduler/scheduler-scroll-to-specific-time/sc-events-utc.ts %}
{% endmeta %}

