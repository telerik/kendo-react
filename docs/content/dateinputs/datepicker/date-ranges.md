---
title: Date Ranges
description: 'Define the start and end dates when working with the KendoReact DatePicker in React projects.'
components: ["datepicker"]
slug: dateranges_datepicker
position: 7
---

# Date Ranges

The DatePicker can display a date range between predefined min and max values, allowing the user to pick a date only from that range.

> To enable the user to select a date range, use the [KendoReact DateRangePicker component]({% slug overview_daterangepicker %}).

To define the start date of the range, use the [`min`]({% slug api_dateinputs_datepickerprops %}#toc-min) property. To define the end date of the range, use the [`max`]({% slug api_dateinputs_datepickerprops %}#toc-max) property. The `min` date value has to be lower than the `max` date value.

The following example demonstrates how to limit the value of the DatePicker to a certain date range.

{% meta height:580 %}
{% embed_file datepicker/ranges/func/app.tsx preview %}
{% embed_file datepicker/ranges/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
