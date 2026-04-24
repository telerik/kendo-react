---
title: Incremental Steps
description: 'Increment or decrement each date value part by one step in the KendoReact TimePicker.'
components: ["timepicker"]
slug: incrementalsteps_timepicker
position: 6
---

# Incremental Steps

By default, the TimePicker increments or decrements each part of its time values by one step.

To change the default setup, use the [`steps`]({% slug api_dateinputs_timepickerprops %}#toc-steps) property.

The available options are:

-   `hour: Number`&mdash;Controls the incremental step of the hour value.
-   `minute: Number`&mdash;Controls the incremental step of the minute value.
-   `second: Number`&mdash;Controls the incremental step of the second value.

{% meta height:480 %}
{% embed_file timepicker/incremental/func/app.tsx preview %}
{% embed_file timepicker/incremental/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Time Picker](slug://overview_timepicker)
-   [API Reference of the TimePicker]({% slug api_dateinputs_timepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
