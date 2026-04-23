---
title: Timezones
description: 'Get started with the KendoReact Gantt component and set its timezones.'
components: ["gantt"]
slug: timezones_gantt
position: 8
---

# Timezones

The KendoReact Gantt provides built-in support for displaying events in different timezones.

## Default Timezones

If no timezone is set, the Gantt defaults to the local timezone of the browser. The user will be able to see the start and end time of the events as they appear in their local timezone.

For example, an event that is set up to occur at 09:00 AM in London (GMT+0000) will appear as 10:00 AM to a user in Berlin (GMT+0100). The following example demonstrates the resulting time for your local timezone.

{% meta height:560 %}
{% embed_file timezones/default/func/app.tsx preview %}
{% embed_file timezones/default/func/main.tsx %}
{% endmeta %}

## Fixed Timezones

Some scenarios require you to set a timezone to a fixed value. For example, if the schedule of the project has to be always displayed in the timezone of the head office regardless of the timezone in which the rest of the offices are located and from which they are viewing the schedule. For more information, refer to the [timezones documentation of the Date Math library]({% slug timezones_datemath %}).

1. Load the required timezone data.

    > The `Etc/UTC` timezone is loaded by default.

    ```jsx-no-run
      // Load the timezone data for the specific time zone.
      import '@progress/kendo-date-math/tz/America/New_York';
    ```

2. Set the [`timezone`]({% slug api_gantt_ganttprops %}#toc-timezone) attribute of the Gantt to the desired timezone ID.

{% meta height:560 %}
{% embed_file timezones/fixed/func/app.tsx preview %}
{% embed_file timezones/fixed/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [API Reference of the KendoReact Gantt]({% slug api_gantt_gantt %})
-   [API Reference of the KendoReact GanttProps]({% slug api_gantt_ganttprops %})
