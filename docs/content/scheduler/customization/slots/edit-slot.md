---
title: EditSlot
description: 'Overview of the SchedulerEditSlot component. Provide custom editing logic by extend ing the SchedulerEditSlot component'
components: ["scheduler"]
slug: edit-slot_slots_scheduler
position: 3
---

# SchedulerEditSlot

The [SchedulerEditSlot]({% slug api_scheduler_schedulereditslot %}) component is responsible for the editing functionality of a [Slot]({% slug overview_slots_scheduler %}#toc-slotcomposition).

To extend the default `SchedulerEditSlot`, set the [editSlot]({% slug api_scheduler_schedulerprops %}#toc-editslot) property to either the `Scheduler` or a specific view, to a modified version of the `SchedulerSlotItem` component.

## Controlling the Editing

The `SchedulerEditSlot` exposes the following properties to allow controlling the internal edit state.

-   [formItem]({% slug api_scheduler_schedulereditslotprops %}#toc-formitem) and [onFormItemChange]({% slug api_scheduler_schedulereditslotprops %}#toc-onformitemchange)

To control the state, provide the the `value`-`handler` pair. For example, if you want to control the `formItem`, provide your own `onFormItemChange` handler, modify the `DataItem` as needed, and pass it back through the `formItem` property.

The following example demonstrates controlling the `formItem` state to disallow item creation outside working hours. We will be using the `view` slot from the [SchedulerViewSlot]({% slug slot_slots_scheduler %}#toc-extendingthedefaultlogic) article.

{% meta height:700 %}
{% embed_file slots/edit-slot/controlled-state/func/app.tsx preview %}
{% embed_file slots/edit-slot/controlled-state/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerEditSlot]({% slug api_scheduler_schedulereditslot %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
