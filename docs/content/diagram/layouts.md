---
title: Layouts
description: 'Automatically arrange shapes in the KendoReact Diagram using tree, layered, and force-directed layout algorithms, and control grid settings for disconnected sub-graphs.'
components: ['diagram']
slug: layouts_diagram
position: 50
tier: premium
---

# Diagram Layouts

The KendoReact Diagram provides automatic layout algorithms that arrange shapes and connections in a visually organized way. Layouts automatically position shapes and route connections without requiring manual coordinate specification.

When using layouts, you typically do not need to specify `x` and `y` coordinates for shapes because the layout algorithm calculates optimal positions.

## Interactive Layout Switching

The following example demonstrates all available layout algorithms in action.

<demo metaUrl="diagram/layouts/basic/" height="580"></demo>

## Available Layout Types

The Diagram supports the following layout algorithms:

-   Tree layout - Arranges shapes in a hierarchical tree structure.
-   Layered layout - Organizes shapes in horizontal or vertical layers.
-   Force-directed layout - Uses physics simulation to position shapes.

### Tree Layout

The tree layout arranges shapes in a hierarchical structure, making it suitable for organizational charts, decision trees, and other hierarchical data.

The tree layout supports the following subtypes:

-   `down` - The root shape is at the top and descendants are arranged below it.
-   `up` - The root shape is at the bottom and descendants are arranged above it.
-   `left` - The root shape is on the right and descendants are arranged to the left.
-   `right` - The root shape is on the left and descendants are arranged to the right.
-   `mindmapHorizontal` - The root shape is centered and descendants are arranged to the left and right.
-   `mindmapVertical` - The root shape is centered and descendants are arranged above and below.
-   `radial` - The root shape is at the center and descendants are arranged around it in a circle.
-   `tipOver` - A variation of `down` where direct children are in a row and lower levels flow underneath.

Tree layout configuration options include:

-   `horizontalSeparation` - Horizontal distance between shapes at the same level.
-   `verticalSeparation` - Vertical distance between levels.
-   `underneathHorizontalOffset` - Horizontal offset for underneath positioning.
-   `underneathVerticalSeparation` - Vertical separation for underneath positioning.

The following example demonstrates a hierarchical tree layout.

<demo metaUrl="diagram/layouts/tree/" height="500"></demo>

### Layered Layout

The layered layout organizes shapes into distinct horizontal or vertical layers, making it suitable for process flows, network diagrams, and workflow representations.

The layered layout supports the following subtypes:

-   `down` - The root shape is at the top and descendants are arranged below it.
-   `left` - The root shape is on the right and descendants are arranged to the left.
-   `right` - The root shape is on the left and descendants are arranged to the right.
-   `up` - The root shape is at the bottom and descendants are arranged above it.

Layered layout configuration options include:

-   `nodeDistance` - Distance between nodes in the same layer.
-   `layerDistance` - Distance between layers.
-   `iterations` - Number of iterations used to optimize the layout.

The following example demonstrates a process flow layered layout.

<demo metaUrl="diagram/layouts/layered/" height="760"></demo>

### Force-Directed Layout

The force-directed layout (spring-embedder algorithm) uses a physical simulation of forces acting on Diagram nodes, where each connection behaves like a spring.

The algorithm attempts to find a minimum energy state where connected nodes settle into balanced positions.

The force-directed layout is non-deterministic, so each layout pass can produce a different result.

The following example demonstrates a force-directed layout.

<demo metaUrl="diagram/layouts/force/" height="500"></demo>

## Grid Settings

A single Diagram instance can display multiple disconnected subgraphs (components). The layout grid settings allow you to control spacing and alignment of these components within the Diagram area.

The available grid settings are:

-   `componentSpacingX` - Horizontal spacing between components.
-   `componentSpacingY` - Vertical spacing between components.
-   `offsetX` - Left offset of the grid layout.
-   `offsetY` - Top offset of the grid layout.
-   `width` - Maximum width of the grid before components wrap to the next row.

The following example demonstrates grid layout settings in action.

<demo metaUrl="diagram/layouts/grid-settings/" height="460"></demo>

## Suggested Links

-   [Shapes]({% slug shapes_diagram %})
-   [Connections]({% slug connections_diagram %})
-   [Events]({% slug events_diagram %})
-   [`DiagramLayout` API]({% slug api_diagram_diagramlayout %})
