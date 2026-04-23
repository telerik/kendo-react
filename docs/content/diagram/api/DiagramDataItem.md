---
title: DiagramDataItem
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramDataItem."
api_reference: true
type: inner_api
slug: api_diagram_diagramdataitem
---

# DiagramDataItem
Represents a typed item or a custom data object used for data binding in the `Diagram`.
When `T` is provided, the item is a known typed option (e.g., `ShapeOptions` or `ConnectionOptions`).
Otherwise, it can be a custom object that will be mapped using the corresponding model fields configuration.

`type` DiagramDataItem = `T` | `Record&lt;string&gt;`;
