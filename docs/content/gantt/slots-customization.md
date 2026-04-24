---
title: Slots Customization
description: 'The Gantt allows customize the slots.'
components: ["gantt"]
slug: slots_gantt
position: 7
---

# Custom Slot Width

The KendoReact Gantt component can have customized slot width. To achieve that, set the `slotWidth` to the new slot width value in pixels.

{% meta height:560 %}
{% embed_file slots/width/func/app.tsx preview %}
{% embed_file slots/width/func/main.tsx %}
{% endmeta %}

# Custom Slot Duration in DayView

The KendoReact Gantt allows slot duration customization in DayView. To set the new time, set the `slotDuration` to the time interval in minutes.

{% meta height:560 %}
{% embed_file slots/duration/func/app.tsx preview %}
{% embed_file slots/duration/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [API Reference of the KendoReact Gantt]({% slug api_gantt_gantt %})
-   [API Reference of the KendoReact GanttProps]({% slug api_gantt_ganttprops %})
