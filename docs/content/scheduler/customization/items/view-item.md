---
title: ViewItem
description: 'Overview of the SchedulerViewItem component. Provide custom positioning or extend the SchedulerViewItem in the context of the selected view'
components: ["scheduler"]
slug: view-item_items_scheduler
position: 2
---

# SchedulerViewItem

By default, the [SchedulerViewItem]({% slug api_scheduler_schedulerviewitem %}) is responsible only for the positioning of the item inside the view.

## Extending the Positioning

By default, an item is taking the entire height of the `slot` it fits it. We will cover a simple use-case where we replace the default `SchedulerViewItem` with a custom one &mdash; `SchedulerProportionalViewItem` which positions the item proportionally to the events length.

The following example demonstrates `proportional` positioning.

{% meta height:900 %}
{% embed_file items/view-item/extending/func/app.tsx preview %}
{% embed_file items/view-item/extending/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerViewItem]({% slug api_scheduler_schedulerviewitem %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
