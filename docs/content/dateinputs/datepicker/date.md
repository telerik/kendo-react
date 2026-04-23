---
title: Focused Dates
description: 'Handle the focused dates of the KendoReact DatePicker in React projects.'
components: ["datepicker"]
slug: dates_datepicker
position: 9
---

# Focused Dates

[The React DatePicker component]({% slug overview_datepicker %}) enables you to handle the configuration of the focused calendar dates.

The Calendar always displays a focused date and, by default, the focused date is today's date. To change the focused date, use the [`focusedDate`]({% slug api_dateinputs_datepickerprops %}#toc-focuseddate) property by setting it to a specific `Date` value. The `Date` value has to be a valid JavaScript `Date` object.

{% meta height:480 %}
{% embed_file datepicker/date/func/app.tsx preview %}
{% embed_file datepicker/date/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
