---
title: Scheduler start and end date values
description: An example on how to retrieve the date values of the first and last slot of the KendoReact Scheduler.
type: how-to
page_title: Get the date values of the first and last slot - KendoReact Scheduler
slug: scheduler-start-end-date-values
tags: scheduler, kendoreact, start, end, slot, view
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>7.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

I want to get the first and last date in my current Scheduler view. These start and end values should be updated when I change the view (DayView, WeekView, etc.), or when I navigate to a different date.

## Solution

Get these values using the `data-slot-start` and `data-slot-end` properties of the SchedulerSlot.

First, retrieve the first and last slots using the `.k-scheduler-body .k-scheduler-cell.k-slot-cell` class, where the first item in the array represents the first slot while the last one represents the last one. This allows you to get the date value of the `data-slot-start` of the first slot, and `data-slot-end` of the last slot. This should be done in the [useEffect](https://react.dev/reference/react/useEffect) hook where the date and view should be added to the dependency array because we want the start and end dates to be updated when the view or date is updated.

Following is an example demonstrates this approach:

{% meta id height:500 %}
{% embed_file scheduler/start-end-dates/main.jsx preview %}
{% embed_file shared/shared-events-utc.js preview %}
{% endmeta %}
