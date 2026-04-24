---
title: Minimum Distance
description: 'Learn how to utilize the drag callbacks of the KendoReact Drag&Drop functionality and customize them to implement a minimum distance before drag in a React project'
components: ["drag&drop"]
slug: minimum-distance_drag-and-drop
position: 8
---

# Minimum Distance

You can use the KendoReact `drag` callbacks to implement custom logic on top of them.

The following example implements a minimum drag distance of `70px` and prevents the drag until that distance has been covered in one of the directions (`x` or `y`).

{% meta height:360 %}
{% embed_file drag-and-drop/minimum-distance/func/app.tsx preview %}
{% embed_file drag-and-drop/minimum-distance/func/main.tsx %}
{% embed_file drag-and-drop/minimum-distance/func/draggable-button.tsx %}
{% embed_file drag-and-drop/minimum-distance/func/droppable-box.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
