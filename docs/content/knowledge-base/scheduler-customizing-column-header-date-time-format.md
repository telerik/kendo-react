---
title: Changing Date-Time Format in Column Headers of Day, Week, and Timeline View in KendoReact Scheduler
description: Learn how to customize the date-time format in the column headers of the Day, Week, and Timeline views in KendoReact Scheduler.
type: how-to
page_title: Customizing Column Header Date-Time Format in KendoReact Scheduler
meta_title: Customizing Column Header Date-Time Format in KendoReact Scheduler
slug: scheduler-customizing-column-header-date-time-format
tags: kendoreact,scheduler,dateheadercell,timeheadercell,column-headers,customization
res_type: kb
ticketid: 1710758
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td>
KendoReact Scheduler
</td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

I want to change the date-time format in the column headers of the Day, Week, and Timeline views in the [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/). This involves customizing the default date-time display to meet specific format requirements.

This knowledge base article also answers the following questions:
- How to modify the date format in KendoReact Scheduler column headers?
- How to customize time format in Scheduler views?
- How to use `dateHeaderCell` and `timeHeaderCell` props for formatting?

## Solution

To change the date-time format of the column headers, use the `dateHeaderCell` and `timeHeaderCell` props provided by the Scheduler. These props allow you to define custom rendering for the respective column headers.

1. Use the `dateHeaderCell` prop to customize the date format for column headers.
2. Use the `timeHeaderCell` prop to customize the time format for column headers.

Here is an example:

<demo metaUrl="knowledge-base/scheduler/customizing-column-header-format/" height="600"></demo>

### Explanation:
- `CustomDateHeaderCell`: Formats the date using `Intl.DateTimeFormat` for a short weekday, month, and day.
- `CustomTimeHeaderCell`: Formats the time using `Intl.DateTimeFormat` for hour and minute.
- The `dateHeaderCell` prop is used in `DayView` and `WeekView`.
- The `timeHeaderCell` prop is used in `TimelineView`.

## See Also

- [KendoReact Scheduler Documentation](https://www.telerik.com/kendo-react-ui/components/scheduler/)
- [DateHeaderCell API](https://www.telerik.com/kendo-react-ui/components/scheduler/api/dateheadercell)
- [TimeHeaderCell API](https://www.telerik.com/kendo-react-ui/components/scheduler/api/timeheadercell)
