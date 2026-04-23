---
title: Dependency Types
description: 'The Gantt allows you to set different dependency types.'
components: ["gantt"]
slug: dependency_types_gantt
position: 4
---

# KendoReact Gantt Dependency Types

The KendoReact Gantt component support four different dependency types:

-   `FF` - from 'finish' to 'finish'
-   `FS` - from 'finish' to 'start'
-   `SS` - from 'start' to 'start'
-   `SF` - from 'start' to 'finish'

The following example demonstrates the different task types in action.

{% meta height:660 %}
{% embed_file dependency-types/func/app.tsx preview %}
{% embed_file dependency-types/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [API Reference of the KendoReact Gantt]({% slug api_gantt_gantt %})
-   [API Reference of the KendoReact GanttProps]({% slug api_gantt_ganttprops %})
