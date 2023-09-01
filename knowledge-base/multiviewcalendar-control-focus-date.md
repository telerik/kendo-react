---
title: Control the Focus MultiViewCalendar Date
description: An example on how to control the focus date in the KendoReact MultiViewCalendar.
type: how-to
page_title: Control the Focus MultiViewCalendar Date - KendoReact MultiViewCalendar
slug: multiviewcalendar-control-focus-date
tags: multiviewcalendar, kendoreact, focus, date
ticketid: 754
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>4.7.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

When changing the selected value externally the MultiViewCalendar selects the new date correctly but does not jump to it if it is a range or array. The calendar seems to update correctly if it only handles single dates.

## Solution

The can be controlled by updating the focus date in the internal state of the MultiViewCalendar.

```jsx-no-run
	this.MultiViewCalendarRef.setState({ focusedDate : newFocusDate });
```

{% meta id:index height:600 %}
{% embed_file dateinputs/multiviewcalendar-control-focus-date/main.jsx preview %}
{% endmeta %}