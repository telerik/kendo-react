---
title: Workflow Diagrams
description: 'Build process and workflow diagrams in React using the KendoReact Diagram component with the built-in flowchart shape types.'
components: ['diagram']
slug: workflow_diagram
position: 20
tier: premium
---

# Workflow Diagrams

The KendoReact Diagram ships with a comprehensive set of standard ANSI flowchart symbols. These shapes let you build process maps, decision trees, and software flowcharts without writing custom visual templates.

The following example demonstrates a complete workflow process built with flowchart shapes, custom connection markers, and decision branches.

<demo metaUrl="diagram/workflow/" height="750"></demo>

## Creating a Workflow Diagram

To create a workflow diagram, use flowchart shapes from the [`FlowchartShapeType`](slug:api_diagram_flowchartshapetype) enumeration. Common workflow shapes include:

-   [`Terminator`](slug:api_diagram_terminator) - Start and end points of the workflow.
-   [`Process`](slug:api_diagram_process) - Standard processing steps or actions.
-   [`Decision`](slug:api_diagram_decision) - Decision points with Yes/No or True/False branches.
-   [`Document`](slug:api_diagram_document) - Document creation or data output.
-   [`PredefinedProcess`](slug:api_diagram_predefinedprocess) - Subroutines or predefined operations.
-   [`Database`](slug:api_diagram_database) - Database operations or data storage.
-   [`Delay`](slug:api_diagram_delay) - Wait periods or time-based operations.
-   [`ManualOperation`](slug:api_diagram_manualoperation) - Manual tasks requiring human intervention.

Import [`FlowchartShapeType`](slug:api_diagram_flowchartshapetype) from `@progress/kendo-diagram-common` and use it as the `type` property of a shape.

```tsx-no-run
import { FlowchartShapeType } from '@progress/kendo-diagram-common';
import { ShapeOptions } from '@progress/kendo-react-diagram';

const shapes: ShapeOptions[] = [
    {
        id: 'start',
        type: FlowchartShapeType.Terminator,
        content: { text: 'Start' },
        x: 100,
        y: 50
    },
    {
        id: 'process1',
        type: FlowchartShapeType.Process,
        content: { text: 'Define Requirements' },
        x: 100,
        y: 150
    },
    {
        id: 'decision1',
        type: FlowchartShapeType.Decision,
        content: { text: 'Approved?' },
        x: 100,
        y: 250
    }
];
```

Use [Diagram connections](slug:connections_diagram) with labeled content to indicate decision outcomes and process flow direction between workflow steps.

```tsx-no-run
import { ConnectionOptions } from '@progress/kendo-react-diagram';

const connections: ConnectionOptions[] = [
    { from: 'start', to: 'process1' },
    { from: 'process1', to: 'decision1' },
    {
        from: 'decision1',
        to: 'approve',
        content: { text: 'Yes' }
    },
    {
        from: 'decision1',
        to: 'reject',
        content: { text: 'No' }
    }
];
```

### Available Flowchart Shapes

| Shape Type                                                    | Symbol Description                                      |
| ------------------------------------------------------------- | ------------------------------------------------------- |
| [`Terminator`](slug:api_diagram_terminator)                   | Rounded rectangle marking start/end of a process.       |
| [`Process`](slug:api_diagram_process)                         | Standard rectangle for a processing step.               |
| [`Decision`](slug:api_diagram_decision)                       | Diamond for a yes/no branch point.                      |
| [`Document`](slug:api_diagram_document)                       | Rectangle with a wavy bottom for document output.       |
| [`MultipleDocuments`](slug:api_diagram_multipledocuments)     | Stacked documents shape.                                |
| [`PredefinedProcess`](slug:api_diagram_predefinedprocess)     | Rectangle with double vertical lines for a sub-process. |
| [`ManualOperation`](slug:api_diagram_manualoperation)         | Trapezoid for a manual step.                            |
| [`ManualInputOutput`](slug:api_diagram_manualinputoutput)     | Parallelogram for manual data entry.                    |
| [`DataInputOutput`](slug:api_diagram_datainputoutput)         | Parallelogram for automatic data I/O.                   |
| [`Database`](slug:api_diagram_database)                       | Cylinder for stored data.                               |
| [`DirectAccessStorage`](slug:api_diagram_directaccessstorage) | Drum shape for direct-access storage.                   |
| [`InternalStorage`](slug:api_diagram_internalstorage)         | Rectangle with two internal lines for internal storage. |
| [`Display`](slug:api_diagram_display)                         | Hexagon for a display output step.                      |
| [`Preparation`](slug:api_diagram_preparation)                 | Hexagon for initialization or preparation.              |
| [`Sort`](slug:api_diagram_sort)                               | Divided rectangle for sorting data.                     |
| [`Merge`](slug:api_diagram_merge)                             | Downward triangle indicating merging of flows.          |
| [`Collate`](slug:api_diagram_collate)                         | Two triangles for collating data.                       |
| [`Extract`](slug:api_diagram_extract)                         | Triangle pointing downward for extracting a subset.     |
| [`OffPageConnector`](slug:api_diagram_offpageconnector)       | Pentagon for off-page reference.                        |
| [`OnPageConnector`](slug:api_diagram_onpageconnector)         | Circle for on-page reference.                           |
| [`SummingJunction`](slug:api_diagram_summingjunction)         | Circle with crossed lines for joining flows.            |
| [`LogicalOr`](slug:api_diagram_logicalor)                     | Circle with a plus sign.                                |
| [`Delay`](slug:api_diagram_delay)                             | D-shaped symbol for a delay step.                       |

## Custom Connection Markers

When building workflow diagrams, you can use a custom [`MarkerType`](slug:api_diagram_markertype) for connection end caps to match standard flowchart notation.

```tsx-no-run
import { MarkerType } from '@progress/kendo-diagram-common';

const connectionDefaults: ConnectionDefaults = {
    endCap: {
        type: MarkerType.ArrowEnd,
        path: 'M 0 0 L 8 7 L 0 14',
        anchor: { x: 8, y: 7 },
        stroke: { color: '#4E4E4E', lineCap: 'round', lineJoin: 'round', width: 2 }
    },
    stroke: { color: '#4E4E4E', width: 2 }
};
```

## Suggested Links

-   [Shapes]({% slug shapes_diagram %})
-   [Connections]({% slug connections_diagram %})
-   [Layouts]({% slug layouts_diagram %})
-   [`FlowchartShapeType` API]({% slug api_diagram_flowchartshapetype %})
