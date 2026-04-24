---
title: ConvertResult
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ConvertResult."
api_reference: true
type: inner_api
slug: api_diagram_convertresult
---

# ConvertResult
Result object returned by the diagram data conversion process.

Contains the converted shapes and connections arrays that are ready to be used
for diagram rendering. Each array contains properly formatted options objects
that conform to the diagram component's expected data structure.

```typescript
const result: ConvertResult = {
  shapes: [
    { id: '1', x: 100, y: 100, content: { text: 'Node 1' } },
    { id: '2', x: 200, y: 100, content: { text: 'Node 2' } }
  ],
  connections: [
    { from: '1', to: '2' }
  ]
};
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### connections


</td>
<td type class="table-cell-type">


<code>


[ConnectionOptionsBase]({% slug api_diagram_connectionoptionsbase %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### shapes


</td>
<td type class="table-cell-type">


<code>


[ShapeOptionsBase]({% slug api_diagram_shapeoptionsbase %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
</tbody>
</table>



