---
title: Props Context
description: 'Learn how to provide a global configuration for all instances of a DateInput component in a React Application'
components:
    ['calendar', 'dateinput', 'datepicker', 'daterangepicker', 'datetimepicker', 'multiviewcalendar', 'timepicker']
slug: props-context_dateinputs
position: 40
---

# DateInputs Props Context

The `PropsContext` allows you to configure the props of all `@progress/kendo-react-dateinputs` components inside of it.

This is useful if a component from the `@progress/kendo-react-dateinputs` package is wrapped inside another component (for example, KendoReact [Grid]({% slug overview_grid %}) or [Scheduler]({% slug overview_scheduler %})) and a specific component configuration is not exposed.

The following example shows how to configure the Calendar props in a Grid by using `CalendarPropsContext`:

{% meta height:490 %}
{% embed_file props-context/overview/func/app.tsx preview %}
{% embed_file props-context/overview/func/main.tsx %}
{% embed_file props-context/overview/func/grid-with-filtering.tsx %}
{% embed_file props-context/overview/func/sample-products.tsx %}
{% endmeta %}

## Available Contexts

The following components from the `@progress/kendo-react-dateinputs` package support passing `props` through `context`:

| Component         | Context                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------ |
| Calendar          | [`CalendarPropsContext`]({% slug api_dateinputs_calendarpropscontext %})                   |
| MultiViewCalendar | [`MultiViewCalendarPropsContext`]({% slug api_dateinputs_multiviewcalendarpropscontext %}) |
| DateInput         | [`DateInputPropsContext`]({% slug api_dateinputs_dateinputpropscontext %})                 |
| DatePicker        | [`DatePickerPropsContext`]({% slug api_dateinputs_datepickerpropscontext %})               |
| TimePicker        | [`TimePickerPropsContext`]({% slug api_dateinputs_timepickerpropscontext %})               |
| DateTimePicker    | [`DateTimePickerPropsContext`]({% slug api_dateinputs_datetimepickerpropscontext %})       |
| DateRangePicker   | [`DateRangePickerPropsContext`]({% slug api_dateinputs_daterangepickerpropscontext %})     |

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [Calendar Overview]({% slug overview_calendar %})
-   [DateInput Overview]({% slug overview_dateinput %})
-   [DatePicker Overview]({% slug overview_datepicker %})
-   [DateRangePicker Overview]({% slug overview_daterangepicker %})
-   [DateTimePicker Overview]({% slug overview_datetimepicker %})
-   [MultiViewCalendar Overview]({% slug overview_multiviewcalendar %})
-   [TimePicker Overview]({% slug overview_timepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
