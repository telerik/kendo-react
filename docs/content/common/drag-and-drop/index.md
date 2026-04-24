---
title: Overview
description: 'Get an overview of the features the KendoReact Drag&Drop delivers and use it in React projects.'
components: ["drag&drop"]
slug: overview_drag-and-drop
position: 1
---

# Drag&Drop Overview

The KendoReact Drag&Drop functionality provides an easy way to drag and drop both native HTML elements and React components.

Depending on the type of the targeted React components, you can implement the Drag&amp;Drop in two ways:

-   By using the `useDraggable` and `useDroppable` React [Hooks](https://react.dev/reference/react/hooks) in [functional components](https://react.dev/reference/react/Component).
-   By using the [`Draggable`]({% slug api_common_draggable %}) and [`Droppable`]({% slug api_common_droppable %}) higher-order KendoReact components in [class components](https://react.dev/reference/react/Component).

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the Drag&amp;Drop in action.

{% meta height:360 %}
{% embed_file drag-and-drop/overview/func/app.tsx preview %}
{% embed_file drag-and-drop/overview/func/main.tsx %}
{% embed_file drag-and-drop/overview/func/draggable-button.tsx %}
{% embed_file drag-and-drop/overview/func/droppable-box.tsx %}
{% endmeta %}

The example above showcases the Drag&amp;Drop functionality&mdash;we register an element as `draggable` and provide four possible `droppable` elements. Additionally, we apply a visual clue to the `drop` elements to show where a `drop` is possible.

> The Drag&Drop is part of the [KendoReact Common Utilities]({% slug overview_common %}) component library. The procedures for installing, importing, and using the Common Utilities are identical for all components in the package. To learn how to use the Drag&Drop and the rest of the Common Utilities, see the [Getting Started with the KendoReact Common Utilities]({% slug get_started_common %}) guide.

## Key Features

-   [Auto Scroll]({% slug auto-scroll_drag-and-drop %})&mdash;Automatically scroll the nearest scroll container when the dragged component is close to the edges.
-   [Drag Hint]({% slug drag-hint_drag-and-drop %})&mdash;Render a copy of the original element to be used as `hint` during dragging.
-   [Drag Handle]({% slug drag-hint_drag-and-drop %}#toc-drag-handle)&mdash;Allow drag only through interacting with a specified `handle` while still using the parent element for `drop` detection.
-   [Hold to Drag]({% slug hold-to-drag_drag-and-drop %})&mdash;Enable dragging after holding the drag element for a specific period of time.
-   [Minimum Distance]({% slug minimum-distance_drag-and-drop %})&mdash;Display the `drag` hint after a a predefined distance is covered.
-   [Axis lock]({% slug axis-lock_drag-and-drop %})&mdash;Enable dragging only on a single axis.
-   [Multiple Drag Contexts]({% slug multiple-drags_drag-and-drop %})&mdash;Implement multiple drag-n-drop functionalities without interference between them.

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
