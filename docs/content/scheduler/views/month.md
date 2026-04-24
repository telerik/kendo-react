---
title: Month
description: 'Display events in the KendoReact Scheduler Month view.'
components: ["scheduler"]
slug: month_view_scheduler
---

# Month View

The **Month** view displays a high-level schedule overview organized by weeks.

## Getting Started

The following example demonstrates how to set common properties of the **Month** view of the Scheduler. For the full list of configuration options, refer to the API reference of the [`MonthView`]({% slug api_scheduler_monthviewprops %}) properties.

{% meta height:670 %}
{% embed_file views/month/configuration/func/app.tsx preview %}
{% embed_file views/month/configuration/func/main.tsx %}
{% endmeta %}

## Grouping by Resource

You can configure the **Month** view to display events that are grouped by a resource.

{% meta height:760 %}
{% embed_file views/month/grouping/func/app.tsx preview %}
{% embed_file views/month/grouping/func/main.tsx %}
{% endmeta %}

## Setting the First Weekday

The first day of the week is determined by the current locale. For an example on how to change the locale, refer to the article about [globalization]({% slug globalization_scheduler %}).

> Future releases will include an option for overriding the first day of the week through the properties of the component.

## Suggested Links

-   [API Reference of the MonthView]({% slug api_scheduler_monthview %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
