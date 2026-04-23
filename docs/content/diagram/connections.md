---
title: Connections
description: 'Configure and customize connections between shapes in the KendoReact Diagram, including types, caps, labels, styling, editability, and connector points.'
components: ['diagram']
slug: connections_diagram
position: 40
tier: premium
---

# Diagram Connections

The connections in the KendoReact Diagram represent relationships between two Shapes (graph nodes). This article describes all Diagram connection customization options and configuration features.

The following example demonstrates the key connection features, including connection types, caps, labels, styling, and connector targeting.

<demo metaUrl="diagram/connections/basic/" height="720"></demo>

## Basics

A connection is a link that shows a relationship between two Diagram Shapes. A connection can also span across points with specific coordinates, with no associated Shapes.

The fundamental settings of the KendoReact Diagram connections include:

-   The [`from`](slug:api_diagram_connectionoptions#from) and [`to`](slug:api_diagram_connectionoptions#to) properties must match the associated Shape ids. You can also define a connection that does not link Shapes by using specific coordinates.
-   Use [`fromConnector`](slug:api_diagram_connectionoptions#fromConnector) and [`toConnector`](slug:api_diagram_connectionoptions#toConnector) to specify which connector point on each shape the connection attaches to.
-   The connection [`type`](slug:api_diagram_connectionoptions#type) determines the connection route and route angles.
-   The connection cap [`type`](slug:api_diagram_connectionoptions#type) determines whether the connections appear directed or undirected.
-   The [`selectable`](slug:api_diagram_connectionoptions#selectable) parameter of [`ConnectionDefaults`](slug:api_diagram_connectiondefaults) sets if connections can be selected, which determines the ability to drag or remove them.
-   Text defines the connection label. Use the connection [`content`](slug:api_diagram_connectionoptions#content) property to set the label text and its styling.

Basic connection parameters are defined in the [`ConnectionOptions`](slug:api_diagram_connectionoptions) interface:

```tsx
const connections: ConnectionOptions[] = [
    {
        from: 'start',
        to: 'process',
        content: {
            text: 'Next'
        }
    }
];
```

For connections without Shapes, you can define specific coordinates:

```tsx
const connections: ConnectionOptions[] = [
    {
        from: { x: 50, y: 100 },
        to: { x: 150, y: 200 }
    }
];
```

Use the [`fromConnector`](slug:api_diagram_connectionoptions#fromConnector) and [`toConnector`](slug:api_diagram_connectionoptions#toConnector) properties to control which connector point on a shape the connection attaches to. By default, shapes expose four connectors: `top`, `right`, `bottom`, and `left`.

```tsx
const connections: ConnectionOptions[] = [
    {
        from: 'shapeA',
        to: 'shapeB',
        fromConnector: 'right',
        toConnector: 'left'
    }
];
```

The following example demonstrates basic connection usage, including shape-based connections, coordinate-based connections, and connector targeting with [`fromConnector`](slug:api_diagram_connectionoptions#fromConnector) and [`toConnector`](slug:api_diagram_connectionoptions#toConnector).

<demo metaUrl="diagram/connections/overview/" height="500"></demo>

## Connection Types

The Diagram supports different connection types that determine the route and angles of the connection line. The default connection type is `cascading`, which displays connections as rectangular routes with one or more right angles. The [`polyline`](slug:api_diagram_polyline) connection type displays connections as polylines that connect the related Shapes and all intermediate points. If connection points are not defined, then the connection displays as a straight line.

The following example demonstrates the available connection types.

<demo metaUrl="diagram/connections/types/" height="460"></demo>

### Type Configuration

You can set a default connection type for all connections by using the [`connectionDefaults`](slug:api_diagram_connectiondefaults) property:

```tsx
const connectionDefaults: ConnectionDefaults = {
    type: 'polyline'
};
```

Individual connections can override the default setting by specifying their own [`type`](slug:api_diagram_connectionoptions#type):

```tsx
const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        type: 'cascading'
    }
];
```

### Connection Points

Polyline connections can pass through multiple points at specific coordinates, regardless of whether the connections link Shapes or not.

```tsx
const connections: ConnectionOptions[] = [
    {
        type: 'polyline',
        from: { x: 20, y: 20 },
        to: { x: 200, y: 200 },
        points: [
            { x: 150, y: 50 },
            { x: 50, y: 100 },
            { x: 150, y: 150 },
            { x: 100, y: 170 }
        ]
    }
];
```

The following example demonstrates how to define connection points.

<demo metaUrl="diagram/connections/points/" height="600"></demo>

## Connection Styling

You can customize the visual appearance of connections through various styling options including caps, colors, fonts, and borders.

### Connection Caps

The link between two Diagram Shapes is always defined through the [`from`](slug:api_diagram_connectionoptions#from) and [`to`](slug:api_diagram_connectionoptions#to) properties. From this point of view, a Diagram connection is always directed. However, you can configure the connections to appear bi-directional or non-directional.

The following example demonstrates the difference between caps and selection handles.

<demo metaUrl="diagram/connections/caps/" height="460"></demo>

The available cap types include:

-   `ArrowEnd` - The cap arrow points away from the connection, towards the Shape.
-   `FilledCircle` - The default filled circle marker.
-   `none`

You can configure cap types by using [`connectionDefaults`](slug:api_diagram_connectiondefaults) to apply settings to all connections:

```tsx
const connectionDefaults: ConnectionDefaults = {
    startCap: {
        type: 'ArrowEnd'
    },
    endCap: {
        type: 'ArrowEnd'
    }
};
```

For individual connections, specify the cap types directly on the connection:

```tsx
const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        startCap: {
            type: 'FilledCircle'
        },
        endCap: {
            type: 'FilledCircle'
        }
    }
];
```

Note the difference between caps and selection handles:

-   The caps are visible when a connection is not selected.
-   The selection handles are visible when a connection is selected.

### Styling Options

The following connection styling options are available:

-   Text color and font properties for connection content.
-   Background color ([`fill`](slug:api_diagram_fill)) for the connection caps.
-   Background color ([`fill`](slug:api_diagram_fill)) for the default and hover states of the selection handles.
-   Border ([`stroke`](slug:api_diagram_stroke)) color, type, and width for the caps and selection handles.

The following example demonstrates how to style connections.

<demo metaUrl="diagram/connections/styling/" height="450"></demo>

## Connection Content And Labels

You can add text labels to connections to provide additional information about the relationship they represent. Use the [`content`](slug:api_diagram_connectionoptions#content) property to configure the label appearance and position.

The following example demonstrates various label configuration options, including text content, styling, and positioning on both horizontal and vertical connections.

<demo metaUrl="diagram/connections/labels/" height="460"></demo>

The [`ConnectionContent`](slug:api_diagram_connectioncontent) interface provides options for configuring:

-   Text content and styling (`color`, `fontFamily`, `fontSize`, `fontWeight`, and `fontStyle`).
-   Label positioning relative to the connection line.
-   Offset distance between the label and connection path.
-   Custom templates for dynamic content rendering.

```tsx
const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        content: {
            text: 'Reports to',
            color: '#666',
            fontFamily: 'Arial',
            fontSize: 12,
            position: {
                vertical: 'top',
                horizontal: 'right'
            }
        }
    }
];
```

The [`position`](slug:api_diagram_connectioncontent#position) property controls where the label appears:

-   `inline` - Positions the label directly on the connection line.
-   `vertical` - Controls the vertical position relative to horizontal connections (`top` by default or `bottom`).
-   `horizontal` - Controls the horizontal position relative to vertical connections (`right` by default or `left`).

## Editable Connections

The Diagram connections are editable by default. Users can drag a connection by its start and end cap to link different shapes, or remove selected connections. You can control the editability of connections globally or on an individual basis.

The following example demonstrates editable and non-editable connections.

<demo metaUrl="diagram/connections/editable/" height="420"></demo>

You can control these operations by using [`connectionDefaults`](slug:api_diagram_connectiondefaults) to set the behavior for all connections:

```tsx
const connectionDefaults: ConnectionDefaults = {
    editable: {
        drag: true,
        remove: true
    }
};
```

Individual connections can have different editable settings:

```tsx
const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        editable: {
            drag: false,
            remove: false
        }
    }
];
```

Connection dragging and removing requires the connection to be selectable, which is enabled by default.

## Defining Shape Connector Points

By default, each shape exposes four connectors named `top`, `right`, `bottom`, and `left`. Custom connectors are useful when you need to separate multiple connections leaving the same edge, enforce directional flow in layered diagrams, or anchor connections to specific visual regions of a shape. You can replace the defaults by setting the [`connectors`](slug:api_diagram_shapeoptions#connectors) property on individual shapes or on [`shapeDefaults`](slug:api_diagram_shapedefaults) to apply them to all shapes. Defining custom connectors replaces the defaults, so include every connector your connections need in the array.

The following example demonstrates custom connectors on Diagram shapes. The UI Layer shape uses offset `RightTop` and `RightBottom` connectors at 30% and 70% down the right edge to prevent overlapping connections. The remaining shapes use bounds-based edge centers.

<demo metaUrl="diagram/connections/connectors/" height="600"></demo>

Each connector requires:

-   A unique `name` used to reference the connector in [`ConnectionOptions`](slug:api_diagram_connectionoptions).
-   A `position` function that receives the parent Shape and returns a point defining the connector's location on the diagram canvas.

Use the `shape.bounds()` method inside the function to calculate positions relative to the shape's current geometry. The method returns a Rect-like object with the following API:

-   `x` and `y` - The top-left corner coordinates.
-   `width` and `height` - The shape dimensions.
-   `top()`, `right()`, `bottom()`, `left()` - Convenience methods that return a point at each edge center.
-   `center()` - Returns a point at the shape center.

```tsx
const connectors = [
    {
        name: 'Right',
        position: (shape: any) => shape.bounds().right()
    },
    {
        name: 'RightTop',
        position: (shape: any) => {
            const bounds = shape.bounds();
            return { x: bounds.x + bounds.width, y: bounds.y + bounds.height * 0.3 };
        }
    },
    {
        name: 'RightBottom',
        position: (shape: any) => {
            const bounds = shape.bounds();
            return { x: bounds.x + bounds.width, y: bounds.y + bounds.height * 0.7 };
        }
    }
];
```

To route connections to and from custom connectors, reference them by name through the `fromConnector` and `toConnector` properties of [`ConnectionOptions`](slug:api_diagram_connectionoptions):

```tsx
const connections: ConnectionOptions[] = [
    {
        from: 'ui',
        to: 'logic',
        fromConnector: 'RightTop',
        toConnector: 'Left'
    },
    {
        from: 'ui',
        to: 'data',
        fromConnector: 'RightBottom',
        toConnector: 'Left'
    }
];
```

## Suggested Links

-   [Shapes]({% slug shapes_diagram %})
-   [Data Binding]({% slug databinding_diagram %})
-   [`ConnectionOptions` API]({% slug api_diagram_connectionoptions %})
-   [`ConnectionDefaults` API]({% slug api_diagram_connectiondefaults %})
