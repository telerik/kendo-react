---
title: DiagramMapping
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramMapping."
api_reference: true
type: inner_api
slug: api_diagram_diagrammapping
---

# DiagramMapping
Complete mapping configuration for converting input data to diagram model.

Contains both shape and connection mapping configurations that define how to
extract and transform data from the input object into the format required
for diagram rendering.

```typescript
const diagramMapping: DiagramMapping = {
  shapes: {
    source: 'orgChart.employees',
    map: {
      id: 'empId',
      content: (emp) => ({ text: emp.name, image: emp.photo }),
      x: 'position.x',
      y: 'position.y'
    }
  },
  connections: {
    source: 'orgChart.relationships',
    map: {
      from: 'managerId',
      to: 'employeeId'
    }
  }
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


[ConnectionMapping]({% slug api_diagram_connectionmapping %})&lt;any&gt;


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


[ShapeMapping]({% slug api_diagram_shapemapping %})&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
</tbody>
</table>



