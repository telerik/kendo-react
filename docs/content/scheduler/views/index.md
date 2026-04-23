---
title: Basics
description: 'Get started with the KendoReact Scheduler component and configure the available views it delivers.'
components: ["scheduler"]
slug: views_scheduler
position: 0
---

# Views Basics

The KendoReact Scheduler accepts a collection of Scheduler views as children but renders only the currently active view.

## View Types

Currently, the Scheduler component supports the following built-in views:

-   [`Timeline view`]({% slug timeline_view_scheduler %})
-   [`Day` view]({% slug day_view_scheduler %})
-   [`Week` view]({% slug week_views_scheduler %})
-   [`Month` view]({% slug month_view_scheduler %})
-   [`Agenda` view]({% slug agenda_view_scheduler %})

## Getting Started

To render the desired views, import them from the `@progress/kendo-react-scheduler` package.

```jsx-no-run
    import { Scheduler, DayView, WeekView } from '@progress/kendo-react-scheduler';
```

To specify the available views and set their configuration options, place them as child components of the [Scheduler]({% slug api_scheduler_scheduler %}) component.

```jsx-no-run
    <Scheduler>
        <DayView startTime="07:00"/>
        <WeekView workWeekStart={Day.Monday} />
    </Scheduler>
```

The following example demonstrates how to render the **Day**, **Week**, and **Month** Scheduler views.

{% meta height:670 %}
{% embed_file views/getting-started/func/app.tsx preview %}
{% embed_file views/getting-started/func/main.tsx %}
{% endmeta %}

## Setting the Default View

To set the initially selected view, set the [`defaultView`]({% slug api_scheduler_schedulerprops %}#toc-defaultview) property to the `name` of the desired view.

```jsx-no-run
    <Scheduler defaultView="week">
        <DayView />
        <Week />
        <MonthView />
    </Scheduler>
```

## Controlling the Selected View

To control the view selection, provide a pair of the [`view`]({% slug api_scheduler_schedulerprops %}#toc-view) and [`onViewChange`]({% slug api_scheduler_schedulerprops %}#toc-onviewchange) properties. Providing only the `view` property will render the Scheduler in a read-only view state.

The following example demonstrates how to control the view state based on an external source.

{% meta height:760 %}
{% embed_file views/controlled-state/func/app.tsx preview %}
{% embed_file views/controlled-state/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Timeline View]({% slug timeline_view_scheduler %})
-   [Day View]({% slug day_view_scheduler %})
-   [Week View]({% slug week_views_scheduler %})
-   [Month View]({% slug month_view_scheduler %})
-   [Agenda View]({% slug agenda_view_scheduler %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
