---
title: ViewSlot
description: 'Overview of the SchedulerViewSlot component. Customize the SchedulerViewItem in the context of the selected view'
components: ["scheduler"]
slug: view-slot_slots_scheduler
position: 2
---

# SchedulerViewSlot

By default, the [SchedulerViewSlot]({% slug api_scheduler_schedulerviewslot %}) is responsible to only expand itself if there are no enough space for the items inside.

## Extending the Default Logic

We will cover a simple use-case where we modify the `cursor`, based on the [isWorkDay]({% slug api_scheduler_schedulerslotprops %}#toc-isworkday) and [isWorkHour]({% slug api_scheduler_schedulerslotprops %}#toc-isworkhour) properties of the `SchedulerViewSlot`.

{% meta height:700 %}
{% embed_file slots/view-slot/extending/func/app.tsx preview %}
{% embed_file slots/view-slot/extending/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerViewSlot]({% slug api_scheduler_schedulerviewslot %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
