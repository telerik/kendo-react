---
title: Overview
description: 'Learn hot to modify the existing tasks inside the scheduler. Provide custom visuals, positioning logic or extend the editing functionality of the tasks inside the KendoReact Scheduler component'
components: ["scheduler"]
slug: overview_tasks_scheduler
---

# Tasks Overview

The KendoReact [Scheduler]({% slug overview_scheduler %}) components transforms the provided [data]({% slug api_scheduler_schedulerprops %}#toc-data) collection into `Task` components when current active view is [AgendaView]({% slug agenda_view_scheduler %}).

## Importing the Default Tasks

The default `task`, `viewTask` and `editTask` are contained in the `@progress/kendo-react-scheduler` package:

```jsx-no-run
    // ES2015 module syntax
    import { SchedulerTask, SchedulerViewTask, SchedulerEditTask } from '@progress/kendo-react-scheduler';
```

```jsx-no-run
    // CommonJS format
    const { SchedulerTask, SchedulerViewTask, SchedulerEditTask } = require('@progress/kendo-react-scheduler');
```

## Task Composition

The `Task` composition is really close in terms of structure to the [Item Composition]({% slug overview_items_scheduler %}#toc-item-composition) and all rules from the `Item` apply here.

## Providing Custom Task

To customize a specific part of the `Task` tree, provide the corresponding [task]({% slug api_scheduler_schedulerprops %}#toc-task), [viewTask]({% slug api_scheduler_schedulerprops %}#toc-viewtask) or [editTask]({% slug api_scheduler_schedulerprops %}#toc-slot) property to either the `Scheduler` or the `AgendaView`.

> Currently the `tasks` support only the `remove` editing method, but we will be increasing the number of editing methods for the `SchedulerEditTask` component.

The following example demonstrates basic customization of the `SchedulerTask` component.

{% meta height:770 %}
{% embed_file tasks/overview/func/app.tsx preview %}
{% embed_file tasks/overview/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [API Reference of the SchedulerTask]({% slug api_scheduler_schedulertask %})
-   [API Reference of the SchedulerViewTask]({% slug api_scheduler_schedulerviewtask %})
-   [API Reference of the SchedulerEditTask]({% slug api_scheduler_scheduleredittask %})
