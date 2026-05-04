---
title: Date Limits
description: 'Set the KendoReact DateInput to render a range of dates.'
components: ['dateinput']
slug: dateranges_dateinput
position: 8
---

# Date Limits

The DateInput enables you to set a predefined min-max date range, allowing the user to input a date value only within that range.

> To enable the user to select a date range, use the [KendoReact DateRangePicker component]({% slug overview_daterangepicker %}).

You can control the range of dates in the DateInput by setting the [`min`]({% slug api_dateinputs_dateinputprops %}#toc-min) and [`max`]({% slug api_dateinputs_dateinputprops %}#toc-max) properties to limit the `Date` selection, or [`minTime`]({% slug api_dateinputs_dateinputprops %}#toc-mintime) and [`maxTime`]({% slug api_dateinputs_dateinputprops %}#toc-maxtime) to limit only the `Time` part of the value. When the atleast one of the limiting properties are configured and the selected date value is out of this range, the component displays a visual indication. The `min` date value has to be lower than the `max` date value - The same rule applies to the `time` value of the `minTime` and `maxTime` properties.

## Limiting the Date Range

The following example demonstrates how to limit the value of the DateInput to a certain date range.

{% meta height:270 %}
{% embed_file dateinput/range/date/func/app.tsx preview %}
{% embed_file dateinput/range/date/func/main.tsx %}
{% endmeta %}

## Limiting the Time Range

The following example demonstrates how to limit the value of the DateInput to a certain time range.

{% meta height:270 %}
{% embed_file dateinput/range/time/func/app.tsx preview %}
{% embed_file dateinput/range/time/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [React Date Inputs](slug:overview_dateinputs)
