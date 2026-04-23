---
title: Multiple Drag Contexts
description: 'Learn how to build multiple drag-n-drop implementations without interfering with each other.'
components: ["drag&drop"]
slug: multiple-drags_drag-and-drop
position: 10
---

# Multiple Drag Contexts

You can configure both Draggable and Droppable functionalities to operate with an explicit context. This allows implementing multiple drag-n-drop scenarios without interference between them.

The following example demonstrates how to create two separate drag-n-drop contexts - one for odd numbers and one for even numbers. Each context has its own draggable and droppable elements and operates independently.

{% meta height:400 %}
{% embed_file drag-and-drop/multiple-drags/func/app.tsx preview %}
{% embed_file drag-and-drop/multiple-drags/func/main.tsx %}
{% embed_file drag-and-drop/multiple-drags/func/draggable-button.tsx %}
{% embed_file drag-and-drop/multiple-drags/func/droppable-box.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
