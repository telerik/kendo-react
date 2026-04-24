---
title: Date Selection
description: 'Get started with the KendoReact Scheduler component and provide the default configuration or fully control its date selection.'
components: ["scheduler"]
slug: date_selection_scheduler
position: 120
---

# Date Selection

The Scheduler component accepts both the [controlled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) and [uncontrolled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) mode of the selected `date`.

This capability allows you to completely override the `date` selection from outside the Scheduler.

> The selected `date` is used by each view to calculate the visible date range.

To change the selected `date`, click the **Prev** or **Next** buttons in the Scheduler toolbar, or manually pick a `date` from the Calendar after clicking the range label. For a providing smooth user navigation, the Scheduler also renders a **Today** button which changes the value to the current system date.

## Uncontrolled Date Mode

By default, the Scheduler will set its current `date` to `today`. While this is the most common scenario, you can set the [`defaultDate`]({% slug api_scheduler_schedulerprops %}#toc-defaultdate) without maintaining the selection in subsequent renders.

The following example demonstrates how to set the initially selected `date` through the `defaultDate` property.

{% meta height:770 %}
{% embed_file date-selection/uncontrolled/func/app.tsx preview %}
{% embed_file date-selection/uncontrolled/func/main.tsx %}
{% endmeta %}

Even if the Scheduler is in the uncontrolled date mode, it will call the [`onDateChange`]({% slug api_scheduler_schedulerprops %}#toc-ondatechange) event. If your application requires, you can pass a callback and be notified every time the `date` is changed.

The following example extends the previous example to `console.log()` the new `date` every time the date is changed.

```jsx-no-run
const App = () => {
    const handleDateChange = React.useCallback(
        (event) => { console.log(event.value); },
        []
    )

    return (
        <Scheduler data={data} defaultDate={defaultDate} onDateChange={handleDateChange}>
            <MonthView />
        </Scheduler>
    )
}
```

## Controlled Mode

To be able to fully control the date of the scheduler, provide a pair of the [`date`]({% slug api_scheduler_schedulerprops %}#toc-date) and [`onDateChange`]({% slug api_scheduler_schedulerprops %}#toc-ondatechange) properties. The provided `date` property will override the internal `date` state of the Scheduler.

The following example demonstrates how to change the `date` only when a specific requirement is met.

{% meta height:860 %}
{% embed_file date-selection/controlled/func/app.tsx preview %}
{% embed_file date-selection/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Binding in the KendoReact Scheduler]({% slug data_binding_scheduler %})
-   [API Reference of the KendoReact SchedulerDataChangeEvent]({% slug api_scheduler_schedulerprops %}#toc-ondatachange)
-   [Controlled vs. Uncontrolled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
