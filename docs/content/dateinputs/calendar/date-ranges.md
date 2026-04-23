---
title: Date Ranges
description: 'Set the KendoReact Calendar to render a range of dates.'
components: ["calendar"]
slug: dateranges_calendar
position: 5
---

# Date Ranges

The Calendar can display a date range between predefined min and max values, allowing the user to select a date only from that range by disabling the dates outside of the range.

> To enable the user to select a date range, use the [KendoReact DateRangePicker component]({% slug overview_daterangepicker %}).

To define the start date of the range, use the [`min`]({% slug api_dateinputs_calendarprops %}#toc-min) property. To define the end date of the range, use the [`max`]({% slug api_dateinputs_calendarprops %}#toc-max) property. The `min` date value has to be lower than the `max` date value.

The following example demonstrates how to limit the value of the Calendar to a selected date range.

{% meta height:550 %}
{% embed_file calendar/ranges/func/app.tsx preview %}
{% embed_file calendar/ranges/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Disabled Dates]({% slug disabled_dates_calendar %})
-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
