---
title: Navigation
description: 'Get started with the KendoReact Scheduler component and learn how to customize the navigation options it provides.'
components: ["scheduler"]
slug: navigation_scheduler
position: 125
---

# Navigation

The Scheduler component provides the option to control its behavior when using the the **Prev** and **Next** navigation buttons by configuring the `step` and `numberOfDays` properties of each view.

> The `step` and `numberOfDays` properties are only available in the **Agenda**, **Timeline** and **Day** views. For custom navigation scenarios in the **Month** and **Week** views, please check the custom navigation article below.

## Default Navigation

The following example allows you to test how the Scheduler behaves when changing the `step` and `numberOfDays` properties for the **Agenda**, **Timeline** and **Day** views.

{% meta height:920 %}
{% embed_file navigation/uncontrolled/func/app.tsx preview %}
{% embed_file navigation/uncontrolled/func/main.tsx %}
{% endmeta %}

## Custom Navigation

As an alternative to what is discussed above, the Scheduler gives you the freedom to integrate custom navigation logic by dynamically updating the not only the `step` and `numberOfDays` properties but also the `date` one, each time the user interacts with the **Prev** and **Next** buttons.

The following example uses the [`onDateChange`]({% slug api_scheduler_schedulerprops %}#toc-ondatechange) event to implement a logic that moves the days in the `day` view by two days.

{% meta height:720 %}
{% embed_file navigation/controlled/func/app.tsx preview %}
{% embed_file navigation/controlled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Date Selection in the KendoReact Scheduler]({% slug date_selection_scheduler %})
-   [Data Binding in the KendoReact Scheduler]({% slug data_binding_scheduler %})
-   [API Reference of the KendoReact SchedulerDataChangeEvent]({% slug api_scheduler_schedulerprops %}#toc-ondatachange)
-   [Controlled vs. Uncontrolled Components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
