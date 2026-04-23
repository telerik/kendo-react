---
title: Hold to Drag
description: 'Learn how to utilize the drag callbacks of the KendoReact Drag&Drop functionality and customize them to implement drag delay in a React project'
components: ["drag&drop"]
slug: hold-to-drag_drag-and-drop
position: 7
---

# Hold to Drag

You can use the KendoReact `drag` callbacks to implement custom logic on top of them.

The following example demonstrates how to apply a hold delay in order to begin a drag after a specific time has passed. Once the pre-defined delay is reached, the Button appearance changes to `primary`, and the component can be dragged. In addition, if the user tries to drag it before the delay has passed, the drag will be canceled.

{% meta height:360 %}
{% embed_file drag-and-drop/hold-to-drag/func/app.tsx preview %}
{% embed_file drag-and-drop/hold-to-drag/func/main.tsx %}
{% embed_file drag-and-drop/hold-to-drag/func/draggable-button.tsx %}
{% embed_file drag-and-drop/hold-to-drag/func/droppable-box.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
