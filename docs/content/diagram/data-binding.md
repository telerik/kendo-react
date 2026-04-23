---
title: Data Binding
description: 'Learn how to bind data to shapes and connections in the KendoReact Diagram component.'
components: ['diagram']
slug: databinding_diagram
position: 10
tier: premium
---

# Data Binding

The KendoReact Diagram supports comprehensive data binding capabilities that allow you to create dynamic diagrams from your data models. This article demonstrates how to bind shapes and connections to data sources for creating organizational charts, process flows, network diagrams, and other data-driven visualizations.

The Diagram component binds data to shapes and connections by mapping data properties to the expected Diagram format. By default, the component expects the following data structures:

-   Shapes: Objects implementing the [`ShapeOptions`](slug:api_diagram_shapeoptions) interface with properties like [`id`](slug:api_diagram_shapeoptions#id), [`content`](slug:api_diagram_shapeoptions#content), [`x`](slug:api_diagram_shapeoptions#x), [`y`](slug:api_diagram_shapeoptions#y), [`width`](slug:api_diagram_shapeoptions#width), and [`height`](slug:api_diagram_shapeoptions#height).
-   Connections: Objects implementing the [`ConnectionOptions`](slug:api_diagram_connectionoptions) interface with [`from`](slug:api_diagram_connectionoptions#from) and [`to`](slug:api_diagram_connectionoptions#to) properties.

The following example demonstrates basic data binding with shapes and connections representing a manufacturing process workflow.

<demo metaUrl="diagram/data-binding/direct-property-mapping/" height="610"></demo>

When your data uses different property names, use field mapping to connect your data structure to the Diagram format. For more complex scenarios with nested structures, use the [`convertToDiagramModel`](slug:api_diagram_converttodiagrammodel) utility function.

## Field Mapping

Use the [`ShapeModelFields`](slug:api_diagram_shapemodelfields) and [`ConnectionModelFields`](slug:api_diagram_connectionmodelfields) properties to map your data properties to the expected Diagram properties. This approach works with any data model, including those from existing APIs or backend systems.

The following example demonstrates a supply chain logistics workflow using field mappings to bind data with custom property names to the Diagram.

<demo metaUrl="diagram/data-binding/custom-field-mapping/" height="610"></demo>

To implement field mapping in your application, define [`ShapeModelFields`](slug:api_diagram_shapemodelfields) and [`ConnectionModelFields`](slug:api_diagram_connectionmodelfields) objects that map your property names to the Diagram's expected properties.

```tsx-no-run
import { ShapeModelFields, ConnectionModelFields } from '@progress/kendo-react-diagram';

// Your existing data structure
const processSteps = [
    {
        stepId: 'receiving',
        stepName: { text: 'Receiving Inspection' },
        location: { posX: 100, posY: 50 },
        dimensions: { w: 120, h: 60 }
    }
];

// Map your data properties to Diagram properties using dot notation for nested properties
const shapeModelFields: ShapeModelFields = {
    id: 'stepId',
    content: 'stepName',
    x: 'location.posX',
    y: 'location.posY',
    width: 'dimensions.w',
    height: 'dimensions.h'
};

// Your connection data structure
const workflowConnections = [{ sourceStep: 'receiving', targetStep: 'assembly', flowType: 'direct' }];

// Map connection properties
const connectionModelFields: ConnectionModelFields = {
    from: 'sourceStep',
    to: 'targetStep'
};
```

## Converting Complex Data Structures

When working with complex nested data structures or APIs that return data in formats not directly compatible with the Diagram component, use the [`convertToDiagramModel`](slug:api_diagram_converttodiagrammodel) utility function to transform your data. This function provides a programmatic way to extract and map data from custom structures into the format expected by the Diagram.

The following example demonstrates converting a complex API response structure representing an organizational hierarchy into diagram format using [`convertToDiagramModel`](slug:api_diagram_converttodiagrammodel).

<demo metaUrl="diagram/data-binding/convert-to-diagram-model/" height="540"></demo>

The [`convertToDiagramModel`](slug:api_diagram_converttodiagrammodel) function accepts two parameters:

-   `input`: The raw data object containing your shapes and connections data.
-   `mapping`: A [`DiagramMapping`](slug:api_diagram_diagrammapping) configuration that defines how to extract and transform the data.

```tsx-no-run
import { convertToDiagramModel, DiagramMapping } from '@progress/kendo-react-diagram';

// Complex nested data structure from an API
const apiResponse = {
    organizationData: {
        departments: [
            { deptId: 'eng', deptName: 'Engineering', location: { x: 100, y: 50 } },
            { deptId: 'sales', deptName: 'Sales', location: { x: 300, y: 50 } }
        ],
        reporting: [{ supervisor: 'eng', subordinate: 'sales' }]
    }
};

// Define mapping configuration
const mapping: DiagramMapping = {
    shapes: {
        source: 'organizationData.departments',
        map: {
            id: 'deptId',
            content: (dept) => ({ text: dept.deptName }),
            x: 'location.x',
            y: 'location.y'
        }
    },
    connections: {
        source: 'organizationData.reporting',
        map: {
            from: 'supervisor',
            to: 'subordinate'
        }
    }
};

// Convert the data
const result = convertToDiagramModel(apiResponse, mapping);

// Use the converted data with the Diagram
const shapes = result.shapes;
const connections = result.connections;
```

## Dynamic Data Updates

The Diagram automatically reflects changes when you modify the bound data arrays. Add new items to your shapes or connections arrays to dynamically insert nodes and links, or remove items to update the diagram structure in real-time. When managing data updates, ensure you maintain referential integrity by updating related connections whenever shapes are added or removed.

The following example demonstrates dynamic data updates where you can add and remove process steps interactively.

<demo metaUrl="diagram/data-binding/dynamic-updates/" height="520"></demo>

## Remote Data Binding

Use asynchronous data loading to fetch diagram data from remote services or APIs. This approach is useful when working with backend systems or when data needs to be loaded dynamically.

The following example demonstrates remote data binding for a workflow that loads data asynchronously from a simulated service.

<demo metaUrl="diagram/data-binding/remote-data-binding/" height="650"></demo>

## See Also

-   [Shapes]({% slug shapes_diagram %})
-   [Connections]({% slug connections_diagram %})
-   [Layouts]({% slug layouts_diagram %})
-   [convertToDiagramModel API Reference]({% slug api_diagram_converttodiagrammodel %})
-   [`ShapeModelFields` API]({% slug api_diagram_shapemodelfields %})
-   [`ConnectionModelFields` API]({% slug api_diagram_connectionmodelfields %})
