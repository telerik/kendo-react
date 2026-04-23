---
title: DiagramShapeTooltipProps
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramShapeTooltipProps."
api_reference: true
type: inner_api
slug: api_diagram_diagramshapetooltipprops
---

# DiagramShapeTooltipProps
Defines a custom template for shape tooltips within the `Diagram` component.
Use this to customize how tooltips appear when hovering over shapes.

```tsx
import { Diagram, DiagramShapeTooltip } from '@progress/kendo-react-diagram';

const App = () => (
  <Diagram>
    <DiagramShapeTooltip>
      {(dataItem) => <span>{dataItem.tooltipText}</span>}
    </DiagramShapeTooltip>
  </Diagram>
);
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


#### children


</td>
<td type class="table-cell-type">


<code>


(dataItem: TDataItem) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A render function that receives the hovered shape data item and returns the tooltip content.


</td>
</tr>
</tbody>
</table>



