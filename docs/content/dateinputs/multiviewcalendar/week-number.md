---
title: Week Number Column
description: 'Render a column displaying the number of the weeks within the current month view of the KendoReact MultiViewCalendar.'
components: ["multiviewcalendar"]
slug: weeknumcolumn_multiviewcalendar
position: 8
---

# Week Number Column

In the MultiViewCalendar, you can render a column which displays the number of the weeks within the current `month` view.

To show the week number column, set the [`weekNumber`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-weeknumber) property.

{% meta height:380 %}
{% embed_file multiviewcalendar/week/func/app.tsx preview %}
{% embed_file multiviewcalendar/week/func/main.tsx %}
{% endmeta %}

## Week selection

The week selection feature lets users pick days within a week by clicking the week number. This functionality depends on the [`mode`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-mode) property and allows either selecting individual days or choosing a range from the first to the last day of the week.

> The week selection feature works only with `multiple` and `range` type of `mode`.

{% meta height:500 %}
{% embed_file multiviewcalendar/week-selection/func/app.tsx preview %}
{% embed_file multiviewcalendar/week-selection/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiViewCalendar]({% slug api_dateinputs_multiviewcalendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
