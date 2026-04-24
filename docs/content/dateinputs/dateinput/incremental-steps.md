---
title: Incremental Steps
description: 'Override the default incremental steps in the KendoReact DateInput.'
components: ["dateinput"]
slug: incrementalsteps_dateinput
position: 6
---

# Incremental Steps

By default, the DateInput increments or decrements each part of its date values by one step.

To change the default setup, use the [`steps`]({% slug api_dateinputs_dateinputprops %}#toc-steps) property.

The available options are:

-   `year: Number`&mdash;Controls the incremental step of the year value.
-   `month: Number`&mdash;Controls the incremental step of the month value.
-   `day: Number`&mdash;Controls the incremental step of the day value.
-   `hour: Number`&mdash;Controls the incremental step of the hour value.
-   `minute: Number`&mdash;Controls the incremental step of the minute value.
-   `second: Number`&mdash;Controls the incremental step of the second value.

The following demo displays a DateInput with predefined incremental steps for `year` to 10, for `day` to 5, for `hour` to 2 and for `minute` to 15.

{% meta height:150 %}
{% embed_file dateinput/incremental/func/app.tsx preview %}
{% embed_file dateinput/incremental/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [React Date Inputs](slug:overview_dateinputs)
