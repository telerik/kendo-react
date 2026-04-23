---
title: convertToDiagramModel
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the convertToDiagramModel."
api_reference: true
type: inner_api
slug: api_diagram_converttodiagrammodel
---

# convertToDiagramModel
Converts input data to diagram model format using the provided mapping configuration.

This function takes raw input data and transforms it into a structured diagram model
containing shapes and connections arrays. It uses the mapping configuration to
extract data from the input and apply field mappings to create properly formatted
ShapeOptions and ConnectionOptions objects.




```typescript
const input = {
  items: [{ id: '1', name: 'Node 1', x: 100, y: 100 }],
  links: [{ from: '1', to: '2' }]
};

const mapping = {
  shapes: {
    source: 'items',
    map: { id: 'id', content: 'name', x: 'x', y: 'y' }
  },
  connections: {
    source: 'links',
    map: { from: 'from', to: 'to' }
  }
};

const result = convertToDiagramModel(input, mapping);
// Returns: { shapes: [...], connections: [...] }
```


#### Parameters
##### input
<code>


any


</code>
The raw input data object containing source data for shapes and connections

##### mapping
<code>


[DiagramMapping]({% slug api_diagram_diagrammapping %})


</code>
Configuration object defining how to extract and map data from input

#### Returns
<code>


[ConvertResult]({% slug api_diagram_convertresult %})


</code>
 An object containing arrays of mapped shapes and connections ready for diagram rendering
