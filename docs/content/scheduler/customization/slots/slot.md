---
title: Slot
description: 'Overview of the SchedulerSlot component. Provide visual customization by extending the default SchedulerSlot component'
components: ["scheduler"]
slug: slot_slots_scheduler
position: 1
---

# SchedulerSlot

The [SchedulerSlot]({% slug api_scheduler_schedulerslot %}) component is responsible for the visual part of a [Slot]({% slug overview_slots_scheduler %}#slot-composition).

To expand the default `SchedulerSlot`, set the [slot]({% slug api_scheduler_schedulerprops %}#toc-slot) property to either the `Scheduler` or a specific view, to a modified version fo the `SchedulerSlot` component.

## Customizing the Slot Styles

To customize the styles of the `SchedulerSlot`, we recommend using either [style]({% slug api_scheduler_schedulerslotprops %}#toc-style) or [className]({% slug api_scheduler_scheduleritemprops %}#toc-classname) properties.

The following example demonstrates customizing the `border` to a red one, based on the slot `isAllDay` property, in order to separate the `all-day` slots from the `time` slots in the `Week` view.

{% meta height:700 %}
{% embed_file slots/slot/style/func/app.tsx preview %}
{% embed_file slots/slot/style/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerSlot]({% slug api_scheduler_schedulerslot %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
