---
title: Item
description: 'Overview of the SchedulerItem component. Provide visual customization by extending the SchedulerItem component'
components: ["scheduler"]
slug: item_items_scheduler
position: 1
---

# SchedulerItem

The [SchedulerItem]({% slug api_scheduler_scheduleritem %}) component is responsible for the visual part of an [Item]({% slug overview_items_scheduler %}#toc-item-composition).

To expend the default `SchedulerItem`, set the [item]({% slug api_scheduler_schedulerprops %}#toc-item) property to either the `Scheduler` or a specific view, to a modified version of the `SchedulerItem` component.

## Customizing the Item Styles

To customize the styles of the `SchedulerItem`, we recommend using either [style]({% slug api_scheduler_scheduleritemprops %}#toc-style) or [className]({% slug api_scheduler_scheduleritemprops %}#toc-classname) properties.

The following examples demonstrates customizing the `background` to a gradient one, based on the items [orientation]({% slug api_scheduler_scheduleritemprops %}#toc-vertical).

{% meta height:700 %}
{% embed_file items/item/style/func/app.tsx preview %}
{% embed_file items/item/style/func/main.tsx %}
{% endmeta %}

## Overriding the Children

To customize what is rendered inside the `Scheduler` item, provide the `children` property, or directly render the content inside the `SchedulerItem`. The [SchedulerItemContent]({% slug api_scheduler_scheduleritemcontent %}) can be used as a wrapping element to achieve consistent styling.

The following examples demonstrates rendering custom nodes inside the default `SchedulerItem` component.

{% meta height:700 %}
{% embed_file items/item/children/func/app.tsx preview %}
{% embed_file items/item/children/func/main.tsx %}
{% endmeta %}

## Attaching Callback Handlers

The [SchedulerItem]({% slug api_scheduler_scheduleritem %}) exposes various callbacks like [onClick]({% slug api_scheduler_scheduleritemprops %}#toc-onclick) and [onKeyDown]({% slug api_scheduler_scheduleritemprops %}#toc-onkeydown). Those callbacks can be used to attach custom functionality.

> Providing a callback without calling the default one from the `props`, will prevent the default logic from executing.

The following example demonstrates attaching `onFocus` and `onBlur` handlers and showing a custom `Popup` next an item. We will be calling the default `props.onFocus` and `props.onBlur` callbacks to not brake anything.

{% meta height:700 %}
{% embed_file items/item/callbacks/func/app.tsx preview %}
{% embed_file items/item/callbacks/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerItemProps]({% slug api_scheduler_scheduleritemprops %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
