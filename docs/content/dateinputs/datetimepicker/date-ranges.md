---
title: Date and Time Ranges
description: 'Define the start and end date and time when working with the KendoReact DateTimePicker in React projects.'
components: ["datetimepicker"]
slug: dateranges_datetimepicker
position: 8
---

# Date and Time Ranges

The DateTimePicker can display a date-and-time range between predefined min and max values, allowing the user to pick specific date and time only from that range.

> To enable the user to select a date range, use the [KendoReact DateRangePicker component]({% slug overview_daterangepicker %}).

## Limiting the Date Range

To define the start date, use the [`min`]({% slug api_dateinputs_datetimepickerprops %}#toc-min) property. To define the end date of the range, use the [`max`]({% slug api_dateinputs_datetimepickerprops %}#toc-max) property. When the DateTimePicker renders the ranges, it will take into account both date and time parts. The `min` value has to be lower than the `max` value.

> If the `min` value is `10th of March, 12:30` and `10th of March` is selected in the `date` part, the `time` part will prevent a selection before `12:30`. However, if `11th of March` is selected, the `time` part will allow any selection of time.

The following example demonstrates how to limit the value of the DateTimePicker to a certain date and time range.

{% meta height:620 %}
{% embed_file datetimepicker/ranges/date/func/app.tsx preview %}
{% embed_file datetimepicker/ranges/date/func/main.tsx %}
{% endmeta %}

## Limiting the Time Range

To limit the selection of the `time` parts only, use the corresponding [`minTime`]({% slug api_dateinputs_datetimepickerprops %}#toc-mintime) and [`maxTime`]({% slug api_dateinputs_datetimepickerprops %}#toc-maxtime) properties. This properties allow the developer to limit the time selection only, without taking care of the `date` part.

The following example demonstrates how to limit the `time` value of the DateTimePicker component, to simulated value selection in work hours only.

{% meta height:620 %}
{% embed_file datetimepicker/ranges/time/func/app.tsx preview %}
{% embed_file datetimepicker/ranges/time/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
