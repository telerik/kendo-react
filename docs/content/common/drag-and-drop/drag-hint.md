---
title: Drag Hint
description: 'Learn how to provide separate components for callback handling and collision detection to the KendoReact Drag&Drop functionality in a React project'
components: ["drag&drop"]
slug: drag-hint_drag-and-drop
position: 6
---

# Drag Hint

You can configure the KendoReact `useDraggable` hook and `Draggable` component to use a different component for collision detection than the one registered for drag.

To configure a different component for collision detection, use either of the following approaches:

-   Pass the `hint` argument to the `useDraggable` hook.

    ```jsx
    useDraggable(element, { ...callbacks }, { hint: handle });
    ```

-   Set the `hint` property of the `Draggable` component.

The following example demonstrates how to render a copy of the original element during drag.

{% meta height:400 %}
{% embed_file drag-and-drop/drag-hint/func/app.tsx preview %}
{% embed_file drag-and-drop/drag-hint/func/main.tsx %}
{% embed_file drag-and-drop/drag-hint/func/draggable-button.tsx %}
{% embed_file drag-and-drop/drag-hint/func/droppable-box.tsx %}
{% endmeta %}

## Drag Handle

The following example demonstrates how to implement a `drag` handle by enabling dragging only through the `move` icon, while using the whole element for collision detection.

{% meta height:400 %}
{% embed_file drag-and-drop/drag-handle/func/app.tsx preview %}
{% embed_file drag-and-drop/drag-handle/func/main.tsx %}
{% embed_file drag-and-drop/drag-handle/func/draggable-button.tsx %}
{% embed_file drag-and-drop/drag-handle/func/droppable-box.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
