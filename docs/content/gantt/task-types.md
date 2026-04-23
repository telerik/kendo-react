---
title: Task Types
description: 'The Gantt allows you to set different task types.'
components: ["gantt"]
slug: task_types_gantt
position: 3
---

# KendoReact Gantt Task Types

The KendoReact Gantt component support different task types.

-   type: `summary` - the current task has a children tasks
-   type: `regular` - the current task has no children tasks
-   type: `milestone` - the current task have no children tasks and the start and end times are equal

The following example demonstrates the different task types.

{% meta height:440 %}
{% embed_file task-types/func/app.tsx preview %}
{% embed_file task-types/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [API Reference of the KendoReact Gantt]({% slug api_gantt_gantt %})
-   [API Reference of the KendoReact GanttProps]({% slug api_gantt_ganttprops %})
