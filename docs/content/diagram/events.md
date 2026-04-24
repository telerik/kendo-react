---
title: Events
description: 'Handle KendoReact Diagram events such as click, drag, select, pan, zoom, and tooltip show/hide to respond to user interactions.'
components: ['diagram']
slug: events_diagram
position: 80
tier: premium
---

# Diagram Events

The KendoReact Diagram provides a comprehensive set of events that enable you to respond to user interactions, shape modifications, and other diagram-related activities. This article describes all available events and how to handle them.

| Event Prop            | Description                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `onChange`            | Fired when the diagram content changes, such as when shapes or connections are added, removed, or modified. |
| `onDiagramClick`      | Fired when the user clicks on the diagram canvas (not on a specific shape or connection).                   |
| `onDragStart`         | Fired when a drag operation begins on a shape or connection.                                                |
| `onDrag`              | Fired continuously while dragging shapes or connections within the diagram.                                 |
| `onDragEnd`           | Fired when a drag operation is completed.                                                                   |
| `onShapeBoundsChange` | Fired when the bounds (position or size) of a shape are modified.                                           |
| `onMouseEnter`        | Fired when the mouse pointer enters a shape or connection area.                                             |
| `onMouseLeave`        | Fired when the mouse pointer leaves a shape or connection area.                                             |
| `onPan`               | Fired when the diagram viewport is panned (moved) by the user.                                              |
| `onSelect`            | Fired when shapes or connections are selected or deselected.                                                |
| `onTooltipShow`       | Fired when a tooltip displays for a shape or connection.                                                    |
| `onTooltipHide`       | Fired when a tooltip hides.                                                                                 |
| `onZoomStart`         | Fired when a zoom operation begins.                                                                         |
| `onZoomEnd`           | Fired when a zoom operation is completed.                                                                   |

The following example demonstrates all available events in action.

<demo metaUrl="diagram/events/basic/" height="820"></demo>

## See Also

-   [Diagram Shapes]({% slug shapes_diagram %})
-   [Diagram Connections]({% slug connections_diagram %})
-   [Diagram Layouts]({% slug layouts_diagram %})
-   [Diagram API Reference]({% slug api_diagram %})
