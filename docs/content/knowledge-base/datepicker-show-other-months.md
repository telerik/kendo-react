---
title: Displaying Days of Other Months in KendoReact DatePicker
description: Learn how to show the days of previous and next months in the KendoReact DatePicker component.
type: how-to
page_title: How to Show Days of Other Months in KendoReact DatePicker
slug: datepicker-show-other-months
tags: kendoreact, datepicker, calendar, showothermonthdays, custom-calendar
ticketid: 1695197
res_type: kb
category: knowledge-base
components: ["datepicker"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact DatePicker</td>
		</tr>
	</tbody>
</table>

## Description

How can I display the days of previous and next months in the [KendoReact DatePicker](slug:overview_datepicker) calendar popup, similar to the standalone Calendar component?

This knowledge base article also answers the following questions:

-   How can I show days from other months in KendoReact DatePicker?
-   Can I customize the DatePicker to show dates from previous and next months?
-   How to use a custom Calendar component within KendoReact DatePicker?
-   How to enable the `showOtherMonthDays` feature in DatePicker?

## Solution

To show the days of previous and next months in the DatePicker calendar popup, provide a custom Calendar component to the `calendar` prop of the DatePicker. Use the Calendar component with the `showOtherMonthDays` property set to `true`.

```tsx
import { DatePicker, Calendar, CalendarProps } from '@progress/kendo-react-dateinputs';

const CustomCalendar = (props: CalendarProps) => <Calendar {...props} showOtherMonthDays={true} />;

const App = () => <DatePicker calendar={CustomCalendar} />;
```

This approach ensures the DatePicker calendar popup displays the days of other months, providing users with better context and easier navigation between months.

The following example demonstrates a complete implementation:

{% meta height:500 %}
{% embed_file dateinputs/datepicker-show-other-months/app.tsx preview %}
{% embed_file dateinputs/datepicker-show-other-months/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact DatePicker Documentation](slug:overview_datepicker)
-   [KendoReact Calendar Documentation](slug:overview_calendar)
-   [DatePicker Custom Calendar](slug:custom_rendering_datepicker#customizing-the-calendar)
