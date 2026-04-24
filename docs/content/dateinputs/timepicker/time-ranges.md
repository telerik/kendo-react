---
title: Time Limits
description: 'Define the start and end time values when working with the KendoReact TimePicker in React projects.'
components: ["timepicker"]
slug: timeranges_timepicker
position: 5
---

# Time Limits

The TimePicker can display a time range between predefined min and max values, allowing the user to pick a time only from that range.

To define the start date of the range, use the [`min`]({% slug api_dateinputs_timepickerprops %}#toc-min) property. To define the end date of the range, use the [`max`]({% slug api_dateinputs_timepickerprops %}#toc-max) property. The `min` time value has to be lower than the `max` time value.

> The TimePicker ignores the `min` and `max` date portions of the `Date` object and uses the date portion of the passed value. If no value is provided, the TimePicker uses the current `Date`.

The following example demonstrates how to limit the value of the TimePicker to a certain time range.

{% meta height:500 %}
{% embed_file timepicker/limit-time-range/func/app.tsx preview %}
{% embed_file timepicker/limit-time-range/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Time Picker](slug://overview_timepicker)
-   [API Reference of the TimePicker]({% slug api_dateinputs_timepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
