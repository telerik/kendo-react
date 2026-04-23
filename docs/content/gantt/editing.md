---
title: Editing
description: 'Get started with the KendoReact Gantt component and create, edit, and delete its events.'
components: ["gantt"]
slug: editing_gantt
position: 4
---

# Editing

You can create, update, and delete the data records of the Gantt.

## Getting Started

The Gantt provides the following callbacks, components and utility functions to allow full user control:

-   First we define `taskModelFields` to prepare the items for manipulation;
-   row callbacks - `onRowClick`, `onRowDoubleClick` and `onRowContextMenu`
-   task callbacks - `onTaskRemove`, `onTaskClick`, `onTaskDoubleClick` and `onTaskContextMenu`
-   add button callback - `onAdd`
-   dependency create callback - `onDependencyCreate`
-   handle `onFormSubmit` - It provides information about the updated task as well as `createdDependencies`, `updatedDependencies` and `deletedDependencies`.
-   components - `GanttForm` and `GanttRemoveDialog`
-   utility functions for updating the data tree: `addTask`, `removeTask` and `updateTask`

Please check the example below which shows the example editing implementation in action:

{% meta height:800 %}
{% embed_file editing/func/app.tsx preview %}
{% embed_file editing/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
