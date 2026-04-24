---
title: Shapes
description: 'Learn about customizing and configuring shapes in the KendoReact Diagram component.'
components: ['diagram']
slug: shapes_diagram
position: 30
tier: premium
---

# Diagram Shapes

The [`ShapeOptions`](slug:api_diagram_shapeoptions) is the main building block of the KendoReact [Diagram](slug:overview_diagram). It represents a single node in the graph. This article describes all Diagram shape customization options.

The following example demonstrates different types of shapes and their properties in action.

<demo metaUrl="diagram/shapes/basic/" height="430"></demo>

## Basics

The fundamental settings of the KendoReact Diagram shapes include:

-   The Shape [`type`](#shape-types) determines the overall appearance and content.
-   The Shape [`id`](slug:api_diagram_shapeoptions#id) is required in order to define connections between related shapes.
-   The Shape [`content`](slug:api_diagram_shapeoptions#content) defines the Shape label and text properties.
-   The `width` and `height` properties determine the Shape size in pixels. The default values are `100`.

In addition to the above, use the `x` and `y` Shape parameters to define the exact Shape position coordinates. These parameters have effect only when a [predefined Diagram layout](slug:layouts_diagram) is not set.

The following example demonstrates basic Shape usage with position coordinates.

<demo metaUrl="diagram/shapes/overview/" height="420"></demo>

## Shape Data Binding

Shapes can be bound to data items in order to visualize hierarchical data structures. The Diagram component supports binding to arrays of objects, where each object represents a Shape.

```tsx-no-run
const shapes: ShapeOptions[] = [
    {
        id: 'employee1',
        dataItem: {
            firstName: 'John',
            lastName: 'Doe',
            title: 'Manager',
            department: 'Sales'
        },
        content: {
            text: 'John Doe Manager'
        }
    }
];
```

The following example demonstrates how to bind shapes to data items.

<demo metaUrl="diagram/shapes/data-binding/" height="400"></demo>

## Shape Types

The Diagram supports the following basic shape types. The default Shape type is `rectangle`.

-   `rectangle` (default)—A standard rectangular Shape.
-   `circle`—You can use different `width` and `height` values to define an ellipse.
-   `image`—Displays a graphic from a URL or data URI. Use the `source` property to define the image source. Like other Shape types, it also supports text labels.

In addition to these basic geometric Shapes, the Diagram provides specialized Shapes for [Workflow Diagrams](slug:workflow_diagram). For a complete list of flowchart-specific Shapes, see the [`FlowchartShapeType`](slug:api_diagram_flowchartshapetype) reference.

The following example demonstrates the available shape types.

<demo metaUrl="diagram/shapes/types/" height="770"></demo>

## Shape Styling

The following Shape styling options are available:

-   Text color and font properties
-   Background color (fill) and opacity for the default and hover states
-   Rotation angle
-   Border (stroke) color, type, width, and opacity

The following example demonstrates the available Shape styling options.

<demo metaUrl="diagram/shapes/styling/" height="400"></demo>

## Editable Shapes

By default, the Diagram [`ShapeOptions editable`](slug:api_diagram_shapeoptions#editable) property allows users to:

-   Connect one Shape to other Shapes.
-   Drag a Shape to new coordinates.
-   Remove the selected Shape(s).

The following example demonstrates the editable [Shape options](slug:api_diagram_shapeoptions).

<demo metaUrl="diagram/shapes/editable/" height="460"></demo>

## Changing the Shape Visuals

The Diagram supports a [`visual`](slug:api_diagram_shapeoptions#visual) function that replaces the default Shape rendering with fully programmatic drawing. Use it when built-in styling is not enough—for example, to render org-chart cards with photos and titles, show network nodes with status indicators, or build data-driven shapes whose appearance reflects underlying values. The function receives the Shape's data item and other properties, so you can drive the visual output directly from your data.

The following example demonstrates how to use a visual function to create custom Shapes in the Diagram.

<demo metaUrl="diagram/shapes/custom-visual/" height="360"></demo>

To use a visual function, follow these steps:

1. Create the visual template function that returns a [`Group`](slug:api_diagram_group) containing the desired visual elements:

    ```tsx-no-run
    import { Group, Rectangle, Image, TextBlock } from '@progress/kendo-diagram-common';

    const visualTemplate = (options): Group => {
        const g = new Group();
        const dataItem = options.dataItem.dataItem;

        g.append(new Rectangle({
            width: 250,
            height: 100,
            stroke: { width: 2, color: dataItem.strokeColor },
            fill: { color: dataItem.backgroundColor },
            cornerRadius: 8
        }));

        if (dataItem.image) {
            g.append(new Image({
                source: dataItem.image,
                x: 10, y: 15,
                width: 70, height: 70
            }));
        }

        g.append(new TextBlock({
            text: dataItem.name,
            x: 90, y: 25,
            fontSize: 16,
            fontWeight: 'bold'
        }));

        return g;
    };
    ```

2. Configure the [`ShapeDefaults`](slug:api_diagram_shapedefaults) with the `visual` function:

    ```tsx-no-run
    const shapeDefaults: ShapeDefaults = {
        visual: visualTemplate,
    };
    ```

3. Apply the configuration to the Diagram:

    ```tsx-no-run
    <Diagram
        shapes={shapes}
        shapeDefaults={shapeDefaults}
    />
    ```

## Suggested Links

-   [Connections](slug:connections_diagram)
-   [Layouts](slug:layouts_diagram)
-   [Workflow Diagrams](slug:workflow_diagram)
-   [`ShapeOptions` API](slug:api_diagram_shapeoptions)
-   [`ShapeDefaults` API](slug:api_diagram_shapedefaults)
