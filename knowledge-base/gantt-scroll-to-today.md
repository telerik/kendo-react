---
title: Scroll to today's date in the GanttWeekView
description: An example on how scroll the GanttWeekView to today's date.
type: how-to
page_title: Scroll to today's date in the WeekView on load - KendoReact Gantt
slug: gantt-scroll-to-today
tags: gantt, scroll, today
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.13.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody> 
</table>


## Description

I want the scroll position of the GanttWeekView to be at the today's date on load

## Solution

For achieving the desired result, define a timelineHeaderCell for the GanttWeekView where a custom class name will be added to the header cell for today's date. Then, within React.useEffect, after the Gantt is rendered, get reference to the scroll and move the scroll to the cell with the custom class name that was added.

Following is an example demonstrating this approach:


{% meta id height:660 %}
{% embed_file gantt/scroll-to-today/main.jsx preview %}
{% embed_file gantt/scroll-to-today/data.js %}
{% endmeta %}
