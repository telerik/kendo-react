---
title: Disabled Dates
description: 'Set disabled dates in the KendoReact Calendar.'
components: ["calendar"]
slug: disabled_dates_calendar
position: 4
---

# Disabled Dates

You can disable dates by handling the [`value`]({% slug api_dateinputs_calendarprops %}#toc-value) and [`onChange`]({% slug api_dateinputs_calendarprops %}#toc-onchange) properties to prevent the selection of certain dates. You can set the disabled styles for the disabled dates by setting the [`isDisabled`]({% slug api_dateinputs_calendarcellprops %}#toc-isdisabled) property of the [`CalendarCell`]({% slug api_dateinputs_calendarcell %}) through the [`cell`]({% slug api_dateinputs_calendarprops %}#toc-cell) property of the Calendar.

The following example demonstrates how to disable the weekend days of the Calendar.

{% meta height:410 %}
{% embed_file calendar/disabled-dates/func/app.tsx preview %}
{% embed_file calendar/disabled-dates/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Controlled Mode of the Calendar]({% slug controlled_calendar %})
-   [Customization of the Calendar]({% slug custom_rendering_calendar %})
-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [API Reference of the CalendarCell]({% slug api_dateinputs_calendarcellprops %})
-   [React Date Inputs](slug:overview_dateinputs)
