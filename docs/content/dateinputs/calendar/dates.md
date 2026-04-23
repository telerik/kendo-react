---
title: Dates
description: 'Handle the focused or selected dates in the KendoReact Calendar.'
components: ["calendar"]
slug: dates_calendar
position: 3
---

# Dates

The Calendar enables you to set the behavior of its dates.

You can apply either of the following approaches:

-   Setting the [selected dates](#toc-setting-the-selected-date),or
-   Setting the [focused dates](#toc-setting-the-focused-date).

## Setting the Selected Date

By default, the selected date is not set and the Calendar displays only the focused date. To define the selected date, use the [`value`]({% slug api_dateinputs_calendarprops %}#toc-value) property.

{% meta height:410 %}
{% embed_file calendar/dates/select/func/app.tsx preview %}
{% embed_file calendar/dates/select/func/main.tsx %}
{% endmeta %}

The Calendar supports only single date selection. To use multiple dates and date range selection. You can utilize the [`MultiViewCalendar`]({% slug overview_multiviewcalendar %}). For more information refer to the [`MultiViewCalendar Date Selection`]({% slug dates_multiviewcalendar %}#toc-selected-dates) article.

## Setting the Focused Date

The Calendar always displays a focused date and, by default, the focused date is today's date. To change the focused date, use the [`focusedDate`]({% slug api_dateinputs_calendarprops %}#toc-focuseddate) property by setting it to a specific `Date` value. The `Date` value has to be a valid JavaScript `Date` object.

{% meta height:410 %}
{% embed_file calendar/dates/focus/func/app.tsx preview %}
{% embed_file calendar/dates/focus/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Disabled Dates]({% slug disabled_dates_calendar %})
-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
