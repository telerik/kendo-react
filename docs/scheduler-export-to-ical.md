---
title: Export the Scheduler to iCal
description: An example on how to export the KendoReact Scheduler to iCal.
type: how-to
page_title: Export the Scheduler to iCal - KendoReact Scheduler
slug: scheduler-export-to-ical
tags: scheduler, kendoreact, ical, export
ticketid: 1470194
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>3.15.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How to export the KendoReact Scheduler events to iCal?

## Solution

This can be done using [ical.js](https://mozilla-comm.github.io/ical.js/) to process the Scheduler data.

This is an example demonstrating the implementation:

{% meta id:index height:760 %}
{% embed_file scheduler/export-to-ical/main.jsx preview %}
{% embed_file shared/events-utc.js preview %}
{% endmeta %}
