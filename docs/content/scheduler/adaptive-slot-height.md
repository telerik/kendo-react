---
title: Adaptive Slot Height
description: 'This demo shows the Adaptive Slot Height functionality, available in the Month View of the KendoReact Scheduler.'
components: ["scheduler"]
slug: adaptive_slot_height_scheduler
position: 90
---

# Adaptive Slot Height

By default the KendoReact `SchedulerViewSlot` component adapts itself to fit all `items` inside it.

You can further set the minimum height of a slot through the `minHeight` of the [`style`]({% slug api_scheduler_schedulerviewslotprops %}#toc-style) property, or configure the maximum number of `items` in a `MonthView` through the [`itemsPerSlot`]({% slug api_scheduler_monthviewprops %}#toc-itemsperslot).

The following example demonstrates the above properties in action:

{% meta height:1000 %}
{% embed_file adaptive-slot-height/overview/func/custom-view-slot.tsx %}
{% embed_file adaptive-slot-height/overview/func/custom-view-item.tsx %}
{% embed_file adaptive-slot-height/overview/func/app.tsx preview %}
{% embed_file adaptive-slot-height/overview/func/main.tsx %}
{% endmeta %}

## Constant Slot Height

In order to disable the `adaptive` slot height and provide a `constant` height for the slots, set the following properties to the `SchedulerViewSlot`:

-   [`style.height`]({% slug api_scheduler_schedulerviewslotprops %}#toc-style)&mdash;In order to set the height of a single slot, and
-   [`expandable={false}`]({% slug api_scheduler_schedulerviewslotprops %}#toc-expandable)&mdash;In order to disable the auto-expansion when more items fit in the slot.

> The slots have `minHeight` of `75px` by default.

The following example demonstrates disabling the `adaptive` slot height:

{% meta height:850 %}
{% embed_file adaptive-slot-height/disabled/func/custom-view-slot.tsx %}
{% embed_file adaptive-slot-height/disabled/func/app.tsx preview %}
{% embed_file adaptive-slot-height/disabled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [Scheduler Slot Customization]({% slug overview_slots_scheduler %})
-   [Scheduler Item Customization]({% slug overview_items_scheduler %})
-   [Auto Item Height]({% slug auto_item_height_scheduler %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
