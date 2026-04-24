---
title: Auto Item Height
description: 'This demo shows the Auto Item Height functionality, available in the Timeline, Day, Week and Month views of the KendoReact Scheduler.'
components: ["scheduler"]
slug: auto_item_height_scheduler
position: 100
---

# Auto Item Height

The KendoReact `SchedulerViewSlot` can automatically extend depending on the content inside it, or take a predefined `height`.

This feature is available in `horizontal` configuration of the events, which can be observed in the following views:

-   `TimelineView`
-   `DayView`&mdash; only in the `allDay` section.
-   `Week`&mdash; only in the `allDay` section.
-   `WorkWeek`&mdash; only in the `allDay` section.
-   `MonthView`

> This feature is compatible with the [Adaptive Slot Height]({% slug adaptive_slot_height_scheduler %}) of the `SchedulerViewSlot`.

In order to set enable the auto item height functionality, set the [`style.height`]({% slug api_scheduler_schedulerviewitemprops %}#toc-style) property of the `SchedulerViewItem` to `auto`:

```jsx
const AutoHeightViewItem = (props) => {
    return (
        <SchedulerViewItem
            {...props}
            style={{
                ...props.style,
                height: 'auto'
            }}
        />
    );
};
```

The following example demonstrates the `auto` item height feature in action:

{% meta height:1000 %}
{% embed_file auto-item-height/overview/func/custom-view-item.tsx %}
{% embed_file auto-item-height/overview/func/app.tsx preview %}
{% embed_file auto-item-height/overview/func/main.tsx %}
{% endmeta %}

## Constant Item Height

In order to set a `constant` height of an item, set its `style.height` to a numeric value, representing the height in pixels:

```jsx
const AutoHeightViewItem = (props) => {
    return (
        <SchedulerViewItem
            {...props}
            style={{
                ...props.style,
                height: 45
            }}
        />
    );
};
```

The following example demonstrates `constant` item height in action:

{% meta height:1000 %}
{% embed_file auto-item-height/constant/func/custom-view-item.tsx %}
{% embed_file auto-item-height/constant/func/app.tsx preview %}
{% embed_file auto-item-height/constant/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [Scheduler Slot Customization]({% slug overview_slots_scheduler %})
-   [Scheduler Item Customization]({% slug overview_items_scheduler %})
-   [Adaptive Slot Height]({% slug adaptive_slot_height_scheduler %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
