---
title: Auto Scroll
description: 'Learn how to utilize the Auto Scroll feature of the KendoReact Drag&Drop functionality in a React project.'
components: ["drag&drop"]
slug: auto-scroll_drag-and-drop
position: 5
---

# Auto Scroll

By default, the KendoReact `useDraggable` hook and `Draggable` component will scroll the nearest scrollable parent element whenever the `drag` reaches any of it's edges.

> Use the `scrollX` and `scrollY` arguments from the Drag&Drop callbacks to correctly calculate the new position of the element.

The following example demonstrates how the Auto Scroll functionality behaves in a scrollable container.

{% meta height:400 %}
{% embed_file drag-and-drop/auto-scroll/default/func/app.tsx preview %}
{% embed_file drag-and-drop/auto-scroll/default/func/main.tsx %}
{% embed_file drag-and-drop/auto-scroll/default/func/draggable-button.tsx %}
{% embed_file drag-and-drop/auto-scroll/default/func/droppable-box.tsx %}
{% endmeta %}

## Disabling the Auto Scroll

To disable the Auto Scroll functionality, use either of the following approaches:

-   Set the `autoScroll` argument to the `useDraggable` hook.

    ```jsx
    useDraggable(element, { ...callbacks }, { autoScroll: false });
    ```

-   Set the `autoScroll` property of the `Draggable` component.

    ```jsx
    <Draggable autoScroll={false}>
        <div>Drag Me!</div>
    </Draggable>
    ```

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
