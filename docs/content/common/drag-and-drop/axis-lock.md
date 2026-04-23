---
title: Axis Lock
description: 'Learn how to utilize the drag callbacks of the KendoReact Drag&Drop functionality and customize them to implement a single-axis drag in a React project'
components: ["drag&drop"]
slug: axis-lock_drag-and-drop
position: 9
---

# Axis Lock

You can use the KendoReact `drag` callbacks to implement custom logic in your React projects.

The following example implements an axis-lock, which allows users to drag only on a single axis. This restricts the `drag` either to the `horizontal` or the `vertical` axis.

{% meta height:450 %}
{% embed_file drag-and-drop/axis-lock/func/app.tsx preview %}
{% embed_file drag-and-drop/axis-lock/func/main.tsx %}
{% embed_file drag-and-drop/axis-lock/func/draggable-button.tsx %}
{% embed_file drag-and-drop/axis-lock/func/droppable-box.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
