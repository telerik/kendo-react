---
title: Overview
description: 'Learn how to modify the existing slots inside the scheduler. Provide custom visuals, positioning logic or extend the editing functionality of the slots inside the KendoReact Scheduler Component'
components: ["scheduler"]
slug: overview_slots_scheduler
position: 0
---

# Slots Overview

The KendoReact [Scheduler]({% slug overview_scheduler %}) component renders slot as the background of the currently selected view.

## Slot Composition

Analogically to the [Item Compositions]({% slug overview_items_scheduler %}#toc-item-composition), the slots inside the Scheduler follow the same methodology of Composition of multiple React components in order to split the functionalities by logic.

The `Slots` are composed from multiple React Components, with the main three being:

-   [SchedulerSlot]({% slug slot_slots_scheduler %}) - Responsible for the `visual` aspect of the slot.
-   [SchedulerViewSlot]({% slug view-slot_slots_scheduler %}) - Responsible for side effects like `expansion`.
-   [SchedulerEditSlot]({% slug edit-slot_slots_scheduler %}) - Responsible for the `data-editing` functionality.

From now on, we will refer to the composition tree as a `Slot`.

The `Slot` is also rendering additional components like [SchedulerForm] which can also be customized.

The final tree rendered for a single `Slot` looks like this:

```jsx-no-run
<!-- Responsible for the editing of a slot -->
<SchedulerEditSlot>
    <!-- Responsible for the expansion of a slot -->
    <SchedulerViewSlot>
        <!-- Responsible for the visualization -->
        <SchedulerSlot />
    </SchedulerViewSlot>
    <!-- Responsible for the creation of new items through slot interaction -->
    <SchedulerForm />
</SchedulerEditSlot>
```

## Importing the Default Slots

The default `slot`, `viewSlot` and `editSlot` are contained in the `@progress/kendo-react-scheduler` package:

```jsx-no-run
    // ES2015 module syntax
    import { SchedulerSlot, SchedulerViewSlot, SchedulerEditSlot } from '@progress/kendo-react-scheduler';
```

```jsx-no-run
    // CommonJS format
const { SchedulerSlot, SchedulerViewSlot, SchedulerEditSlot } = require('@progress/kendo-react-scheduler');
```

## Providing Custom Slot

To customize a specific part of the `Slot` tree, provide the corresponding [slot]({% slug api_scheduler_schedulerprops %}#toc-slot), [viewSlot]({% slug api_scheduler_schedulerprops %}#toc-viewslot) or [editSlot]({% slug api_scheduler_schedulerprops %}#toc-editslot), or scope the customization by setting the corresponding property to a single [view]({% slug views_scheduler %}).

### Customizing all Slots

For example, if you want to modify the visual part of all slots inside the [Scheduler]({% slug overview_scheduler %}), set the [slot]({% slug api_scheduler_schedulerprops %}#toc-slot) property. But first, let's define our `CustomSlot`.

```jsx-no-run
const CustomSlot = (props) => (
    <SchedulerSlot
        {...props}
        style={{ ...props.style, backgroundColor: props.isAllDay ? 'lightgray' : 'darkgray }}
    />
)
```

Now lets tell the `Scheduler` to use our component instead of the default one.

```jsx-no-run
<Scheduler slot={CustomSlot}>
    <WeekView />
    <MonthView />
</Scheduler>
```

Pass some dummy data and see our custom slots in action. The following example changes the color of every item inside the `Scheduler`.

{% meta height:770 %}
{% embed_file slots/overview/func/app.tsx preview %}
{% embed_file slots/overview/func/main.tsx %}
{% endmeta %}

## View Scoped Customization

To scope the custom slot to a specific view only, simply pass the `slot` property to the view. Taking the example from above, if we want to apply the customization only to the week view, simply move the `slot={CustomSlot}` from the `Scheduler` to the `WeekView`;

```jsx-no-run
<Scheduler >
    <WeekView slot={CustomSlot} />
    <MonthView />
</Scheduler>
```

## Other Types of Customization

We will take a deeper look at how every custom component can be customized in the following articles:

-   [Custom `slot` component]({% slug slot_slots_scheduler %}) - Change the `Slot` visually
-   [Custom `viewSlot` component]({% slug view-slot_slots_scheduler %}) - Change the `Slot` in the context of a view.
-   [Custom `editSlot` component]({% slug edit-slot_slots_scheduler %}) - Extend the `Slot` data-editing functionality.

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerSlot]({% slug api_scheduler_schedulerslot %})
-   [API Reference of the SchedulerViewSlot]({% slug api_scheduler_schedulerviewslot %})
-   [API Reference of the SchedulerEditSlot]({% slug api_scheduler_schedulereditslot %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
