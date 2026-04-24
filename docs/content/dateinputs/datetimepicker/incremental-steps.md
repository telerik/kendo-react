---
title: Incremental Steps
description: 'Increment or decrement each date or time value part by a predefined step in the KendoReact DateTimePicker.'
components: ["datetimepicker"]
slug: incrementalsteps_datetimepicker
position: 6
---

# Incremental Steps

By default, the DateTimePicker increments or decrements each part of its date and time values by one step.

To change the default setup, use the [`steps`]({% slug api_dateinputs_datetimepickerprops %}#toc-steps) property.

The available options are:

-   `year: Number`&mdash;Controls the incremental step of the year value.
-   `month: Number`&mdash;Controls the incremental step of the month value.
-   `day: Number`&mdash;Controls the incremental step of the day value.
-   `hour: Number`&mdash;Controls the incremental step of the hour value.
-   `minute: Number`&mdash;Controls the incremental step of the minute value.
-   `second: Number`&mdash;Controls the incremental step of the second value.

The following demo displays a DateInput with predefined incremental steps for year to 10, for day to 5, for hour to 2 and for minute to 15.

{% meta height:580 %}
{% embed_file datetimepicker/incremental/func/app.tsx preview %}
{% embed_file datetimepicker/incremental/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)
-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
