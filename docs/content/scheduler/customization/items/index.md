---
title: Overview
description: 'Learn hot to customize the existing items inside the scheduler. Provide custom visuals, positioning logic or extend the editing functionality of the items inside the KendoReact Scheduler component'
components: ["scheduler"]
slug: overview_items_scheduler
position: 0
---

# Items Overview

The KendoReact [Scheduler]({% slug overview_scheduler %}) component transforms the provided [data]({% slug api_scheduler_schedulerprops %}#toc-data) collection into `Item` components.

## Item Composition

The `Items` are composed from multiple React Components, with the main three being:

-   [SchedulerItem]({% slug item_items_scheduler %}) - Responsible for the `visual` aspect of the item.
-   [SchedulerViewItem]({% slug view-item_items_scheduler %}) - Responsible for side-effects like `positioning`.
-   [SchedulerEditItem]({% slug edit-item_items_scheduler %}) - Responsible for the `data-editing` functionality.

From now on, we will refer to the composition tree as an `Item`.

The `Item` is also rendering additional components like [SchedulerDrag]({% slug api_scheduler_schedulerdrag %}), [SchedulerResize]({% slug api_scheduler_schedulerresize %}) and [SchedulerForm]({% slug api_scheduler_schedulerform %}) which can also be customized.

The final tree rendered for a single `Item` looks like this:

```jsx-no-run
<!-- Responsible for the editing of an item -->
<SchedulerEditItem>
    <!-- Responsible for the positioning  -->
    <SchedulerViewItem>
        <!-- Responsible for the visualization -->
        <SchedulerItem />
    </SchedulerViewItem>
    <!-- Responsible for the Drag functionality -->
    <SchedulerDrag>
        <SchedulerViewItem>
            <SchedulerItem />
        </SchedulerViewItem>
    </SchedulerDrag>
    <!-- Responsible for the Resize functionality -->
    <SchedulerResize>
        <SchedulerViewItem>
            <SchedulerItem />
        </SchedulerViewItem>
    </SchedulerResize>
    <!-- Responsible for the Form-edit functionality -->
    <SchedulerForm />
    <!-- Responsible for occurrence/series edit toggle -->
    <SchedulerOccurrenceDialog />
    <!-- Responsible for Remove confirmation -->
    <SchedulerRemoveDialog />
</SchedulerEditItem>
```

## Importing the Default Items

The default `item`, `viewItem` and `editItem` are contained in the `@progress/kendo-react-scheduler` package:

```jsx-no-run
    // ES2015 module syntax
    import { SchedulerItem, SchedulerViewItem, SchedulerEditItem } from '@progress/kendo-react-scheduler';
```

```jsx-no-run
    // CommonJS format
    const { SchedulerItem, SchedulerViewItem, SchedulerEditItem } = require('@progress/kendo-react-scheduler');
```

## Providing Custom Item

To customize a specific part of the `Item` tree, provide the corresponding [item]({% slug api_scheduler_schedulerprops %}#toc-item), [viewItem]({% slug api_scheduler_schedulerprops %}#toc-viewItem) or [editItem]({% slug api_scheduler_schedulerprops %}#toc-editItem) property either to the `Scheduler`, or scope the changes by setting the corresponding property to a single [view]({% slug views_scheduler %}).

### Customizing all Items

For example, if you want to modify the visual part of all items inside the [Scheduler]({% slug overview_scheduler %}), set the [item]({% slug api_scheduler_schedulerprops %}#toc-item) property. But first, let's define our `CustomItem`.

The following `CustomItem` modifies the `style` property based on the `isAllDay` property.

```jsx-no-run
const CustomItem = (props) => (
    <SchedulerItem
        {...props}
        style={{ ...props.style, backgroundColor: props.isAllDay ? 'pink' : 'blue' }}
    />)
```

Now lets tell the `Scheduler` to use our component instead of the default one.

```jsx-no-run
<Scheduler item={CustomItem} >
    <WeekView />
    <MonthView />
</Scheduler>
```

Pass some dummy data and see our custom items in action. The following example changes the color of every item inside the `Scheduler`.

{% meta height:770 %}
{% embed_file items/overview/func/app.tsx preview %}
{% embed_file items/overview/func/main.tsx %}
{% endmeta %}

### View Scoped Customization

To scope the custom item to a specific view only, simply pass the `item` property to the view. Taking the example from above, if we want to apply the customization only to the week view, simply move the `item={CustomItem}` from the `Scheduler` to the `WeekView`.

```jsx-no-run
<Scheduler>
    <WeekView item={CustomItem} />
    <MonthItem />
</Scheduler>
```

## Other Types of Customization

We will take a deeper look at how every custom component can be customized in the following articles:

-   [Custom `item` component]({% slug item_items_scheduler %}) - Change the `Item` visually
-   [Custom `viewItem` component]({% slug view-item_items_scheduler %}) - Change the `Item` in the context of a view.
-   [Custom `editItem` component]({% slug edit-item_items_scheduler %}) - Extend the `Item` data-editing functionality.

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerItem]({% slug api_scheduler_scheduleritem %})
-   [API Reference of the SchedulerViewItem]({% slug api_scheduler_schedulerviewitem %})
-   [API Reference of the SchedulerEditItem]({% slug api_scheduler_scheduleredititem %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
