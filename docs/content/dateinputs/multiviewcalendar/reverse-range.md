---
title: Reverse Range
description: 'Enable or disable reverse range selection in the KendoReact MultiViewCalendar in React projects.'
components: ["multiviewcalendar"]
slug: reverse_multiviewcalendar
position: 7
---

# Reverse Range Selection

By default, the MultiViewCalendar swaps the `start` and `end` dates of the value if the `end` is before the `start`.

To enable the reverse range selection, set the [`allowReverse`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-allowreverse) property of the MultiViewCalendar to `true`.

{% meta height:530 %}
{% embed_file multiviewcalendar/reverse/func/app.tsx preview %}
{% embed_file multiviewcalendar/reverse/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiViewCalendar]({% slug api_dateinputs_multiviewcalendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
