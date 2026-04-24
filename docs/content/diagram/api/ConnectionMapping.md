---
title: ConnectionMapping
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ConnectionMapping."
api_reference: true
type: inner_api
slug: api_diagram_connectionmapping
---

# ConnectionMapping
Configuration for mapping source data to diagram connections.

Defines how to extract connection data from the input and how to transform each connection
from the source format to the required ConnectionOptions format. The source specifies
where to find the array of connection data, and the map defines the field mappings.

```typescript
const connectionMapping: ConnectionMapping<LinkData> = {
  source: 'links',  // Extract from input.links array
  map: {
    from: 'sourceId',
    to: 'targetId',
    stroke: (link) => ({ color: link.color, width: link.thickness })
  }
};
```




