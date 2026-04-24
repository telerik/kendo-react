---
title: ShapeMapping
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ShapeMapping."
api_reference: true
type: inner_api
slug: api_diagram_shapemapping
---

# ShapeMapping
Configuration for mapping source data to diagram shapes.

Defines how to extract shape data from the input and how to transform each shape
from the source format to the required ShapeOptions format. The source specifies
where to find the array of shape data, and the map defines the field mappings.

```typescript
const shapeMapping: ShapeMapping<NodeData> = {
  source: 'nodes',  // Extract from input.nodes array
  map: {
    id: 'nodeId',
    x: 'position.x',
    y: 'position.y',
    content: (node) => ({ text: node.label })
  }
};
```




